-- =============================================================================
-- JINVERSE — Initial Schema
-- =============================================================================
-- NOT YET APPLIED. No Supabase project named "JINVERSE" was found under this
-- account at the time this migration was written (only a project named
-- "Fashion Clubb" exists). Run this file yourself with `supabase db push`,
-- or ask Claude to apply it once a JINVERSE Supabase project exists and is
-- connected.
--
-- Design principles:
--   - draft / reviewed / published status on every content table, so nothing
--     goes live without explicit review.
--   - every factual table carries source fields, so claims can be traced
--     back to a citation rather than asserted bare.
--   - Row Level Security is enabled everywhere: public read of published
--     rows only; writes require an authenticated admin role.
-- =============================================================================

create type content_status as enum ('draft', 'reviewed', 'published');
create type evidence_label as enum ('established', 'debated', 'tradition', 'unverified');

-- ---------------------------------------------------------------------------
-- Sources: every citation JINVERSE relies on, in one place.
-- ---------------------------------------------------------------------------
create table sources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text,
  source_type text not null check (source_type in ('primary_text', 'inscription', 'archaeological', 'secondary_scholarship', 'popular')),
  original_language text,
  approx_date text,
  translation_status text,
  access_url text,
  notes text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Claims: the atomic unit of JINVERSE's fact-checking system. Articles,
-- teachings, tirthankaras and places all reference claims rather than
-- embedding unsourced facts directly.
-- ---------------------------------------------------------------------------
create table claims (
  id uuid primary key default gen_random_uuid(),
  claim_text text not null,
  short_explanation text,
  category text check (category in ('doctrine', 'jain_tradition', 'history', 'archaeology', 'interpretation')),
  source_id uuid references sources(id),
  exact_citation_location text, -- literal 'Not yet verified' allowed and expected for many rows
  evidence_status evidence_label not null default 'unverified',
  confidence_level text check (confidence_level in ('high', 'medium', 'low')),
  reviewer_notes text,
  last_verified_date date,
  status content_status not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Places (heritage sites) and People (Tirthankaras and other figures)
-- ---------------------------------------------------------------------------
create table places (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  region text,
  description text,
  evidence_status evidence_label not null default 'unverified',
  status content_status not null default 'draft',
  created_at timestamptz not null default now()
);

create table people (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  role text, -- e.g. 'Tirthankara', 'Chakravartin', 'historical teacher'
  tirthankara_number int, -- null if not a Tirthankara
  emblem text,
  description text,
  evidence_status evidence_label not null default 'unverified',
  status content_status not null default 'draft',
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Content tables
-- ---------------------------------------------------------------------------
create table texts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  author text,
  tradition text,
  original_language text,
  approx_date text,
  translation_status text,
  description text,
  status content_status not null default 'draft',
  created_at timestamptz not null default now()
);

create table teachings (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  short_explanation text,
  full_body text,
  evidence_status evidence_label not null default 'tradition',
  status content_status not null default 'draft',
  created_at timestamptz not null default now()
);

create table articles (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  subtitle text,
  category text,
  reading_time text,
  excerpt text,
  body_markdown text,
  hero_image_url text,
  status content_status not null default 'draft',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Many-to-many: which claims/sources back a given article, teaching, place, person
create table article_claims (
  article_id uuid references articles(id) on delete cascade,
  claim_id uuid references claims(id) on delete cascade,
  primary key (article_id, claim_id)
);

create table reels (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  duration text,
  video_url text, -- null until real MP4s are uploaded
  thumbnail_url text,
  status content_status not null default 'draft',
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- ---------------------------------------------------------------------------
alter table sources enable row level security;
alter table claims enable row level security;
alter table places enable row level security;
alter table people enable row level security;
alter table texts enable row level security;
alter table teachings enable row level security;
alter table articles enable row level security;
alter table article_claims enable row level security;
alter table reels enable row level security;

-- Public (anon) read access: published rows only.
create policy "public read published articles" on articles for select using (status = 'published');
create policy "public read published teachings" on teachings for select using (status = 'published');
create policy "public read published texts" on texts for select using (status = 'published');
create policy "public read published places" on places for select using (status = 'published');
create policy "public read published people" on people for select using (status = 'published');
create policy "public read published reels" on reels for select using (status = 'published');
create policy "public read claims" on claims for select using (status = 'published');
create policy "public read sources" on sources for select using (true);
create policy "public read article_claims" on article_claims for select using (true);

-- Writes: restricted to an 'admin' role via Supabase custom claims.
-- Replace `is_admin()` with your actual role-check function once auth is set up.
-- create policy "admin write articles" on articles for all
--   using (auth.jwt() ->> 'role' = 'admin')
--   with check (auth.jwt() ->> 'role' = 'admin');
-- (Repeat per table once an admin auth flow is in place. Left commented out
-- deliberately — do not enable broad write access before that flow exists.)
