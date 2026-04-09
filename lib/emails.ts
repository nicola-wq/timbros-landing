import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://timbros.it'
const CRM_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://crm.timbros.it'
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'nicola@timbro.agency'

/* ── Email ad admin: nuova richiesta di accesso ─────── */
export async function sendAdminNotification({
  id, token, name, surname, email, company,
}: {
  id: string; token: string; name: string; surname: string
  email: string; company?: string
}) {
  const approveUrl = `${BASE_URL}/api/approve?id=${id}&token=${token}`
  const rejectUrl  = `${BASE_URL}/api/reject?id=${id}&token=${token}`

  return resend.emails.send({
    from: 'timbrOS <noreply@timbros.it>',
    to: ADMIN_EMAIL,
    subject: `🔔 Nuova richiesta di accesso — ${name} ${surname}`,
    html: `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F3F1F4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F1F4;padding:40px 20px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#1D3557;padding:28px 32px;">
            <span style="font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.5px;">
              timbr<span style="color:#E76F51;">OS</span>
            </span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#E76F51;text-transform:uppercase;letter-spacing:0.5px;">Nuova richiesta di accesso beta</p>
            <h1 style="margin:0 0 24px;font-size:22px;font-weight:700;color:#1D3557;">${name} ${surname}</h1>

            <table cellpadding="0" cellspacing="0" style="width:100%;background:#F7F6F4;border-radius:12px;padding:20px;margin-bottom:28px;">
              <tr>
                <td style="padding:6px 0;font-size:13px;color:#666;width:90px;">Email</td>
                <td style="padding:6px 0;font-size:13px;color:#1D3557;font-weight:600;">${email}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding:6px 0;font-size:13px;color:#666;">Azienda</td>
                <td style="padding:6px 0;font-size:13px;color:#1D3557;font-weight:600;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding:6px 0;font-size:13px;color:#666;">Data</td>
                <td style="padding:6px 0;font-size:13px;color:#1D3557;">${new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
              </tr>
            </table>

            <!-- CTA buttons -->
            <table cellpadding="0" cellspacing="0" style="width:100%;">
              <tr>
                <td style="padding-right:8px;" width="50%">
                  <a href="${approveUrl}" style="display:block;text-align:center;background:#1D3557;color:#fff;text-decoration:none;font-size:15px;font-weight:600;padding:14px 20px;border-radius:12px;">
                    ✓ Approva accesso
                  </a>
                </td>
                <td style="padding-left:8px;" width="50%">
                  <a href="${rejectUrl}" style="display:block;text-align:center;background:#F3F1F4;color:#666;text-decoration:none;font-size:15px;font-weight:600;padding:14px 20px;border-radius:12px;border:1px solid #e0dde8;">
                    ✕ Rifiuta
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:24px 0 0;font-size:12px;color:#aaa;text-align:center;">
              Un click è sufficiente. Nessun accesso a Supabase richiesto.
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #f0eef6;">
            <p style="margin:0;font-size:12px;color:#bbb;text-align:center;">timbrOS by Timbro Agency</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })
}

/* ── Email all'utente: accesso approvato ─────────────── */
export async function sendApprovalEmail({
  name, email,
}: {
  name: string; email: string
}) {
  const signupUrl = `${CRM_URL}/signup?email=${encodeURIComponent(email)}`

  return resend.emails.send({
    from: 'Nicola — timbrOS <nicola@timbros.it>',
    to: email,
    subject: '🎉 Il tuo accesso a timbrOS è stato approvato',
    html: `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F3F1F4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F1F4;padding:40px 20px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <!-- Header -->
        <tr>
          <td style="background:#1D3557;padding:28px 32px;">
            <span style="font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.5px;">
              timbr<span style="color:#E76F51;">OS</span>
            </span>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <div style="font-size:40px;margin-bottom:16px;">🎉</div>
            <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#1D3557;">Ciao ${name}, sei dentro!</h1>
            <p style="margin:0 0 28px;font-size:16px;color:#555;line-height:1.6;">
              La tua richiesta di accesso a <strong>timbrOS</strong> è stata approvata.<br>
              Crea il tuo account e inizia a usare il CRM — la tua email è già pre-compilata.
            </p>

            <a href="${signupUrl}"
              style="display:inline-block;background:#E76F51;color:#fff;text-decoration:none;font-size:16px;font-weight:700;padding:16px 32px;border-radius:12px;letter-spacing:-0.2px;">
              Crea il tuo account →
            </a>

            <p style="margin:28px 0 0;font-size:13px;color:#aaa;line-height:1.5;">
              Se il link non funziona, copia e incolla questo URL nel browser:<br>
              <a href="${signupUrl}" style="color:#1D3557;">${signupUrl}</a>
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #f0eef6;">
            <p style="margin:0;font-size:12px;color:#bbb;text-align:center;">
              timbrOS by <a href="https://timbro.agency" style="color:#bbb;">Timbro Agency</a> · Se hai domande rispondi pure a questa email
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })
}

/* ── Email all'utente: richiesta in lista d'attesa ─── */
export async function sendWaitlistConfirmation({
  name, email,
}: {
  name: string; email: string
}) {
  return resend.emails.send({
    from: 'timbrOS <noreply@timbros.it>',
    to: email,
    subject: 'Richiesta ricevuta — timbrOS Beta',
    html: `
<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F3F1F4;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F1F4;padding:40px 20px;">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#1D3557;padding:28px 32px;">
            <span style="font-size:22px;font-weight:700;color:#fff;letter-spacing:-0.5px;">
              timbr<span style="color:#E76F51;">OS</span>
            </span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <div style="font-size:40px;margin-bottom:16px;">📬</div>
            <h1 style="margin:0 0 12px;font-size:24px;font-weight:700;color:#1D3557;">Richiesta ricevuta, ${name}!</h1>
            <p style="margin:0 0 16px;font-size:16px;color:#555;line-height:1.6;">
              Abbiamo registrato la tua richiesta di accesso a <strong>timbrOS</strong>.<br>
              Stiamo selezionando i primi utenti per la beta — ti contatteremo a breve.
            </p>
            <p style="margin:0;font-size:14px;color:#888;line-height:1.6;">
              Nel frattempo, se hai domande puoi scrivere a
              <a href="mailto:nicola@timbro.agency" style="color:#1D3557;">nicola@timbro.agency</a>
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 32px;border-top:1px solid #f0eef6;">
            <p style="margin:0;font-size:12px;color:#bbb;text-align:center;">timbrOS by Timbro Agency</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  })
}
