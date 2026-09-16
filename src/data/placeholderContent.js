// ---------------------------------------------------------------------------
// PLACEHOLDER CONTENT
// This file holds JINVERSE's initial fallback content. It renders whenever
// Supabase is not configured, has no rows yet, or a query fails — so the
// site is never blank.
// ---------------------------------------------------------------------------

export const teachings = [
  { slug: 'ahimsa', name: 'Ahimsa', short: 'Non-violence toward all living beings, in action, speech and thought.', status: 'tradition' },
  { slug: 'anekantavada', name: 'Anekantavada', short: 'The teaching that reality is many-sided, and no single unqualified statement can capture it completely.', status: 'tradition' },
  { slug: 'aparigraha', name: 'Aparigraha', short: 'Non-attachment and non-possession — freedom found in wanting less, not acquiring more.', status: 'tradition' },
  { slug: 'karma', name: 'Karma', short: 'In Jain thought, karma is a subtle form of matter that binds to the soul through action, thought and speech.', status: 'tradition' },
  { slug: 'moksha', name: 'Moksha', short: 'Complete liberation of the soul from the cycle of rebirth, and the ultimate goal of Jain practice.', status: 'tradition' },
  { slug: 'ratnatraya', name: 'Ratnatraya', short: 'The Three Jewels — right faith, right knowledge and right conduct — that together form the path to liberation.', status: 'tradition' },
  { slug: 'jiva-ajiva', name: 'Jiva and Ajiva', short: 'The Jain division of all existence into soul (jiva) and non-soul, or matter (ajiva).', status: 'tradition' },
]

export const tirthankaras = Array.from({ length: 24 }, (_, i) => {
  const number = i + 1
  const known = {
    1: { name: 'Rishabhanatha (Adinatha)', emblem: 'Bull' },
    23: { name: 'Parshvanatha', emblem: 'Serpent hood' },
    24: { name: 'Mahavira', emblem: 'Lion' },
  }[number]
  return { number, name: known?.name ?? `Tirthankara ${number}`, emblem: known?.emblem ?? null, verified: Boolean(known), status: 'tradition' }
})

export const texts = [
  {
    slug: 'tattvartha-sutra',
    title: 'Tattvartha Sutra',
    group: 'Foundational texts',
    tradition: 'Shared Jain philosophical tradition',
    language: 'Sanskrit',
    date: 'Ancient systematic Jain philosophical text',
    translationStatus: 'Bibliographic information available; full text access is not yet configured.',
    description: 'A foundational work presenting Jain philosophy, the soul, non-soul, karma and the path to liberation.',
    availability: 'bibliographic',
  },
  {
    slug: 'samaysar',
    title: 'Samaysar',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Prakrit',
    date: 'Ancient Jain philosophical text',
    translationStatus: 'Coming soon.',
    description: 'A foundational work associated with Acharya Kundakunda and the nature of the pure soul.',
    availability: 'coming-soon',
  },
  {
    slug: 'niyamsar',
    title: 'Niyamsar',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Prakrit',
    date: 'Ancient Jain philosophical text',
    translationStatus: 'Coming soon.',
    description: 'A text on inner discipline, spiritual conduct and the path toward liberation.',
    availability: 'coming-soon',
  },
  {
    slug: 'pravachansar',
    title: 'Pravachansar',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Prakrit',
    date: 'Ancient Jain philosophical text',
    translationStatus: 'Coming soon.',
    description: 'A philosophical work associated with Acharya Kundakunda, exploring the nature of reality and spiritual practice.',
    availability: 'coming-soon',
  },
  {
    slug: 'panchastikaya',
    title: 'Panchastikaya',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Prakrit',
    date: 'Ancient Jain philosophical text',
    translationStatus: 'Coming soon.',
    description: 'A foundational presentation of the five categories of existence known as astikayas.',
    availability: 'coming-soon',
  },
  {
    slug: 'ratnakarand-shravakachar',
    title: 'Ratnakarand Shravakachar',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Sanskrit',
    date: 'Ancient Jain ethical text',
    translationStatus: 'Coming soon.',
    description: 'A guide to the conduct and spiritual responsibilities of a Jain householder.',
    availability: 'coming-soon',
  },
  {
    slug: 'mokshmarg-prakashak',
    title: 'Mokshmarg Prakashak',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Hindi',
    date: 'Modern Jain philosophical work',
    translationStatus: 'Coming soon.',
    description: 'A work explaining the path to liberation and the principles of right understanding and conduct.',
    availability: 'coming-soon',
  },
  {
    slug: 'aatma-siddhi',
    title: 'Aatma Siddhi',
    group: 'Foundational texts',
    tradition: 'Jain devotional and philosophical tradition',
    language: 'Gujarati',
    date: 'Modern Jain philosophical poem',
    translationStatus: 'Coming soon.',
    description: 'A devotional-philosophical work centred on the nature of the soul and the path to self-realisation.',
    availability: 'coming-soon',
  },
  {
    slug: 'ishtopadesh',
    title: 'Ishtopadesh',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Sanskrit',
    date: 'Ancient Jain spiritual text',
    translationStatus: 'Coming soon.',
    description: 'A concise spiritual work offering guidance on detachment, self-knowledge and liberation.',
    availability: 'coming-soon',
  },
  {
    slug: 'mulachar',
    title: 'Mulachar',
    group: 'Foundational texts',
    tradition: 'Digambara',
    language: 'Prakrit',
    date: 'Ancient Jain monastic text',
    translationStatus: 'Coming soon.',
    description: 'A foundational work concerning the conduct and discipline of Jain ascetics.',
    availability: 'coming-soon',
  },
  {
    slug: 'chah-dhala',
    title: 'Chah Dhala',
    group: 'Devotional and practical works',
    tradition: 'Digambara',
    language: 'Hindi',
    date: '18th-century Hindi devotional work',
    translationStatus: 'Bibliographic entry only; no PDF is included.',
    description: 'A widely loved six-part Hindi devotional work introducing essential Jain spiritual ideas.',
    availability: 'bibliographic',
  },
  {
    slug: 'namokar-mahamantra',
    title: 'Namokar Mahamantra',
    group: 'Devotional and practical works',
    tradition: 'Jain tradition',
    language: 'Prakrit',
    date: 'Ancient Jain devotional tradition',
    translationStatus: 'Coming soon.',
    description: 'The central Jain prayer of reverence for the five supreme beings.',
    availability: 'coming-soon',
  },
  {
    slug: 'dash-lakshan-dharma',
    title: 'Dash Lakshan Dharma',
    group: 'Devotional and practical works',
    tradition: 'Digambara',
    language: 'Sanskrit and regional languages',
    date: 'Jain festival and teaching tradition',
    translationStatus: 'Coming soon.',
    description: 'The ten virtues traditionally contemplated during the Dash Lakshan period.',
    availability: 'coming-soon',
  },
  {
    slug: 'saiyam-prakash',
    title: 'Saiyam Prakash',
    group: 'Devotional and practical works',
    tradition: 'Digambara',
    language: 'Hindi',
    date: 'Modern Jain devotional work',
    translationStatus: 'Coming soon.',
    description: 'A practical work centred on restraint, discipline and the inner life.',
    availability: 'coming-soon',
  },
  {
    slug: 'panch-labdhi',
    title: 'Panch Labdhi',
    group: 'Devotional and practical works',
    tradition: 'Digambara',
    language: 'Hindi',
    date: 'Jain spiritual teaching tradition',
    translationStatus: 'Coming soon.',
    description: 'A guide to five spiritual attainments and the conditions that support progress on the path.',
    availability: 'coming-soon',
  },
  {
    slug: 'gunsthan-vivechan',
    title: 'Gunsthan Vivechan',
    group: 'Devotional and practical works',
    tradition: 'Digambara',
    language: 'Hindi',
    date: 'Jain spiritual teaching tradition',
    translationStatus: 'Coming soon.',
    description: 'An introduction to the stages of spiritual development known as gunasthanas.',
    availability: 'coming-soon',
  },
  {
    slug: 'triloksar',
    title: 'Triloksar',
    group: 'Jain cosmology and spiritual structure',
    tradition: 'Digambara',
    language: 'Prakrit',
    date: 'Ancient Jain cosmological text',
    translationStatus: 'Coming soon.',
    description: 'A foundational work on Jain cosmology and the structure of the three worlds.',
    availability: 'coming-soon',
  },
]

const UTTAM_KSHAMA_BODY = `## What Is Uttam Kshama?

Uttam Kshama, more fully **Uttama Kṣamā**, is the first of the ten virtues of Das Lakshan Dharma. Kshama is usually translated as "forgiveness," but the Jain sense of the word is broader: it includes patience under provocation, forbearance in the face of hardship, and pardon extended freely rather than earned through apology.

Jain teaching is careful to distinguish Uttama Kshama from ordinary "being nice" or from simply suppressing anger while it still burns underneath. Classical explanations of this dharma describe a person who does not become enraged even when the occasion for anger is obvious — when insulted, mocked, publicly disgraced, or spoken to with deliberate unpleasantness. What matters is not only how a person behaves outwardly under provocation, but whether resentment and ill-will take root within at all.

## Kshama in Das Lakshana

Uttama Kshama is the first of the ten uttama dharmas (supreme virtues) named in Tattvārtha Sūtra 9.6 and observed over the ten days of Das Lakshan Parv, traditionally in this order:

1. Uttam Kshama — Supreme Forgiveness / Forbearance

2. Uttam Mardava — Supreme Humility

3. Uttam Arjava — Supreme Straightforwardness

4. Uttam Shaucha — Supreme Contentment / Purity

5. Uttam Satya — Supreme Truth

6. Uttam Sanyama — Supreme Self-restraint

7. Uttam Tapa — Supreme Austerity

8. Uttam Tyaga — Supreme Renunciation

9. Uttam Akinchanya — Supreme Non-attachment / Non-possession

10. Uttam Brahmacharya — Supreme Celibacy / Chastity

The ten virtues are traditionally presented in this order, beginning with Uttama Kṣamā. This article focuses on the first virtue; the remaining nine each deserve their own treatment.

## Beyond Anger

Kshama is closely tied to anger (krodha). Anger typically arises in response to insult, injury, criticism or frustration — moments when something has genuinely gone wrong, or when we feel wronged, dismissed or diminished. The classical framing described above holds that forbearance means not becoming angered even when such an occasion is obvious; it does not ask a person to pretend that no harm occurred.

As a modern practical clarification — an editorial note from JINVERSE rather than a claim drawn from the sources above — it is worth adding: kshama does not require agreeing that a harm was acceptable, and it does not ask anyone to tolerate abuse or abandon legitimate boundaries. Recognizing that harm occurred is a different matter from continuing to cultivate ill-will toward the person responsible for it; the Jain sense of forgiveness concerns the latter.

## Kshama Toward Others

Traditional discussion of Uttama Kshama includes forgiveness directed outward, toward those who have caused harm. Jainworld's account of Uttama Kshama Dharma describes distinct categories of such forgiveness — for example, pardoning someone who speaks unpleasant words without real cause, and pardoning someone whose intentions are more seriously harmful — treating both as expressions of the same underlying virtue rather than requiring different responses.

Jain ethical teaching is also widely understood to ask for the reverse movement: seeking forgiveness from those one has wronged, rather than only waiting to be forgiven, and extending kshama broadly rather than reserving it only for those one is already close to. This article has not been able to verify a specific claim about an annual observance, or about family and community customs tied to a particular time of year, against the five sources listed here, so no such specific claim is made.

## Kshama Toward Oneself

Uttama Kshama is not only about how we treat others; it also concerns how we relate to our own mistakes. One practical way to apply this principle — offered here as a JINVERSE interpretation rather than a traditional formula — is a simple sequence: honestly recognizing what was done, reflecting on it, correcting one's conduct going forward, and restraining oneself from repeating the same fault, without continuing to carry it as a private, ongoing resentment against oneself.

This sequence is offered as a practical framework inspired by the spirit of Uttama Kshama; it is not presented as an ancient or scriptural formula in its own right.

## Kshama and Karma

Jain philosophy treats anger (krodha) as one of the kashayas — passions that bind karmic matter to the soul. Source A (Tattvārtha Sūtra with Sarvārthasiddhi commentary) situates the ten uttama dharmas, including Uttama Kshama, within its discussion of samvara: the stopping of the influx of karma. On that basis, cultivating forbearance can reasonably be understood as part of a broader effort to reduce what binds karma to the soul.

The wider doctrine of the four kashayas — anger, pride, deceit and greed — and their specific mechanics is well-established, general Jain philosophical background. This article has not verified that detail directly against the five sources listed here, so it is presented as general context rather than a claim drawn from any one of them.

What this article does not claim is that one person forgiving another removes karma already bound through a wrongful act, or that forgiveness functions as a transaction erasing someone else's wrongdoing. Cultivating freedom from anger is best understood as affecting the practitioner's own karmic situation, not another person's.

## How to Practice Uttam Kshama Today

The following are practical applications inspired by the virtue of Uttama Kshama, not scriptural commandments in themselves:

Pause before responding to an insult, rather than reacting immediately.

Notice anger as it arises, before acting or speaking from it.

Avoid retaliatory speech, even when a sharp reply would feel justified.

Reflect before judging another person's motives or character.

Acknowledge one's own mistakes honestly, rather than minimizing or denying them.

Apologize where it is appropriate to do so, without waiting to be asked.

Forgive without denying what actually happened — forgiveness and honest memory are not opposites.

Where it fits within one's own tradition and practice, use Pratikraman or a similar period of reflection to review the day's conduct and seek forgiveness for it.

These are everyday applications a practitioner might draw from the virtue; they are not presented here as a complete or binding list.

## A Deeper Jain Perspective

At a deeper level, Uttama Kshamā is not merely a social rule about saying "sorry" or accepting an apology. It concerns the practitioner's relationship with anger, resentment and the impulse to retaliate. The Jain ideal is to cultivate a state in which such passions have progressively less hold over one's conduct.

This paragraph is offered as a general synthesis consistent with the sources above rather than a specific doctrinal claim drawn from any one of them.

## Reflection

When anger rises, what am I protecting?

When I forgive, what am I releasing?

Can I correct what was wrong without carrying resentment forward?

These questions are JINVERSE's own reflective prompt, inspired by the themes of Uttama Kshama. They are not a scriptural quotation.

## Sources & Further Reading

Tattvārtha Sūtra, Chapter 9, Sūtra 6, with Ācārya Pūjyapāda's Sarvārthasiddhi commentary — wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Supreme Forgiveness (Uttama Kshama Dharma)" — https://jainworld.jainworld.com/jainbooks/images/31/SUPREME_FORGIVENESS.htm

Jainworld, "Supplements to Ahimsa-Vrata," The Jaina Path of Ahimsa — https://jainworld.com/library/jain-books/books-on-line/jainworld-books-in-indian-languages/the-jaina-path-of-ahimsa/supplements-to-ahimsa-vrata/

Jain Digest, September/October 2013 — https://jainworld.jainworld.com/JWEnglish/Magazines/Jain_Digest_Sept_Oct_2013.pdf

English Pratikraman: Introduction for English-Speaking Jains — https://jainqq.org/booktext/English_Pratikraman_Introduction_for_English_Speaking_Jains/320010

A note on sourcing: direct access to sources B, C, D and E was not available while preparing this article, and source A was consulted only through search-engine summaries of its content rather than its full primary text. Passages above that draw on general Jain philosophical knowledge rather than on these five sources specifically are noted as such within the article, rather than presented as verified quotation.`

export const articles = [
  { slug: 'what-is-jainism', title: 'What Is Jainism?', subtitle: 'An introduction to one of the world’s oldest living paths to liberation.', category: 'Beginner’s guide', readingTime: '6 min read', excerpt: 'Jainism centers on the liberation of the soul through non-violence, self-discipline and right understanding.' },
  { slug: 'bharatavarsha-bharat-chakravarti', title: 'Bharatavarsha: The Land of Bharat Chakravarti', subtitle: 'The sacred story of Bhagwan Rishabhadeva, Bharat Chakravarti and the name of our great land.', category: 'History', readingTime: '9 min read', excerpt: 'Discover the Jain tradition of Adinath Bhagwan as the first civilizational teacher and Bharat Chakravarti as the sovereign whose name lives on in Bharatavarsha.' },
  { slug: 'understanding-ahimsa', title: 'Understanding Ahimsa', subtitle: 'Why non-violence in Jain thought reaches into action, speech and thought alike.', category: 'Philosophy', readingTime: '9 min read', excerpt: 'Ahimsa is not merely the absence of violence. It is a disciplined reverence for every living being.' },
  { slug: 'the-universe-within', title: 'The Universe Within', subtitle: 'What the Jain concept of the soul asks us to see in ourselves.', category: 'Philosophy', readingTime: '7 min read', excerpt: 'Jain metaphysics holds that every soul carries within it the capacity for complete purity and infinite knowledge.' },
  { slug: 'uttam-kshama', title: 'Uttam Kshama: The Jain Virtue of Supreme Forgiveness', subtitle: 'The first of the ten Das Lakshan virtues — forbearance, forgiveness and freedom from anger.', category: 'Jain Philosophy / Das Lakshan', readingTime: '8 min read', excerpt: 'Uttam Kshama, the first of the ten Das Lakshan virtues, is supreme forgiveness — not mere niceness or suppressed anger, but a settled freedom from ill-will even in the face of insult and provocation.', body_markdown: UTTAM_KSHAMA_BODY },
]

export const articleCategories = ['Philosophy', 'History', 'Texts', 'Heritage', 'Contemporary relevance', 'Beginner’s guide', 'Jain Philosophy / Das Lakshan']

export const explorePathways = [
  { slug: 'philosophy', title: 'Jain Philosophy', description: 'The metaphysics and ethics of liberation.' },
  { slug: 'ethics-conduct', title: 'Ethics and Conduct', description: 'The vows and practices that shape a Jain life.' },
  { slug: 'meditation', title: 'Meditation and Inner Discipline', description: 'Practices of stillness and self-observation.' },
  { slug: 'tirthankaras', title: 'Tirthankaras', description: 'The twenty-four ford-makers of this cosmic age.' },
  { slug: 'cosmology', title: 'Jain Cosmology', description: 'The Jain vision of time, space and the structure of existence.' },
  { slug: 'history-heritage', title: 'History and Heritage', description: 'Communities, monuments and heritage across centuries.' },
  { slug: 'texts', title: 'Jain Texts', description: 'The scriptures and literature that carry the tradition forward.' },
  { slug: 'communities', title: 'Jain Communities and Traditions', description: 'Svetambara, Digambara, and living practice today.' },
  { slug: 'prayer-worship', title: 'Prayer & Worship', description: 'How Digambara Jains pray, worship the Jina, cultivate devotion and turn worship inward.' },
]

export const heritageSites = [
  { slug: 'shravanabelagola', name: 'Shravanabelagola', region: 'Karnataka', status: 'established', note: 'Home to the Gommateshwara statue, completed 981 CE under the minister Chavundaraya.' },
  { slug: 'kankali-tila', name: 'Kankali Tila', region: 'Mathura, Uttar Pradesh', status: 'established', note: 'A major record of Jain sculpture and inscriptions across many centuries.' },
  { slug: 'udayagiri-khandagiri', name: 'Udayagiri–Khandagiri Caves', region: 'Odisha', status: 'established', note: 'Home to the Hathigumpha inscription associated with the Jain king Kharavela.' },
  { slug: 'sammed-shikharji', name: 'Sammed Shikharji', region: 'Jharkhand', status: 'tradition', note: 'Revered in Jain tradition as the site of liberation of many Tirthankaras.' },
]

export const reels = [
  { slug: 'what-is-a-tirthankara', title: 'What Is a Tirthankara?', description: 'A short introduction to the concept of the ford-maker.', duration: '1:45' },
  { slug: 'the-gommateshwara-statue', title: 'The Gommateshwara Statue', description: 'A closer look at Shravanabelagola’s monumental Bahubali.', duration: '2:10' },
  { slug: 'anekantavada-in-a-minute', title: 'Anekantavada in a Minute', description: 'The many-sidedness of truth, briefly explained.', duration: '1:05' },
]
