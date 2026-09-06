import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import EvidenceLabel from '../components/ui/EvidenceLabel.jsx'
import { teachings, tirthankaras, heritageSites, texts, articles, reels } from '../data/placeholderContent.js'

const BRAND_IMAGE = '/file_000000008c8082119468161444477380.png'
function CosmicField() {
  const dots = [
    { top: '12%', left: '18%', size: 2, delay: '0s' },
    { top: '24%', left: '78%', size: 1.5, delay: '2s' },
    { top: '58%', left: '8%', size: 1.5, delay: '4s' },
    { top: '68%', left: '85%', size: 2, delay: '1s' },
    { top: '38%', left: '52%', size: 1, delay: '3s' },
    { top: '82%', left: '40%', size: 1.5, delay: '5s' },
    { top: '15%', left: '48%', size: 1, delay: '2.5s' },
  ]
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true"><div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 45% at 30% 20%, rgba(120,55,20,0.28), transparent 60%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(230,150,30,0.12), transparent 65%)' }} />{dots.map((d, i) => <span key={i} className="absolute rounded-full bg-ivory/70 motion-safe:animate-pulse" style={{ top: d.top, left: d.left, width: d.size, height: d.size, animationDuration: '6s', animationDelay: d.delay }} />)}</div>
}

export default function Home() {
  const knownTirthankaras = tirthankaras.filter((t) => t.verified).slice(0, 3)
  return <>
    <section className="relative overflow-hidden border-b border-line/70"><CosmicField /><div className="container-page relative flex min-h-[86vh] flex-col justify-center py-16 sm:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal delay={100}>
  <div className="relative mx-auto flex w-full max-w-md items-center justify-center py-8">
    <div
      className="absolute h-72 w-72 rounded-full bg-[#e88a24]/10 blur-3xl"
      aria-hidden="true"
    />

    <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-[#d9b36a]/70 bg-[#17100b]/80 p-10 shadow-[0_0_70px_rgba(232,138,36,0.14)]">
      <div className="absolute inset-3 rounded-full border border-[#9b5a24]/60" />
      <img
        src={BRAND_IMAGE}
        alt="Jain emblem representing ahimsa and the interdependence of life"
        className="relative h-full w-full object-contain"
      />
    </div>
  </div>
</Reveal>
        <Reveal><div><p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#f0a33a]">Jain wisdom, made accessible</p><div className="ford-rule mb-8" /><h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-ivory sm:text-6xl">Explore Jainism.<br />Discover the Universe Within.</h1><p className="mt-6 max-w-xl text-base leading-relaxed text-ivory-dim sm:text-lg">Journey through Jain philosophy, living ethics, ancient texts, history and heritage — presented with clarity, depth and respect.</p><div className="mt-10 flex flex-wrap gap-4"><Button to="/teachings" variant="primary">Begin Your Journey</Button><Button to="/explore" variant="secondary">Explore the Teachings</Button></div></div></Reveal>
        <Reveal delay={100}><div className="relative mx-auto w-full max-w-md"><div className="absolute -inset-6 rounded-full bg-[#e88a24]/10 blur-3xl" aria-hidden="true" /><div className="relative border border-[#9b5a24]/60 bg-[#17100b]/70 p-4 shadow-2xl"><img src={BRAND_IMAGE} alt="Jain emblem representing ahimsa and the interdependence of life" className="h-auto max-h-[520px] w-full object-contain" /></div></div></Reveal>
      </div>
    </div></section>
    <section className="container-page py-24"><Reveal><SectionHeading eyebrow="Featured pathways" title="Four ways to begin" description="However you arrive, JINVERSE keeps Jain tradition central and clearly marks where historical evidence adds context." /></Reveal><div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">{[{ to: '/teachings', title: 'Core Teachings', desc: 'Ahimsa, karma, moksha and the path to liberation.' }, { to: '/tirthankaras', title: 'The Tirthankaras', desc: 'Twenty-four ford-makers across the ages.' }, { to: '/history', title: 'History & Heritage', desc: 'Communities, monuments and evidence.' }, { to: '/texts', title: 'Jain Texts', desc: 'The scriptures that carry the tradition forward.' }].map((p, i) => <Reveal key={p.to} delay={i * 80}><Link to={p.to} className="group flex h-full flex-col justify-between bg-void p-7 transition-colors hover:bg-panel"><div><h3 className="font-display text-lg text-ivory">{p.title}</h3><p className="mt-2 text-sm leading-relaxed text-ivory-dim">{p.desc}</p></div><span className="mt-6 text-sm text-[#f0a33a] group-hover:text-[#ffd45a]">Explore</span></Link></Reveal>)}</div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Core teachings" title="A philosophy built for practice" description="Seven foundations of Jain thought, each explained on its own terms." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{teachings.slice(0, 6).map((t, i) => <Reveal key={t.slug} delay={i * 60}><div className="h-full border border-line p-6"><h3 className="font-display text-lg text-ivory">{t.name}</h3><p className="mt-2 text-sm leading-relaxed text-ivory-dim">{t.short}</p><EvidenceLabel status={t.status} className="mt-4" /></div></Reveal>)}</div><div className="mt-10"><Button to="/teachings" variant="secondary">View all teachings</Button></div></div></section>
    <section className="container-page py-24"><Reveal><SectionHeading eyebrow="Meet the Tirthankaras" title="Twenty-four ford-makers" description="A Tirthankara is one who has crossed the ocean of worldly existence and shown others the way." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-3">{knownTirthankaras.map((t, i) => <Reveal key={t.number} delay={i * 80}><div className="border border-line p-6 text-center"><p className="text-xs text-[#f0a33a]">Tirthankara {t.number}</p><h3 className="mt-2 font-display text-xl text-ivory">{t.name}</h3><p className="mt-2 text-sm text-ivory-dim">Emblem: {t.emblem}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/tirthankaras" variant="secondary">See all 24</Button></div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Jain history and heritage" title="Two thousand years of living evidence" description="From royal inscriptions to monumental statues, Jain heritage across India is documented with care." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2">{heritageSites.map((site, i) => <Reveal key={site.slug} delay={i * 70}><div className="border border-line p-6"><h3 className="font-display text-lg text-ivory">{site.name}</h3><p className="text-xs text-ivory-dim/70">{site.region}</p><p className="mt-2 text-sm leading-relaxed text-ivory-dim">{site.note}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/history" variant="secondary">Explore history & heritage</Button></div></div></section>
    <section className="container-page py-24"><Reveal><SectionHeading eyebrow="Explore Jain texts" title="Scripture and literature" description="From canonical sutras to epic narrative literature, the sources that carry Jain thought forward." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{texts.slice(0, 3).map((t, i) => <Reveal key={t.slug} delay={i * 70}><div className="flex h-full flex-col border border-line p-6"><h3 className="font-display text-lg text-ivory">{t.title}</h3><p className="mt-1 text-xs text-ivory-dim/70">{t.tradition} · {t.language}</p><p className="mt-3 text-sm leading-relaxed text-ivory-dim">{t.description}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/texts" variant="secondary">View all texts</Button></div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Latest articles" title="From the JINVERSE library" /></Reveal><div className="mt-12 grid gap-6 lg:grid-cols-3">{articles.map((a, i) => <Reveal key={a.slug} delay={i * 70}><Link to={`/articles/${a.slug}`} className="group flex h-full flex-col border border-line p-6 hover:border-[#f0a33a]"><p className="text-xs text-[#f0a33a]">{a.category}</p><h3 className="mt-2 font-display text-lg text-ivory">{a.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-ivory-dim">{a.excerpt}</p><p className="mt-4 text-xs text-ivory-dim/60">{a.readingTime}</p></Link></Reveal>)}</div><div className="mt-10"><Button to="/articles" variant="secondary">Read all articles</Button></div></div></section>
    <section className="container-page py-24"><Reveal><SectionHeading eyebrow="Featured reel" title="Watch and learn, one idea at a time" /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-3">{reels.map((r) => <div key={r.slug} className="border border-line p-6"><div className="flex aspect-video items-center justify-center border border-dashed border-line text-xs text-ivory-dim/60">Video placeholder</div><h3 className="mt-4 font-display text-base text-ivory">{r.title}</h3><p className="mt-1 text-sm text-ivory-dim">{r.description}</p><p className="mt-2 text-xs text-ivory-dim/60">{r.duration}</p></div>)}</div><div className="mt-10"><Button to="/reels" variant="secondary">Explore all reels</Button></div></section>
    <section className="border-t border-line/70 py-24"><div className="container-page text-center"><Reveal><div className="ford-rule mx-auto mb-8" /><h2 className="mx-auto max-w-2xl font-display text-3xl text-ivory sm:text-4xl">Ancient wisdom, made accessible for the generation carrying it forward.</h2><div className="mt-10 flex flex-wrap justify-center gap-4"><Button to="/teachings" variant="primary">Begin Your Journey</Button><Button to="/about" variant="secondary">About JINVERSE</Button></div></Reveal></div></section>
  </>
}
