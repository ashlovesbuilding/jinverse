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

export const articles = [
  { slug: 'what-is-jainism', title: 'What Is Jainism?', subtitle: 'An introduction to one of the world’s oldest living paths to liberation.', category: 'Beginner’s guide', readingTime: '6 min read', excerpt: 'Jainism centers on the liberation of the soul through non-violence, self-discipline and right understanding.' },
  { slug: 'bharatavarsha-bharat-chakravarti', title: 'Bharatavarsha: The Land of Bharat Chakravarti', subtitle: 'The sacred story of Bhagwan Rishabhadeva, Bharat Chakravarti and the name of our great land.', category: 'History', readingTime: '9 min read', excerpt: 'Discover the Jain tradition of Adinath Bhagwan as the first civilizational teacher and Bharat Chakravarti as the sovereign whose name lives on in Bharatavarsha.' },
  { slug: 'understanding-ahimsa', title: 'Understanding Ahimsa', subtitle: 'Why non-violence in Jain thought reaches into action, speech and thought alike.', category: 'Philosophy', readingTime: '9 min read', excerpt: 'Ahimsa is not merely the absence of violence. It is a disciplined reverence for every living being.' },
  { slug: 'the-universe-within', title: 'The Universe Within', subtitle: 'What the Jain concept of the soul asks us to see in ourselves.', category: 'Philosophy', readingTime: '7 min read', excerpt: 'Jain metaphysics holds that every soul carries within it the capacity for complete purity and infinite knowledge.' },
]

export const articleCategories = ['Philosophy', 'History', 'Texts', 'Heritage', 'Contemporary relevance', 'Beginner’s guide']

export const explorePathways = [
  { slug: 'philosophy', title: 'Jain Philosophy', description: 'The metaphysics and ethics of liberation.' },
  { slug: 'ethics-conduct', title: 'Ethics and Conduct', description: 'The vows and practices that shape a Jain life.' },
  { slug: 'meditation', title: 'Meditation and Inner Discipline', description: 'Practices of stillness and self-observation.' },
  { slug: 'tirthankaras', title: 'Tirthankaras', description: 'The twenty-four ford-makers of this cosmic age.' },
  { slug: 'cosmology', title: 'Jain Cosmology', description: 'The Jain vision of time, space and the structure of existence.' },
  { slug: 'history-heritage', title: 'History and Heritage', description: 'Communities, monuments and heritage across centuries.' },
  { slug: 'texts', title: 'Jain Texts', description: 'The scriptures and literature that carry the tradition forward.' },
  { slug: 'communities', title: 'Jain Communities and Traditions', description: 'Svetambara, Digambara, and living practice today.' },
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
