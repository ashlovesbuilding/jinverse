import { useEffect, useState } from 'react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'

const EMBLEM = '/file_000000008c8082119468161444477380.png'
const SITE_URL = 'https://jinverse.vercel.app'
const SOURCE_URL = 'https://www.munipramansagar.net/why-is-rot-teej-celebrated-and-is-it-religiously-appropriate/'

const TIMELINE = [
  { n: '01', title: 'व्रत का संकल्प', text: 'एक धर्मनिष्ठ महिला ने एकासन का व्रत स्वीकार किया।' },
  { n: '02', title: 'परिवार की परीक्षा', text: 'परिवार के विरोध और उपहास के बीच व्रत की परीक्षा हुई।' },
  { n: '03', title: 'व्रत-भंग', text: 'परम्परागत कथा में व्रत टूटने के बाद परिवार की समृद्धि कम होने का वर्णन है।' },
  { n: '04', title: 'पुनः संयम', text: 'उन्होंने पुनः श्रद्धा और संयम के साथ व्रत धारण किया।' },
  { n: '05', title: 'रोट अर्पण', text: 'भाद्रपद शुक्ल तृतीया को मंदिर में रोट अर्पित किया।' },
  { n: '06', title: 'कथा का प्रतीक', text: 'परम्परागत कथा में रोट के स्वर्ण में परिवर्तित होने का वर्णन मिलता है।' },
]

const LESSONS = [
  { title: 'संयम', text: 'व्रत हमें आत्मनियंत्रण और इच्छाओं पर संयम का अभ्यास कराता है।' },
  { title: 'परिवार', text: 'परम्पराएँ परिवार को जोड़ने और पीढ़ियों को साथ लाने का माध्यम बन सकती हैं।' },
  { title: 'वरिष्ठों का सम्मान', text: 'परम्परा के हस्तांतरण में घर की वरिष्ठ महिलाओं की महत्वपूर्ण भूमिका रही है।' },
  { title: 'लोक-परम्परा का संरक्षण', text: 'सांस्कृतिक परम्पराएँ समुदाय की स्मृति और पहचान को जीवित रखती हैं।' },
]

const DAS_LAKSHAN_VIRTUES = [
  'उत्तम क्षमा', 'उत्तम मार्दव', 'उत्तम आर्जव', 'उत्तम शौच', 'उत्तम सत्य',
  'उत्तम संयम', 'उत्तम तप', 'उत्तम त्याग', 'उत्तम आकिंचन्य', 'उत्तम ब्रह्मचर्य',
]

const CARD_IMAGE = '/images/articles/rot-teej-greeting-card.png'
const CARD_FILENAME = 'rot-teej-jinverse.png'

async function fetchCardBlob() {
  const response = await fetch(CARD_IMAGE)
  return response.blob()
}

function ShareCardSection() {
  const [status, setStatus] = useState('')

  async function handleDownload() {
    try {
      const blob = await fetchCardBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = CARD_FILENAME
      document.body.appendChild(a)
      a.click()
      a.remove()
      URL.revokeObjectURL(url)
    } catch {
      setStatus('डाउनलोड में समस्या हुई, कृपया पुनः प्रयास करें')
      window.setTimeout(() => setStatus(''), 2500)
    }
  }

  async function handleShare() {
    const shareText = 'शुभ रोट तीज — JINVERSE पर रोट तीज की परम्परा पढ़ें'
    try {
      if (navigator.share && navigator.canShare) {
        const blob = await fetchCardBlob()
        const file = new File([blob], CARD_FILENAME, { type: blob.type || 'image/png' })
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title: 'रोट तीज — JINVERSE', text: shareText })
          return
        }
      }
      if (navigator.share) {
        await navigator.share({ title: 'रोट तीज — JINVERSE', text: shareText, url: `${SITE_URL}/rot-teej` })
        return
      }
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(`${shareText} — ${SITE_URL}/rot-teej`)
        setStatus('लिंक कॉपी हो गया')
      } else {
        setStatus('कृपया लिंक मैन्युअल रूप से साझा करें')
      }
      window.setTimeout(() => setStatus(''), 2500)
    } catch (error) {
      if (error?.name === 'AbortError') return
      setStatus('साझा करने में समस्या हुई')
      window.setTimeout(() => setStatus(''), 2500)
    }
  }

  return (
    <section id="share-card" className="border-t border-line/70 bg-panel/40 py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">Share Card</p>
            <h2 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">अपना रोट तीज कार्ड बनाएं</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ivory-dim">इस सुंदर शुभकामना कार्ड को परिवार और मित्रों के साथ साझा करें।</p>
          </div>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={CARD_IMAGE}
              alt="रोट तीज ग्रीटिंग कार्ड — JINVERSE"
              className="mx-auto w-full max-w-sm rounded-xl border-[3px] border-gold shadow-[0_0_80px_rgba(201,162,74,0.22)] sm:max-w-md"
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="mx-auto flex w-full max-w-sm flex-col gap-4 lg:mx-0">
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button type="button" variant="primary" onClick={handleShare} className="w-full whitespace-nowrap sm:w-auto">
                  <span aria-hidden="true">↗</span> Share Card
                </Button>
                <Button type="button" variant="secondary" onClick={handleDownload} className="w-full whitespace-nowrap sm:w-auto">
                  <span aria-hidden="true">↓</span> Download
                </Button>
              </div>
              {status && <p role="status" className="text-xs text-gold">{status}</p>}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}


function EmblemHero() {
  return (
    <div className="hero-emblem-scale relative mx-auto flex items-center justify-center" style={{ '--ring-d': 'clamp(230px, 150px + 28vw, 420px)' }}>
      <div className="absolute rounded-full bg-gold/[0.14] blur-3xl motion-safe:animate-glow-pulse" style={{ width: 'calc(var(--ring-d) * 1.2)', height: 'calc(var(--ring-d) * 1.2)' }} aria-hidden="true" />
      <div className="hero-emblem-aura absolute rounded-full motion-safe:animate-glow-pulse" style={{ width: 'calc(var(--ring-d) * 1.04)', height: 'calc(var(--ring-d) * 1.04)' }} aria-hidden="true" />
      <div className="mandala-glow absolute rounded-full motion-safe:animate-spin-slow" style={{ width: 'calc(var(--ring-d) * 1.1)', height: 'calc(var(--ring-d) * 1.1)' }} aria-hidden="true" />
      <div className="absolute rounded-full border border-gold/65 shadow-[0_0_22px_rgba(201,162,74,0.3)] motion-safe:animate-spin-slow" style={{ width: 'var(--ring-d)', height: 'var(--ring-d)' }} aria-hidden="true">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold motion-safe:animate-pulse" />
        <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold/70 motion-safe:animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="absolute rounded-full border border-gold-dim/60 motion-safe:animate-spin-reverse-slow" style={{ width: 'calc(var(--ring-d) * 0.9)', height: 'calc(var(--ring-d) * 0.9)' }} aria-hidden="true" />
      <div className="absolute rounded-full border border-gold-dim/35 motion-safe:animate-spin-slow" style={{ width: 'calc(var(--ring-d) * 0.8)', height: 'calc(var(--ring-d) * 0.8)' }} aria-hidden="true" />
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-full border border-gold/60 shadow-[0_0_70px_rgba(201,162,74,0.22)] motion-safe:animate-emblem-breathe"
        style={{ width: 'calc(var(--ring-d) * 0.64)', height: 'calc(var(--ring-d) * 0.64)', background: 'radial-gradient(circle, #2A1D12 0%, #241A10 65%, #1A120B 100%)' }}
      >
        <img src={EMBLEM} alt="जैन प्रतीक — अहिंसा और परस्परोपग्रहो जीवानाम्" className="relative h-full w-full object-contain" style={{ padding: '15%' }} />
        <div className="pointer-events-none absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, transparent 55%, #1A120B 96%)' }} aria-hidden="true" />
      </div>
    </div>
  )
}

function SourceBadge({ children }) {
  return <p className="mt-4 inline-block border border-gold-dim/40 px-3 py-1.5 text-[11px] uppercase tracking-wide text-gold-dim">{children}</p>
}

export default function RotTeej() {
  useEffect(() => {
    document.documentElement.lang = 'hi'
    return () => { document.documentElement.lang = 'en' }
  }, [])

  return (
    <article>
      <Seo
        title="Rot Teej — Religion, Tradition & Community"
        description="रोट तीज की जैन लोक-परम्परा, व्रत-कथा और समकालीन जैन मार्गदर्शन — जानिए दशलक्षण महापर्व की ओर जाने वाली इस परम्परा के बारे में।"
        path="/rot-teej"
        image={EMBLEM}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 20%, rgba(201,162,74,0.16), transparent 62%)' }} />
        <div className="container-page relative flex min-h-[80vh] flex-col items-center justify-center gap-8 py-16 text-center sm:gap-10 sm:py-24">
          <Reveal delay={100}><EmblemHero /></Reveal>
          <Reveal>
            <div className="mx-auto flex max-w-2xl flex-col items-center">
              <h1 className="font-display text-5xl leading-tight text-ivory sm:text-6xl lg:text-7xl">रोट तीज</h1>
              <p className="mt-4 text-lg text-gold sm:text-xl">एक जैन लोक-परम्परा</p>
              <p className="mt-2 text-sm text-ivory-dim">भाद्रपद शुक्ल तृतीया</p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold-dim">व्रत • परिवार • परम्परा</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="#katha" variant="primary">रोट तीज की कथा पढ़ें</Button>
                <Button href="#share-card" variant="secondary">Share Card बनाएं</Button>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-dim/60 to-transparent" aria-hidden="true" />
      </section>

      {/* WHY IS ROT TEEJ CELEBRATED */}
      <section className="border-t border-line/70 py-20 sm:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">जैन वृत-कथा परम्परा</p>
            <h2 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">रोट तीज क्यों मनाई जाती है?</h2>
            <p className="mt-6 text-[15px] leading-8 text-ivory-dim">
              रोट तीज — जिसे जैन व्रत-परम्परा में <strong className="text-ivory">त्रिलोक तीज</strong> भी कहा जाता है — भाद्रपद शुक्ल तृतीया को मनाई जाने वाली एक परम्परा है। यह पारम्परिक व्रत-कथा साहित्य और सामुदायिक आचरण से जुड़ी है, जिसमें एकासन व्रत, चौबीसी (चौबीस तीर्थंकरों) से जुड़ी आराधना, धर्म-ध्यान और दान का उल्लेख मिलता है।
            </p>
            <p className="mt-4 text-[15px] leading-8 text-ivory-dim">
              परम्परागत कथा के अनुसार, एक धर्मनिष्ठ महिला ने एक मुनि से मार्गदर्शन प्राप्त कर एकासन व्रत स्वीकार किया, जिसमें अन्न-सम्बन्धी एक विशेष नियम था। परिवार ने प्रारम्भ में इस व्रत का उपहास किया और अंततः व्रत भंग हो गया। कथा में परिवार की समृद्धि में आई कमी को व्रत-भंग से जोड़ा गया है। बाद में उन्होंने पुनः श्रद्धा और संयम के साथ यह व्रत धारण किया, और भाद्रपद शुक्ल तृतीया को एकासन करते हुए मंदिर में रोट अर्पित किया। कथा के अनुसार वह रोट स्वर्ण में परिवर्तित हो गया — और यही कथा आगे चलकर रोट तीज की परम्परा से जुड़ गई।
            </p>
            <SourceBadge>परम्परागत कथा • ऐतिहासिक घटना के रूप में प्रमाणित नहीं</SourceBadge>
          </Reveal>
        </div>
      </section>

      {/* CONTEMPORARY GUIDANCE */}
      <section className="border-t border-line/70 bg-parchment py-20 sm:py-24">
        <div className="container-page max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-saffron">समकालीन जैन मार्गदर्शन</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">धार्मिक दृष्टि से क्या कहा गया है?</h2>
            <div className="mt-8 border-l-2 border-saffron/60 bg-parchment pl-6">
              <p className="text-[15px] leading-8 text-ink-dim">
                पूज्य मुनि प्रमाणसागर जी के अनुसार, रोट तीज एक सामाजिक रीति है, विशेष रूप से खंडेलवाल समाज में प्रचलित परम्परा। वे इसके सामाजिक लाभों में परिवार और लोक-परम्परा से जुड़ाव तथा घर की वरिष्ठ महिला के महत्व को रेखांकित करते हैं।
              </p>
              <p className="mt-4 text-[15px] font-medium leading-8 text-ink">
                जैन व्रत-कथा और लोक-परम्परा में इसका वर्णन मिलता है; समकालीन जैन मार्गदर्शन में इसे विशेष रूप से एक सामाजिक रीति के रूप में भी समझाया गया है।
              </p>
              <p className="mt-6 text-xs uppercase tracking-wide text-ink-dim">Source: पूज्य मुनि प्रमाणसागर जी</p>
              <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm text-saffron underline decoration-saffron/40 underline-offset-4 hover:text-ink">मूल लेख पढ़ें →</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KATHA TIMELINE */}
      <section id="katha" className="border-t border-line/70 py-20 sm:py-24">
        <div className="container-page max-w-2xl">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.28em] text-gold">परम्परागत व्रत-कथा</p>
            <h2 className="mt-3 text-center font-display text-3xl text-ivory sm:text-4xl">कथा</h2>
          </Reveal>
          <ol className="mt-14 space-y-0">
            {TIMELINE.map((step, i) => (
              <Reveal key={step.n} delay={i * 60}>
                <li className="relative flex gap-6 pb-10 last:pb-0">
                  {i < TIMELINE.length - 1 && (
                    <span className="absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-px bg-gold-dim/30" aria-hidden="true" />
                  )}
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-panel font-display text-sm text-gold">{step.n}</span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg text-ivory">{step.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ivory-dim">{step.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal>
            <p className="mt-4 border-t border-line/70 pt-6 text-center text-[13px] leading-relaxed text-ivory-dim/85">
              यह विवरण परम्परागत व्रत-कथा पर आधारित है, न कि स्वतंत्र ऐतिहासिक प्रमाण पर।
            </p>
          </Reveal>
        </div>
      </section>

      {/* LESSONS */}
      <section className="border-t border-line/70 bg-panel/40 py-20 sm:py-24">
        <div className="container-page">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.28em] text-gold">सीख</p>
            <h2 className="mt-3 text-center font-display text-3xl text-ivory sm:text-4xl">इस परम्परा से हमें क्या सीख मिलती है?</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LESSONS.map((l, i) => (
              <Reveal key={l.title} delay={i * 70}>
                <div className="h-full border border-line p-6 text-center transition-colors hover:border-gold-dim">
                  <h3 className="font-display text-lg text-gold">{l.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-ivory-dim">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ShareCardSection />

      {/* DAS LAKSHAN BRIDGE */}
      <section className="border-t border-line/70 py-20 sm:py-24">
        <div className="container-page text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-gold-dim">रोट तीज के बाद…</p>
            <h2 className="mt-3 font-display text-4xl text-ivory sm:text-5xl">दशलक्षण महापर्व</h2>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-gold">दस उत्तम भाव • आत्मचिंतन • साधना</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-10 flex gap-4 overflow-x-auto pb-4" style={{ scrollSnapType: 'x mandatory' }}>
              {DAS_LAKSHAN_VIRTUES.map((v) => (
                <div key={v} className="shrink-0 border border-gold-dim/40 bg-panel/60 px-6 py-4" style={{ scrollSnapAlign: 'center' }}>
                  <p className="whitespace-nowrap font-display text-sm text-gold">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            {/* No Das Lakshan page/route exists yet in this site, so this CTA
                is intentionally inert rather than linking to a route that
                doesn't exist — see report. */}
            <span
              className="mt-10 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full border border-gold-dim/40 px-7 py-3.5 text-sm text-ivory-dim/65"
              title="दशलक्षण पेज अभी उपलब्ध नहीं है"
              aria-disabled="true"
            >
              दशलक्षण के बारे में जानें →
            </span>
          </Reveal>
        </div>
      </section>

      {/* SOURCES */}
      <section className="border-t border-line/70 bg-panel/40 py-20 sm:py-24">
        <div className="container-page max-w-2xl">
          <Reveal>
            <h2 className="font-display text-2xl text-ivory">स्रोत और परम्परा</h2>
            <dl className="mt-8 space-y-6">
              <div className="border border-line p-5">
                <dt className="font-display text-base text-gold">व्रत-कथा परम्परा</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ivory-dim">पारम्परिक जैन व्रत-कथा साहित्य, जिसमें त्रिलोक तीज / रोट तीज का वर्णन मिलता है।</dd>
              </div>
              <div className="border border-line p-5">
                <dt className="font-display text-base text-gold">समकालीन जैन मार्गदर्शन</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ivory-dim">
                  पूज्य मुनि प्रमाणसागर जी द्वारा रोट तीज को एक सामाजिक रीति के रूप में समझाया गया विवेचन।{' '}
                  <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer" className="text-gold underline decoration-gold/40 underline-offset-4 hover:text-ivory">मूल लेख →</a>
                </dd>
              </div>
              <div className="border border-line p-5">
                <dt className="font-display text-base text-gold">शास्त्रीय आधार</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ivory-dim">तत्त्वार्थ सूत्र 9.6 — दशलक्षण धर्म के दस लक्षणों हेतु। यह उल्लेखनीय है कि तत्त्वार्थ सूत्र स्वयं रोट तीज का विधान नहीं करता।</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>
    </article>
  )
}
