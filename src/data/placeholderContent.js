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
  { slug: 'kalpasutra', title: 'Kalpasutra', tradition: 'Svetambara', language: 'Ardhamagadhi Prakrit', date: 'Ancient core; compiled form dated separately from its content', translationStatus: 'English translation available.', description: 'The important canonical biographical text for the Tirthankaras in the Svetambara tradition, including the life of Mahavira.' },
  { slug: 'tattvartha-sutra', title: 'Tattvartha Sutra', tradition: 'Accepted by both Svetambara and Digambara traditions', language: 'Sanskrit', date: 'Ancient systematic Jain philosophical text', translationStatus: 'English translations available.', description: 'A foundational systematic text of Jain philosophy — jiva, ajiva, karma and the path to liberation — by Umasvati/Umasvami.' },
  { slug: 'adipurana', title: 'Adipurana', tradition: 'Digambara', language: 'Sanskrit', date: '9th century CE', translationStatus: 'English access is available through translations and scholarly editions.', description: 'By Jinasena; a major traditional account of Rishabhanatha, Bharata and Bahubali, and the movement from Bhogabhumi to Karmabhumi.' },
  { slug: 'paumacariya', title: 'Paumacariya', tradition: 'Svetambara', language: 'Prakrit', date: 'Ancient Jain literary tradition', translationStatus: 'Available through scholarly study and translation work.', description: 'By Vimalasuri; an important Jain retelling of the Ramayana narrative.' },
  { slug: 'trishashtishalakapurushacharitra', title: 'Trishashtishalakapurushacharitra', tradition: 'Svetambara', language: 'Sanskrit', date: '12th century CE', translationStatus: 'English translation available.', description: 'By Hemachandra; the lives of the sixty-three illustrious persons of Jain tradition.' },
]

export const articles = [
  { slug: 'what-is-jainism', title: 'What Is Jainism?', subtitle: 'An introduction to one of the world’s oldest living paths to liberation.', category: 'Beginner’s guide', readingTime: '6 min read', excerpt: 'Jainism centers on the liberation of the soul through non-violence, self-discipline and right understanding.' },
  { slug: 'bharatavarsha-bharat-chakravarti', title: 'Bharatavarsha: The Land of Bharat Chakravarti', subtitle: 'The sacred story of Bhagwan Rishabhadeva, Bharat Chakravarti and the name of our great land.', category: 'History', readingTime: '9 min read', excerpt: 'Discover the Jain tradition of Adinath Bhagwan as the first civilizational teacher and Bharat Chakravarti as the sovereign whose name lives on in Bharatavarsha.' },
  { slug: 'understanding-ahimsa', title: 'Understanding Ahimsa', subtitle: 'Why non-violence in Jain thought reaches into action, speech and thought alike.', category: 'Philosophy', readingTime: '5 min read', excerpt: 'Ahimsa is often translated simply as non-violence, but its reach in Jain ethics is wider and more demanding.' },
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
