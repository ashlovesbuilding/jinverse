import Reveal from '../ui/Reveal.jsx'

// Moved out of src/pages/Home.jsx unchanged so the full content can be
// reused by both the homepage preview's "full guide" link target
// (src/pages/PrayerAndWorship.jsx) and, previously, the homepage itself.
// Content accuracy notes (see also the in-repo conversation this was
// written from): the Ratnakarandaka Shravakachara verse below is cited as
// verse 119 per independent verification; the Svayambhustotra verse is
// cited by text and author only (its specific verse number could not be
// confirmed against a primary edition). Stuti/samayika/dravya-bhava-puja
// content is paraphrased, general description, not a claimed direct
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

export default function PrayerAndWorshipSection() {
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
