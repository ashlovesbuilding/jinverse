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

const UTTAM_ARJAVA_BODY = `## What Is Uttam Arjava?

Uttam Arjava is the third virtue of Das Lakshan Dharma. Arjava is usually translated as straightforwardness, honesty or simplicity. In simple terms, it means keeping our thoughts, words and actions free from deceit.

The Tattvartha Sutra describes it directly: arjava is freedom from crookedness in activity, and it means giving up maya, the Jain word for deceit. Where kshama deals with anger and mardava deals with pride, arjava deals with this third kind of inner crookedness.

## What Does "Straightforward" Mean?

The word can sound vague, so it helps to be precise about what Jain teaching means by it.

Arjava is not the same as speaking bluntly, saying whatever comes to mind, or being socially direct. Being blunt can still be a form of crookedness if it hides a different motive underneath. Jain sources describe true straightforwardness as when your thought, your words and your actions all point the same way. What you think matches what you say, and what you say matches what you do.

If we praise someone to their face while quietly working against them behind their back, there is a gap between our words and our intentions. Arjava asks us to close that gap, not by saying everything we think, but by not letting our outer behaviour contradict our real intentions.

## Arjava and Deceit

Jain philosophy calls deceit maya. It is counted among the passions, called kashayas, that Jain teaching connects with anger, pride and greed. Arjava is the virtue that works directly against maya.

The point is simple. Deceit creates a gap between how we appear and what we actually intend. That gap can grow into a habit, where a person gets so used to presenting a false face that even they lose track of their real motives.

## Being Honest With Ourselves

Straightforwardness is not only about lying to other people. It also means being honest with yourself.

That can mean admitting your own mistakes instead of explaining them away. It can mean being clear with yourself about your real intentions, rather than dressing up a selfish motive as a generous one. It can mean noticing your own weaknesses instead of pretending you do not have them, and asking honestly whether you believe what you are saying, or are just saying what sounds good.

## Arjava in Speech and Action

Straightforwardness shows up in small, everyday choices.

Saying what you actually mean, instead of deliberately creating a false impression.

Admitting a mistake instead of covering it up.

Keeping promises where you reasonably can.

Being honest in business and personal dealings, even when a small deception would be easier.

Not using religious or moral language to appear more virtuous than you actually are.

That last point is worth naming clearly, as a practical application rather than a fixed rule. Using pious words is not automatically wrong. The concern is using them to build a false impression, rather than living out what they describe.

## Straightforwardness Is Not Harshness

Arjava does not give anyone permission to be rude. "I'm just being honest" is sometimes used as an excuse to say something hurtful without thinking about the effect. That is not what this virtue asks for.

Jain teaching also values truthful, careful speech. Arjava and that concern for how our words land work together, not against each other. Being straightforward still leaves room for choosing your words with care.

## Why Deceit Is a Problem

A deceitful life creates a gap between what we think, what we say, and what we do. The wider that gap grows, the harder it becomes to make real spiritual progress, because so much energy goes into managing appearances instead of actually changing.

Arjava is the effort to close that gap, so a person's inner life and outer life stop working against each other.

## Practising Uttam Arjava Today

Say what you mean, without deliberately misleading someone.

Admit mistakes instead of trying to hide them.

Check your real intention before making an important promise.

Avoid building a false image of yourself.

Try to keep your private actions reasonably consistent with the values you claim in public.

If you realise you have deceived someone, acknowledge it and correct it where you can.

These are practical ways to bring arjava into daily life, not a complete list of scriptural commands.

## A Deeper Look at Arjava

The Jain ideal is not simply appearing honest. A person can look honest on the outside while still holding on to small deceptions inside.

Arjava is really about that inner tendency toward crookedness, not just outward reputation. The goal is not to be seen as straightforward. It is to actually be that way, even when no one else would know the difference.

## Reflection

Do my words and actions usually match my intentions?

Do I sometimes create an image of myself that is different from reality?

How do I react when admitting a mistake would make me look bad?

Can I be honest without becoming harsh?

These are JINVERSE's own reflection prompts, not scripture.

## Sources & Further Reading

Tattvartha Sutra, chapter 9, verse 6, with Acharya Pujyapada's Sarvarthasiddhi commentary. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Ten Universal Virtues": https://jainworld.jainworld.com/jainbooks/Books/Ten%20Universal%20Virtues%200%20-%2010%20final%20done.htm

Jainworld, "Supplements to Ahimsa-Vrata": https://jainworld.jainworld.com/jainbooks/ahimsa/supahimsa.htm

Jainworld, "Ten Universal Virtues" (PDF): https://jainworld.jainworld.com/pdf/Ten%20Universal%20Virtues%200%20-%2010%20final%20done.pdf

Jainworld, "Prescription of Ethical Code": https://jainworld.jainworld.com/jainbooks/antiquity/ethcjain.htm

A note on sources: we reached this material through search summaries rather than the full original texts, and could not directly access the PDF version. Where this article draws on general Jain teaching rather than a specific source above, that is noted in the text itself.`

const UTTAM_SHAUCHA_BODY = `## What Is Uttam Shaucha?

Uttam Shaucha is the fourth virtue of Das Lakshan Dharma. Shaucha is often translated as purity, but in this context it means something more specific. The Tattvartha Sutra puts it simply: shaucha is freedom from greed.

Where arjava deals with honesty and mardava deals with pride, shaucha deals with our relationship to possessions and desire. It asks us to notice when wanting more has taken over, and to find contentment instead.

## Why Shaucha Means More Than Cleanliness

The word shaucha can suggest cleanliness, and in everyday Hindi it often does mean exactly that. In the context of Das Lakshan, though, the meaning runs deeper.

Jain teaching connects shaucha to purity of mind as much as anything external. A person can keep a spotless home and still be consumed by wanting more money, more possessions or more status. Shaucha is not concerned with tidiness. It is concerned with what is happening inside a person who keeps chasing more.

## Contentment and Greed

Greed, called lobha in Sanskrit, is one of the four passions Jain philosophy connects with karmic bondage, alongside anger, pride and deceit. Shaucha is the virtue that works directly against lobha.

Contentment does not mean having nothing. It means not being disturbed by what you lack. A content person can own things and use them freely, without that ownership becoming the centre of their thinking. Someone caught in greed, by contrast, can have a great deal and still feel like it is never enough.

## The Desire for More

Wanting more is easy to justify. A bigger income feels like security. A larger home feels like comfort. More recognition feels like proof that our effort mattered.

Jain teaching does not treat these desires as automatically wrong. What it asks us to notice is the pattern behind them, the sense that satisfaction is always just one more thing away. That pattern rarely stops once it starts. Getting the next thing tends to create a new want, rather than settling the old one.

## Possessions and Inner Peace

There is a real connection in Jain thought between how tightly we hold on to things and how much peace we actually have.

Shaucha is not just about what we own. It is about how we relate to what we own. A person who can lose something without being shattered by it has a kind of freedom that a person clinging tightly to every possession does not have. This is not a claim that loss is easy. It is a claim that our attachment shapes how much any loss can disturb us.

## Shaucha in the Life of a Householder

Digambara Jain monastics practise this virtue in a radical way, owning almost nothing. Most people reading this are not monastics, and Jain teaching does not expect the same standard from a householder living an ordinary life with a job, a family and responsibilities.

For a householder, shaucha shows up differently. It looks like earning and owning what is genuinely needed, without letting the pursuit of more crowd out everything else. It looks like noticing when ambition has quietly turned into greed.

## Contentment Does Not Mean Giving Up Responsibility

It is worth being direct about this. Practising shaucha does not mean neglecting your family, giving away your income, or refusing to plan for the future.

A parent providing for their children, a person saving for a real need, or someone building a stable life are not failing at shaucha. The virtue is not about how much you hold. It is about whether greed, rather than genuine need or care for others, is driving your choices.

## Why Greed Creates Bondage

Jain philosophy classifies lobha as one of the kashayas, the passions that bind karmic matter to the soul. Actions, words and thoughts shaped by greed are understood to deepen this bondage rather than loosen it.

Greed also keeps attention fixed outward, on what is missing, rather than inward, on the soul's actual condition. Shaucha loosens that grip. It does not claim to erase every desire overnight. It asks for a steady move away from being ruled by wanting more.

## Practising Uttam Shaucha Today

Notice when "I want this" turns into "I need this."

Ask whether a purchase or goal comes from real need or from comparison with someone else.

Practise being satisfied with what you already have, even while working toward more.

Give something away occasionally, simply to loosen your grip on it.

Pay attention to how you feel when you cannot get something you wanted.

These are practical ways to bring shaucha into daily life, not a complete list of scriptural commands.

## A Deeper Look at Shaucha

At its heart, shaucha is not really about objects. It is about the mind's habit of measuring happiness by what it has or lacks.

A person practising shaucha is working to loosen that habit, so that contentment does not depend entirely on outside circumstances. This is a direction of practice, not something achieved quickly or completely by most people.

## Reflection

Do I have what I need, or am I constantly disturbed by what I do not have?

Do I use my possessions, or do they use me?

Where does my sense of "enough" actually come from?

Can I want something without needing it to feel content?

These are JINVERSE's own reflection prompts, not scripture.

## Sources & Further Reading

Tattvartha Sutra, chapter 9, verse 6, with Acharya Pujyapada's Sarvarthasiddhi commentary. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Ten Universal Virtues": https://jainworld.jainworld.com/jainbooks/Books/Ten%20Universal%20Virtues%200%20-%2010%20final%20done.htm

Jainworld, "Supplements to Ahimsa-Vrata": https://jainworld.jainworld.com/jainbooks/ahimsa/supahimsa.htm

Jainworld, "Prescription of Ethical Code": https://jainworld.jainworld.com/jainbooks/antiquity/ethcjain.htm

A note on sources: we reached this material through search summaries rather than the full original texts. Where this article draws on general Jain teaching rather than a specific source above, that is noted in the text itself.`

const UTTAM_SATYA_BODY = `## What Is Uttam Satya?

Uttam Satya is the fifth virtue of Das Lakshan Dharma. Satya means truthfulness, but Jain teaching treats it as more than simply not lying. It asks for speech that is honest, careful and genuinely helpful, not just factually correct.

The Tattvartha Sutra places satya among the ten virtues that help settle the mind and reduce the harm we cause through carelessness. Truthful speech, in this sense, is not just an ethical rule on its own. It is part of a wider discipline that includes how we act, what we own and how we speak.

## Why Truth Matters in Jainism

Speech has real weight in Jain thought. Words can build trust or destroy it, comfort someone or wound them, clarify a situation or confuse it further.

Because speech carries this kind of power, Jain teaching treats truthfulness as a serious discipline rather than a casual habit. Lying, exaggerating and misleading people are all treated as forms of harm, even when no one is physically hurt. Satya asks us to take that responsibility seriously.

## Truth and Ahimsa

Satya cannot really be separated from ahimsa, the Jain principle of non-violence. Classical Jain teaching holds that a statement being true does not automatically make it right to say. What also matters is its effect on the person hearing it.

Traditional guidance describes truthful speech as speech that helps rather than harms. Words that are accurate but spoken to wound, humiliate or destroy someone are treated as a kind of violence, even when every fact in them is correct. This does not mean Jain teaching allows false speech in order to spare someone's feelings. It means satya and ahimsa work together, and how a truth is delivered matters as much as whether it is true.

## More Than Simply Speaking Facts

Satya cannot be reduced to reciting accurate information. A person can state facts correctly and still mislead someone through tone, selective emphasis or a cruel choice of words.

Jain teaching asks for something closer to integrity in speech: saying what is true, in a way that is fair to the person listening. This includes avoiding half-truths designed to create a false impression, even when no single sentence spoken is technically a lie.

## Truthful Speech and Intention

Intention matters in Jain ethics as much as the words themselves. Speaking carelessly, exaggerating out of habit or twisting facts to win an argument are all treated differently from an honest mistake.

Someone who happens to say something true, without caring whether it is right, has not really practised satya. The virtue asks for attentiveness: checking what we actually know before we speak, and being honest about the difference between what we know and what we merely assume.

## When Silence Is Better Than Speech

Jain teaching does not ask a person to announce every true thing they know, regardless of the consequences. Where a true statement would cause serious, unnecessary harm, staying silent is often described as the better choice.

This is worth stating precisely. Choosing silence over a cruel truth is not the same as being permitted to lie. Satya does not become optional just because honesty is uncomfortable. The choice being described here is between speaking and staying quiet, not between telling the truth and telling a falsehood.

## Satya in Everyday Life

Truthfulness shows up constantly in ordinary situations, not only in dramatic ones.

Not exaggerating a story to make it more impressive.

Correcting a mistake instead of letting a false impression stand.

Keeping commitments made in words, not only in writing.

Being accurate in small things, like retelling something someone else said.

Avoiding gossip that spreads unverified claims about someone.

These examples show where satya applies. They are not a complete list of every situation it covers.

## Truthfulness Without Harshness

Being truthful does not give anyone permission to be unkind. "I'm just telling the truth" is sometimes used to excuse speech that is needlessly harsh.

Jain teaching consistently pairs truthfulness with care in how something is said. Choosing gentler words, better timing or a private conversation instead of a public one does not compromise satya. It is part of practising it well.

## Why Falsehood Creates Bondage

Jain philosophy links deceptive or careless speech to maya, the passion of deceit, and to the wider set of passions called kashayas that Jain teaching connects with karmic bondage.

Repeated dishonesty does more than damage relationships. It is understood to reinforce habits of mind that keep a person further from spiritual clarity. Truthful speech, by contrast, is treated as part of the discipline that helps settle the mind rather than unsettle it.

## Practising Uttam Satya Today

Pause before repeating something you have not verified.

Notice when you are exaggerating to make a point.

Choose honest words delivered with care, rather than blunt words delivered without thought.

If speaking the full truth would cause serious harm, consider whether silence is the better choice, rather than reaching for a convenient lie.

Correct a false impression you have created, even if it is inconvenient to do so.

These are practical ways to bring satya into daily life, not a complete list of scriptural commands.

## A Deeper Look at Satya

At a deeper level, satya is not only about the words leaving your mouth. It concerns whether your understanding, your intention and your speech line up with each other.

Someone can be technically accurate and still fall short of this virtue, if their words are used to manipulate rather than to genuinely communicate. Satya asks for honesty that runs all the way through, not just honesty at the surface.

## Reflection

Are my words true, necessary, and spoken without causing avoidable harm?

Do I exaggerate to make myself look better?

When have I chosen silence over cruelty, and did I get that balance right?

Is there a false impression I am letting stand because correcting it is inconvenient?

These are JINVERSE's own reflection prompts, not scripture.

## Sources & Further Reading

Tattvartha Sutra, chapter 9, verse 6, with Acharya Pujyapada's Sarvarthasiddhi commentary. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Ten Universal Virtues": https://jainworld.jainworld.com/jainbooks/Books/Ten%20Universal%20Virtues%200%20-%2010%20final%20done.htm

Jainworld, "Supplements to Ahimsa-Vrata": https://jainworld.jainworld.com/jainbooks/ahimsa/supahimsa.htm

Jainworld, "Prescription of Ethical Code": https://jainworld.jainworld.com/jainbooks/antiquity/ethcjain.htm

A note on sources: we reached this material through search summaries rather than the full original texts. Where this article draws on general Jain teaching rather than a specific source above, that is noted in the text itself.`

const UTTAM_SANYAM_BODY = `## What Is Uttam Sanyam?

Uttam Sanyam is the sixth virtue of Das Lakshan Dharma. Sanyam is usually translated as self-restraint or self-control. It is the discipline of governing your own senses, mind, speech and actions, rather than being pulled along by every impulse that arises.

The Tattvartha Sutra describes samyama as care in how we act, so that we avoid harming living beings and are not simply driven by whatever sensory pleasure is in front of us. It builds on the virtues before it. Kshama governs anger, mardava governs pride, arjava governs honesty, shaucha governs greed, satya governs speech. Sanyam brings these together into a wider discipline covering the whole person.

## What Does Self-Restraint Mean?

Self-restraint can sound negative, like a long list of things you are not allowed to do. Jain teaching frames it differently.

Sanyam is a positive discipline. It is the ability to choose your actions instead of simply reacting to whatever your senses or emotions push you toward. A person practising sanyam is not necessarily doing less. They are doing things more deliberately, with attention to their effect on themselves and on other living beings.

## The Six Areas of Restraint

Jain teaching describes self-restraint across six areas: the five senses of touch, taste, smell, sight and hearing, plus a sixth, the mind.

Each sense pulls us toward something: comfort, taste, attraction, sound. Left unchecked, these pulls can quietly run a person's life. Sanyam does not ask us to stop sensing the world. It asks us to notice the pull and choose our response, rather than being carried along by whichever one is strongest.

## Controlling the Senses

Restraining the senses does not mean becoming numb to the world. It means not letting every craving or aversion dictate your behaviour.

A simple example is food. Eating is necessary, and Jain teaching does not treat eating itself as a problem. What sanyam asks about is whether a person eats with awareness, or is simply chasing taste without limit. The same pattern applies to sound, sight, touch and smell. The senses are not the enemy. Being ruled by them is what sanyam works against.

## Restraining the Mind

The sixth area, the mind, is often the hardest to restrain. Thoughts wander into anger, comparison, resentment and desire long before any outward action happens.

Jain teaching connects this mental restraint to the four kashayas already familiar from earlier Das Lakshan virtues: anger, pride, deceit and greed. A restrained mind notices these passions rising and does not automatically act on them. Two related ideas from Jain practice describe this. Samiti is careful attention in ordinary activity, such as how one walks, speaks, eats and handles objects, so as not to cause avoidable harm. Gupti is a deeper restraint of mind, speech and body themselves. Together they describe a movement from watching your actions carefully to eventually needing less watching, because the mind has settled.

## Restraint and Compassion for Living Beings

Sanyam is not only personal discipline. It has an outward dimension too, care for other living beings.

Careless movement, careless speech and careless action can all cause harm without anyone intending it. Restraint in how a person walks, speaks and handles things is described in Jain teaching as a way of protecting other life from unnecessary injury. Self-restraint and compassion for others are treated as two sides of the same practice, not separate concerns.

## Sanyam Is Not Suppression

It is worth being direct about this. Sanyam is not punishment, denial for its own sake, or forcing yourself to feel nothing.

Suppressing anger while still seething inside is not the same as restraining it. Denying a desire out of guilt is not the same as understanding it and choosing not to act on it. Jain teaching asks for a real change in how a person relates to their impulses, not a performance of control that hides what is happening underneath.

## Why Self-Restraint Matters

An unrestrained life tends to be reactive. Something happens, and the senses or emotions respond immediately, without space for reflection.

Jain philosophy connects this kind of restraint to samvara, the stopping of new karma from attaching to the soul. Careless action driven by unchecked passion is understood to deepen karmic bondage. Restraint, by contrast, is part of the discipline that helps quiet that process. This is not presented as an instant transformation, but as a direction of steady practice.

## Sanyam in Everyday Life

Pausing before reacting to an urge or an irritation.

Eating and consuming with some awareness, rather than on autopilot.

Being careful with words instead of speaking the first thing that comes to mind.

Handling objects, tasks and other people's time with a bit more care.

Noticing when a small comfort has quietly become something you cannot do without.

These are practical ways to bring sanyam into daily life. A monk's discipline goes much further, and Jain teaching does not expect a householder to match it exactly. Each person is asked to practise restraint according to their own life and capacity.

## From Outer Control to Inner Freedom

Early practice of sanyam can feel effortful, like constantly checking yourself. Jain teaching treats this as the starting point, not the destination.

Over time, the aim is for restraint to become less about forcing yourself to hold back and more about a mind that no longer wants what it once could not resist. What begins as outer control is meant to grow into a kind of inner freedom.

## A Deeper Look at Sanyam

Sanyam names the larger discipline that the earlier virtues all belong to: restraint across the whole of a person's senses, mind and conduct, not just one part of it.

This is not the entire path to liberation, but Jain teaching treats it as an essential part of it.

## Reflection

Am I choosing my actions, or are my impulses choosing for me?

Which of my senses is hardest for me to restrain?

Do I confuse suppressing a feeling with actually understanding it?

Where in my day could a small pause change how I act?

These are JINVERSE's own reflection prompts, not scripture.

## Sources & Further Reading

Tattvartha Sutra, chapter 9, verse 6, with Acharya Pujyapada's Sarvarthasiddhi commentary. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Ten Universal Virtues": https://jainworld.jainworld.com/jainbooks/Books/Ten%20Universal%20Virtues%200%20-%2010%20final%20done.htm

Jainworld, "Supplements to Ahimsa-Vrata": https://jainworld.jainworld.com/jainbooks/ahimsa/supahimsa.htm

A note on sources: we reached this material through search summaries rather than the full original texts. Where this article draws on general Jain teaching rather than a specific source above, that is noted in the text itself.`

const UTTAM_TAP_BODY = `## What Is Uttam Tap?

Uttam Tap is the seventh virtue of Das Lakshan Dharma. Tap, often written as tapas, means austerity or self-discipline: the practices Jain tradition uses to loosen a person's attachment to bodily comfort and sensory pleasure, and to bring the passions under control.

The Tattvartha Sutra names tapas among the causes of nirjara, the gradual shedding of karma already bound to the soul. Where sanyam, the virtue before it, restrains the senses and mind in daily conduct, tap is a more deliberate practice aimed at wearing down that karma directly.

## What Does Tap Mean in Jainism?

Tap is often translated as austerity, but that word can sound harsher than what is meant. At its core, tap is a chosen discipline, not something imposed from outside: voluntarily accepting some hardship or restriction, in eating, comfort or activity, for a spiritual reason. The word is related to heat, in the sense of something that burns away impurity, and Jain teaching treats tap as a way of burning off the karmic matter that clings to the soul through past action, thought and speech.

## More Than Fasting

When people hear the word austerity in a Jain context, fasting is usually the first thing that comes to mind. Fasting is a real and valued part of tap, but it is only one practice among many.

Jain sources describe twelve forms of austerity, six external, involving the body and outward conduct, and six internal, involving the mind and inner discipline. Reducing tap to fasting alone misses most of what the tradition actually asks for.

## The Six External Austerities

Anashana is fasting, giving up food for a set period. Unodari is eating less than one's full appetite, even while eating regularly. Vritti-parisankhyana is limiting the conditions under which one will accept food. Rasa-parityaga is giving up rich tastes or foods that tend to feed craving. Vivikta-shayya-asana is choosing a quiet, secluded place to sit or rest, away from distraction. Kaya-klesha is willingly bearing physical discomfort, such as heat, cold or a difficult posture, without complaint.

These practices are external because another person can observe them. Their purpose is internal: to loosen the body's grip on comfort and the mind's grip on the body.

## The Six Internal Austerities

The internal austerities are harder to see from outside, because they work on the mind and character directly. Prayashchitta is repentance, honestly facing and correcting one's own faults. Vinaya is humility and respect, especially toward teachers and those further along the path. Vaiyavritya is service, caring for others, especially monks, the sick or the suffering. Svadhyaya is study, reading and reflecting on scripture so that understanding deepens. Vyutsarga is letting go, detaching from the body and from possessions one has grown too attached to. Dhyana is meditation, steadying the mind rather than letting it run in every direction.

Together, the twelve forms cover the whole person: body, conduct and mind.

## Why Austerity Matters

Jain philosophy holds that karma is a subtle kind of matter that binds to the soul through action driven by attachment and aversion. Right conduct can stop new karma from binding, a process called samvara. Tap goes further: it weakens the passions, anger, pride, deceit and greed, that keep drawing karma in, so a person is less driven to the reactive thought and action that generates new karmic bondage.

## Tap Is Not Self-Punishment

It matters to be clear here. Tap is not suffering for its own sake, and Jain teaching does not treat physical pain as valuable in itself. A fast undertaken in anger, or hardship endured to impress others, is not what the tradition means by austerity. What makes an action tapas is the intention behind it: a calm, willing acceptance of discipline for the sake of reducing attachment and passion, not a performance of deprivation.

## Tap and the Shedding of Karma

Karma already bound to the soul does not simply disappear with time. It has to be worked out, either through experiencing its effects or through disciplined practice that hastens its release. Tap is an active hand in that process, rather than waiting passively for karma to run its course.

## Tap in the Life of a Householder

Jain monks practise austerity far more intensely than a layperson typically would, including extended fasting and a life stripped of most comforts. This is not the standard expected of every Jain householder.

A householder can practise tap through moderate fasting, eating with more restraint, giving up a favourite food for a time, studying scripture, sitting in quiet reflection, or honestly repenting a fault. What matters is that the practice suits the person's own capacity, not that it matches monastic discipline. None of this is a substitute for medical guidance about eating or health.

## Practising Tap Today

A short fast during Das Lakshan or another observed period, kept within reason.

Cutting back on rich or excessive food for a day or a week.

Setting aside time for quiet study or reflection instead of constant distraction.

Honestly acknowledging a mistake instead of excusing it.

## A Deeper Look at Tap

Tap works alongside the virtues that come before it in Das Lakshan Dharma. Where kshama, mardava, arjava, shaucha, satya and sanyam shape how a person responds to anger, pride, dishonesty, greed and impulse, tap actively loosens the deeper hold those patterns have on the soul. It is a demanding practice, but Jain teaching frames it as a chosen discipline aimed at freedom, not a punishment imposed from outside.

## Reflection

What am I willing to give up so that my inner life becomes stronger?

Do I treat comfort as something I need, or something I have simply grown used to?

Is there a habit I keep out of craving rather than real need?

Could a small, deliberate restraint teach me something about my own attachments?

These are JINVERSE's own reflection prompts, not scripture.

## Sources & Further Reading

Tattvartha Sutra, chapter 9, verses 3, 6 and 19 through 26, with commentary where available. wisdomlib.org: https://www.wisdomlib.org/jainism/book/tattvartha-sutra-with-commentary/d/doc1084897.html

Jainworld, "Ten Universal Virtues": https://jainworld.jainworld.com/jainbooks/Books/Ten%20Universal%20Virtues%200%20-%2010%20final%20done.htm

Jainworld, "Supplements to Ahimsa-Vrata": https://jainworld.jainworld.com/jainbooks/ahimsa/supahimsa.htm

Jainworld, "Austerities (Taps)": https://jainworld.com/philosophy/austerities-taps/

Jainworld, "Daily Practices and Recitations": https://jainworld.jainworld.com/jainbooks/explain/e9.htm

A note on sources: we reached this material through search summaries rather than the full original texts. Where this article draws on general Jain teaching rather than a specific source above, that is noted in the text itself.`

export const articles = [
  { slug: 'what-is-jainism', title: 'What Is Jainism?', subtitle: 'An introduction to one of the world’s oldest living paths to liberation.', category: 'Beginner’s guide', readingTime: '6 min read', excerpt: 'Jainism centers on the liberation of the soul through non-violence, self-discipline and right understanding.' },
  { slug: 'bharatavarsha-bharat-chakravarti', title: 'Bharatavarsha: The Land of Bharat Chakravarti', subtitle: 'The sacred story of Bhagwan Rishabhadeva, Bharat Chakravarti and the name of our great land.', category: 'History', readingTime: '9 min read', excerpt: 'Discover the Jain tradition of Adinath Bhagwan as the first civilizational teacher and Bharat Chakravarti as the sovereign whose name lives on in Bharatavarsha.' },
  { slug: 'understanding-ahimsa', title: 'Understanding Ahimsa', subtitle: 'Why non-violence in Jain thought reaches into action, speech and thought alike.', category: 'Philosophy', readingTime: '9 min read', excerpt: 'Ahimsa is not merely the absence of violence. It is a disciplined reverence for every living being.', body_markdown: UNDERSTANDING_AHIMSA_BODY },
  { slug: 'the-universe-within', title: 'The Universe Within', subtitle: 'What the Jain concept of the soul asks us to see in ourselves.', category: 'Philosophy', readingTime: '7 min read', excerpt: 'Jain metaphysics holds that every soul carries within it the capacity for complete purity and infinite knowledge.' },
  { slug: 'uttam-kshama', title: 'Uttam Kshama: The Jain Virtue of Supreme Forgiveness', subtitle: 'The first of the ten Das Lakshan virtues: forbearance, forgiveness and freedom from anger.', category: 'Jain Philosophy / Das Lakshan', readingTime: '8 min read', excerpt: "Uttam Kshama, the first of the ten Das Lakshan virtues, means supreme forgiveness. Not mere niceness or suppressed anger, but a steady freedom from ill will, even when we're insulted or provoked.", body_markdown: UTTAM_KSHAMA_BODY },
  { slug: 'uttam-mardava', title: 'Uttam Mardava: The Jain Virtue of Humility', subtitle: 'The second of the ten Das Lakshan virtues: letting go of the pride that makes us feel better than others.', category: 'Jain Philosophy / Das Lakshan', readingTime: '7 min read', excerpt: "Uttam Mardava, the second of the ten Das Lakshan virtues, means humility. Not weakness or hiding your abilities, but letting go of the pride that puts you above other people.", body_markdown: UTTAM_MARDAVA_BODY },
  { slug: 'uttam-arjava', title: 'Uttam Arjava: The Jain Virtue of Straightforwardness', subtitle: 'The third of the ten Das Lakshan virtues: keeping thought, word and action free from deceit.', category: 'Jain Philosophy / Das Lakshan', readingTime: '7 min read', excerpt: 'Uttam Arjava, the third of the ten Das Lakshan virtues, means straightforwardness. Not bluntness, but honesty: closing the gap between what we think, what we say and what we do.', body_markdown: UTTAM_ARJAVA_BODY },
  { slug: 'uttam-shaucha', title: 'Uttam Shaucha: The Jain Virtue of Contentment', subtitle: 'The fourth of the ten Das Lakshan virtues: finding contentment and letting go of greed.', category: 'Jain Philosophy / Das Lakshan', readingTime: '7 min read', excerpt: 'Uttam Shaucha, the fourth of the ten Das Lakshan virtues, means contentment. Not merely cleanliness, but freedom from the greed that keeps us chasing more.', body_markdown: UTTAM_SHAUCHA_BODY },
  { slug: 'uttam-satya', title: 'Uttam Satya: The Jain Virtue of Truthfulness', subtitle: 'The fifth of the ten Das Lakshan virtues: honest, careful speech that avoids unnecessary harm.', category: 'Jain Philosophy / Das Lakshan', readingTime: '7 min read', excerpt: 'Uttam Satya, the fifth of the ten Das Lakshan virtues, means truthfulness. Not just stating facts, but speaking with honesty and care, in step with ahimsa.', body_markdown: UTTAM_SATYA_BODY },
  { slug: 'uttam-sanyam', title: 'Uttam Sanyam: The Jain Virtue of Self-Restraint', subtitle: 'The sixth of the ten Das Lakshan virtues: governing the senses, mind and conduct with care.', category: 'Jain Philosophy / Das Lakshan', readingTime: '7 min read', excerpt: 'Uttam Sanyam, the sixth of the ten Das Lakshan virtues, means self-restraint. Not suppression, but the discipline of choosing your actions rather than reacting to every impulse.', body_markdown: UTTAM_SANYAM_BODY },
  { slug: 'uttam-tap', title: 'Uttam Tap: The Jain Virtue of Austerity', subtitle: 'The seventh of the ten Das Lakshan virtues: disciplined restraint that loosens attachment and wears away karma.', category: 'Jain Philosophy / Das Lakshan', readingTime: '7 min read', excerpt: 'Uttam Tap, the seventh of the ten Das Lakshan virtues, means austerity. Far more than fasting, it is a disciplined practice of body and mind aimed at shedding karma and reducing attachment.', body_markdown: UTTAM_TAP_BODY },
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
