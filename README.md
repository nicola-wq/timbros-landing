# timbros-landing

Landing page CRO per [timbros.it](https://timbros.it) con sistema di richiesta accesso beta e approvazione via email.

## Architettura

```
timbros.it          → questa landing (repo separato)
crm.timbros.it      → app Next.js timbrOS (repo timbrOS)
```

## Flusso di approvazione

1. Utente compila il form → POST `/api/request-access`
2. DB: inserita riga in `access_requests` con `status: pending`
3. Email a `nicola@timbro.agency` con bottoni **Approva** / **Rifiuta**
4. Click Approva → GET `/api/approve?id=...&token=...`
   - DB: `status → approved`, `approved_at → now()`
   - Email invito all'utente con link a `crm.timbros.it/signup?email=...`
5. Click Rifiuta → GET `/api/reject?id=...&token=...`
   - DB: `status → rejected`

I token sono firmati HMAC-SHA256 con `APPROVE_SECRET` — nessun accesso a Supabase necessario per approvare.

## Setup (5 minuti)

### 1. Supabase — crea la tabella

Nel SQL Editor del tuo progetto Supabase esistente (lo stesso del CRM), esegui:

```sql
-- Incolla il contenuto di supabase/schema.sql
```

### 2. Resend — verifica dominio

In [resend.com/domains](https://resend.com/domains) aggiungi `timbros.it` e segui la verifica DNS su register.it.

### 3. Variabili d'ambiente

Crea `.env.local` (copia da `.env.example`) e compila:

```bash
NEXT_PUBLIC_SUPABASE_URL=         # da Supabase → Settings → API
SUPABASE_SERVICE_ROLE_KEY=        # da Supabase → Settings → API (service_role)
RESEND_API_KEY=                   # da resend.com → API Keys
APPROVE_SECRET=                   # genera con: openssl rand -hex 32
ADMIN_EMAIL=nicola@timbro.agency
NEXT_PUBLIC_BASE_URL=https://timbros.it
NEXT_PUBLIC_CRM_URL=https://crm.timbros.it
```

### 4. Deploy su Vercel

```bash
# Crea nuovo repo GitHub (es. nicola-wq/timbros-landing)
git init
git add .
git commit -m "init: timbros landing"
git remote add origin https://github.com/nicola-wq/timbros-landing.git
git push -u origin main
```

Poi su [vercel.com](https://vercel.com):
1. **Add New Project** → importa `timbros-landing`
2. **Environment Variables** → aggiungi tutte le variabili di `.env.example`
3. **Deploy**

### 5. Dominio su Vercel

In Vercel → Settings → Domains:
- Aggiungi `timbros.it`
- Aggiungi `www.timbros.it` (redirect a timbros.it)

Su register.it, nei DNS del dominio `timbros.it`:
- Aggiungi i record DNS che Vercel ti mostra (solitamente 2 record A o CNAME)

### 6. Dominio CRM su Vercel

Nel progetto timbrOS su Vercel → Settings → Domains:
- Aggiungi `crm.timbros.it`

Su register.it aggiorna il sottodominio `crm.timbros.it` con il CNAME che Vercel indica.

## Sviluppo locale

```bash
npm install
cp .env.example .env.local   # compila le variabili
npm run dev
# → http://localhost:3000
```
