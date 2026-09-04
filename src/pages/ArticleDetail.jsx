import { useParams, Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import EvidenceLabel from '../components/ui/EvidenceLabel.jsx'
import { articles } from '../data/placeholderContent.js'

const BODIES = {
  'what-is-jainism': [
    { heading: 'A path devoted to liberation', status: 'tradition', text: 'Jainism is one of the world’s most enduring spiritual traditions — a path devoted entirely to the liberation of the soul through non-violence, self-discipline, and right understanding. Jain teaching holds that every soul carries within it the capacity for complete purity and freedom.' },
    { heading: 'What is Jainism?', status: 'tradition', text: 'Jainism teaches that every living being possesses a soul, or jiva, capable of complete purification and ultimate liberation, moksha. The path rests on the Three Jewels: right faith, right knowledge, and right conduct. Right conduct flows from vows including ahimsa, truthfulness, non-stealing, chastity, and aparigraha, or non-attachment to possessions.' },
    { heading: 'Two living traditions', status: 'tradition', text: 'Two great living traditions carry this teaching forward today: the Svetambara, or white-clad, and Digambara, or sky-clad, communities. Both share the essential philosophy and reverence for the Tirthankaras, while differing in aspects of monastic practice and scriptural transmission.' },
    { heading: 'The Jina and the Tirthankaras', status: 'tradition', text: 'A Jina is a spiritual conqueror — one who has triumphed over the inner passions of attachment and aversion. A Tirthankara, literally a ford-maker, establishes a crossing-place through which others may follow toward liberation. Jain tradition reveres twenty-four Tirthankaras in the current cosmic age, each having attained kevala jnana, complete knowledge.' },
    { heading: 'Rishabhanatha in Jain tradition', status: 'tradition', text: 'Rishabhanatha, also called Adinatha, is revered in Jain tradition as the first Tirthankara of the present cosmic age. Jain scripture describes him as guiding humanity through the transition from Bhogabhumi, an age of spontaneous abundance, to Karmabhumi, an age requiring human effort, skill, and social order. He later renounced kingship, undertook rigorous asceticism, and attained liberation.' },
    { heading: 'Parshvanatha and Mahavira', status: 'supported but debated', text: 'Parshvanatha, the twenty-third Tirthankara, is remembered for the fourfold restraint of non-violence, truthfulness, non-stealing, and non-possession. Mahavira, the twenty-fourth and most recent Tirthankara, is the great teacher of this age whose life and teachings are recorded most fully in Jain scripture, especially the Kalpasutra. Historians generally regard Parshvanatha as the earliest Tirthankara for whom a historical life is plausible, while the precise dates of both teachers remain debated.' },
    { heading: 'The soul, karma, and liberation', status: 'tradition', text: 'Jain philosophy understands existence through jiva, the soul, and ajiva, all that is not soul. The soul is described as luminous, pure, and possessed of boundless knowledge. Karma is understood as a subtle form of matter that binds to the soul through action, thought, and speech, especially when shaped by violence or attachment. Through disciplined conduct and meditation, new karmic matter is stopped and accumulated karma is shed. The liberated soul attains kevala jnana and enters the siddha state, beyond further rebirth.' },
    { heading: 'Anekantavada, syadvada, and nayavada', status: 'tradition', text: 'Anekantavada teaches that reality has many aspects and cannot be captured by one single unqualified statement. It does not mean that every view is equally correct. Nayavada asks that a claim be understood from a clearly identified standpoint, while syadvada asks that statements acknowledge the conditions under which they are true. Together, these teachings encourage intellectual humility and non-violence in speech and thought.' },
    { heading: 'Jainism across India', status: 'established', text: 'Jain communities, teachers, and patrons have shaped India’s religious and cultural life for well over two thousand years. Important evidence includes the Hathigumpha inscription and Udayagiri hills in Odisha, the Jain sculptures and inscriptions of Kankali Tila in Mathura, and the Jain heritage of Karnataka. At Shravanabelagola, the monolithic Gommateshwara statue of Bahubali was completed in 981 CE under the Jain minister Chavundaraya.' },
    { heading: 'What future generations can learn', status: 'tradition', text: 'Jainism offers a unified way of living in which non-violence, intellectual humility, and self-discipline support one another. Ahimsa teaches that every living being matters. Aparigraha teaches that freedom grows through wanting less. Anekantavada offers a disciplined model for disagreement: name one’s standpoint, respect another’s, and resist mistaking a partial view for the whole truth.' },
  ],
  'understanding-ahimsa': [
    { heading: 'More than not causing harm', status: 'tradition', text: 'Ahimsa in Jain ethics reaches further than avoiding physical violence. It asks for restraint in thought and speech as well as action, on the understanding that every living being’s existence carries genuine weight.' },
    { heading: 'A practice, not an abstraction', status: 'tradition', text: 'Jain monastics and lay communities shape daily choices around this principle, making ahimsa one of the most consistently lived commitments in the tradition.' },
  ],
  'the-universe-within': [
    { heading: 'The soul’s true nature', status: 'tradition', text: 'Jain philosophy describes the soul in its natural state as pure and possessed of boundless knowledge. What obscures that purity is karma — understood as a subtle form of matter drawn to the soul through attachment and violence.' },
    { heading: 'Kevala jnana and the siddha state', status: 'tradition', text: 'A soul that completes the Jain path attains kevala jnana, complete and unobstructed knowledge, and upon death is liberated entirely from rebirth — entering the siddha state described in Jain scripture as pure, complete, and beyond further change.' },
  ],
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)
  const body = BODIES[slug]

  if (!article) {
    return <div className="container-page py-24 text-center"><p className="font-display text-2xl text-ivory">Article not found</p><Link to="/articles" className="mt-4 inline-block text-sm text-gold-dim hover:text-gold">← Back to articles</Link></div>
  }

  const articleImage = slug === 'what-is-jainism' ? 'https://raw.githubusercontent.com/ashlovesbuilding/jinverse/main/Screenshot_2026-09-04-19-18-01-00_f9ee0578fe1cc94de7482bd41accb329.jpg' : null

  return (
    <article className="py-20">
      <div className="container-page max-w-prose">
        <Reveal>
          <Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">← Back to articles</Link>
          <p className="mt-6 text-xs text-gold-dim">JINVERSE Article #001 · {article.category}</p>
          <h1 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">{article.slug === 'what-is-jainism' ? 'Jainism: An Ancient Tradition of Liberation' : article.title}</h1>
          <p className="mt-3 text-ivory-dim">{article.subtitle}</p>
          <p className="mt-3 text-xs text-ivory-dim/60">{article.readingTime}</p>
        </Reveal>

        <Reveal delay={60}>
          {articleImage ? <img src={articleImage} alt="Historical image associated with Article 001" className="mt-10 w-full aspect-[16/7] object-cover border border-line" /> : <div className="mt-10 flex aspect-[16/7] items-center justify-center border border-dashed border-line text-xs text-ivory-dim/60">Article image coming soon</div>}
        </Reveal>

        <div className="mt-12 space-y-10">
          {body ? body.map((section, i) => (
            <Reveal key={section.heading} delay={i * 30}>
              <h2 className="font-display text-xl text-ivory">{section.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{section.text}</p>
              <EvidenceLabel status={section.status} className="mt-4" />
            </Reveal>
          )) : <p className="text-sm text-ivory-dim">Full article body is in preparation.</p>}
        </div>

        {slug === 'what-is-jainism' && <div className="mt-16 border-t border-line pt-8"><h3 className="text-xs uppercase tracking-wide text-ivory-dim/70">Sources and further reading</h3><p className="mt-3 text-xs leading-relaxed text-ivory-dim/70">Kalpasutra, translated by Hermann Jacobi; Tattvartha Sutra, translated by Nathmal Tatia and Vijay K. Jain; Adipurana by Jinasena; Trishashtishalakapurushacharitra by Hemachandra; Paul Dundas, The Jains; Padmanabh S. Jaini, The Jaina Path of Purification; and John E. Cort, Framing the Jina.</p><p className="mt-3 text-xs leading-relaxed text-ivory-dim/70">JINVERSE distinguishes Jain traditional accounts from historical evidence and marks debated or unverified claims accordingly. The Indus Valley connection to Rishabhanatha is not presented as established.</p></div>}

        <div className="mt-10 border-t border-line pt-8"><h3 className="text-xs uppercase tracking-wide text-ivory-dim/70">Related articles</h3><ul className="mt-3 space-y-2">{articles.filter((a) => a.slug !== article.slug).map((a) => <li key={a.slug}><Link to={`/articles/${a.slug}`} className="text-sm text-ivory-dim hover:text-gold">{a.title}</Link></li>)}</ul></div>
      </div>
    </article>
  )
}
