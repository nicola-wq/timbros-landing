import crypto from 'crypto'

/** Genera token HMAC-SHA256 firmato con APPROVE_SECRET */
export function generateToken(id: string): string {
  return crypto
    .createHmac('sha256', process.env.APPROVE_SECRET!)
    .update(id)
    .digest('hex')
}

/** Verifica in modo timing-safe che il token sia valido per questo id */
export function verifyToken(id: string, token: string): boolean {
  try {
    const expected = generateToken(id)
    const a = Buffer.from(expected, 'hex')
    const b = Buffer.from(token, 'hex')
    if (a.length !== b.length) return false
    return crypto.timingSafeEqual(a, b)
  } catch {
    return false
  }
}
