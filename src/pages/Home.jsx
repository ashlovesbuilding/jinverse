import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import EvidenceLabel from '../components/ui/EvidenceLabel.jsx'
import { teachings, tirthankaras, heritageSites, texts, articles } from '../data/placeholderContent.js'

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
// `enShort` / `enMeaningShort` are concise mobile-only variants (per-card
// readability refinement); `en` / `enMeaning` are the full desktop text
// and are unchanged from the original approved copy.
const DAS_LAKSHAN_DAYS = [
  { day: '01', hi: 'उत्तम क्षमा', en: 'Uttama Kṣamā — Supreme Forbearance', enShort: 'Supreme Forbearance', hiMeaning: 'क्रोध और वैर से ऊपर उठकर क्षमा और समभाव।', enMeaning: 'Rising above anger and ill-will through forgiveness and equanimity.', enMeaningShort: 'Rising above anger and ill-will through forgiveness and equanimity.' },
  { day: '02', hi: 'उत्तम मार्दव', en: 'Uttama Mārdava — Supreme Humility', enShort: 'Supreme Humility', hiMeaning: 'अहंकार और मान से मुक्त होकर विनम्रता।', enMeaning: 'Letting go of pride and cultivating genuine humility.', enMeaningShort: 'Letting go of pride and cultivating genuine humility.' },
  { day: '03', hi: 'उत्तम आर्जव', en: 'Uttama Ārjava — Supreme Straightforwardness', enShort: 'Supreme Straightforwardness', hiMeaning: 'मन, वचन और आचरण में सरलता और निष्कपटता।', enMeaning: 'Freedom from deceit; cultivating sincerity and straightforward conduct.', enMeaningShort: 'Freedom from deceit; cultivating sincerity and straightforward conduct.' },
  { day: '04', hi: 'उत्तम शौच', en: 'Uttama Śauca — Supreme Purity', enShort: 'Supreme Purity', hiMeaning: 'लोभ से मुक्त होकर अंतर्मन की शुद्धि।', enMeaning: 'Freedom from greed and cultivation of inner purity.', enMeaningShort: 'Freedom from greed and cultivation of inner purity.' },
  { day: '05', hi: 'उत्तम सत्य', en: 'Uttama Satya — Supreme Truthfulness', enShort: 'Supreme Truthfulness', hiMeaning: 'सत्य बोलना, हितकारी और संयमित वाणी के साथ।', enMeaning: 'Speaking truth with care, restraint and concern for what is beneficial.', enMeaningShort: 'Speaking truth with care, restraint and concern for what is beneficial.' },
  { day: '06', hi: 'उत्तम संयम', en: 'Uttama Saṃyama — Supreme Self-Restraint', enShort: 'Supreme Self-Restraint', hiMeaning: 'इन्द्रियों, इच्छाओं और कर्मों पर सजग संयम।', enMeaning: 'Conscious restraint over the senses, desires and actions.', enMeaningShort: 'Conscious restraint over the senses, desires and actions.' },
  { day: '07', hi: 'उत्तम तप', en: 'Uttama Tapa — Supreme Austerity', enShort: 'Supreme Austerity', hiMeaning: 'इच्छाओं पर विजय और आत्मशुद्धि के लिए तप व अनुशासन।', enMeaning: 'Austerity and discipline directed toward overcoming desires and purifying the soul.', enMeaningShort: 'Austerity and discipline directed toward overcoming desires and purifying the soul.' },
  { day: '08', hi: 'उत्तम त्याग', en: 'Uttama Tyāga — Supreme Renunciation', enShort: 'Supreme Renunciation', hiMeaning: 'आसक्ति और लोभ को छोड़कर त्याग और दान की भावना।', enMeaning: 'Letting go of greed and attachment through renunciation and generosity.', enMeaningShort: 'Letting go of greed and attachment through renunciation and generosity.' },
  { day: '09', hi: 'उत्तम आकिंचन्य', en: 'Uttama Ākiñcanya — Supreme Non-Attachment', enShort: 'Supreme Non-Attachment', hiMeaning: '"यह मेरा है" के ममत्व से मुक्त होकर अनासक्ति।', enMeaning: 'Freedom from possessiveness and the attachment of "this is mine."', enMeaningShort: 'Freedom from possessiveness and the attachment of "this is mine."' },
  { day: '10', hi: 'उत्तम ब्रह्मचर्य', en: 'Uttama Brahmacarya — Supreme Chastity', enShort: 'Supreme Chastity', hiMeaning: 'इन्द्रिय-विषयों से संयम और आत्मा में स्थित होने की साधना।', enMeaning: 'Restraint from sensual attachment and a life increasingly centered on the soul.', enMeaningShort: 'Restraint from sensual attachment and a life increasingly centered on the soul.' },
]

// Evergreen — deliberately carries no festival dates. This is the
// full bilingual explainer section; the date-gated homepage teaser is
// the separate SeasonalBanner above, which is untouched by this.
function DasLakshanSection() {
  return (
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-saffron">Digambara Jain Tradition</p>
            <h2 className="mt-3 font-display text-4xl text-ink">दशलक्षण महापर्व क्यों मनाया जाता है?</h2>
            <p className="font-display text-2xl text-ink-dim">Why Das Lakshan Parv?</p>
            <div className="mt-8 space-y-3 text-left sm:text-center">
              <p className="text-sm leading-7 text-ink-dim">
                Das Lakshan Parv is a ten-day Digambara Jain observance dedicated to turning inward and cultivating the ten supreme dharmas — from forgiveness and humility to restraint, renunciation, non-attachment and celibacy.
              </p>
              <p className="text-sm leading-7 text-ink-dim">
                Its scriptural foundation is Tattvārtha Sūtra 9.6, which enumerates these ten dharmas. During the parva, each day becomes an opportunity for self-study, reflection, restraint and spiritual practice. The deeper aim is not celebration for its own sake, but the purification and spiritual uplift of the soul.
              </p>
              <p className="text-sm leading-7 text-ink-dim">
                दशलक्षण महापर्व Digambara Jain tradition का दस दिवसीय आध्यात्मिक पर्व है, जिसमें दस उत्तम धर्मों का मनन और आचरण करते हुए भीतर की ओर लौटने का प्रयास किया जाता है।
              </p>
              <p className="text-sm leading-7 text-ink-dim">
                इन दस धर्मों का शास्त्रीय आधार तत्त्वार्थसूत्र 9.6 में मिलता है। पर्व के प्रत्येक दिन एक उत्तम धर्म पर विशेष रूप से चिंतन, स्वाध्याय, संयम और साधना की जाती है। इसका गहरा उद्देश्य केवल पर्व मनाना नहीं, बल्कि आत्मशुद्धि और आध्यात्मिक उन्नति की दिशा में बढ़ना है।
              </p>
            </div>
            <div className="mt-6 border-t border-ink-dim/15 pt-4">
              <p className="text-xs uppercase tracking-wide text-ink-dim">Scriptural foundation: Tattvārtha Sūtra 9.6 — the ten supreme dharmas.</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-dim">शास्त्रीय आधार: तत्त्वार्थसूत्र 9.6 — दस उत्तम धर्म।</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {DAS_LAKSHAN_DAYS.map((d, i) => (
            <Reveal key={d.day} delay={i * 50}>
              <div className="h-full border border-ink-dim/25 bg-parchment p-4 text-center transition-colors hover:border-saffron/60 lg:p-5">
                <p className="font-display text-xs text-saffron">{d.day}</p>
                <h3 className="mt-2 font-display text-base text-ink lg:text-lg">{d.hi}</h3>
                {/* Concise name on mobile, full "Uttama X — Supreme Y" form
                    unchanged on desktop (lg:) */}
                <p className="mt-1 text-xs text-ink-dim lg:hidden">{d.enShort}</p>
                <p className="mt-1 hidden text-xs text-ink-dim lg:block">{d.en}</p>
                <div className="mt-3 space-y-1.5 border-t border-ink-dim/15 pt-3 lg:mt-4 lg:pt-4">
                  <p className="text-xs leading-relaxed text-ink-dim">{d.hiMeaning}</p>
                  <p className="text-xs leading-relaxed text-ink-dim lg:hidden">{d.enMeaningShort}</p>
                  <p className="hidden text-xs leading-relaxed text-ink-dim lg:block">{d.enMeaning}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-14 max-w-2xl text-center">
            <div className="ford-rule mx-auto mb-6" />
            <p className="font-display text-lg leading-relaxed text-ink sm:text-xl">
              दशलक्षण केवल दस दिनों का पर्व नहीं—दस गुणों को जीवन में उतारने का निमंत्रण है।
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              Das Lakshan is not merely a ten-day observance—it is an invitation to bring these ten virtues into everyday life.
            </p>

            <div className="mt-10 border-t border-ink-dim/20 pt-6">
              <p className="text-xs uppercase tracking-wide text-ink-dim">शास्त्रीय आधार: तत्त्वार्थसूत्र 9.6 — दस उत्तम धर्म।</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ink-dim">Scriptural foundation: Tattvārtha Sūtra 9.6 — the ten supreme dharmas (uttama dharmas).</p>
              <p className="mt-4 font-display text-sm leading-relaxed text-ink-dim" lang="sa">
                उत्तमक्षमामार्दवार्जवशौचसत्यसंयमतपस्त्यागाकिञ्चन्यब्रह्मचर्याणि धर्मः
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Evergreen companion to DasLakshanSection above — explains observance
// (how the parv is practiced), not just its meaning (why it's observed).
// Deliberately layers four distinct kinds of source so household custom
// is never presented as scriptural commandment:
//   1. Tattvartha Sutra 9.6 (ancient textual foundation)
//   2. Acharya Pujyapada's Sarvarthasiddhi (classical commentary)
//   3. Established Digambara observances (parv-wide practice)
//   4. The supplied video transcript (practical household niyam) — kept
//      in its own labeled section so it reads as observed custom, not
//      as text 9.6 itself prescribing these specifics.
const OBSERVANCE_PRACTICES = [
  { term: 'Svādhyāya', hi: 'स्वाध्याय', desc: 'Scriptural study and reflection.' },
  { term: 'Samayik', hi: 'सामायिक', desc: 'Cultivating equanimity and self-awareness.' },
  { term: 'Pratikraman', hi: 'प्रतिक्रमण', desc: "Reviewing one's conduct, repentance and seeking forgiveness." },
  { term: 'Dhyāna / Kāyotsarga', hi: 'ध्यान / कायोत्सर्ग', desc: 'Meditation and turning attention inward.' },
  { term: 'Jinālaya Darśana & Pūjā', hi: 'जिनालय दर्शन एवं पूजा', desc: 'Temple worship and devotion.' },
  { term: 'Pravacana', hi: 'प्रवचन', desc: 'Listening to and reflecting on Jain teachings.' },
  { term: 'Vrata & Pratyākhyāna', hi: 'व्रत एवं प्रत्याख्यान', desc: 'Taking or renewing restraints and consciously giving up activities or comforts.' },
  { term: 'Tapa', hi: 'तप', desc: 'Fasting and other forms of austerity.' },
  { term: 'Tyāga / Dāna', hi: 'त्याग / दान', desc: 'Practising renunciation and giving.' },
  { term: 'Saṃyama', hi: 'संयम', desc: 'Greater care in food, senses, speech and conduct.' },
]

const CLASSICAL_QUALITIES = [
  'Freedom from anger',
  'Humility instead of pride',
  'Straightforwardness instead of deceit',
  'Freedom from greed',
  'Truthful and beneficial speech',
  'Restraint',
  'Austerity',
  'Renunciation and giving',
  'Freedom from possessiveness',
  'Restraint from sensual attachment',
]

const HOUSEHOLD_NIYAM = [
  'Avoiding outside/market food and hotel food',
  'Dietary restraint, including ekāsana/limited eating as observed by some',
  'Giving up tea and coffee',
  'Complete abstinence from tobacco, gutkha, cigarettes and intoxicants',
  'Avoiding unnecessary travel',
  'Reducing or giving up entertainment such as television',
  'Avoiding unnecessary cosmetics/personal-care consumption',
  'Avoiding quarrels and maintaining peaceful conduct',
  'Increased temple visits and religious practice',
  'Observing brahmacharya',
  'Reducing unnecessary worldly/business activity',
]

const SOURCES = [
  { name: 'Tattvārtha Sūtra 9.6 — ten uttama dharmas', tag: 'Scriptural' },
  { name: "Ācārya Pūjyapāda — Sarvārthasiddhi", tag: 'Classical commentary' },
  { name: 'Established Digambara educational material on Das Lakshan observance', tag: 'Community education' },
  { name: 'Supplied video/transcript — household niyam', tag: 'Practical · community source' },
]

function PartLabel({ number, hi, en }) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.2em] text-gold-dim">Part {number}</p>
      <h3 className="mt-2 font-display text-2xl text-ivory">{en}</h3>
      <p className="text-base text-ivory-dim/80">{hi}</p>
    </>
  )
}

function DasLakshanObservanceSection() {
  return (
    <section className="border-t border-line/70 bg-panel/40 py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-gold-dim">Digambara Jain Tradition</p>
            <h2 className="mt-3 font-display text-4xl text-ivory">दशलक्षण महापर्व में साधना कैसे की जाती है?</h2>
            <p className="font-display text-2xl text-ivory-dim">How Digambara Jains Observe Das Lakshan Parv</p>
            <div className="mt-8 space-y-3 text-left sm:text-center">
              <p className="text-sm leading-7 text-ivory-dim">
                दशलक्षण महापर्व में साधना केवल दस गुणों के चिंतन तक सीमित नहीं रहती। Digambara Jain tradition में ये दस दिन आत्मसंयम, स्वाध्याय, तप, प्रायश्चित्त और दैनिक जीवन में अधिक सजगता का अवसर बनते हैं।
              </p>
              <p className="text-sm leading-7 text-ivory-dim">
                Das Lakshan Parv is not limited to reflecting on ten virtues. In the Digambara Jain tradition, these ten days become an opportunity for greater self-restraint, scriptural study, austerity, repentance and awareness in everyday life.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Part 1 — Scriptural Foundation */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-line/70 pt-12 text-center">
            <PartLabel number="1" en="Scriptural Foundation" hi="शास्त्रीय आधार" />
            <p className="mt-4 text-sm leading-7 text-ivory-dim">
              Tattvārtha Sūtra 9.6 explicitly enumerates the ten uttama dharmas, in the context of saṃvara — the stopping of the influx of karma — and the broader spiritual path it describes. The sūtra establishes these ten dharmas; it does not itself prescribe the modern ten-day festival observance.
            </p>
            <p className="mt-4 font-display text-sm tracking-wide text-gold-dim">
              Kṣamā · Mārdava · Ārjava · Śauca · Satya · Saṃyama · Tapa · Tyāga · Ākiñcanya · Brahmacarya
            </p>
            <p className="mt-5 text-xs uppercase tracking-wide text-ivory-dim/70">
              Scriptural foundation: Tattvārtha Sūtra 9.6 — the ten uttama dharmas.
            </p>
          </div>
        </Reveal>

        {/* Part 2 — Classical Understanding */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-line/70 pt-12 text-center">
            <PartLabel number="2" en="What the Classical Tradition Explains" hi="शास्त्रीय परम्परा की व्याख्या" />
            <p className="mt-4 text-sm leading-7 text-ivory-dim">
              Ācārya Pūjyapāda's Sarvārthasiddhi, a classical Digambara commentary on the Tattvārtha Sūtra, explains the ten dharmas as lived spiritual qualities rather than abstract ideas:
            </p>
            <ul className="mx-auto mt-6 grid max-w-xl gap-2 text-left sm:grid-cols-2">
              {CLASSICAL_QUALITIES.map((q) => (
                <li key={q} className="flex items-start gap-2 text-sm leading-relaxed text-ivory-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-dim" aria-hidden="true" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Part 3 — Practices During the Parv */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-4xl border-t border-line/70 pt-12 text-center">
            <PartLabel number="3" en="Practices During the Ten Days" hi="दस दिनों की प्रमुख साधनाएँ" />
          </div>
        </Reveal>
        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-5">
          {OBSERVANCE_PRACTICES.map((p, i) => (
            <Reveal key={p.term} delay={i * 40}>
              <div className="h-full border border-line p-4 text-center transition-colors hover:border-gold-dim lg:p-5">
                <h4 className="font-display text-sm text-ivory lg:text-base">{p.term}</h4>
                <p className="mt-1 text-xs text-gold-dim">{p.hi}</p>
                <p className="mt-3 border-t border-line/70 pt-3 text-xs leading-relaxed text-ivory-dim">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-ivory-dim/70">
          Practices and their intensity vary between individuals, families and communities.
        </p>

        {/* Part 4 — Tapa is more than fasting */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-line/70 pt-12 text-center">
            <PartLabel number="4" en="Tapa Is More Than Fasting" hi="तप केवल उपवास नहीं है" />
            <p className="mt-5 font-display text-lg leading-relaxed text-ivory sm:text-xl">
              उपवास तप का एक रूप है; दशलक्षण की साधना का पूरा अर्थ केवल भूखा रहना नहीं है।
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ivory-dim">
              Fasting is one form of tapa; the meaning of Das Lakshan practice is not simply to remain hungry.
            </p>
            <p className="mt-5 text-sm leading-7 text-ivory-dim">
              Jain tradition recognizes both external and internal austerities. Internal spiritual practices include repentance, humility, service, scriptural study and meditation — not everyone is expected to perform every austerity.
            </p>
          </div>
        </Reveal>

        {/* Part 5 — Traditional Household Niyam (from the supplied transcript, kept
            explicitly separate from scriptural/classical content above) */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-line/70 pt-12 text-center">
            <PartLabel number="5" en="Traditional Household Niyam" hi="परम्परागत गृहस्थ नियम" />
            <div className="mx-auto mt-5 max-w-xl border border-gold-dim/40 bg-gold/5 p-4 text-left">
              <p className="text-xs leading-relaxed text-ivory-dim">
                These are practical observances described in the supplied source/video. They should not be presented as universal commandments of Tattvārtha Sūtra.
              </p>
            </div>
            <ul className="mx-auto mt-6 grid max-w-xl gap-2 text-left sm:grid-cols-2">
              {HOUSEHOLD_NIYAM.map((n) => (
                <li key={n} className="flex items-start gap-2 text-sm leading-relaxed text-ivory-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-dim" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Part 6 — Deeper Purpose */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-2xl border-t border-line/70 pt-12 text-center">
            <PartLabel number="6" en="The Deeper Purpose" hi="गहरा उद्देश्य" />
            <p className="mt-5 text-sm leading-7 text-ivory-dim">
              दशलक्षण का उद्देश्य केवल दस दिनों तक कुछ वस्तुओं या आदतों का त्याग करना नहीं है। इन नियमों के माध्यम से जीवन की गति को धीमा करके आत्मचिंतन, संयम, तप और आत्मशुद्धि की ओर बढ़ना है।
            </p>
            <p className="mt-4 text-sm leading-7 text-ivory-dim">
              The purpose of Das Lakshan is not merely to give up certain foods, habits or comforts for ten days. These disciplines create space for self-reflection, restraint, austerity and the purification of the soul.
            </p>

            <div className="ford-rule mx-auto mb-6 mt-10" />
            <p className="font-display text-lg leading-relaxed text-ivory sm:text-xl">
              &ldquo;हर व्यक्ति की साधना की क्षमता और परिस्थिति अलग हो सकती है। मुख्य बात बाहरी नियमों की संख्या नहीं, बल्कि आत्मसंयम और आत्मशुद्धि की दिशा है।&rdquo;
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ivory-dim">
              &ldquo;Each person's capacity and circumstances are different. The deeper measure is not the number of external restrictions, but the movement toward self-restraint and spiritual purification.&rdquo;
            </p>

            <div className="mx-auto mt-10 max-w-xl border border-line/70 p-5 text-left sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-dim">Sources &amp; Further Reading</p>
              <ul className="mt-4 space-y-3">
                {SOURCES.map((s) => (
                  <li key={s.name} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <span className="text-sm text-ivory-dim">{s.name}</span>
                    <span className="shrink-0 whitespace-nowrap rounded-full border border-gold-dim/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-gold">{s.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Seasonal placement only — wraps the existing DasLakshanSection and
// DasLakshanObservanceSection (no copy/duplication of their content) with
// a small featured eyebrow band, styled after SeasonalBanner's own eyebrow
// row so it reads as a natural extension of the banner rather than a new
// design element. Rendered only while getSeasonalBanner() === 'das-lakshan'
// (see Home() below); Home() also skips the normal evergreen placement of
// these two sections during that same window, so the content renders once.
function FeaturedDasLakshanFeature() {
  return (
    <>
      <section className="border-b border-gold-dim/25 bg-panel/60">
        <div className="container-page py-4 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              विशेष प्रस्तुति · दशलक्षण महापर्व <span className="text-ivory-dim/50">·</span> Das Lakshan Parv · Featured
            </p>
          </Reveal>
        </div>
      </section>
      <DasLakshanSection />
      <DasLakshanObservanceSection />
    </>
  )
}

// Evergreen — always renders (not gated by getSeasonalBanner()), placed
// after the Das Lakshan content since both are "how Digambara Jains
// practice" material. Content accuracy notes (see also the in-repo
// conversation this was written from): the Ratnakarandaka Shravakachara
// verse below was corroborated via web search (attributed there to verse
// 119) but not confirmed against a primary edition, so the verse number is
// deliberately omitted from the published citation — only the text and
// author, which are well corroborated. Stuti/samayika/dravya-bhava-puja
// content below is paraphrased, general description, not a claimed direct
// quotation, since no specific verse wording could be verified for those.
const PRACTICE_FORMS = [
  { hi: 'नमस्कार', en: 'Reverence to the five supreme beings' },
  { hi: 'पूजा', en: 'Worship of the Jina' },
  { hi: 'स्तुति / भक्ति', en: 'Praise and devotion' },
  { hi: 'सामायिक', en: 'Equanimity, withdrawal from worldly concern' },
  { hi: 'ध्यान / कायोत्सर्ग', en: 'Meditation and bodily stillness' },
  { hi: 'स्वाध्याय', en: 'Scriptural study' },
  { hi: 'प्रतिक्रमण / आत्मचिंतन', en: 'Introspection and self-examination' },
]

const PANCH_PARAMESHTHI = [
  { hi: 'अरिहंत', en: 'Arihant — one who has conquered inner enemies' },
  { hi: 'सिद्ध', en: 'Siddha — the liberated soul' },
  { hi: 'आचार्य', en: 'Ācārya — head of the monastic order' },
  { hi: 'उपाध्याय', en: 'Upādhyāya — teacher-monk' },
  { hi: 'साधु', en: 'Sādhu — ascetic practitioner' },
]

const PRAYER_SOURCES = [
  { name: 'षट्खण्डागम', tag: 'Canonical Digambara scripture' },
  { name: 'आचार्य समन्तभद्र — रत्नकरण्डक श्रावकाचार', tag: 'जिन-पूजा · सामायिक · द्रव्य/भाव पूजा' },
  { name: 'आचार्य कुन्दकुन्द — समयसार', tag: 'भाव / inner spiritual disposition' },
  { name: 'Traditional Namaskāra Mantra', tag: 'नमस्कार (specific edition not identified)' },
  { name: 'Established Digambara ritual tradition (modern temple practice)', tag: 'अष्टद्रव्य पूजा sequence — later tradition' },
]

function PrayerPartLabel({ number, hi, en }) {
  return (
    <>
      {number ? <p className="text-xs uppercase tracking-[0.2em] text-saffron">Part {number}</p> : null}
      <h3 className="mt-2 font-display text-2xl text-ink">{en}</h3>
      <p className="text-base text-ink-dim/80">{hi}</p>
    </>
  )
}

function PrayerAndWorshipSection() {
  return (
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-saffron">Digambara Jain Tradition</p>
            <h2 className="mt-3 font-display text-4xl text-ink">दिगम्बर जैन किस प्रकार प्रार्थना और पूजा करते हैं?</h2>
            <p className="font-display text-2xl text-ink-dim">How Do Digambara Jains Pray?</p>
            <div className="mt-8 space-y-3 text-left sm:text-center">
              <p className="text-sm leading-7 text-ink-dim">
                Digambara Jain texts describe not a single practice called &ldquo;prayer,&rdquo; but several distinct forms of religious life — reverence, worship, praise, equanimity, meditation, study and self-examination — each with its own purpose.
              </p>
              <p className="text-sm leading-7 text-ink-dim">
                Jain religious life does include worship and prayer-like devotion — but it differs theologically from petitioning a creator deity, since Jain tradition holds that a liberated soul does not intervene in worldly affairs.
              </p>
              <p className="text-sm leading-7 text-ink-dim">
                दिगम्बर जैन ग्रंथों में केवल एक &ldquo;प्रार्थना&rdquo; नहीं, बल्कि कई भिन्न-भिन्न धार्मिक साधनाएँ वर्णित हैं — नमस्कार, पूजा, स्तुति, सामायिक, ध्यान और स्वाध्याय — जिनका उद्देश्य भी भिन्न-भिन्न है।
              </p>
              <p className="text-sm leading-7 text-ink-dim">
                जैन धर्म में पूजा और भक्ति जैसी साधनाएँ अवश्य हैं, परंतु ये किसी सृष्टिकर्ता ईश्वर से प्रार्थना करने से दार्शनिक दृष्टि से भिन्न हैं, क्योंकि जैन परंपरा में मुक्त आत्मा सांसारिक कार्यों में हस्तक्षेप नहीं करती।
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative mx-auto mt-12 w-full max-w-lg sm:max-w-xl">
            <div className="absolute -inset-4 rounded-sm bg-gold/10 blur-2xl" aria-hidden="true" />
            <div className="relative border border-gold-dim/50 bg-panel/70 p-3 shadow-2xl">
              <img
                src="/images/jina-puja-devotion.png"
                alt="A devotee in reverent prayer before a Jina mūrti seated in meditation, illustrating jina-pūjā"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {PRACTICE_FORMS.map((p, i) => (
            <Reveal key={p.hi} delay={i * 40}>
              <div className="h-full border border-ink-dim/25 bg-parchment p-4 text-center transition-colors hover:border-saffron/60">
                <h4 className="font-display text-base text-ink">{p.hi}</h4>
                <p className="mt-2 text-xs leading-relaxed text-ink-dim">{p.en}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Part 1 — Namaskara */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="1" en="Reverence — नमस्कार" hi="नमस्कार" />
            <div className="mx-auto mt-5 max-w-sm space-y-1 font-display text-base leading-relaxed text-ink" lang="pi">
              <p>णमो अरिहंताणं।</p>
              <p>णमो सिद्धाणं।</p>
              <p>णमो आयरियाणं।</p>
              <p>णमो उवज्झायाणं।</p>
              <p>णमो लोए सव्वसाहूणं।</p>
            </div>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink-dim">
              Reverence to the Arihants. Reverence to the Siddhas. Reverence to the Ācāryas. Reverence to the Upādhyāyas. Reverence to all Sādhus anywhere in the world.
            </p>
            <p className="mx-auto mt-2 max-w-xl text-xs text-ink-dim/70">
              The traditional Namaskāra Mantra (मूल मंत्र), foundational to Jain devotional practice.
            </p>
            <ul className="mx-auto mt-6 grid max-w-lg gap-2 text-left sm:grid-cols-2">
              {PANCH_PARAMESHTHI.map((f) => (
                <li key={f.hi} className="flex items-start gap-2 text-sm leading-relaxed text-ink-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-saffron" aria-hidden="true" />
                  <span><span className="font-display text-ink">{f.hi}</span> — {f.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Part 2 — Jina worship */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="2" en="Jina Worship — जिन-पूजा" hi="जिन-पूजा" />
            <p className="mt-4 text-sm leading-7 text-ink-dim">
              Classical Digambara lay literature, most notably Ācārya Samantabhadra's रत्नकरण्डक श्रावकाचार (Ratnakarandaka Shravakachara), discusses and encourages the worship of the Jina by the श्रावक (lay householder), including instruction toward daily worship.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-dim">
              आचार्य समन्तभद्र कृत रत्नकरण्डक श्रावकाचार, दिगम्बर श्रावकाचार साहित्य का एक प्रमुख ग्रंथ है, जिसमें श्रावक के लिए जिन-पूजा की चर्चा और नित्य पूजा का निर्देश मिलता है।
            </p>
            <p className="mx-auto mt-6 max-w-xl font-display text-base leading-relaxed text-ink" lang="sa">
              देवाधिदेवचरणे परिचरणं सर्वदुःखनिर्हरणम् ।<br />
              कामदुहि कामदाहिनि परिचिनुयादादृतो नित्यम् ॥
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-dim">
              Devoted service at the feet of the Supreme Lord removes all suffering — like a wish-fulfilling refuge that also burns away desire itself; one should render it with reverence, always.
            </p>
            <p className="mt-2 text-xs text-ink-dim/70">— रत्नकरण्डक श्रावकाचार, श्लोक 119, आचार्य समन्तभद्र</p>
          </div>
        </Reveal>

        {/* Part 3 — Stuti / Bhakti */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="3" en="Praise and Devotion — स्तुति / भक्ति" hi="स्तुति / भक्ति" />
            <p className="mt-4 text-sm leading-7 text-ink-dim">
              Contemplating and praising the auspicious qualities of the Jina — freedom from attachment, aversion and ignorance — is understood in the tradition as spiritually beneficial to the one who praises, turning the mind toward those same qualities. It is not a request that the Jina act on the worshipper's behalf.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-dim">
              जिन के गुणों — रागद्वेष और अज्ञान से मुक्ति — का चिंतन और स्तवन करना, स्तुति करने वाले के लिए ही आध्यात्मिक रूप से लाभकारी माना गया है, जो मन को उन्हीं गुणों की ओर मोड़ता है। यह जिन से किसी कार्य को करने का अनुरोध नहीं है।
            </p>
          </div>
        </Reveal>

        {/* Part 4 — Does a Jina "answer" prayer? (highlighted) */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="4" en={'Does a Jina “Answer” Prayer?'} hi="क्या जिन प्रार्थना का उत्तर देते हैं?" />
            <div className="mx-auto mt-5 max-w-xl border border-saffron/40 bg-saffron/5 p-5 text-left">
              <p className="text-xs uppercase tracking-wide text-saffron">A Digambara Philosophical Distinction</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                In Digambara philosophy, the liberated Jina (सिद्ध) is not a creator deity who intervenes in worldly affairs or grants petitions — having attained liberation, the Jina is beyond worldly action altogether. The benefit of worship is understood to arise not from the Jina acting on the worshipper's behalf, but from the worshipper's own spiritual state: contemplation, conduct and the purification of कर्म.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                दिगम्बर दर्शन में, मुक्त जिन (सिद्ध) कोई सृष्टिकर्ता देवता नहीं हैं जो सांसारिक कार्यों में हस्तक्षेप करें या प्रार्थनाएँ स्वीकार करें। पूजा का लाभ जिन द्वारा कुछ किए जाने से नहीं, बल्कि स्वयं पूजक की आध्यात्मिक स्थिति — चिंतन, आचरण और कर्म की शुद्धि — से जुड़ा माना गया है।
              </p>
              <p className="mx-auto mt-5 text-center font-display text-base leading-relaxed text-ink" lang="sa">
                न पूजार्थस्त्वयि वीतरागे न निन्दया नाथ विवान्तवैरे ।<br />
                तथापि ते पुण्यगुणस्मृतिर्नः पुनाति चित्तं दुरिताञ्जनेभ्यः ॥
              </p>
              <p className="mt-3 text-center text-sm leading-relaxed text-ink-dim">
                This is not done to please you, O Vītarāga, nor out of any fault-finding, O Lord who has forsaken all enmity; yet even so, the remembrance of your meritorious qualities purifies our mind from the stains of wrongdoing.
              </p>
              <p className="mt-2 text-center text-xs text-ink-dim/70">— स्वयम्भूस्तोत्र, आचार्य समन्तभद्र</p>
            </div>
          </div>
        </Reveal>

        {/* Part 5 — Samayika */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="5" en="Equanimity — सामायिक" hi="सामायिक" />
            <p className="mt-4 text-sm leading-7 text-ink-dim">
              सामायिक is a distinct practice of its own: a period of deliberate withdrawal from worldly occupations and preoccupations, given instead to cultivating समता (equanimity) of mind. Classical śrāvakācāra literature, including the Ratnakarandaka Shravakachara, treats it among a householder's essential duties — not as a synonym for worship.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-dim">
              सामायिक अपने आप में एक पृथक साधना है — सांसारिक व्यवसायों और चिंताओं से कुछ समय के लिए सायास दूर होकर, मन में समता का विकास करना। रत्नकरण्डक श्रावकाचार सहित शास्त्रीय श्रावकाचार साहित्य में इसे श्रावक के आवश्यक कर्तव्यों में गिना गया है — यह पूजा का पर्याय नहीं है।
            </p>
          </div>
        </Reveal>

        {/* Part 6 — Dhyana / Kayotsarga */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="6" en="Meditation and Stillness — ध्यान / कायोत्सर्ग" hi="ध्यान / कायोत्सर्ग" />
            <p className="mt-4 text-sm leading-7 text-ink-dim">
              Jain religious practice also turns inward through ध्यान (meditation) and कायोत्सर्ग — a deliberate stilling of the body, held to loosen its habitual identification with the self so attention can settle inward.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-dim">
              जैन साधना ध्यान और कायोत्सर्ग के माध्यम से भी अंतर्मुखी होती है — शरीर को सायास स्थिर रखना, जिससे शरीर के साथ की स्वाभाविक तादात्म्य शिथिल होती है और ध्यान भीतर की ओर स्थिर हो पाता है।
            </p>
          </div>
        </Reveal>

        {/* Part 7 — Dravya puja / Bhava puja */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="7" en="Two Kinds of Worship — द्रव्य पूजा और भाव पूजा" hi="द्रव्य पूजा और भाव पूजा" />
            <p className="mt-4 text-sm leading-7 text-ink-dim">
              Classical Digambara literature on worship distinguishes two dimensions: द्रव्य पूजा, the external/material worship performed through body, speech and ritual substances, and भाव पूजा, the internal worship of holding the right mental and spiritual disposition while contemplating the Jina's qualities. Material worship is considered meaningful mainly to the extent it supports the inner disposition.
            </p>
            <p className="mt-3 text-sm leading-7 text-ink-dim">
              पूजा से संबंधित शास्त्रीय दिगम्बर साहित्य में दो आयाम बताए गए हैं — द्रव्य पूजा, जो शरीर, वाणी और पूजा-सामग्री के माध्यम से की जाने वाली बाह्य पूजा है, और भाव पूजा, जो जिन के गुणों के चिंतन सहित उचित मानसिक व आध्यात्मिक भाव बनाए रखने की आंतरिक पूजा है।
            </p>
            <p className="mt-5 text-xs leading-relaxed text-ink-dim/70">
              The detailed eight-substance (अष्टद्रव्य) sequence familiar from temple practice today reflects established, later Digambara ritual tradition — not a procedure directly prescribed by the earliest canonical texts.
            </p>
          </div>
        </Reveal>

        {/* Part 8 — Deeper purpose */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-2xl border-t border-ink-dim/20 pt-12 text-center">
            <PrayerPartLabel number="8" en="The Deeper Purpose" hi="गहरा उद्देश्य" />
            <p className="mt-5 font-display text-lg leading-relaxed text-ink sm:text-xl">
              पूजा केवल बाहर की क्रिया नहीं है। जिनके गुणों का हम स्मरण और स्तवन करते हैं, उन्हीं गुणों की दिशा में अपने जीवन को बदलना इसका गहरा उद्देश्य है।
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              Worship is not only an external act. The deeper purpose is to contemplate the qualities of the Jina and gradually orient one's own life toward those qualities.
            </p>
            <p className="mt-3 text-xs uppercase tracking-wide text-ink-dim/60">
              Jinverse editorial note — not a scriptural quotation
            </p>
          </div>
        </Reveal>

        {/* Sources & Further Reading */}
        <Reveal>
          <div className="mx-auto mt-16 max-w-2xl border-t border-ink-dim/20 pt-12 text-center">
            <div className="mx-auto max-w-xl border border-ink-dim/25 p-5 text-left sm:p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-saffron">Sources &amp; Further Reading</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-ink-dim/60">Foundational / Classical Digambara Sources</p>
              <ul className="mt-4 space-y-3">
                {PRAYER_SOURCES.map((s) => (
                  <li key={s.name} className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
                    <span className="text-sm text-ink-dim">{s.name}</span>
                    <span className="shrink-0 whitespace-nowrap rounded-full border border-saffron/30 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-saffron">{s.tag}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-ink-dim/60">
                Not every practice above is drawn from every text listed; each is sourced individually where indicated. This overview reflects Jinverse's own editorial synthesis of classical Digambara literature and established tradition — not a translation of any single source.
              </p>
            </div>
          </div>
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
              <Button to="/explore" variant="secondary">Explore the Teachings</Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={100}><div className="relative mx-auto w-full max-w-sm sm:max-w-md"><div className="absolute -inset-6 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" /><div className="relative border border-gold-dim/50 bg-panel/70 p-4 shadow-2xl"><img src={LOWER_IMAGE} alt="JINVERSE logo" className="h-auto max-h-[420px] w-full object-contain" /></div></div></Reveal>
      </div>
      {/* subtle gold divider into the next section, instead of a flat line */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-dim/60 to-transparent" aria-hidden="true" />
    </section>
    {isDasLakshanFeatured && <FeaturedDasLakshanFeature />}
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24"><div className="container-page"><Reveal><SectionHeading tone="light" eyebrow="Featured pathways" title="Four ways to begin" description="However you arrive, JINVERSE keeps Jain tradition central and clearly marks where historical evidence adds context." /></Reveal><div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-[#8C6A32]/25 bg-[#8C6A32]/20 sm:grid-cols-2 lg:grid-cols-4">{[{ to: '/teachings', title: 'Core Teachings', desc: 'Ahimsa, karma, moksha and the path to liberation.' }, { to: '/tirthankaras', title: 'The Tirthankaras', desc: 'Twenty-four ford-makers across the ages.' }, { to: '/history', title: 'History & Heritage', desc: 'Communities, monuments and evidence.' }, { to: '/texts', title: 'Jain Texts', desc: 'The scriptures that carry the tradition forward.' }].map((p, i) => <Reveal key={p.to} delay={i * 80}><Link to={p.to} className="group flex h-full flex-col justify-between bg-parchment p-7 transition-colors hover:bg-ink/[0.04]"><div><h3 className="font-display text-lg text-ink">{p.title}</h3><p className="mt-2 text-sm leading-relaxed text-ink-dim">{p.desc}</p></div><span className="mt-6 text-sm text-saffron group-hover:text-[#8C6A32]">Explore</span></Link></Reveal>)}</div></div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Core teachings" title="A philosophy built for practice" description="Seven foundations of Jain thought, each explained on its own terms." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{teachings.slice(0, 6).map((t, i) => <Reveal key={t.slug} delay={i * 60}><div className="h-full border border-line p-6 transition-colors hover:border-gold-dim"><h3 className="font-display text-lg text-ivory">{t.name}</h3><p className="mt-2 text-sm leading-relaxed text-ivory-dim">{t.short}</p><EvidenceLabel status={t.status} className="mt-4" /></div></Reveal>)}</div><div className="mt-10"><Button to="/teachings" variant="secondary">View all teachings</Button></div></div></section>
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24"><div className="container-page"><Reveal><SectionHeading tone="light" eyebrow="Meet the Tirthankaras" title="Twenty-four ford-makers" description="A Tirthankara is one who has crossed the ocean of worldly existence and shown others the way." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-3">{knownTirthankaras.map((t, i) => <Reveal key={t.number} delay={i * 80}><div className="border border-ink-dim/25 bg-parchment p-6 text-center transition-colors hover:border-saffron/60"><p className="text-xs text-saffron">Tirthankara {t.number}</p><h3 className="mt-2 font-display text-xl text-ink">{t.name}</h3><p className="mt-2 text-sm text-ink-dim">Emblem: {t.emblem}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/tirthankaras" variant="secondaryLight">See all 24</Button></div></div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Jain history and heritage" title="Two thousand years of living evidence" description="From royal inscriptions to monumental statues, Jain heritage across India is documented with care." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2">{heritageSites.map((site, i) => <Reveal key={site.slug} delay={i * 70}><div className="border border-line p-6 transition-colors hover:border-gold-dim"><h3 className="font-display text-lg text-ivory">{site.name}</h3><p className="text-xs text-ivory-dim/70">{site.region}</p><p className="mt-2 text-sm leading-relaxed text-ivory-dim">{site.note}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/history" variant="secondary">Explore history & heritage</Button></div></div></section>
    <section className="border-b border-[#8C6A32]/20 bg-parchment py-24"><div className="container-page"><Reveal><SectionHeading tone="light" eyebrow="Explore Jain texts" title="Scripture and literature" description="From canonical sutras to epic narrative literature, the sources that carry Jain thought forward." /></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{texts.slice(0, 3).map((t, i) => <Reveal key={t.slug} delay={i * 70}><div className="flex h-full flex-col border border-ink-dim/25 bg-parchment p-6 transition-colors hover:border-saffron/60"><h3 className="font-display text-lg text-ink">{t.title}</h3><p className="mt-1 text-xs text-ink-dim/80">{t.tradition} · {t.language}</p><p className="mt-3 text-sm leading-relaxed text-ink-dim">{t.description}</p></div></Reveal>)}</div><div className="mt-10"><Button to="/texts" variant="secondaryLight">View all texts</Button></div></div></section>
    <section className="border-t border-line/70 bg-panel/40 py-24"><div className="container-page"><Reveal><SectionHeading eyebrow="Latest articles" title="From the JINVERSE library" /></Reveal><div className="mt-12 grid gap-6 lg:grid-cols-3">{articles.map((a, i) => <Reveal key={a.slug} delay={i * 70}><Link to={`/articles/${a.slug}`} className="group flex h-full flex-col border border-line p-6 transition-colors hover:border-gold"><p className="text-xs text-gold-dim">{a.category}</p><h3 className="mt-2 font-display text-lg text-ivory">{a.title}</h3><p className="mt-2 flex-1 text-sm leading-relaxed text-ivory-dim">{a.excerpt}</p><p className="mt-4 text-xs text-ivory-dim/60">{a.readingTime}</p></Link></Reveal>)}</div><div className="mt-10"><Button to="/articles" variant="secondary">Read all articles</Button></div></div></section>
    {!isDasLakshanFeatured && <>
      <DasLakshanSection />
      <DasLakshanObservanceSection />
    </>}
    <PrayerAndWorshipSection />
    <section className="border-t border-line/70 py-24"><div className="container-page text-center"><Reveal><div className="ford-rule mx-auto mb-8" /><h2 className="mx-auto max-w-2xl font-display text-3xl text-ivory sm:text-4xl">Ancient wisdom, made accessible for the generation carrying it forward.</h2><div className="mt-10 flex flex-wrap justify-center gap-4"><Button to="/teachings" variant="primary">Begin Your Journey</Button><Button to="/about" variant="secondary">About JINVERSE</Button></div></Reveal></div></section>
  </>
}
