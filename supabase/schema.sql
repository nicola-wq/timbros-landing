-- ─────────────────────────────────────────────────────────────────────────────
-- timbrOS landing — tabella access_requests
-- Da eseguire nel SQL Editor di Supabase (progetto esistente del CRM)
-- ─────────────────────────────────────────────────────────────────────────────

create table if not exists public.access_requests (
  id           uuid        primary key default gen_random_uuid(),
  name         text        not null,
  surname      text        not null,
  email        text        not null,
  company      text,
  status       text        not null default 'pending',
  token        text        not null,
  created_at   timestamptz not null default now(),
  approved_at  timestamptz,
  rejected_at  timestamptz,

  constraint access_requests_email_key    unique (email),
  constraint access_requests_status_check check (status in ('pending','approved','rejected'))
);

-- RLS: la tabella è accessibile SOLO dal service role (API routes server-side)
-- La anon key non può né leggere né scrivere
alter table public.access_requests enable row level security;

create policy "Nessun accesso pubblico"
  on public.access_requests
  for all
  using (false)
  with check (false);

-- Index per query per email e per status
create index if not exists access_requests_email_idx  on public.access_requests (email);
create index if not exists access_requests_status_idx on public.access_requests (status);
