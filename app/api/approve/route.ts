import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { verifyToken } from '@/lib/tokens'
import { sendApprovalEmail } from '@/lib/emails'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id    = searchParams.get('id')    ?? ''
  const token = searchParams.get('token') ?? ''

  if (!id || !token) {
    return html('Link non valido.', false)
  }

  // Verifica token
  if (!verifyToken(id, token)) {
    return html('Token non valido o scaduto.', false)
  }

  const sb = getServiceSupabase()

  // Recupera richiesta
  const { data: req_, error } = await sb
    .from('access_requests')
    .select('id, name, surname, email, status')
    .eq('id', id)
    .maybeSingle()

  if (error || !req_) {
    return html('Richiesta non trovata.', false)
  }

  if (req_.status === 'approved') {
    return html(`${req_.name} ${req_.surname} ha già l'accesso.`, true, true)
  }

  if (req_.status === 'rejected') {
    return html(`Questa richiesta era già stata rifiutata. Aggiornamento in corso...`, false)
  }

  // Aggiorna status
  const { error: updateError } = await sb
    .from('access_requests')
    .update({ status: 'approved', approved_at: new Date().toISOString() })
    .eq('id', id)

  if (updateError) {
    return html('Errore durante l\'approvazione. Riprova.', false)
  }

  // Invia email di invito
  await sendApprovalEmail({ name: req_.name, email: req_.email })

  return html(
    `✓ Accesso approvato per <strong>${req_.name} ${req_.surname}</strong> (${req_.email}).<br>Email di invito inviata.`,
    true
  )
}

function html(message: string, success: boolean, alreadyDone = false) {
  const color = success ? '#2A9D8F' : alreadyDone ? '#888' : '#dc2626'
  const bg    = success ? '#f0fdf4' : alreadyDone ? '#f9f9f9' : '#fef2f2'
  const icon  = success ? '✓' : alreadyDone ? 'ℹ' : '✕'

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>timbrOS Admin</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, 'Helvetica Neue', sans-serif; background: #F3F1F4; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 24px; }
    .card { background: #fff; border-radius: 20px; padding: 40px; max-width: 440px; width: 100%; box-shadow: 0 4px 24px rgba(0,0,0,0.08); text-align: center; }
    .icon { font-size: 48px; width: 72px; height: 72px; border-radius: 50%; background: ${bg}; color: ${color}; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 32px; font-weight: 700; }
    .logo { font-size: 18px; font-weight: 700; color: #1D3557; margin-bottom: 28px; }
    .logo span { color: #E76F51; }
    h1 { font-size: 18px; color: #1D3557; margin-bottom: 12px; font-weight: 700; }
    p { font-size: 15px; color: #555; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">timbr<span>OS</span></div>
    <div class="icon">${icon}</div>
    <h1>${success ? 'Fatto!' : alreadyDone ? 'Già approvato' : 'Errore'}</h1>
    <p>${message}</p>
  </div>
</body>
</html>`,
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}
