'use client'

import { useState, useRef } from 'react'

/* ── Design tokens ─────────────────────────────────── */
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

/* ── SVG Icons ─────────────────────────────────────── */
function IconPipeline() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="5" height="18" rx="1.5"/>
      <rect x="9.5" y="6" width="5" height="15" rx="1.5"/>
      <rect x="16" y="9" width="5" height="12" rx="1.5"/>
    </svg>
  )
}
function IconContacts() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="3"/>
      <path d="M3 20c0-3.314 2.686-6 6-6s6 2.686 6 6"/>
      <circle cx="17" cy="8" r="2.5"/>
      <path d="M17 14c2.761 0 5 2.239 5 5"/>
    </svg>
  )
}
function IconTask() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4"/>
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
    </svg>
  )
}
function IconDashboard() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="12" width="4" height="9" rx="1"/>
      <rect x="9.5" y="7" width="4" height="14" rx="1"/>
      <rect x="16" y="3" width="4" height="18" rx="1"/>
    </svg>
  )
}
function IconWorkspace() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="8" height="8" rx="2"/>
      <rect x="14" y="3" width="8" height="8" rx="2"/>
      <rect x="2" y="13" width="8" height="8" rx="2"/>
      <rect x="14" y="13" width="8" height="8" rx="2"/>
    </svg>
  )
}
function IconLock() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2"/>
      <path d="M8 11V7a4 4 0 018 0v4"/>
      <circle cx="12" cy="16" r="1.5" fill={C.navy}/>
    </svg>
  )
}
function IconNote() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  )
}
function IconStar() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  )
}
function IconImport() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}
function IconKanbanContact() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="5" height="14" rx="1"/>
      <rect x="9.5" y="3" width="5" height="9" rx="1"/>
      <rect x="16" y="3" width="5" height="11" rx="1"/>
      <circle cx="9" cy="19" r="1.5" fill={C.navy}/>
      <circle cx="16" cy="17" r="1.5" fill={C.navy}/>
    </svg>
  )
}
function IconEnvelope() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={C.navy} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M2 7l10 7 10-7"/>
    </svg>
  )
}

const FEATURES = [
  { Icon: IconPipeline,        title: 'Pipeline adattabile',     desc: 'Scegli un template (agenzia, B2B, real estate, recruiting…) o costruisci le tue fasi da zero. Drag & drop nativo, ogni workspace lavora come vuoi tu.' },
  { Icon: IconKanbanContact,   title: 'Contatti in kanban',       desc: 'Visualizza i tuoi contatti in lista o in una board kanban con fasi personalizzabili. Sposta i lead tra gli stage con un drag, esattamente come in pipeline.' },
  { Icon: IconNote,            title: 'Note unificate',           desc: 'Scrivi note collegate a deal, contatti o workspace. Cestino integrato per recuperare contenuti eliminati per errore — niente si perde davvero.' },
  { Icon: IconStar,            title: 'Valutazione contatti',     desc: 'Assegna da 1 a 5 stelle a ogni contatto per prioritizzare i lead più caldi. Il rating è visibile in lista, kanban e scheda di dettaglio.' },
  { Icon: IconTask,            title: 'Task integrati',           desc: "Crea attività direttamente sui deal o sui contatti, assegnale al team, traccia scadenze. Nessun'altra app necessaria." },
  { Icon: IconDashboard,       title: 'Dashboard KPI',            desc: 'Valore pipeline pesato, conversione per stage, attività aperte. I numeri che contano, sempre in primo piano.' },
  { Icon: IconWorkspace,       title: 'Multi-workspace',          desc: 'Gestisci più clienti o progetti in spazi separati con URL dedicato (/{wsId}/dashboard). Cambia workspace con un click — dati isolati, nessuna contaminazione.' },
  { Icon: IconImport,          title: 'Import & backup',          desc: 'Importa contatti da CSV o vCard in pochi secondi. Esporta tutto quando vuoi. Backup manuale sempre disponibile — i tuoi dati restano tuoi.' },
  { Icon: IconLock,            title: 'Sicurezza enterprise',     desc: '2FA nativo TOTP, Row Level Security su ogni dato, invite membri con controllo ruoli. Tuo e solo tuo.' },
]

const STEPS = [
  { n: '01', title: "Richiedi l'accesso", desc: 'Compila il form qui sotto con nome, cognome e email. Nessuna carta di credito.' },
  { n: '02', title: "Ricevi l'approvazione", desc: "Valutiamo ogni richiesta manualmente. Se il profilo è adatto, ti inviamo il link per creare l'account." },
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
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}>
          <IconEnvelope />
        </div>
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
    boxSizing: 'border-box',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="form-row">
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
        transition: 'background 150ms',
        letterSpacing: '-0.02em',
        width: '100%',
      }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#162844' }}
        onMouseLeave={e => { if (!loading) e.currentTarget.style.background = C.navy }}
      >
        {loading ? 'Invio in corso…' : "Richiedi l'accesso anticipato →"}
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
    { stage: 0, name: 'Luca Ferrari',  val: '€ 4.200', tag: 'Caldo' },
    { stage: 0, name: 'Studio Rossi',  val: '€ 8.500', tag: 'Da chiamare' },
    { stage: 1, name: 'Acme srl',      val: '€ 12.000',tag: 'Proposta inviata' },
    { stage: 2, name: 'Beta Tech',     val: '€ 6.800', tag: 'In attesa' },
    { stage: 3, name: 'Gamma Srl',     val: '€ 9.200', tag: 'Vinto' },
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
      {/* ── Responsive styles ───────────────────── */}
      <style>{`
        * { box-sizing: border-box; }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .hero-section {
          padding: clamp(48px,8vw,80px) 20px clamp(40px,6vw,60px);
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
        }
        .hero-top { margin-bottom: 0; }
        .hero-mobile-cta { display: none; }
        .hero-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 60px;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .mockup-wrapper { display: block; }
        .mobile-trust { display: none; }
        .hero-bullets {
          display: flex;
          flex-direction: row;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .header-badge { display: inline-block; }
        @media (max-width: 640px) {
          .hero-section {
            min-height: calc(100svh - 56px);
            display: flex !important;
            flex-direction: column;
            justify-content: space-between;
            padding: 24px 20px 28px !important;
            text-align: left;
          }
          .hero-top { flex: 1; display: flex; flex-direction: column; justify-content: center; }
          .hero-badge { justify-content: flex-start !important; margin-bottom: 12px !important; }
          .hero-h1 { font-size: 52px !important; line-height: 1.0 !important; margin-bottom: 10px !important; }
          .hero-sub { font-size: 15px !important; margin-bottom: 10px !important; line-height: 1.45 !important; }
          .hero-bullets {
            flex-direction: column;
            gap: 7px;
            align-items: flex-start;
            justify-content: flex-start;
            margin-bottom: 0;
          }
          .hero-mobile-cta { display: none !important; }
          .mobile-trust { display: flex; }
          .form-row { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr; }
          .mockup-wrapper { display: none; }
          .header-badge { display: none; }
        }
      `}</style>

      {/* ── HEADER ──────────────────────────────── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(243,241,244,0.90)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${C.border}`,
        padding: '0 20px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}><Logo size={22} /></a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="header-badge" style={{ fontSize: 12, fontWeight: 600, color: C.orange, background: 'rgba(231,111,81,0.1)', padding: '4px 10px', borderRadius: 20 }}>
              Beta privata
            </span>
            <button onClick={scrollToForm} style={{
              padding: '9px 18px', fontSize: 13, fontWeight: 700,
              background: C.navy, color: '#fff', border: 'none',
              borderRadius: 10, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              letterSpacing: '-0.02em', whiteSpace: 'nowrap',
            }}>
              Richiedi accesso
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────── */}
      <section className="hero-section">

        {/* TOP — badge + headline + sub */}
        <div className="hero-top">
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(29,53,87,0.07)', padding: '6px 14px', borderRadius: 20, marginBottom: 24, fontSize: 13, color: C.navy, fontWeight: 600 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.sage, display: 'inline-block', flexShrink: 0 }} />
            Accesso anticipato aperto — posti limitati
          </div>

          <h1 className="hero-h1" style={{
            fontSize: 'clamp(48px, 6.5vw, 80px)',
            fontWeight: 700,
            color: C.navy,
            margin: '0 0 20px',
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
          }}>
            Il CRM che lavora<br />
            <span style={{ color: C.orange }}>come lavori tu.</span>
          </h1>

          <p className="hero-sub" style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', color: C.muted, margin: '0 0 32px', lineHeight: 1.55, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>
            Pipeline kanban, contatti con rating, note collegate e KPI in un unico spazio flessibile.
            Niente bloat, niente prezzi assurdi. Solo ciò che serve davvero.
          </p>

          {/* Bullet bridge — desktop row, mobile column */}
          <div className="hero-bullets">
            {[
              'Setup in 5 minuti',
              'Note con cestino',
              'Contatti in kanban',
            ].map(label => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                  <circle cx="8" cy="8" r="8" fill={C.orange} fillOpacity="0.13"/>
                  <path d="M4.5 8l2.5 2.5 4.5-5" stroke={C.orange} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontSize: 13, fontWeight: 600, color: C.navy, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{label}</span>
              </div>
            ))}
          </div>

          {/* CTA buttons — mobile only, inline after bullets */}
          <div className="hero-mobile-cta">
            <button onClick={scrollToForm} style={{
              padding: '16px 24px', fontSize: 16, fontWeight: 700,
              background: C.navy, color: '#fff', border: 'none',
              borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(29,53,87,0.25)',
            }}>
              Richiedi l&apos;accesso beta →
            </button>
            <a href="#come-funziona" style={{
              padding: '16px 24px', fontSize: 16, fontWeight: 600,
              background: C.glass, color: C.navy,
              border: `1.5px solid ${C.border}`,
              borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
              textDecoration: 'none', letterSpacing: '-0.02em',
              backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
              textAlign: 'center', display: 'block',
            }}>
              Scopri come funziona
            </a>
            <p style={{ fontSize: 12, color: C.muted, textAlign: 'center', margin: '2px 0 0' }}>
              Nessuna carta di credito · Accesso beta gratuito
            </p>
          </div>

          {/* Mockup — desktop only */}
          <div className="mockup-wrapper" style={{ marginTop: 0 }}>
            <div className="hero-buttons" style={{ marginBottom: 60 }}>
              <button onClick={scrollToForm} style={{
                padding: '15px 32px', fontSize: 16, fontWeight: 700,
                background: C.navy, color: '#fff', border: 'none',
                borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
                letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(29,53,87,0.25)',
              }}>
                Richiedi l&apos;accesso beta →
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
            <AppMockup />
          </div>
        </div>

        {/* BOTTOM — CTA buttons, mobile only (pinned at bottom via space-between) */}
        <div className="mobile-trust" style={{ flexDirection: 'column', gap: 10, width: '100%' }}>
          <button onClick={scrollToForm} style={{
            padding: '16px 24px', fontSize: 16, fontWeight: 700,
            background: C.navy, color: '#fff', border: 'none',
            borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(29,53,87,0.25)',
            width: '100%',
          }}>
            Richiedi l&apos;accesso beta →
          </button>
          <a href="#come-funziona" style={{
            padding: '16px 24px', fontSize: 16, fontWeight: 600,
            background: C.glass, color: C.navy,
            border: `1.5px solid ${C.border}`,
            borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif",
            textDecoration: 'none', letterSpacing: '-0.02em',
            backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)',
            textAlign: 'center', display: 'block',
          }}>
            Scopri come funziona
          </a>
          <p style={{ fontSize: 12, color: C.muted, textAlign: 'center', margin: '4px 0 0' }}>
            Nessuna carta di credito · Accesso beta gratuito
          </p>
        </div>

      </section>

      {/* ── SOCIAL PROOF BAR ────────────────────── */}
      <div style={{ background: C.navy, padding: '18px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}>
          Costruito da{' '}
          <a href="https://timbro.agency" target="_blank" rel="noopener noreferrer"
            style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>
            Timbro Agency
          </a>
        </p>
      </div>

      {/* ── FEATURES ────────────────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Funzionalità</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 16px', letterSpacing: '-0.03em' }}>
            Tutto ciò che serve,<br />niente di superfluo.
          </h2>
          <p style={{ fontSize: 17, color: C.muted, maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            timbrOS è progettato per chi vuole smettere di perdere tempo con CRM complicati. Pipeline, contatti kanban, note, rating e KPI — tutto integrato, niente da integrare.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} style={{
              background: C.glass,
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${C.border}`,
              borderRadius: 20,
              padding: '28px',
              transition: 'transform 200ms, box-shadow 200ms',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(29,53,87,0.10)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(29,53,87,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <f.Icon />
                </div>
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.navy, margin: '0 0 10px', letterSpacing: '-0.02em' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COME FUNZIONA ───────────────────────── */}
      <section id="come-funziona" style={{ padding: 'clamp(56px,8vw,80px) 20px', background: 'rgba(255,255,255,0.4)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Come funziona</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 48px', letterSpacing: '-0.03em' }}>
            Da zero a operativo<br />in meno di 5 minuti.
          </h2>

          <div className="steps-grid">
            {STEPS.map(s => (
              <div key={s.n}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(231,111,81,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 20, fontWeight: 800, color: C.orange, fontFamily: "'DM Sans',sans-serif" }}>
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
      <section style={{ padding: 'clamp(40px,6vw,80px) 20px' }}>
        <div style={{
          maxWidth: 860, margin: '0 auto',
          background: C.navy,
          borderRadius: 28,
          padding: 'clamp(36px, 6vw, 64px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(231,111,81,0.12)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(42,157,143,0.10)', pointerEvents: 'none' }} />

          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: C.orange, background: 'rgba(231,111,81,0.15)', padding: '5px 14px', borderRadius: 20, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Beta privata
          </span>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 40px)', fontWeight: 700, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.03em' }}>
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
            Richiedi l&apos;accesso anticipato →
          </button>
        </div>
      </section>

      {/* ── FORM ────────────────────────────────── */}
      <section ref={formRef} id="accesso" style={{ padding: 'clamp(40px,6vw,80px) 20px clamp(60px,8vw,100px)' }}>
        <div style={{ maxWidth: 520, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Accesso anticipato</p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 38px)', fontWeight: 700, color: C.navy, margin: '0 0 14px', letterSpacing: '-0.03em' }}>
              Unisciti alla beta.
            </h2>
            <p style={{ fontSize: 16, color: C.muted, margin: 0, lineHeight: 1.6 }}>
              Lascia i tuoi dati, valutiamo la richiesta e ti inviamo il link per creare l&apos;account.
            </p>
          </div>

          <div style={{
            background: C.glass,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${C.border}`,
            borderRadius: 24,
            padding: 'clamp(24px, 5vw, 40px)',
            boxShadow: '0 8px 32px rgba(29,53,87,0.08)',
          }}>
            <AccessForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer style={{
        background: C.navy,
        padding: '28px 20px',
        textAlign: 'center',
      }}>
        <p style={{ margin: '0 0 4px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
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
