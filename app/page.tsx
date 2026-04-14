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
function IconCheck({ color = C.orange }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.14"/>
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
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
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}
function IconKey() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5"/>
      <path d="M21 2l-9.6 9.6"/>
      <path d="M15.5 7.5l3 3"/>
    </svg>
  )
}
function IconExport() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  )
}
function IconDatabase() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  )
}
function IconEye() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
      <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  )
}
function IconLock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2"/>
      <path d="M8 11V7a4 4 0 018 0v4"/>
    </svg>
  )
}
function IconGlobe() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  )
}

/* ── Logo ─────────────────────────────────────────── */
function Logo({ size = 20 }: { size?: number }) {
  return (
    <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: size, letterSpacing: '-0.03em', color: C.navy, lineHeight: 1 }}>
      timbr<span style={{ color: C.orange, fontWeight: 700 }}>OS</span>
    </span>
  )
}

/* ── Pipeline Mockup ──────────────────────────────── */
function PipelineMockup() {
  const stages = ['Lead', 'Proposta', 'Trattativa', 'Vinto']
  const cards = [
    { stage: 0, name: 'Luca Ferrari',  val: '€ 4.200', tag: 'Caldo', prob: 20 },
    { stage: 0, name: 'Studio Rossi',  val: '€ 8.500', tag: 'Da chiamare', prob: 10 },
    { stage: 1, name: 'Acme srl',      val: '€ 12.000', tag: 'Proposta inviata', prob: 50 },
    { stage: 2, name: 'Beta Tech',     val: '€ 6.800', tag: 'In trattativa', prob: 75 },
    { stage: 3, name: 'Gamma Srl',     val: '€ 9.200', tag: 'Chiuso', prob: 100 },
  ]
  const stageColors = [C.orange, '#6366f1', '#f59e0b', C.sage]
  return (
    <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderRadius: 20, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: '0 20px 60px rgba(29,53,87,0.12)' }}>
      <div style={{ background: 'rgba(255,255,255,0.8)', borderBottom: `1px solid ${C.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28c840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.navy, opacity: 0.7 }}>Pipeline — Timbro Agency</div>
      </div>
      <div style={{ display: 'flex', gap: 0, overflowX: 'auto', padding: '14px 12px' }}>
        {stages.map((stage, si) => (
          <div key={stage} style={{ flex: '0 0 148px', padding: '0 5px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, color: stageColors[si], textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 7, paddingLeft: 2, display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: stageColors[si], display: 'inline-block' }} />
              {stage}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {cards.filter(c => c.stage === si).map((card, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.9)', borderRadius: 9, padding: '9px 10px', border: `1px solid ${C.border}`, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.navy, marginBottom: 3 }}>{card.name}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: si === 3 ? C.sage : C.text }}>{card.val}</div>
                  <div style={{ marginTop: 5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 9, color: C.muted }}>{card.tag}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, color: stageColors[si] }}>{card.prob}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Contacts Mockup ──────────────────────────────── */
function ContactsMockup() {
  const contacts = [
    { name: 'Laura Bianchi', role: 'Marketing Dir. · Acme srl', stars: 5, tag: 'Caldo', color: C.orange },
    { name: 'Marco Verdi', role: 'CEO · Studio Verdi', stars: 4, tag: 'Da seguire', color: '#6366f1' },
    { name: 'Sofia Russo', role: 'Founder · Nextwave', stars: 3, tag: 'In trattativa', color: C.sage },
    { name: 'Andrea Neri', role: 'CTO · Beta Tech', stars: 5, tag: 'Caldo', color: C.orange },
  ]
  return (
    <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderRadius: 20, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: '0 20px 60px rgba(29,53,87,0.12)' }}>
      <div style={{ background: 'rgba(255,255,255,0.8)', borderBottom: `1px solid ${C.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28c840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.navy, opacity: 0.7 }}>Contatti — 47 totali</div>
      </div>
      <div style={{ padding: '12px' }}>
        {contacts.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 10px', borderRadius: 10, background: 'rgba(255,255,255,0.8)', border: `1px solid ${C.border}`, marginBottom: i < contacts.length - 1 ? 6 : 0 }}>
            <div style={{ width: 30, height: 30, borderRadius: '50%', background: `${c.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: c.color, flexShrink: 0 }}>
              {c.name.charAt(0)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: C.navy, marginBottom: 1 }}>{c.name}</div>
              <div style={{ fontSize: 10, color: C.muted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.role}</div>
            </div>
            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3 }}>
              <span style={{ fontSize: 9, fontWeight: 600, color: c.color, background: `${c.color}14`, padding: '2px 7px', borderRadius: 6 }}>{c.tag}</span>
              <span style={{ fontSize: 10, color: '#f59e0b', letterSpacing: '1px' }}>{'★'.repeat(c.stars)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Tasks Mockup ─────────────────────────────────── */
function TasksMockup() {
  const tasks = [
    { text: 'Inviare proposta commerciale', who: 'ML', deal: 'Acme srl', done: true, color: C.sage },
    { text: 'Follow-up call — Beta Tech', who: 'NF', deal: 'Beta Tech', done: false, color: C.orange, due: 'oggi' },
    { text: 'Preparare demo personalizzata', who: 'GR', deal: 'Nextwave', done: false, color: '#6366f1', due: 'domani' },
    { text: 'Mandare contratto firmato', who: 'NF', deal: 'Gamma Srl', done: false, color: C.orange, due: '18 apr' },
  ]
  return (
    <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderRadius: 20, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: '0 20px 60px rgba(29,53,87,0.12)' }}>
      <div style={{ background: 'rgba(255,255,255,0.8)', borderBottom: `1px solid ${C.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28c840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.navy, opacity: 0.7 }}>Attività — 3 in scadenza</div>
      </div>
      <div style={{ padding: '12px' }}>
        {tasks.map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '9px 10px', borderRadius: 10, background: 'rgba(255,255,255,0.8)', border: `1px solid ${C.border}`, marginBottom: i < tasks.length - 1 ? 6 : 0, opacity: t.done ? 0.5 : 1 }}>
            <div style={{ marginTop: 1, width: 14, height: 14, borderRadius: 4, border: `1.5px solid ${t.done ? C.sage : C.border}`, background: t.done ? C.sage : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {t.done && <svg width="8" height="8" viewBox="0 0 8 8"><path d="M1 4l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: t.done ? C.muted : C.navy, textDecoration: t.done ? 'line-through' : 'none', marginBottom: 2 }}>{t.text}</div>
              <div style={{ fontSize: 10, color: C.muted }}>{t.deal}</div>
            </div>
            <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
              <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${t.color}20`, fontSize: 9, fontWeight: 700, color: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.who}</div>
              {t.due && <span style={{ fontSize: 9, color: t.due === 'oggi' ? '#dc2626' : C.muted, fontWeight: t.due === 'oggi' ? 700 : 400 }}>{t.due}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── KPI Mockup ───────────────────────────────────── */
function KpiMockup() {
  return (
    <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderRadius: 20, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: '0 20px 60px rgba(29,53,87,0.12)' }}>
      <div style={{ background: 'rgba(255,255,255,0.8)', borderBottom: `1px solid ${C.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28c840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.navy, opacity: 0.7 }}>Dashboard — Aprile 2025</div>
      </div>
      <div style={{ padding: '14px 12px' }}>
        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10 }}>
          {[
            { label: 'Valore pipeline', value: '€ 87.400', trend: '+12%', up: true },
            { label: 'Pipeline pesata', value: '€ 34.200', trend: '+8%', up: true },
            { label: 'Deal attivi', value: '23', trend: '5 in scad.', up: false },
            { label: 'Tasso conversione', value: '34%', trend: '+3%', up: true },
          ].map((k, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 10, padding: '10px 12px', border: `1px solid ${C.border}` }}>
              <div style={{ fontSize: 9, fontWeight: 600, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 4 }}>{k.label}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.navy, marginBottom: 3 }}>{k.value}</div>
              <div style={{ fontSize: 9, fontWeight: 600, color: k.up ? C.sage : C.orange }}>{k.trend}</div>
            </div>
          ))}
        </div>
        {/* Mini bar chart */}
        <div style={{ background: 'rgba(255,255,255,0.85)', borderRadius: 10, padding: '10px 12px', border: `1px solid ${C.border}` }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 8 }}>Conversione per stage</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              { stage: 'Lead → Proposta', pct: 62 },
              { stage: 'Proposta → Trattativa', pct: 45 },
              { stage: 'Trattativa → Vinto', pct: 38 },
            ].map((b, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                  <span style={{ fontSize: 9, color: C.muted }}>{b.stage}</span>
                  <span style={{ fontSize: 9, fontWeight: 700, color: C.navy }}>{b.pct}%</span>
                </div>
                <div style={{ height: 5, background: 'rgba(29,53,87,0.08)', borderRadius: 3 }}>
                  <div style={{ height: '100%', width: `${b.pct}%`, background: C.navy, borderRadius: 3, opacity: 0.7 + i * 0.1 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Workspace Mockup ─────────────────────────────── */
function WorkspaceMockup() {
  const workspaces = [
    { name: 'Timbro Agency', tag: 'Principale', color: C.navy, active: true },
    { name: 'Acme srl', tag: '12 deal attivi', color: '#6366f1', active: false },
    { name: 'Studio Verdi', tag: '3 deal attivi', color: C.sage, active: false },
    { name: '+ Nuovo workspace', tag: '', color: C.muted, active: false, add: true },
  ]
  return (
    <div style={{ background: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(20px)', borderRadius: 20, border: `1px solid ${C.border}`, overflow: 'hidden', boxShadow: '0 20px 60px rgba(29,53,87,0.12)' }}>
      <div style={{ background: 'rgba(255,255,255,0.8)', borderBottom: `1px solid ${C.border}`, padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#ff5f57','#ffbd2e','#28c840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, textAlign: 'center', fontSize: 12, fontWeight: 600, color: C.navy, opacity: 0.7 }}>Seleziona workspace</div>
      </div>
      <div style={{ padding: '12px' }}>
        {workspaces.map((w, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: w.active ? `${C.navy}08` : 'rgba(255,255,255,0.8)', border: w.active ? `1.5px solid ${C.navy}20` : `1px solid ${C.border}`, marginBottom: i < workspaces.length - 1 ? 6 : 0, opacity: w.add ? 0.5 : 1 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: w.add ? 'transparent' : `${w.color}18`, border: w.add ? `1.5px dashed ${C.border}` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: w.add ? 16 : 13, fontWeight: 700, color: w.color, flexShrink: 0 }}>
              {w.add ? '+' : w.name.charAt(0)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: w.active ? 700 : 600, color: w.add ? C.muted : C.navy }}>{w.name}</div>
              {w.tag && <div style={{ fontSize: 10, color: C.muted }}>{w.tag}</div>}
            </div>
            {w.active && (
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: C.sage, flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Access Form ──────────────────────────────────── */
const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  color: C.navy,
  marginBottom: 6,
  letterSpacing: '-0.01em',
}

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
        <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center' }}><IconEnvelope /></div>
        <h3 style={{ fontSize: 24, fontWeight: 700, color: C.navy, margin: '0 0 12px', letterSpacing: '-0.03em' }}>Richiesta inviata!</h3>
        <p style={{ fontSize: 16, color: C.muted, lineHeight: 1.6, maxWidth: 380, margin: '0 auto' }}>
          Abbiamo ricevuto la tua richiesta.<br />Ti contatteremo a breve con il link per accedere.
        </p>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '13px 16px', fontSize: 15,
    fontFamily: "'DM Sans',sans-serif", border: `1.5px solid ${C.border}`,
    borderRadius: 12, background: 'rgba(255,255,255,0.8)', color: C.text,
    outline: 'none', transition: 'border-color 150ms', boxSizing: 'border-box',
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="form-row">
        <div>
          <label style={labelStyle}>Nome *</label>
          <input style={inputStyle} placeholder="Mario" value={name} onChange={e => setName(e.target.value)} required
            onFocus={e => (e.target.style.borderColor = C.navy)} onBlur={e => (e.target.style.borderColor = C.border)} />
        </div>
        <div>
          <label style={labelStyle}>Cognome *</label>
          <input style={inputStyle} placeholder="Rossi" value={surname} onChange={e => setSurname(e.target.value)} required
            onFocus={e => (e.target.style.borderColor = C.navy)} onBlur={e => (e.target.style.borderColor = C.border)} />
        </div>
      </div>
      <div>
        <label style={labelStyle}>Email professionale *</label>
        <input style={inputStyle} type="email" placeholder="mario@azienda.it" value={email} onChange={e => setEmail(e.target.value)} required
          onFocus={e => (e.target.style.borderColor = C.navy)} onBlur={e => (e.target.style.borderColor = C.border)} />
      </div>
      <div>
        <label style={labelStyle}>Azienda <span style={{ color: C.muted, fontWeight: 400 }}>(opzionale)</span></label>
        <input style={inputStyle} placeholder="Acme srl" value={company} onChange={e => setCompany(e.target.value)}
          onFocus={e => (e.target.style.borderColor = C.navy)} onBlur={e => (e.target.style.borderColor = C.border)} />
      </div>
      {error && (
        <div style={{ fontSize: 14, padding: '12px 16px', borderRadius: 10, background: 'rgba(239,68,68,0.08)', color: '#dc2626' }}>{error}</div>
      )}
      <button type="submit" disabled={loading} style={{
        marginTop: 4, padding: '15px 24px', fontSize: 16, fontFamily: "'DM Sans',sans-serif",
        fontWeight: 700, color: '#fff', background: loading ? '#9aadbe' : C.navy, border: 'none',
        borderRadius: 12, cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 150ms',
        letterSpacing: '-0.02em', width: '100%',
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

/* ── Main page ──────────────────────────────────────── */
export default function LandingPage() {
  const formRef = useRef<HTMLDivElement>(null)
  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div style={{ background: 'linear-gradient(145deg, #EEF0F6 0%, #F5F3F8 25%, #F3EEF0 60%, #EDF2F0 100%)', minHeight: '100vh' }}>
      <style>{`
        * { box-sizing: border-box; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .hero-section {
          padding: clamp(48px,8vw,88px) 20px clamp(40px,6vw,64px);
          text-align: center;
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
        }
        .hero-top { margin-bottom: 0; }
        .hero-mobile-cta { display: none; }
        .hero-buttons { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 64px; }
        .mockup-wrapper { display: block; }
        .mobile-trust { display: none; }
        .hero-bullets { display: flex; flex-direction: row; gap: 24px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
        .header-badge { display: inline-block; }
        .feature-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .feature-split.flip { direction: rtl; }
        .feature-split.flip > * { direction: ltr; }
        .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .security-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 768px) {
          .feature-split { grid-template-columns: 1fr; gap: 32px; direction: ltr !important; }
          .feature-split.flip > * { direction: ltr; }
          .security-grid { grid-template-columns: 1fr 1fr; }
          .pain-grid { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr; }
        }
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
          .hero-h1 { font-size: 48px !important; line-height: 1.0 !important; margin-bottom: 12px !important; }
          .hero-sub { font-size: 15px !important; margin-bottom: 14px !important; line-height: 1.45 !important; }
          .hero-bullets { flex-direction: column; gap: 8px; align-items: flex-start; justify-content: flex-start; margin-bottom: 0; }
          .hero-mobile-cta { display: none !important; }
          .mobile-trust { display: flex; }
          .form-row { grid-template-columns: 1fr; }
          .mockup-wrapper { display: none; }
          .header-badge { display: none; }
          .security-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HEADER ──────────────────────────────────── */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(243,241,244,0.90)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: `1px solid ${C.border}`, padding: '0 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ textDecoration: 'none', cursor: 'pointer' }}><Logo size={22} /></a>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span className="header-badge" style={{ fontSize: 12, fontWeight: 600, color: C.orange, background: 'rgba(231,111,81,0.1)', padding: '4px 10px', borderRadius: 20 }}>Beta privata</span>
            <button onClick={scrollToForm} style={{ padding: '9px 18px', fontSize: 13, fontWeight: 700, background: C.navy, color: '#fff', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
              Richiedi accesso
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-top">
          <div className="hero-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(29,53,87,0.07)', padding: '6px 14px', borderRadius: 20, marginBottom: 24, fontSize: 13, color: C.navy, fontWeight: 600 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.sage, display: 'inline-block', flexShrink: 0 }} />
            Accesso anticipato aperto — posti limitati
          </div>

          <h1 className="hero-h1" style={{ fontSize: 'clamp(44px, 6.5vw, 82px)', fontWeight: 700, color: C.navy, margin: '0 0 22px', lineHeight: 1.03, letterSpacing: '-0.04em' }}>
            Il CRM che vorresti<br />
            <span style={{ color: C.orange }}>avere da anni.</span>
          </h1>

          <p className="hero-sub" style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', color: C.muted, margin: '0 0 32px', lineHeight: 1.6, maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>
            Pipeline kanban visuale, contatti con rating, task assegnabili al team e dashboard KPI — in un unico spazio. Senza imparare niente di nuovo. Senza prezzi assurdi.
          </p>

          <div className="hero-bullets">
            {[
              'Più intuitivo di Trello',
              'Task assegnabili al team',
              'Dashboard KPI avanzata',
            ].map(label => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <IconCheck />
                <span style={{ fontSize: 14, fontWeight: 600, color: C.navy, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>{label}</span>
              </div>
            ))}
          </div>

          <div className="mockup-wrapper">
            <div className="hero-buttons">
              <button onClick={scrollToForm} style={{ padding: '15px 32px', fontSize: 16, fontWeight: 700, background: C.navy, color: '#fff', border: 'none', borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(29,53,87,0.25)' }}>
                Richiedi l&apos;accesso beta →
              </button>
              <a href="#come-funziona" style={{ padding: '15px 32px', fontSize: 16, fontWeight: 600, background: C.glass, color: C.navy, border: `1.5px solid ${C.border}`, borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", textDecoration: 'none', letterSpacing: '-0.02em', backdropFilter: 'blur(10px)' }}>
                Scopri come funziona
              </a>
            </div>
            <PipelineMockup />
          </div>
        </div>

        {/* Mobile bottom CTA */}
        <div className="mobile-trust" style={{ flexDirection: 'column', gap: 10, width: '100%' }}>
          <button onClick={scrollToForm} style={{ padding: '16px 24px', fontSize: 16, fontWeight: 700, background: C.navy, color: '#fff', border: 'none', borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(29,53,87,0.25)', width: '100%' }}>
            Richiedi l&apos;accesso beta →
          </button>
          <a href="#come-funziona" style={{ padding: '16px 24px', fontSize: 16, fontWeight: 600, background: C.glass, color: C.navy, border: `1.5px solid ${C.border}`, borderRadius: 14, fontFamily: "'DM Sans',sans-serif", textDecoration: 'none', letterSpacing: '-0.02em', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', textAlign: 'center', display: 'block' }}>
            Scopri come funziona
          </a>
          <p style={{ fontSize: 12, color: C.muted, textAlign: 'center', margin: '4px 0 0' }}>Nessuna carta di credito · Accesso beta gratuito</p>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ────────────────────────── */}
      <div style={{ background: C.navy, padding: '16px 20px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 14, color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.01em' }}>
          Costruito da{' '}
          <a href="https://timbro.agency" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontWeight: 700, textDecoration: 'none' }}>Timbro Agency</a>
          {' '}— per chi vende ogni giorno, senza perdere tempo con gli strumenti.
        </p>
      </div>

      {/* ── PAIN POINTS ─────────────────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700, color: C.navy, margin: '0 0 14px', letterSpacing: '-0.03em' }}>
            Stai usando gli strumenti sbagliati.
          </h2>
          <p style={{ fontSize: 17, color: C.muted, maxWidth: 500, margin: '0 auto', lineHeight: 1.6 }}>
            E lo sai già. Il problema non sei tu — è che nessun tool era fatto per il tuo modo di lavorare.
          </p>
        </div>
        <div className="pain-grid">
          {[
            { icon: '📋', title: 'Excel non scala', desc: 'Funziona per 10 contatti. Quando diventano 200, è un disastro. Nessuna visibilità sullo stato delle trattative, nessuna cronologia.' },
            { icon: '🧩', title: 'Trello non è un CRM', desc: 'Ottimo per i task, inutile per le vendite. Non traccia valori, probabilità, note dei clienti o chi deve fare cosa nel team.' },
            { icon: '🏢', title: 'Salesforce è per le multinazionali', desc: 'Funzionale ma sovradimensionato. Mesi di setup, prezzi proibitivi, formazione necessaria. Non è per te — e non deve esserlo.' },
          ].map((p, i) => (
            <div key={i} style={{ background: C.glass, backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: `1px solid ${C.border}`, borderRadius: 20, padding: '28px 24px' }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{p.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: C.navy, margin: '0 0 10px', letterSpacing: '-0.02em' }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.7 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURE: PIPELINE KANBAN ─────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px', background: 'rgba(255,255,255,0.4)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="feature-split">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Pipeline Kanban</p>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Trello è ottimo.<br />Ma non è un CRM.
              </h2>
              <p style={{ fontSize: 16, color: C.muted, margin: '0 0 24px', lineHeight: 1.7 }}>
                Ogni deal ha il suo valore, la sua probabilità di chiusura, gli allegati e le note collegate. Trascina le card tra le fasi, personalizza i colori delle colonne, scegli tra 7 template pronti o costruisci la tua pipeline da zero. Quando un deal entra nella colonna "Vinto", i KPI si aggiornano automaticamente.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['7 template pronti: agenzia, B2B, real estate, recruiting e altri', 'Drag & drop di card e colonne — riorganizza in secondi', 'Valore pipeline pesato per probabilità di chiusura', 'Allegati, note e task direttamente sul deal'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ marginTop: 2 }}><IconCheck /></div>
                    <span style={{ fontSize: 14, color: C.text, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <PipelineMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: CONTATTI ────────────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="feature-split flip">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: C.sage, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Gestione Contatti</p>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Non solo un elenco<br />di nomi.
              </h2>
              <p style={{ fontSize: 16, color: C.muted, margin: '0 0 24px', lineHeight: 1.7 }}>
                Ogni contatto ha una scheda completa: deal associati, task aperti, note collegate e rating a stelle per prioritizzare i lead più caldi. Visualizza i contatti in lista o in una board kanban con fasi personalizzabili — e sposta i lead tra gli stage con un drag, esattamente come nella pipeline.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Vista lista o kanban, con fasi personalizzabili', 'Rating da 1 a 5 stelle per prioritizzare i lead caldi', 'Note, deal e task collegati in un click', 'Import da CSV o vCard in pochi secondi'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ marginTop: 2 }}><IconCheck color={C.sage} /></div>
                    <span style={{ fontSize: 14, color: C.text, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactsMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: TASK ───────────────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px', background: 'rgba(255,255,255,0.4)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="feature-split">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Task integrati</p>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Assegna il lavoro<br />al team. Traccia tutto.
              </h2>
              <p style={{ fontSize: 16, color: C.muted, margin: '0 0 24px', lineHeight: 1.7 }}>
                Crea attività collegate a un deal o a un contatto e assegnale a un collaboratore con data di scadenza. Chi ha un task aperto lo vede nel suo pannello, con alert visivi per le scadenze imminenti. Nessuna email interna, nessun foglio condiviso, nessuna app aggiuntiva. Il coordinamento del team è dentro timbrOS.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Task collegati direttamente a deal o contatti', 'Assegnabili a qualsiasi membro del workspace', 'Scadenze con alert per i ritardi', 'Ogni collaboratore vede le sue attività aperte'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ marginTop: 2 }}><IconCheck color="#6366f1" /></div>
                    <span style={{ fontSize: 14, color: C.text, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <TasksMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: DASHBOARD KPI ──────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="feature-split flip">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Dashboard KPI</p>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Sai quanti soldi<br />hai in pipeline?
              </h2>
              <p style={{ fontSize: 16, color: C.muted, margin: '0 0 24px', lineHeight: 1.7 }}>
                La dashboard ti mostra il valore totale e pesato della pipeline, il tasso di conversione per ogni stage, le attività aperte e in scadenza — senza che tu debba costruire nessun report. I widget sono personalizzabili e riordinabili. I numeri che contano, sempre davanti a te, appena apri il tool.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Valore pipeline totale e pesato per probabilità', 'Tasso di conversione tra ogni coppia di stage', 'Widget personalizzabili: mostra solo ciò che ti serve', 'Attività in scadenza sempre visibili'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ marginTop: 2 }}><IconCheck /></div>
                    <span style={{ fontSize: 14, color: C.text, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <KpiMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE: MULTI-WORKSPACE ─────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px', background: 'rgba(255,255,255,0.4)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="feature-split">
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: C.sage, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Multi-workspace</p>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                Più clienti.<br />Zero confusione.
              </h2>
              <p style={{ fontSize: 16, color: C.muted, margin: '0 0 24px', lineHeight: 1.7 }}>
                Ogni workspace ha il suo URL dedicato, i suoi contatti, la sua pipeline e i suoi membri — completamente isolato dagli altri. Cambia contesto con un click. Perfetto per agenzie che gestiscono più clienti, o per chi vuole separare linee di business diverse senza rischiare di mischiare i dati.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['URL dedicato e dati completamente isolati per workspace', 'Pipeline e contatti separati per ogni spazio', 'Invita membri diversi in ogni workspace', 'Cambia workspace con un click dalla sidebar'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ marginTop: 2 }}><IconCheck color={C.sage} /></div>
                    <span style={{ fontSize: 14, color: C.text, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <WorkspaceMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ── SICUREZZA DATI ───────────────────────────── */}
      <section style={{ padding: 'clamp(56px,8vw,80px) 20px', background: C.navy, position: 'relative', overflow: 'hidden' }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(231,111,81,0.08)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, left: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(42,157,143,0.08)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>I tuoi dati</p>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', margin: '0 0 18px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Sono tuoi. Davvero.
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.62)', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>
              timbrOS è costruito su PostgreSQL con sicurezze di livello enterprise. Nessuna rivendita dei tuoi dati, nessun lock-in, esportazione completa sempre disponibile.
            </p>
          </div>

          <div className="security-grid">
            {[
              { Icon: IconGlobe, title: 'GDPR-compliant', desc: 'Dati ospitati in Europa, su infrastruttura certificata. Puoi richiedere l\'eliminazione completa in qualsiasi momento — nessun dato trattiene in silenzio.', color: C.sage },
              { Icon: IconDatabase, title: 'Row Level Security', desc: 'Ogni record è protetto a livello di database. Nessun utente può accedere ai dati di un altro workspace, anche in caso di bug applicativo.', color: '#6366f1' },
              { Icon: IconExport, title: 'Esportazione totale', desc: 'Contatti, deal, note: esporta tutto in CSV o JSON in qualsiasi momento. Senza dover chiamare il supporto o aspettare permessi.', color: C.orange },
              { Icon: IconKey, title: 'Autenticazione 2FA', desc: 'Two-factor authentication TOTP nativo (Google Authenticator, Authy). Il tuo account rimane al sicuro anche se la password viene compromessa.', color: '#f59e0b' },
              { Icon: IconEye, title: 'Nessuna rivendita dati', desc: 'I tuoi dati commerciali sono tuoi. Non li usiamo per addestrare modelli, non li vendiamo a terzi, non li analizziamo per fini pubblicitari.', color: C.sage },
              { Icon: IconLock, title: 'Crittografia enterprise', desc: 'Connessioni TLS 1.3 e database crittografato at-rest. Lo stesso standard di sicurezza usato dalle banche e dagli istituti finanziari.', color: C.orange },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 18, padding: '26px 24px' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16, color: item.color }}>
                  <item.Icon />
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COME FUNZIONA ───────────────────────────── */}
      <section id="come-funziona" style={{ padding: 'clamp(56px,8vw,80px) 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: C.orange, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Come funziona</p>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 700, color: C.navy, margin: '0 0 52px', letterSpacing: '-0.03em' }}>
            Da zero a operativo<br />in meno di 5 minuti.
          </h2>
          <div className="steps-grid">
            {[
              { n: '01', title: "Richiedi l'accesso", desc: 'Compila il form con nome, cognome e email. Nessuna carta di credito, nessun abbonamento da attivare.' },
              { n: '02', title: "Valutiamo la richiesta", desc: "Selezioniamo ogni utente beta manualmente. Se il profilo è adatto, ricevi il link per creare l'account — di solito entro 24 ore." },
              { n: '03', title: 'Sei operativo', desc: 'Crei il workspace, scegli il template di pipeline, inviti il team. Subito al lavoro, senza tutorial lunghi.' },
            ].map(s => (
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

      {/* ── BETA CALLOUT ────────────────────────────── */}
      <section style={{ padding: 'clamp(40px,6vw,80px) 20px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', background: C.navy, borderRadius: 28, padding: 'clamp(36px, 6vw, 64px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, borderRadius: '50%', background: 'rgba(231,111,81,0.12)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -80, left: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(42,157,143,0.10)', pointerEvents: 'none' }} />
          <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, color: C.orange, background: 'rgba(231,111,81,0.15)', padding: '5px 14px', borderRadius: 20, marginBottom: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Beta privata
          </span>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 40px)', fontWeight: 700, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.03em' }}>
            Stai vedendo timbrOS prima di tutti.
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.65 }}>
            Ogni utente beta viene selezionato a mano. Hai accesso a tutte le funzionalità, la possibilità di mandare feedback diretto al team e di influenzare la roadmap del prodotto. I posti sono limitati.
          </p>
          <button onClick={scrollToForm} style={{ padding: '15px 36px', fontSize: 16, fontWeight: 700, background: C.orange, color: '#fff', border: 'none', borderRadius: 14, cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", letterSpacing: '-0.02em', boxShadow: '0 8px 24px rgba(231,111,81,0.4)' }}>
            Richiedi l&apos;accesso anticipato →
          </button>
        </div>
      </section>

      {/* ── FORM ────────────────────────────────────── */}
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
          <div style={{ background: C.glass, backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: `1px solid ${C.border}`, borderRadius: 24, padding: 'clamp(24px, 5vw, 40px)', boxShadow: '0 8px 32px rgba(29,53,87,0.08)' }}>
            <AccessForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────── */}
      <footer style={{ background: C.navy, padding: '28px 20px', textAlign: 'center' }}>
        <p style={{ margin: '0 0 4px', fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
          timbrOS by{' '}
          <a href="https://timbro.agency" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontWeight: 600 }}>Timbro Agency</a>
        </p>
        <p style={{ margin: 0, fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
          © {new Date().getFullYear()} · Tutti i diritti riservati
        </p>
      </footer>
    </div>
  )
}
