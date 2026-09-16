import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import EvidenceLabel from '../components/ui/EvidenceLabel.jsx'
import { teachings, tirthankaras, heritageSites, texts } from '../data/placeholderContent.js'
import { useArticleLibrary } from '../lib/useArticleLibrary.js'
import { getTodaysArticle } from '../lib/todaysArticle.js'

const UPPER_IMAGE = '/file_000000008c8082119468161444477380.png'
const LOWER_IMAGE = '/jinverselogo.png'
const ROT_TEEJ_CARD = '/images/articles/rot-teej-greeting-card.png'

const DAS_LAKSHAN_VIRTUES = [
  'उत्तम क्षमा', 'उत्तम मार्दव', 'उत्तम आर्जव', 'उत्तम शौच', 'उत्तम सत्य',
  'उत्तम संयम', 'उत्तम तप', 'उत्तम त्याग', 'उत्तम आकिंचन्य', 'उत्तम ब्रह्मचर्य',
]

// IST (Asia/Kolkata) has been a fixed UTC+5:30 offset with no DST since 1945,
// so these windows are expressed directly as their UTC equivalents rather
// than depending on the visitor's own timezone or a timezone library.
// 2026-09-13 23:59:59 IST
const ROT_TEEJ_END_UTC_MS = Date.UTC(2026, 8, 13, 18, 29, 59, 999)
// 2026-09-25 23:59:59 IST
const DAS_LAKSHAN_END_UTC_MS = Date.UTC(2026, 8, 25, 18, 29, 59, 999)

// `nowMs` is only ever overridden in tests; production always falls through
// to the real current time.
function getSeasonalBanner(nowMs = Date.now()) {
  if (nowMs <= ROT_TEEJ_END_UTC_MS) return 'rot-teej'
  if (nowMs <= DAS_LAKSHAN_END_UTC_MS) return 'das-lakshan'
  return null
}

function SeasonalBanner() {
  const banner = getSeasonalBanner()
  if (!banner) return null

  if (banner === 'rot-teej') {
    return (
      <section className="border-b border-gold-dim/25 bg-panel/60">
        <div className="container-page py-5 sm:py-6">
          <Reveal>
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-4">
                <img
                  src={ROT_TEEJ_CARD}
                  alt=""
                  aria-hidden="true"
                  className="hidden h-16 w-auto shrink-0 rounded-md border border-gold/50 sm:block"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">विशेष प्रस्तुति · अभी</p>
                  <p className="mt-1 font-display text-xl text-ivory sm:text-2xl">
                    रोट तीज <span className="text-sm font-normal text-ivory-dim">· एक जैन लोक-परम्परा</span>
                  </p>
                </div>
              </div>
              <Button to="/rot-teej" variant="primary" className="shrink-0 whitespace-nowrap">रोट तीज की कथा जानें →</Button>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  return (
    <section className="border-b border-gold-dim/25 bg-panel/60">
      <div className="container-page py-5 sm:py-6">
        <Reveal>
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">विशेष प्रस्तुति · अभी</p>
              <p className="mt-1 font-display text-xl text-ivory sm:text-2xl">दशलक्षण महापर्व</p>
              <p className="mt-1 text-xs text-ivory-dim">दस उत्तम भाव • आत्मचिंतन • साधना</p>
            </div>
            {/* Edge-fade mask signals the row scrolls without a hard visual
                cutoff; no /das-lakshan route exists yet, so there is no CTA
                here — one will be added once that page exists. */}
            <div
              className="flex w-full gap-2 overflow-x-auto pb-1"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)',
                maskImage: 'linear-gradient(to right, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)',
              }}
            >
              {DAS_LAKSHAN_VIRTUES.map((v) => (
                <span key={v} className="shrink-0 whitespace-nowrap rounded-full border border-gold-dim/30 px-3 py-1 text-xs text-gold" style={{ scrollSnapAlign: 'start' }}>
                  {v}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Compact, seasonal homepage preview — shown only while
// getSeasonalBanner() === 'das-lakshan' (see isDasLakshanFeatured in
// Home() below). Replaces the previous FeaturedDasLakshanFeature, which
// rendered the full DasLakshanSection + DasLakshanObservanceSection
// content in place. That full content now lives at the dedicated
// /das-lakshan page (src/pages/DasLakshan.jsx, rendering
// components/sections/DasLakshanSection.jsx) — the only source of truth
// for it. Every piece of copy below (eyebrow, heading, intro sentence,
// pull-quote) is reused verbatim from that content, not rewritten; the
// virtue chips reuse the existing DAS_LAKSHAN_VIRTUES list already used
// by SeasonalBanner above.
function DasLakshanSeasonalPreview() {
  return (
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-20">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-saffron">
              विशेष प्रस्तुति · दशलक्षण महापर्व <span className="text-ink-dim/50">·</span> Das Lakshan Parv · Featured
            </p>
            <h2 className="mt-3 font-display text-4xl text-ink">दशलक्षण महापर्व क्यों मनाया जाता है?</h2>
            <p className="font-display text-2xl text-ink-dim">Why Das Lakshan Parv?</p>
            <p className="mt-6 text-sm leading-7 text-ink-dim">
              Das Lakshan Parv is a ten-day Digambara Jain observance dedicated to turning inward and cultivating the ten supreme dharmas — from forgiveness and humility to restraint, renunciation, non-attachment and celibacy.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {DAS_LAKSHAN_VIRTUES.map((v) => (
              <span key={v} className="rounded-full border border-saffron/30 px-3 py-1 text-xs text-saffron">
                {v}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-xl border-t border-ink-dim/15 pt-8 text-center">
            <p className="font-display text-lg leading-relaxed text-ink">
              दशलक्षण केवल दस दिनों का पर्व नहीं—दस गुणों को जीवन में उतारने का निमंत्रण है।
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              Das Lakshan is not merely a ten-day observance—it is an invitation to bring these ten virtues into everyday life.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-8 text-center">
            <Link to="/das-lakshan" className="text-sm text-saffron transition-colors hover:text-[#8C6A32]">
              Explore Das Lakshan →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Compact, evergreen homepage discovery section — shown only while
// getSeasonalBanner() !== 'das-lakshan' (i.e. !isDasLakshanFeatured, see
// Home() below). Replaces the previous full-content fallback
// (<DasLakshanSection /><DasLakshanObservanceSection />). Deliberately
// does not use the seasonal "· Featured" eyebrow outside the festival
// window. Intro sentence reused verbatim from the full content, which
// now lives only at /das-lakshan.
function DasLakshanEvergreenPreview() {
  return (
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-20">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-saffron">Digambara Jain Tradition</p>
            <h2 className="mt-3 font-display text-4xl text-ink">Das Lakshan Parv</h2>
            <p className="mt-6 text-sm leading-7 text-ink-dim">
              Das Lakshan Parv is a ten-day Digambara Jain observance dedicated to turning inward and cultivating the ten supreme dharmas — from forgiveness and humility to restraint, renunciation, non-attachment and celibacy.
            </p>
            <div className="mt-8">
              <Link to="/das-lakshan" className="text-sm text-saffron transition-colors hover:text-[#8C6A32]">
                Learn about Das Lakshan →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Evergreen — always renders (not gated by getSeasonalBanner()). The full
// content (all 8 parts, sources, devotional image) now lives at the
// dedicated /prayer-and-worship page (src/pages/PrayerAndWorship.jsx,
// rendering components/sections/PrayerAndWorshipSection.jsx). This is a
// separate, short, tasteful teaser (not a reuse of that component) sharing
// only the same devotional image and related copy, linking there.
function PrayerAndWorshipPreview() {
  return (
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-saffron">Digambara Jain Tradition</p>
            <h2 className="mt-3 font-display text-4xl text-ink">दिगम्बर जैन किस प्रकार प्रार्थना और पूजा करते हैं?</h2>
            <p className="font-display text-2xl text-ink-dim">How Do Digambara Jains Pray?</p>
            <p className="mt-6 text-sm leading-7 text-ink-dim">
              Digambara Jain texts describe not a single practice called &ldquo;prayer,&rdquo; but several distinct forms of religious life — reverence, worship, praise, equanimity, meditation, study and self-examination — each theologically distinct from petitioning a creator deity.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mx-auto mt-10 w-full max-w-xs sm:max-w-sm">
            <div className="absolute -inset-3 rounded-sm bg-gold/10 blur-xl" aria-hidden="true" />
            <div className="relative border border-gold-dim/50 bg-panel/70 p-2 shadow-xl">
              <img
                src="/images/jina-puja-devotion.png"
                alt="A devotee in reverent prayer before a Jina mūrti seated in meditation, illustrating jina-pūjā"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-8 text-center">
            <Link to="/prayer-and-worship" className="text-sm text-saffron transition-colors hover:text-[#8C6A32]">
              Read the full guide →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Deterministic daily pick from the same shared article collection used by
// /articles and the Latest Articles section below (useArticleLibrary +
// getTodaysArticle) — no separate query, no second loading system. Renders
// nothing while the collection is empty, so there is never a broken-looking
// card; seed articles are available synchronously, so in practice this only
// happens if the merged collection itself is empty.
function TodaysArticleFeature({ article }) {
  if (!article) return null
  const readingTime = article.readingTime || article.reading_time
  const meta = [article.category, readingTime].filter(Boolean).join(' · ')
  const excerpt = article.excerpt || article.subtitle || ''
  const image = article.image_url || article.hero_image_url || article.imageUrl

  return (
    <section className="border-t border-line/70 bg-void py-24">
      <div className="container-page">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-gold-dim">Today&rsquo;s Article</p>
        </Reveal>
        <Reveal delay={40}>
          <Link
            to={`/articles/${article.slug}`}
            className={`group mt-6 flex flex-col gap-8 border border-gold-dim/40 bg-panel/50 p-8 transition-colors hover:border-gold sm:p-10 ${image ? 'lg:flex-row lg:items-center' : ''}`}
          >
            {image && (
              <div className="shrink-0 lg:w-2/5">
                <img
                  src={image}
                  alt={article.image_caption || article.hero_image_caption || article.imageCaption || article.title}
                  className="h-auto w-full border border-line object-contain"
                />
              </div>
            )}
            <div className="flex-1">
              {meta && <p className="text-xs text-gold-dim">{meta}</p>}
              <h3 className="mt-2 font-display text-2xl text-ivory sm:text-3xl">{article.title}</h3>
              {excerpt && <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{excerpt}</p>}
              <span className="mt-6 inline-block text-sm text-gold transition-colors group-hover:text-ivory">
                Read today&rsquo;s article →
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

function CosmicField() {
  const dots = [
    { top: '12%', left: '18%', size: 2, delay: '0s' },
    { top: '24%', left: '78%', size: 1.5, delay: '2s' },
    { top: '58%', left: '8%', size: 1.5, delay: '4s' },
    { top: '68%', left: '85%', size: 2, delay: '1s' },
    { top: '38%', left: '52%', size: 1, delay: '3s' },
    { top: '82%', left: '40%', size: 1.5, delay: '5s' },
    { top: '15%', left: '48%', size: 1, delay: '2.5s' },
    { top: '46%', left: '92%', size: 1, delay: '3.5s' },
    { top: '6%', left: '65%', size: 1.5, delay: '1.5s' },
  ]
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true"><div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 28%, rgba(201,162,74,0.18), transparent 62%), radial-gradient(ellipse 60% 45% at 30% 20%, rgba(201,162,74,0.16), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 65%, rgba(178,58,32,0.10), transparent 65%)' }} />{dots.map((d, i) => <span key={i} className="absolute rounded-full bg-ivory/70 motion-safe:animate-pulse" style={{ top: d.top, left: d.left, width: d.size, height: d.size, animationDuration: '6s', animationDelay: d.delay }} />)}</div>
}

export default function Home() {
  const knownTirthankaras = tirthankaras.filter((t) => t.verified).slice(0, 3)
  const { articles: libraryArticles } = useArticleLibrary()
  // Recomputes only when the merged collection changes (e.g. once the async
  // Supabase fetch resolves) — the calendar day itself is read fresh inside
  // getTodaysArticle on every render, so a visitor who leaves the tab open
  // across midnight still sees the new day's pick on their next re-render.
  const todaysArticle = useMemo(() => getTodaysArticle(libraryArticles), [libraryArticles])
  // Reuses the same seasonal state SeasonalBanner already computes above —
  // no second date system. When this stops returning 'das-lakshan', the
  // featured placement disappears and the evergreen one below resumes
  // automatically, with no code change needed.
  const isDasLakshanFeatured = getSeasonalBanner() === 'das-lakshan'
  return <>
    <SeasonalBanner />
    <section className="relative overflow-hidden"><CosmicField /><div className="container-page relative flex min-h-[86vh] flex-col items-center justify-center gap-8 py-16 text-center sm:gap-10 sm:py-24">
        <Reveal delay={100}>
  <div className="hero-emblem-scale relative mx-auto flex items-center justify-center">
    {/* ambient glow, slow pulse — soft/diffuse, so it reads as ambient
        light rather than an empty ring */}
    <div
      className="absolute rounded-full bg-gold/10 blur-3xl motion-safe:animate-glow-pulse"
      style={{ width: 'calc(var(--ring-d) * 1.15)', height: 'calc(var(--ring-d) * 1.15)' }}
      aria-hidden="true"
    />

    {/* warm aura: fills the space between the panel and the rings with
        actual golden light (not the dark page background showing through),
        so the composition reads as glowing rather than as a dark disc
        inside empty rings */}
    <div
      className="hero-emblem-aura absolute rounded-full motion-safe:animate-glow-pulse"
      style={{ width: 'calc(var(--ring-d) * 1.02)', height: 'calc(var(--ring-d) * 1.02)' }}
      aria-hidden="true"
    />

    {/* lotus/mandala backdrop, very slow rotation — sized to peek just
        past the outer ring, like petals behind a medallion */}
    <div
      className="mandala-glow absolute rounded-full motion-safe:animate-spin-slow"
      style={{ width: 'calc(var(--ring-d) * 1.08)', height: 'calc(var(--ring-d) * 1.08)' }}
      aria-hidden="true"
    />

    {/* outer ring — the reference size for the whole composition: thin
        gold line, subtle glow, slow rotation, a restrained flowing-light
        trail, and orbit points at four restrained positions */}
    <div
      className="absolute rounded-full border border-gold/60 shadow-[0_0_18px_rgba(201,162,74,0.25)] motion-safe:animate-spin-slow"
      style={{ width: 'var(--ring-d)', height: 'var(--ring-d)' }}
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold motion-safe:animate-pulse" style={{ animationDelay: '0s' }} />
      <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold/70 motion-safe:animate-pulse" style={{ animationDelay: '1.5s' }} />
      <span className="absolute h-1 w-1 rounded-full bg-gold/60 motion-safe:animate-pulse" style={{ top: '14.6%', left: '85.4%', animationDelay: '0.8s' }} />
      <span className="absolute h-1 w-1 rounded-full bg-gold/60 motion-safe:animate-pulse" style={{ top: '85.4%', left: '14.6%', animationDelay: '2.3s' }} />
    </div>

    {/* thin flowing-light trail sweeping around the outer ring */}
    <div
      className="hero-emblem-trail absolute rounded-full motion-safe:animate-spin-slow"
      style={{ width: 'var(--ring-d)', height: 'var(--ring-d)' }}
      aria-hidden="true"
    />

    {/* secondary ring, thin, subtle reverse rotation — nested tight
        against the outer ring (a close double ring) rather than floating
        with a wide gap between them */}
    <div
      className="absolute rounded-full border border-gold-dim/60 motion-safe:animate-spin-reverse-slow"
      style={{ width: 'calc(var(--ring-d) * 0.91)', height: 'calc(var(--ring-d) * 0.91)' }}
      aria-hidden="true"
    />

    {/* third, innermost thin ring — completes "several concentric rings"
        without crowding the medallion */}
    <div
      className="absolute rounded-full border border-gold-dim/35 motion-safe:animate-spin-slow"
      style={{ width: 'calc(var(--ring-d) * 0.80)', height: 'calc(var(--ring-d) * 0.80)' }}
      aria-hidden="true"
    />

    {/* inner circular medallion panel (~60% of the ring composition).
        The emblem is fully object-contain — no cropping, no distortion,
        crown and mantra both stay in frame — with generous internal
        padding so it sits centered inside the circle rather than
        touching its edges. Essentially stable, only a very subtle
        breathing/glow effect. */}
    <div
      className="relative flex items-center justify-center overflow-hidden rounded-full border border-gold/60 shadow-[0_0_60px_rgba(201,162,74,0.18)] motion-safe:animate-emblem-breathe"
      style={{
        width: 'calc(var(--ring-d) * 0.60)',
        height: 'calc(var(--ring-d) * 0.60)',
        background: 'radial-gradient(circle, #2A1D12 0%, #241A10 65%, #1A120B 100%)',
      }}
    >
      <img
        src={UPPER_IMAGE}
        alt="Jain emblem representing ahimsa and the interdependence of life"
        className="relative h-full w-full object-contain"
        style={{ padding: '15%' }}
      />
      {/* Non-destructive vignette: the source PNG has its own dark
          rectangular background — this fades that edge into the
          surrounding circular panel without cropping or altering the
          emblem itself. The generous percentage padding above is what
          actually keeps the image's straight edges clear of the circle's
          curve (a contain-fitted portrait image otherwise touches the
          panel's top/bottom exactly, colliding with the circle at the
          poles); the vignette then only has to blend tone, not hide a
          hard geometric clash. */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{ background: 'radial-gradient(circle, transparent 55%, #1A120B 96%)' }}
        aria-hidden="true"
      />
    </div>
  </div>
</Reveal>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-gold">Jain wisdom, made accessible</p>
            <div className="ford-rule mb-8" />
            <h1 className="max-w-3xl font-display text-5xl leading-[1.1] text-ivory sm:text-6xl lg:text-7xl">Explore Jainism.<br />Discover the Universe Within.</h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory-dim sm:text-lg">Journey through Jain philosophy, living ethics, ancient texts, history and heritage — presented with clarity, depth and respect.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button to="/teachings" variant="primary">Begin Your Journey</Button>
              <Button to="/explore" variant="secondary">Explore JINVERSE</Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}><div className="relative mx-auto w-full max-w-sm sm:max-w-md"><div className="absolute -inset-6 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" /><div className="relative border border-gold-dim/50 bg-panel/70 p-4 shadow-2xl"><img src={LOWER_IMAGE} alt="JINVERSE logo" className="h-auto max-h-[420px] w-full object-contain" /></div></div></Reveal>
      </div>
      {/* subtle gold divider into the next section, instead of a flat line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-dim/60 to-transparent" aria-hidden="true" />
    </section>
    {isDasLakshanFeatured && <DasLakshanSeasonalPreview />}
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24"><div className="container-page"><Reveal><SectionHeading tone="light" eyebrow="Featured pathways" title="Four ways to begin" description="However you arrive, JINVERSE keeps Jain tradition central and clearly marks where historical evidence adds context." /></Reveal><div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[#8C6A32]/25 bg-[#8C6A32]/20 sm:grid-cols-2 lg:grid-cols-4">{[{ to: '/teachings', title: 'Core Teachings', desc: 'Ahimsa, karma, moksha and the path to liberation.' }, { to: '/tirthankaras', title: 'The Tirthankaras', desc: 'Twenty-four ford-makers across the ages.' }, { to: '/history', title: 'History & Heritage', desc: 'Communities, monuments and evidence.' }, { to: '/texts', title: 'Jain Texts', desc: 'The scriptures that carry the tradition forward.' }].map((p, i) => <Reveal key={p.to} delay={i * 80}><Link to={p.to} className="group flex h-full flex-col justify-between bg-parchment p-7 transition-colors hover:bg-ink/[0.04]"><div><h3 className="font-display text-lg text-ink">{p.title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.desc}</p></div><span className="mt-6 text-sm text-saffron group-hover:text-[#8C6A32]">Explore</span></Link></Reveal>)}</div></div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Core teachings" title="A philosophy built for practice" description="Seven foundations of Jain thought, each explained on its own terms." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{teachings.slice(0, 6).map((t, i) => <Reveal key={t.slug} delay={i * 60}><div className="h-full border border-line p-6 transition-colors hover:border-gold-dim"><h3 className="font-display text-lg text-ivory">{t.name}</h3><p className="mt-2 text-sm leading-relaxed text-ivory-dim">{t.short}</p><EvidenceLabel status={t.status} className="mt-4" /></div></Reveal>)}</div><div className="mt-10"><Button to="/teachings" variant="secondary">View all teachings</Button></div></div></section>
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24"><div className="container-page"><Reveal><SectionHeading tone="light" eyebrow="Meet the Tirthankaras" title="Twenty-four ford-makers" description="A Tirthankara is one who has crossed the ocean of worldly existence and shown others the way." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-3">{knownTirthankaras.map((t, i) => <Reveal key={t.number} delay={i * 80}><div className="border border-ink-dim/25 bg-parchment p-6 text-center transition-colors hover:border-saffron/60"><p className="text-xs text-saffron">Tirthankara {t.number}</p><h3 className="mt-2 font-display text-xl text-ink">{t.name}</h3><p className="mt-2 text-sm text-ink-dim">Emblem: {t.emblem}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/tirthankaras" variant="secondaryLight">See all 24</Button></div></div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Jain history and heritage" title="Two thousand years of living evidence" description="From royal inscriptions to monumental statues, Jain heritage across India is documented with care." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2">{heritageSites.map((site, i) => <Reveal key={site.slug} delay={i * 70}><div className="border border-line p-6 transition-colors hover:border-gold-dim"><h3 className="font-display text-lg text-ivory">{site.name}</h3><p className="text-xs text-ivory-dim/70">{site.region}</p><p className="mt-2 text-sm leading-relaxed text-ivory-dim">{site.note}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/history" variant="secondary">Explore history & heritage</Button></div></div></section>
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24"><div className="container-page"><Reveal><SectionHeading tone="light" eyebrow="Explore Jain texts" title="Scripture and literature" description="From canonical sutras to epic narrative literature, the sources that carry Jain thought forward." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{texts.slice(0, 3).map((t, i) => <Reveal key={t.slug} delay={i * 70}><div className="flex h-full flex-col border border-ink-dim/25 bg-parchment p-6 transition-colors hover:border-saffron/60"><h3 className="font-display text-lg text-ink">{t.title}</h3><p className="mt-1 text-xs text-ink-dim/80">{t.tradition} · {t.language}</p><p className="mt-3 text-sm leading-relaxed text-ink-dim">{t.description}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/texts" variant="secondaryLight">View all texts</Button></div></div></section>
    <TodaysArticleFeature article={todaysArticle} />
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Latest articles" title="From the JINVERSE library" /></Reveal><div className="mt-12 grid gap-6 lg:grid-cols-3">{libraryArticles.map((a, i) => <Reveal key={a.slug} delay={i * 70}><Link to={`/articles/${a.slug}`} className="group flex h-full flex-col border border-line p-6 transition-colors hover:border-gold"><p className="text-xs text-gold-dim">{a.category}</p><h3 className="mt-2 font-display text-lg text-ivory">{a.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-ivory-dim">{a.excerpt}</p><p className="mt-4 text-xs text-ivory-dim/60">{a.readingTime}</p></Link></Reveal>)}</div><div className="mt-10"><Button to="/articles" variant="secondary">Read all articles</Button></div></div></section>
    {!isDasLakshanFeatured && <DasLakshanEvergreenPreview />}
    <PrayerAndWorshipPreview />
    <section className="border-t border-line/70 py-24"><div className="container-page text-center"><Reveal><div className="ford-rule mx-auto mb-8" /><h2 className="mx-auto max-w-2xl font-display text-3xl text-ivory sm:text-4xl">Ancient wisdom, made accessible for the generation carrying it forward.</h2><div className="mt-10 flex flex-wrap justify-center gap-4"><Button to="/teachings" variant="primary">Begin Your Journey</Button><Button to="/about" variant="secondary">About JINVERSE</Button></div></Reveal></div></section>
  </>
}
