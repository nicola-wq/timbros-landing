import { NextRequest, NextResponse } from 'next/server'
import { getServiceSupabase } from '@/lib/supabase'
import { verifyToken } from '@/lib/tokens'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id    = searchParams.get('id')    ?? ''
  const token = searchParams.get('token') ?? ''

  if (!id || !token || !verifyToken(id, token)) {
    return html('Link non valido o scaduto.', false)
  }

  const sb = getServiceSupabase()
  const { data: req_ } = await sb
    .from('access_requests')
    .select('id, name, surname, email, status')
    .eq('id', id)
    .maybeSingle()

  if (!req_) return html('Richiesta non trovata.', false)

  if (req_.status === 'rejected') {
    return html(`${req_.name} ${req_.surname} era già stato rifiutato.`, false, true)
  }

  await sb
    .from('access_requests')
    .update({ status: 'rejected', rejected_at: new Date().toISOString() })
    .eq('id', id)

  return html(`Richiesta di ${req_.name} ${req_.surname} rifiutata.`, true)
}

function html(message: string, success: boolean, alreadyDone = false) {
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
    .logo { font-size: 18px; font-weight: 700; color: #1D3557; margin-bottom: 28px; }
    .logo span { color: #E76F51; }
    h1 { font-size: 18px; color: #1D3557; margin-bottom: 12px; font-weight: 700; }
    p { font-size: 15px; color: #555; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">timbr<span>OS</span></div>
    <h1>${success ? 'Rifiutato' : alreadyDone ? 'Già rifiutato' : 'Errore'}</h1>
    <p>${message}</p>
  </div>
</body>
</html>`,
    { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' } }
  )
}
