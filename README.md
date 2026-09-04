# JINVERSE

A digital knowledge and heritage platform for Jainism — philosophy, Tirthankaras,
history, texts and living tradition, built with React, Vite and Tailwind CSS.

## Status of this build

This is a first working version, built fresh in this session. Two integrations
requested alongside the build are **not yet connected**, and nothing here
pretends otherwise:

- **GitHub**: no GitHub connector is available in this environment, so your
  existing JINVERSE repository (if one exists) was not inspected, and nothing
  was pushed anywhere. The code below is new, in this session's sandbox only.
  See "Pushing to GitHub" below for the exact commands to get it into your repo.
- **Supabase**: your Supabase account was inspected. It currently has one
  project, named "Fashion Clubb" — no project named JINVERSE exists yet. No
  tables were created and no data was written. `supabase/migrations/0001_init_schema.sql`
  contains a designed-but-unapplied schema, ready to run once a JINVERSE
  project exists. The site works fully on placeholder content in the
  meantime — see `src/lib/supabaseClient.js`.

Everything else — the actual site, all ten pages, routing, components,
responsive layout, accessibility basics, and the evidence-label system — is
real, working code, verified with a full TypeScript/JSX syntax check across
every file (this sandbox has no network access, so a live `npm install` /
`vite build` could not be run here — run it locally with the commands below
to do a final check before deploying).

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase project's URL
and **anon/public** key only:

```bash
cp .env.example .env.local
```

Never put your `service_role` key in this file or anywhere in frontend code.
Without these variables set, the site still runs normally on placeholder
content (see `fetchPublished()` in `src/lib/supabaseClient.js`).

## Project structure

```
src/
  components/
    layout/       Header (with mobile nav), Footer
    ui/            Button, SectionHeading, EvidenceLabel, Reveal, PlaceholderNote
  data/
    placeholderContent.js   All fallback content — teachings, Tirthankaras,
                             texts, articles, heritage sites, reels
  lib/
    supabaseClient.js       Supabase client + safe fallback-fetch helper
  pages/
    Home, Explore, Teachings, Tirthankaras, History, Texts,
    Articles, ArticleDetail, Reels, About, NotFound
supabase/
  migrations/0001_init_schema.sql   Designed schema, not yet applied
```

## Pushing to GitHub

No GitHub connector was available, so this wasn't done for you. From this
project's root:

```bash
git init
git add .
git commit -m "Initial JINVERSE build: homepage, 10 pages, components, Supabase-ready schema"
git branch -M main
git remote add origin <your-existing-jinverse-repo-url>
git push -u origin main
```

If your existing repository already has commits, use `git remote add origin ...`
then `git pull origin main --allow-unrelated-histories` before pushing, and
resolve any conflicts — this build did not attempt to merge with or overwrite
anything, since it could not see your existing repository's contents.

## Setting up Supabase

1. Create a project named JINVERSE in your Supabase organization (or tell
   Claude to create one — it requires your explicit cost confirmation first,
   since Supabase projects are a billed resource).
2. Run `supabase/migrations/0001_init_schema.sql` against it (via the
   Supabase SQL editor, the CLI, or ask Claude to apply it once the project
   exists).
3. Add the project's URL and anon key to `.env.local`.
4. Content stays in `draft` status by default (see the schema) — nothing
   becomes publicly visible until you move a row to `published`.

## Deploying to Vercel

Once pushed to GitHub, connect the repository in Vercel (or ask Claude to run
`Vercel:create_git_project` once the repo exists) and set the same two
environment variables in the Vercel project settings. No build configuration
changes are needed — it's a standard Vite app.
