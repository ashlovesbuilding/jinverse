import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal.jsx'

// Moved out of src/pages/Home.jsx unchanged (content untouched — only the
// file location changed) so the full content has one source of truth,
// reused by both the dedicated /das-lakshan page and the homepage's
// compact previews (which link here rather than embedding this content).

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

// Maps a Das Lakshan day to its published article slug, if one exists yet.
// Days without an entry here stay as static (non-linking) cards.
const DAS_LAKSHAN_ARTICLE_SLUGS = {
  '01': 'uttam-kshama',
  '02': 'uttam-mardava',
  '03': 'uttam-arjava',
  '04': 'uttam-shaucha',
}

// Evergreen — deliberately carries no festival dates. This is the
// full bilingual explainer section; the date-gated homepage teaser is
// the separate SeasonalBanner in Home.jsx, which is untouched by this.
export function DasLakshanSection() {
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
          {DAS_LAKSHAN_DAYS.map((d, i) => {
            const cardClassName = 'h-full border border-ink-dim/25 bg-parchment p-4 text-center transition-colors hover:border-saffron/60 lg:p-5'
            const cardContent = (
              <>
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
              </>
            )
            // Only days with a published Das Lakshan article link out; the
            // rest stay static until their own articles exist.
            const articleSlug = DAS_LAKSHAN_ARTICLE_SLUGS[d.day]
            return (
              <Reveal key={d.day} delay={i * 50}>
                {articleSlug ? (
                  <Link to={`/articles/${articleSlug}`} className={`block ${cardClassName}`}>{cardContent}</Link>
                ) : (
                  <div className={cardClassName}>{cardContent}</div>
                )}
              </Reveal>
            )
          })}
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

// Companion to DasLakshanSection above — explains observance
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

export function DasLakshanObservanceSection() {
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
