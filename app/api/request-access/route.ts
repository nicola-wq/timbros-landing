import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { generateToken } from '@/lib/tokens'
import { sendAdminNotification, sendWaitlistConfirmation } from '@/lib/emails'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, surname, email, company } = body

    // Validazione
    if (!name?.trim() || !surname?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Campi obbligatori mancanti.' }, { status: 400 })
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Email non valida.' }, { status: 400 })
    }

    const sb = getServiceSupabase()

    // Controlla se email già registrata
    const { data: existing } = await sb
      .from('access_requests')
      .select('id, status')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle()

    if (existing) {
      if (existing.status === 'approved') {
        return NextResponse.json({ error: 'Questa email ha già accesso al CRM.' }, { status: 409 })
      }
      return NextResponse.json({ error: 'Hai già inviato una richiesta. Ti contatteremo presto.' }, { status: 409 })
    }

    // Inserisce richiesta (senza token — lo generiamo dopo l'insert per usare l'id reale)
    const { data: inserted, error: insertError } = await sb
      .from('access_requests')
      .insert({
        name: name.trim(),
        surname: surname.trim(),
        email: email.toLowerCase().trim(),
        company: company?.trim() || null,
        status: 'pending',
        token: 'placeholder', // aggiornato subito dopo
      })
      .select('id')
      .single()

    if (insertError || !inserted) {
      console.error('Insert error:', insertError)
      return NextResponse.json({ error: 'Errore interno. Riprova.' }, { status: 500 })
    }

    // Genera token firmato con l'id reale e aggiorna
    const token = generateToken(inserted.id)
    await sb
      .from('access_requests')
      .update({ token })
      .eq('id', inserted.id)

    // Invia email in parallelo (non blocchiamo la risposta se falliscono)
    await Promise.allSettled([
      sendAdminNotification({
        id: inserted.id, token,
        name: name.trim(),
        surname: surname.trim(),
        email: email.toLowerCase().trim(),
        company: company?.trim(),
      }),
      sendWaitlistConfirmation({
        name: name.trim(),
        email: email.toLowerCase().trim(),
      }),
    ])

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('request-access error:', err)
    return NextResponse.json({ error: 'Errore interno.' }, { status: 500 })
  }
}
