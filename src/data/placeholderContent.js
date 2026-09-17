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

Uttam Kshama is the first of the ten virtues of Das Lakshan Dharma. The word kshama is usually translated as forgiveness, but it means more than that. It also carries the ideas of patience and forbearance: staying steady instead of reacting.

Picture someone who insults you, mocks you, or embarrasses you in front of others. Most of us feel a flash of anger. Classical Jain teaching describes kshama as not losing your temper even then, and not just holding the anger in while it burns underneath. What matters is not only how you act on the outside. It is whether resentment and ill will take root inside you at all.

## The Ten Virtues of Das Lakshan

Uttam Kshama is the first of ten virtues named in the Tattvartha Sutra, chapter 9, verse 6. Digambara Jains observe all ten over the ten days of Das Lakshan Parv, in this order:

1. Uttam Kshama, Supreme Forbearance

2. Uttam Mardava, Supreme Humility

3. Uttam Arjava, Supreme Straightforwardness

4. Uttam Shaucha, Supreme Purity

5. Uttam Satya, Supreme Truthfulness

6. Uttam Sanyama, Supreme Self-Restraint

7. Uttam Tapa, Supreme Austerity

8. Uttam Tyaga, Supreme Renunciation

9. Uttam Akinchanya, Supreme Non-Attachment

10. Uttam Brahmacharya, Supreme Chastity

This article looks only at the first virtue. Each of the other nine deserves its own article.

## Why Anger Matters

Anger, called krodha in Sanskrit, sits at the centre of this virtue. Someone insults you. Your first reaction might be anger. Kshama asks you to pause instead of letting that anger decide what you say or do next.

This does not mean pretending nothing happened. If someone genuinely wrongs you, Jain teaching does not ask you to deny it. It asks something narrower: don't let anger and resentment take over once the moment has passed.

Worth adding here, as a practical point rather than a scriptural one: kshama does not mean accepting bad treatment or giving up your boundaries. You can recognise that something harmful happened without carrying anger toward the person responsible for it. Seeing clearly is one thing. Staying angry is another. Kshama is about the second.

## Forgiving Others

Jain teaching also talks about forgiving people who have wronged us. Jainworld's account of this virtue describes more than one kind of situation this covers, from someone who says something unpleasant without real reason, to someone whose intentions are more seriously harmful. Both call for the same underlying response.

Jain teaching also asks for the opposite movement: seeking forgiveness from people we have wronged, rather than waiting for them to come to us. Kshama is not meant only for people close to us. It is meant to reach further, to anyone we might otherwise hold a grudge against. Different communities mark this in different ways, so this article does not describe a specific custom here.

## Forgiving Yourself

Kshama is not only about other people. It also covers how you treat yourself when you get something wrong.

One useful way to apply it: notice what you did, sit with it honestly, correct your behaviour going forward, and then let it go instead of carrying private guilt or quiet anger at yourself. This is not an old, fixed formula. It is simply one practical way to bring kshama into how you treat yourself.

## Kshama and Karma

Jain philosophy connects anger with karma, the subtle matter Jains believe attaches to the soul through our thoughts, words and actions. Anger is one of the kashayas, the passions said to cause this attachment. The Tattvartha Sutra places the ten virtues, including kshama, within its discussion of samvara, the stopping of new karma before it attaches. Letting go of anger fits into that larger effort.

This article does not claim that forgiving someone removes karma they have already taken on through a wrong they did. Jain teaching treats that as a separate matter. Letting go of your own anger changes your own situation. It does not change someone else's.

## Practising Uttam Kshama Today

Here are some simple ways to bring kshama into daily life. These are practical ideas, not scriptural commandments.

Pause before responding to an insult.

Notice anger as it comes up, before you act on it.

Avoid snapping back, even when a sharp reply feels justified.

Think before judging someone else's motives.

Own your mistakes honestly, rather than brushing past them.

Say sorry when it's the right thing to do, without waiting to be asked.

Forgive without pretending nothing happened. The two are not opposites.

If it fits your practice, use pratikraman, or a similar moment of daily reflection, to look back on the day and ask forgiveness where it's needed.

## A Deeper Look at Kshama

At a deeper level, kshama is not just a social rule about saying sorry or accepting an apology. It is about how we relate to anger, resentment and the urge to hit back when we're hurt. The Jain ideal is a mind where these feelings have less and less pull over how we act.

## Reflection

When anger rises, what am I protecting?

When I forgive, what am I letting go of?

Can I correct what went wrong without carrying resentment forward?

These questions are ours, not a scripture quote. Use them however is useful to you.

Uttam Kshama begins with something very simple: when anger rises, we choose not to let it decide our next action.

## Sources & Further Reading

Tattvartha Sutra, chapter 9, verse 6, with Acharya Pujyapada's Sarvarthasiddhi commentary. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Supreme Forgiveness (Uttama Kshama Dharma)": https://jainworld.jainworld.com/jainbooks/images/31/SUPREME_FORGIVENESS.htm

Jainworld, "Supplements to Ahimsa-Vrata," The Jaina Path of Ahimsa: https://jainworld.com/library/jain-books/books-on-line/jainworld-books-in-indian-languages/the-jaina-path-of-ahimsa/supplements-to-ahimsa-vrata/

Jain Digest, September/October 2013: https://jainworld.jainworld.com/JWEnglish/Magazines/Jain_Digest_Sept_Oct_2013.pdf

English Pratikraman: Introduction for English-Speaking Jains: https://jainqq.org/booktext/English_Pratikraman_Introduction_for_English_Speaking_Jains/320010

A note on sources: we could not directly access Jainworld, the Jain Digest PDF, or the Pratikraman text while writing this article, and reached the Tattvartha Sutra source only through search summaries rather than its full text. Where this article draws on general Jain knowledge rather than these five sources directly, that is noted in the text above.`

const UTTAM_MARDAVA_BODY = `## What Is Uttam Mardava?

Uttam Mardava is the second virtue of Das Lakshan Dharma. Mardava is usually translated as humility, modesty or tenderness. In Jain thought, it means letting go of the pride that makes us feel better than other people.

The Tattvartha Sutra describes it simply: freedom from the arrogance that can come from things like high birth or rank. Mardava is not about hiding your abilities. It is about not using them to look down on anyone.

## Why Humility Matters

Pride shows up in small, everyday thoughts. "I come from a better family." "I have more money." "I am more educated." "I know more about religion than they do." On their own, these thoughts can seem harmless. The problem starts when we use them to measure our worth against someone else, and quietly decide we come out ahead.

Jain teaching treats this kind of pride as a real obstacle. It gets in the way of seeing other people clearly, and it gets in the way of our own spiritual growth. A proud mind is a closed mind. It stops listening once it has decided it already knows better. Mardava asks us to notice this pattern and let it go.

## The Pride We Often Carry

Jain texts describe several common sources of pride. Ancestry and family name. Social standing. Wealth. Beauty. Education and intelligence. Religious knowledge. Even austerity and spiritual achievement can quietly turn into something to feel proud of. Jainworld's account of this virtue describes a person who feels no pride in ancestry, beauty, clan, learning or scriptural knowledge as someone living out true mardava.

The point is simple. Every one of these things can change. Wealth can be lost. Beauty fades. Family reputation shifts with time and circumstance. Even knowledge and achievement are not fixed. They can grow, and they can also be forgotten or overtaken by someone else. Building your sense of worth on things that can disappear is, in Jain terms, a shaky foundation.

## Humility Is Not Weakness

Mardava does not mean letting people walk over you. It does not mean pretending you have no skills, hiding your achievements, or having no self-respect.

What it means is simpler: not turning your abilities or achievements into a reason to feel superior to someone else. You can be confident and humble at the same time. The difference is not in what you have. It is in how you hold it.

## All Souls Are Equal

Jain philosophy holds that every soul has the same basic spiritual potential. Someone may have more money, more education or a higher social position than another person. That does not make their soul more valuable.

This is not a claim that everyone's circumstances in life are the same. They clearly are not. The point is about spiritual worth, not worldly comparison. In Jain teaching, the path toward liberation stays open to any soul, whatever their outward circumstances happen to be. A person with less money, less education or a humbler background is not, on that account, further from it.

## Uttam Mardava in Everyday Life

These are practical ways to bring mardava into daily life, not scriptural rules:

Listen when someone else knows more than you.

Accept correction without getting defensive.

Give credit to other people, especially when it is due.

Do not use your family name, wealth or education to look down on someone.

Treat people the same regardless of their position.

Notice when success starts turning into arrogance.

Remember that no achievement makes you spiritually superior to another person.

## A Deeper Look at Mardava

At its core, mardava is about the pride inside you, not about how you appear to others. Someone can act humble in public, use modest words, downplay their own achievements, and still feel superior underneath. That is not the goal. A performance of humility is still a form of pride, just a quieter one.

Real mardava is quieter still. It shows up less in what you say about yourself and more in how you actually treat other people, especially people who have less than you do, in whatever sense "less" means at that moment.

## Reflection

Do I feel superior to someone because of my family, education or money?

How do I react when someone corrects me?

Can I be proud of something I have done without feeling better than someone else?

What would change if I remembered that every soul has the same potential for liberation?

These questions are ours, not a scripture quote.

## Sources & Further Reading

Tattvartha Sutra, chapter 9, verse 6, with Acharya Pujyapada's Sarvarthasiddhi commentary. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Supreme Tenderness or Humility (Uttama Mardava Dharma)": https://jainworld.jainworld.com/jainbooks/images/31/SUPREME_TENDERNESS_OR_HUMIL.htm

Jainworld, "Supplements to Ahimsa-Vrata": https://jainworld.jainworld.com/jainbooks/ahimsa/supahimsa.htm

Jain Digest, September/October 2013: https://jainworld.jainworld.com/JWEnglish/Magazines/Jain_Digest_Sept_Oct_2013.pdf

Jain Quantum, Compendium of Jainism: https://jainqq.org/booktext/samaysar_Romanized/000021

A note on sources: we reached the Tattvartha Sutra and Jainworld material through search summaries rather than the full original text, and could not directly access the Jain Digest PDF or the Jain Quantum page. Where this article draws on general Jain teaching rather than these sources directly, that is noted in the text above.`

const UNDERSTANDING_AHIMSA_BODY = `## What Is Ahimsa?

Himsa means violence or injury. Ahimsa means the opposite: non-violence, non-injury. It is one of the central ideas in Jain thought, and probably the one most people already know something about.

Ahimsa asks for more than simply not hurting someone with your hands, though. The Tattvartha Sutra describes himsa as harm caused through careless action of mind, body and speech. So ahimsa covers all three. What we do, what we say, and what we think.

## Why Ahimsa Is So Important in Jainism

Jain teaching holds that life exists in many forms, not only in people and animals we notice easily, but in the smallest and simplest forms of life too. Some living beings have only one sense, like touch. Others have more senses, closer to what we recognise in animals and in ourselves.

Because of this, Jain ethics asks us to be careful. Harming any living being, even by accident or carelessness, is treated seriously. This does not mean every action becomes impossible. It means we are asked to pay attention, and to avoid harm we could reasonably prevent.

## Ahimsa in Action

The most familiar form of ahimsa is physical. Not killing or hurting animals is part of it, and so is avoiding careless or rough treatment of any living being.

Jain teaching pays close attention to intention. Accidentally stepping on an insect while walking is different from deliberately harming it. Jain practice does not expect a person to achieve impossible perfection. It asks for care and awareness, and for avoiding the harm that could reasonably have been avoided.

## Ahimsa in Speech

Ahimsa does not stop at the body. Words can hurt too. Insults, cruel remarks, and speech meant to humiliate someone are all forms of harm in Jain thought.

This does not mean ahimsa asks us to stay silent about difficult truths. It is possible to be honest and still be careful. The question is not whether something is hard to say. It is whether we are saying it with unnecessary cruelty.

## Ahimsa in Thought

Jain thought takes this one step further. Even a thought can carry harm, when it is filled with anger, hatred or the wish to see someone suffer.

This is a careful point, worth stating precisely. Having an angry thought is not treated as identical to committing physical violence. Jain teaching connects passions like anger with karma, the way our actions are believed to affect the soul, but it does not collapse the difference between a fleeting feeling and an actual act. What matters is noticing these thoughts, rather than letting them grow and shape how we act.

## Ahimsa and Everyday Life

Ahimsa becomes real in ordinary moments, not only in big decisions. A few examples:

Choosing words carefully instead of speaking in anger.

Pausing before reacting when something upsets you.

Treating animals, and the people around you, with basic care.

Noticing when a habit or choice causes harm you had not thought about.

These are everyday ways to bring ahimsa into daily life. They are not a complete list of every situation ahimsa applies to, and they are not scriptural commandments in themselves.

## Ahimsa and the Jain Way of Life

Ahimsa connects to other parts of Jain practice. Self-restraint limits the situations where harm might happen. Compassion shapes how we treat other beings, not only as a rule but as an attitude. Carefulness in daily actions is itself considered a form of respect for life.

Ahimsa is also the first of the Jain vows observed by both monastics and laypeople, though the shape it takes differs between the two. This article does not try to explain the full system of Jain vows. It is enough to say that ahimsa sits at the centre of them.

## A Deeper Look at Ahimsa

Ahimsa in Jain thought is not only a rule about outward behaviour. It also concerns the attitude behind our actions.

Two people can perform the same act and mean something different by it. One acts out of carelessness or irritation. The other acts with awareness and care. Jain teaching treats that difference as real. Ahimsa asks for the second kind of attention, not just the right outward result.

## Practising Ahimsa Today

Here are some simple ways to reflect on ahimsa in everyday life.

Notice your words before you speak them, especially in anger.

Pause before reacting to something that upsets you.

Treat animals and insects with basic care, even small ones.

Ask whether a habit of yours causes harm you had not noticed.

Practise patience with people who frustrate you.

These are practical reflections, not scriptural commandments.

## Reflection

Did my words cause unnecessary hurt today?

Did anger influence how I treated someone?

Was there a moment when I could have avoided causing harm?

How can I become more careful tomorrow?

These are JINVERSE's own reflection prompts, not scripture.

## Sources & Further Reading

Tattvartha Sutra with commentary, on the five vows and on the meaning of himsa and ahimsa. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary

Jainworld, "Philosophy of Jainism": https://jainworld.com/library/jain-books/books-on-line/jainworld-books-in-indian-languages/the-jaina-path-of-ahimsa/philosophy-of-jainism/

Jainworld, "Living Being (Jiv-Soul)": https://jainworld.com/philosophy/fundamentals/living-being-jiv-soul/

A note on sources: we reached this material through search summaries rather than the full original texts. Where this article draws on general Jain teaching rather than a specific source above, that is noted in the text itself.`

export const articles = [
  { slug: 'what-is-jainism', title: 'What Is Jainism?', subtitle: 'An introduction to one of the world’s oldest living paths to liberation.', category: 'Beginner’s guide', readingTime: '6 min read', excerpt: 'Jainism centers on the liberation of the soul through non-violence, self-discipline and right understanding.' },
  { slug: 'bharatavarsha-bharat-chakravarti', title: 'Bharatavarsha: The Land of Bharat Chakravarti', subtitle: 'The sacred story of Bhagwan Rishabhadeva, Bharat Chakravarti and the name of our great land.', category: 'History', readingTime: '9 min read', excerpt: 'Discover the Jain tradition of Adinath Bhagwan as the first civilizational teacher and Bharat Chakravarti as the sovereign whose name lives on in Bharatavarsha.' },
  { slug: 'understanding-ahimsa', title: 'Understanding Ahimsa', subtitle: 'Why non-violence in Jain thought reaches into action, speech and thought alike.', category: 'Philosophy', readingTime: '9 min read', excerpt: 'Ahimsa is not merely the absence of violence. It is a disciplined reverence for every living being.', body_markdown: UNDERSTANDING_AHIMSA_BODY },
  { slug: 'the-universe-within', title: 'The Universe Within', subtitle: 'What the Jain concept of the soul asks us to see in ourselves.', category: 'Philosophy', readingTime: '7 min read', excerpt: 'Jain metaphysics holds that every soul carries within it the capacity for complete purity and infinite knowledge.' },
  { slug: 'uttam-kshama', title: 'Uttam Kshama: The Jain Virtue of Supreme Forgiveness', subtitle: 'The first of the ten Das Lakshan virtues: forbearance, forgiveness and freedom from anger.', category: 'Jain Philosophy / Das Lakshan', readingTime: '8 min read', excerpt: "Uttam Kshama, the first of the ten Das Lakshan virtues, means supreme forgiveness. Not mere niceness or suppressed anger, but a steady freedom from ill will, even when we're insulted or provoked.", body_markdown: UTTAM_KSHAMA_BODY },
  { slug: 'uttam-mardava', title: 'Uttam Mardava: The Jain Virtue of Humility', subtitle: 'The second of the ten Das Lakshan virtues: letting go of the pride that makes us feel better than others.', category: 'Jain Philosophy / Das Lakshan', readingTime: '7 min read', excerpt: "Uttam Mardava, the second of the ten Das Lakshan virtues, means humility. Not weakness or hiding your abilities, but letting go of the pride that puts you above other people.", body_markdown: UTTAM_MARDAVA_BODY },
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
