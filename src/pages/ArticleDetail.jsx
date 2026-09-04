import { useParams, Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import EvidenceLabel from '../components/ui/EvidenceLabel.jsx'
import { articles } from '../data/placeholderContent.js'

// Editorial placeholder bodies for the three launch articles. These draw
// only on claims already cleared in JINVERSE's research pack — nothing
// here introduces a new citation, date, or historical claim.
const BODIES = {
  'what-is-jainism': [
    {
      heading: 'A path devoted to liberation',
      status: 'tradition',
      text: 'Jainism teaches that every living being carries a soul, or jiva, capable of complete purification and ultimate liberation — moksha. The path there rests on the Three Jewels: right faith, right knowledge and right conduct, expressed through vows led by ahimsa, non-violence toward all living beings.',
    },
    {
      heading: 'Two living traditions',
      status: 'tradition',
      text: 'Two major communities carry this teaching forward today: Svetambara and Digambara. Both share the same essential philosophy and reverence for the Tirthankaras, differing chiefly in aspects of monastic practice and scriptural transmission.',
    },
  ],
  'understanding-ahimsa': [
    {
      heading: 'More than not causing harm',
      status: 'tradition',
      text: 'Ahimsa in Jain ethics reaches further than avoiding physical violence. It asks for restraint in thought and speech as well as action, on the understanding that every living being’s existence carries genuine weight.',
    },
    {
      heading: 'A practice, not an abstraction',
      status: 'tradition',
      text: 'Jain monastics and lay communities alike shape daily choices — diet, occupation, conduct — around this principle, making ahimsa one of the most consistently lived commitments in the tradition today.',
    },
  ],
  'the-universe-within': [
    {
      heading: 'The soul’s true nature',
      status: 'tradition',
      text: 'Jain philosophy describes the soul in its natural state as pure and possessed of boundless knowledge. What obscures that purity is karma — understood not as abstract consequence but as a subtle form of matter drawn to the soul through attachment and violence.',
    },
    {
      heading: 'Kevala jnana and the siddha state',
      status: 'tradition',
      text: 'A soul that completes the Jain path attains kevala jnana, complete and unobstructed knowledge, and upon death is liberated entirely from rebirth — entering the siddha state described in Jain scripture as pure, complete and beyond further change.',
    },
  ],
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  const body = BODIES[slug]

  if (!article) {
    return (
      <div className="container-page py-24 text-center">
        <p className="font-display text-2xl text-ivory">Article not found</p>
        <Link to="/articles" className="mt-4 inline-block text-sm text-gold-dim hover:text-gold">
          ← Back to articles
        </Link>
      </div>
    )
  }

  return (
    <article className="py-20">
      <div className="container-page max-w-prose">
        <Reveal>
          <Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">
            ← Back to articles
          </Link>
          <p className="mt-6 text-xs text-gold-dim">{article.category}</p>
          <h1 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">{article.title}</h1>
          <p className="mt-3 text-ivory-dim">{article.subtitle}</p>
          <p className="mt-3 text-xs text-ivory-dim/60">{article.readingTime}</p>
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10 flex aspect-[16/7] items-center justify-center border border-dashed border-line text-xs text-ivory-dim/60">
            Hero image placeholder
          </div>
        </Reveal>

        <div className="mt-12 space-y-10">
          {body ? (
            body.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60}>
                <h2 className="font-display text-xl text-ivory">{section.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{section.text}</p>
                <EvidenceLabel status={section.status} className="mt-4" />
              </Reveal>
            ))
          ) : (
            <p className="text-sm text-ivory-dim">
              Full article body is in preparation. This entry is currently shown as a placeholder listing only.
            </p>
          )}
        </div>

        <div className="mt-16 border-t border-line pt-8">
          <h3 className="text-xs uppercase tracking-wide text-ivory-dim/70">Source notes</h3>
          <p className="mt-2 text-xs leading-relaxed text-ivory-dim/70">
            This article distinguishes Jain tradition from independently established historical evidence
            throughout. Full citations are available on the JINVERSE Sources and Evidence page.
          </p>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <h3 className="text-xs uppercase tracking-wide text-ivory-dim/70">Related articles</h3>
          <ul className="mt-3 space-y-2">
            {articles
              .filter((a) => a.slug !== article.slug)
              .map((a) => (
                <li key={a.slug}>
                  <Link to={`/articles/${a.slug}`} className="text-sm text-ivory-dim hover:text-gold">
                    {a.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
