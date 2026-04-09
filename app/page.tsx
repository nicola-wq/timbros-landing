'use client'

import { useState, useRef } from 'react'

/* ── Design tokens (inline per zero-dependency) ─────── */
const C = {
  navy:   '#1D3557',
  orange: '#E76F51',
  sage:   '#2A9D8F',
  bg:     '#F3F1F4',
  glass:  'rgba(255,255,255,0.65)',
  border: 'rgba(29,53,87,0.10)',
  muted:  '#64748b',
  text:   '#1a1a2e',
}

const FEATURES = [
  {
    icon: '🔀',
    title: 'Pipeline adattabile',
    desc: 'Scegli un template (agenzia, B2B, real estate, recruiting…) o costruisci le tue fasi da zero. Ogni workspace lavora come vuoi tu.',
  },
  {
    icon: '👥',
    title: 'Contatti smart',
    desc: 'Importa da CSV o vCard, assegna colori e ruoli, collega ogni contatto alle opportunità. La rubrica che mancava al tuo CRM.',
  },
  {
    icon: '✅',
    title: 'Task integrati',
    desc: "Crea attività direttamente sui deal, assegnale al team, traccia scadenze. Nessun'altra app necessaria.",
  },
  {
    icon: '📊',
    title: 'Dashboard KPI',
    desc: 'Valore pipeline pesato, conversione per stage, attività aperte. I numeri che contano, sempre in primo piano.',
  },
  {
    icon: '🏢',
    title: 'Multi-workspace',
    desc: 'Gestisci più clienti o progetti in spazi separati. Cambia workspace con un click — dati isolati, nessuna contaminazione.',
  },
  {
    icon: '🔒',
    title: 'Sicurezza enterprise',
    desc: '2FA nativo TOTP, Row Level Security su ogni dato, invite membri con controllo ruoli. Tuo e solo tuo.',
  },
]

const STEPS = [
  { n: '01', title: 'Richiedi l\'accesso', desc: 'Compila il form qui sotto con nome, cognome e email. Nessuna carta di credito.' },
  { n: '02', title: 'Ricevi l\'approvazione', desc: 'Valutiamo ogni richiesta manualmente. Se il profilo è adatto, ti inviamo il link per creare l\'account.' },
  { n: '03', title: 'Parti in 2 minuti', desc: 'Crei il workspace, scegli il template di pipeline, inviti il team. Subito operativo.' },
]

/* ── Logo component ─────────────────────────────────── */
function Logo({ size = 20 }: { size?: number }) {
  return (
    <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: size, letterSpacing: '-0.03em', color: C.navy, lineHeight: 1 }}>
      timbr<span style={{ color: C.orange, fontWeight: 700 }}>OS</span>
    </span>
  )
}

/* ── Form di richiesta accesso ──────────────────────── */
function AccessForm() {
  const [name, setName]       = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail]     = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone]       = useState(false)
  const [error, setError]     = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/request-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, surname, email, company }),
      })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Errore imprevisto. Riprova.'); setLoading(false); return }
      setDone(true)
    } catch {
      setError('Errore di rete. Controlla la connessione e riprova.')
      setLoading(false)
    }
  }

  if (done) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>📬</div>
        <h3 style={{ fontSize: 24, fontWeight: 700, color: C.navy, margin: '0 0 12px', letterSpacing: '-0.03em' }}>
          Richiesta inviata!
        </h3>
        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.6, maxWidth: 380, margin: '0 auto' }}>
          Abbiamo ricevuto la tua richiesta.<br />
          Ti contatteremo a breve con il link per accedere.
        </p>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '13px 16px',
    fontSize: 15,
    fontFamily: "'DM Sans',sans-serif",
    border: `1.5px solid ${C.border}`,
    borderRadius: 12,
    background: 'rgba(255,255,255,0.8)',
    color: C.text,
    outline: 'none',
    transition: 'border-color 150ms',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <label style={labelStyle}>Nome *</label>
          <input style={inputStyle} placeholder="Mario" value={name}
            onChange={e => setName(e.target.value)} required
            onFocus={e => (e.target.style.borderColor = C.navy)}
            onBlur={e => (e.target.style.borderColor = C.border)} />
        </div>
        <div>
          <label style={labelStyle}>Cognome *</label>
          <input style={inputStyle} placeholder="Rossi" value={surname}
            onChange={e => setSurname(e.target.value)} required
            onFocus={e => (e.target.style.borderColor = C.navy)}
            onBlur={e => (e.target.style.borderColor = C.border)} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email professionale *</label>
        <input style={inputStyle} type="email" placeholder="mario@azienda.it" value={email}
          onChange={e => setEmail(e.target.value)} required
          onFocus={e => (e.target.style.borderColor = C.navy)}
          onBlur={e => (e.target.style.borderColor = C.border)} />
      </div>
      <div>
        <label style={labelStyle}>Azienda <span style={{ color: C.muted, fontWeight: 400 }}>(opzionale)</span></label>
        <input style={inputStyle} placeholder="Acme srl" value={company}
          onChange={e => setCompany(e.target.value)}
          onFocus={e => (e.target.style.borderColor = C.navy)}
          onBlur={e => (e.target.style.borderColor = C.border)} />
      </div>

      {error && (
        <div style={{ fontSize: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', color: '#dc2626' }}>
          {error}
        </div>
      )}

      <button type="submit" disabled={loading} style={{
        marginTop: 4,
        padding: '15px 24px',
        fontSize: 16,
        fontFamily: "'DM Sans',sans-serif",
        fontWeight: 700,
        color: '#fff',
        background: loading ? '#9aadbe' : C.navy,
        border: 'none',
        borderRadius: 12,
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'background 150ms, transform 100ms',
        letterSpacing: '-0.02em',
      }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#162844' }}
        onMouseLeave={e => { if (!loading) e.currentTarget.style.background = C.navy }}
      >
        {loading ? 'Invio in corso…' : 'Richiedi l\'accesso anticipato →'}
      </button>

      <p style={{ margin: 0, fontSize: 13, color: C.muted, textAlign: 'center' }}>
        Nessuna carta di credito · Accesso beta gratuito · Risposta entro 24h
      </p>
    </form>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: C.navy,
  marginBottom: 6,
  letterSpacing: '-0.01em',
}

/* ── App mockup CSS ─────────────────────────────────── */
function AppMockup() {
  const stages = ['Lead', 'Proposta', 'Trattativa', 'Chiuso']
  const cards = [
    { stage: 0, name: 'Luca Ferrari', val: '€ 4.200', tag: '🔥 Caldo' },
    { stage: 0, name: 'Studio Rossi', val: '€ 8.500', tag: '📞 Da chiamare' },
    { stage: 1, name: 'Acme srl', val: '€ 12.000', tag: '📋 Proposta inviata' },
    { stage: 2, name: 'Beta Tech', val: '€ 6.800', tag: '⏳ In attesa' },
    { stage: 3, name: 'Gamma Srl', val: '€ 9.200', tag: '✓ Vinto' },
  ]

  return (
    <div style={{
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(20px)',
      borderRadius: 20,
      border: `1px solid ${C.border}`,
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(29,53,87,0.12)',
      maxWidth: 760,
      margin: '0 auto',
    }}>
      {/* Topbar */}
      <div style={{ background: 'rgba(255,255,255,0.8)', borderBottom: `1px solid ${C.border}`, padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57','#ffbd2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 13, fontWeight: 600, color: C.navy, opacity: 0.7 }}>Pipeline — Studio Rossi</div>
      </div>

      {/* Kanban */}
      <div style={{ display: 'flex', gap: 0, overflowX: 'auto', padding: '16px' }}>
        {stages.map((stage, si) => (
          <div key={stage} style={{ flex: '0 0 160px', padding: '0 6px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8, paddingLeft: 4 }}>
              {stage} <span style={{ background: C.border, padding: '1px 6px', borderRadius: 6, fontWeight: 500 }}>{cards.filter(c => c.stage === si).length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {cards.filter(c => c.stage === si).map((card, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.85)',
                  borderRadius: 10,
                  padding: '10px 12px',
                  border: `1px solid ${C.border}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: C.navy, marginBottom: 4 }}>{card.name}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: si === 3 ? C.sage : C.text }}>{card.val}</div>
                  <div style={{ fontSize: 10, color: C.muted, marginTop: 4 }}>{card.tag}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main page ──────────────────────────────────────── */
export default function LandingPage() {
  const formRef = useRef<HTMLDivElement>(null)

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div style={{
      background: 'linear-gradient(145deg, #EEF0F6 0%, #F5F3F8 25%, #F3EEF0 60%, #EDF2F0 100%)',
      minHeight: '100vh',
    }}>
      {/* ── HEADER ──────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(243,241,244,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`,
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={17} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: C.orange, background: 'rgba(231,111,81,0.1)', padding: '4px 10px', borderRadius: 20 }}>
              Beta privata
            </span>
            <button onClick={scrollToForm} style={{
              padding: '9px 20px', fontSize: 13, fontWeight: 700,
              background: C.navy, color: '#fff', border: 'none',
              borderRadius: 10, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              letterSpacing: '-0.02em',
            }}>
              Richiedi accesso
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────── */}
      <section style={{ padding: '80px 24px 60px', textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(29,53,87,0.07)', padding: '6px 14px', borderRadius: 20, marginBottom: 28, fontSize: 13, color: C.navy, fontWeight: 600 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.sage, display: 'inline-block' }} />
          Accesso anticipato aperto — posti limitati
        </div>

        <h1 style={{
          fontSize: 'clamp(38px, 6vw, 64px)',
          fontWeight: 700,
          color: C.navy,
          margin: '0 0 20px',
          lineHeight: 1.1,
          letterSpacing: '-0.04em',
        }}>
          Il CRM italiano<br />
          <span style={{ color: C.orange }}>che lavora come lavori tu.</span>
        </h1>

        <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', color: C.muted, margin: '0 0 40px', lineHeight: 1.6, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
          Pipeline kanban, contatti, task e KPI in un unico spazio flessibile.
          Niente bloat, niente prezzi assurdi. Solo ciò che serve davvero.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 60 }}>
          <button onClick={scrollToForm} style={{
            padding: '15px 32px', fontSize: 16, fontWeight: 700,
            background: C.navy, color: '#fff', border: 'none',
            borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(29,53,87,0.25)',
          }}>
            Richiedi l'accesso beta →
          </button>
          <a href="#come-funziona" style={{
            padding: '15px 32px', fontSize: 16, fontWeight: 600,
            background: C.glass, color: C.navy,
            border: `1.5px solid ${C.border}`,
            borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            textDecoration: 'none', letterSpacing: '-0.02em',
            backdropFilter: 'blur(10px)',
          }}>
            Scopri come funziona
          </a>
        </div>

        {/* App mockup */}
        <AppMockup />
      </section>

      {/* ── SOCIAL PROOF BAR ────────────────────── */}
      <div style={{ background: C.navy, padding: '20px 24px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}>
          Costruito da{' '}
          <a href="https://timbro.agency" target="_blank" rel="noopener noreferrer"
            style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>
            Timbro Agency
          </a>
        </p>
      </div>

      {/* ── FEATURES ────────────────────────────── */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Funzionalità</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 16px', letterSpacing: '-0.03em' }}>
            Tutto ciò che serve,<br />niente di superfluo.
          </h2>
          <p style={{ fontSize: 17, color: C.muted, maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            timbrOS è progettato per chi vuole smettere di perdere tempo con CRM complicati.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {FEATURES.map(f => (
            <div key={f.title} style={{
              background: C.glass,
              backdropFilter: 'blur(16px)',
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: '28px 28px',
              transition: 'transform 200ms, box-shadow 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(29,53,87,0.10)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.navy, margin: '0 0 10px', letterSpacing: '-0.02em' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COME FUNZIONA ───────────────────────── */}
      <section id="come-funziona" style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.4)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Come funziona</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 56px', letterSpacing: '-0.03em' }}>
            Da zero a operativo<br />in meno di 5 minuti.
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ position: 'relative' }}>
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', top: 28, left: 'calc(50% + 40px)', right: '-50%', height: 2, background: `linear-gradient(90deg, ${C.orange}, transparent)`, display: 'none' }} />
                )}
                <div style={{ width: 52, height: 52, borderRadius: 16, background: `rgba(231,111,81,0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 20, fontWeight: 800, color: C.orange, fontFamily: "'DM Sans',sans-serif" }}>
                  {s.n}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: C.navy, margin: '0 0 10px', letterSpacing: '-0.02em' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BETA CALLOUT ────────────────────────── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{
          maxWidth: 860, margin: '0 auto',
          background: C.navy,
          borderRadius: 28,
          padding: 'clamp(40px, 6vw, 64px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative blob */}
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(231,111,81,0.12)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(42,157,143,0.10)', pointerEvents: 'none' }} />

          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: C.orange, background: 'rgba(231,111,81,0.15)', padding: '5px 14px', borderRadius: 20, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Beta privata
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 700, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.03em' }}>
            Stai vedendo timbrOS prima di tutti.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.68)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.6 }}>
            Selezioniamo manualmente ogni utente beta per raccogliere feedback di qualità e migliorare il prodotto. I posti sono limitati.
          </p>
          <button onClick={scrollToForm} style={{
            padding: '15px 36px', fontSize: 16, fontWeight: 700,
            background: C.orange, color: '#fff', border: 'none',
            borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(231,111,81,0.4)',
          }}>
            Richiedi l'accesso anticipato →
          </button>
        </div>
      </section>

      {/* ── FORM ────────────────────────────────── */}
      <section ref={formRef} id="accesso" style={{ padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Accesso anticipato</p>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: C.navy, margin: '0 0 14px', letterSpacing: '-0.03em' }}>
              Unisciti alla beta.
            </h2>
            <p style={{ fontSize: 16, color: C.muted, margin: 0, lineHeight: 1.6 }}>
              Lascia i tuoi dati, valutiamo la richiesta e ti inviamo il link per creare l'account.
            </p>
          </div>

          <div style={{
            background: C.glass,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${C.border}`,
            borderRadius: 24,
            padding: 'clamp(28px, 5vw, 40px)',
            boxShadow: '0 8px 32px rgba(29,53,87,0.08)',
          }}>
            <AccessForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer style={{
        background: C.navy,
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <Logo size={15} />
        <p style={{ margin: '16px 0 4px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          timbrOS by{' '}
          <a href="https://timbro.agency" target="_blank" rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 600 }}>
            Timbro Agency
          </a>
        </p>
        <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
          © {new Date().getFullYear()} · Tutti i diritti riservati
        </p>
      </footer>
    </div>
  )
}
