import { useParams, Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import { articles } from '../data/placeholderContent.js'

const BODIES = {
  'what-is-jainism': [
    { heading: 'A path devoted to liberation', text: 'Jainism is one of the world’s most enduring spiritual traditions — a path devoted entirely to the liberation of the soul through non-violence, self-discipline, and right understanding. Jain teaching holds that every soul carries within it the capacity for complete purity and freedom.' },
    { heading: 'What is Jainism?', text: 'Jainism teaches that every living being possesses a soul, or jiva, capable of complete purification and ultimate liberation, moksha. The path rests on the Three Jewels: right faith, right knowledge, and right conduct. Right conduct flows from vows including ahimsa, truthfulness, non-stealing, chastity, and aparigraha, or non-attachment to possessions.' },
    { heading: 'Two living traditions', text: 'Two great living traditions carry this teaching forward today: the Svetambara, or white-clad, and Digambara, or sky-clad, communities. Both share the essential philosophy and reverence for the Tirthankaras, while differing in aspects of monastic practice and scriptural transmission.' },
    { heading: 'The Jina and the Tirthankaras', text: 'A Jina is a spiritual conqueror — one who has triumphed over the inner passions of attachment and aversion. A Tirthankara, literally a ford-maker, establishes a crossing-place through which others may follow toward liberation. Jain tradition reveres twenty-four Tirthankaras in the current cosmic age.' },
    { heading: 'Rishabhanatha in Jain tradition', text: 'Rishabhanatha, also called Adinatha, is revered in Jain tradition as the first Tirthankara of the present cosmic age. Jain scripture describes him as guiding humanity through the transition from Bhogabhumi, an age of spontaneous abundance, to Karmabhumi, an age requiring human effort, skill, and social order. He later renounced kingship, undertook rigorous asceticism, and attained liberation.' },
    { heading: 'The soul, karma, and liberation', text: 'Jain philosophy understands existence through jiva, the soul, and ajiva, all that is not soul. Karma is understood as a subtle form of matter that binds to the soul through action, thought, and speech. Through disciplined conduct and meditation, new karmic matter is stopped and accumulated karma is shed. The liberated soul enters the siddha state, beyond further rebirth.' },
    { heading: 'What future generations can learn', text: 'Jainism offers a unified way of living in which non-violence, intellectual humility, and self-discipline support one another. Ahimsa teaches that every living being matters. Aparigraha teaches that freedom grows through wanting less. Anekantavada offers a disciplined model for disagreement and respect.' },
  ],
  'bharatavarsha-bharat-chakravarti': [
    { heading: 'The first teacher of human civilization', text: 'In Jain tradition, Bhagwan Rishabhadeva, revered as Adinath Bhagwan, is remembered as the first Tirthankara of the present time cycle and as the great teacher who guided humanity into an organized and meaningful way of life. As the age of spontaneous abundance gave way to an age of effort, people needed knowledge of agriculture, cooking, crafts, writing, trade, social order, and governance. Adinath Bhagwan is revered as the one who showed humanity how to live together with skill, discipline, and responsibility.' },
    { heading: 'The lineage of learning', text: 'The civilizational gifts associated with Adinath Bhagwan continue through his illustrious family. His daughter Brahmi is traditionally connected with the development of the Brahmi script, while his daughter Sundari is remembered for teaching mathematics and related sciences. In this sacred account, education is not separate from spiritual life: knowledge becomes a means of bringing order to society and preparing the soul for higher understanding.' },
    { heading: 'Bharat Chakravarti, the universal sovereign', text: 'Adinath Bhagwan’s eldest son, Bharat Chakravarti, became the first Chakravarti in Jain tradition. A Chakravarti is a universal sovereign whose authority extends across the great regions of the world. Bharat’s greatness was not remembered only through conquest or royal power, but through his place in the sacred lineage of the first Tirthankara.' },
    { heading: 'Why the land is called Bharatavarsha', text: 'Jain tradition preserves the belief that the land of Bharatavarsha received its name from Bharat Chakravarti. The name therefore carries a spiritual memory: it recalls the son of a Tirthankara, the ideal of righteous sovereignty, and a civilization whose deepest purpose is not merely prosperity but the journey toward liberation.' },
    { heading: 'The sacred Jinachakra', text: 'Bharat Chakravarti is associated with the sacred Jinachakra, the divine wheel that marks the progress of a Chakravarti. In the Jain imagination, the wheel is not simply a weapon or symbol of political power. It represents order, righteous authority, and the unfolding of destiny under the presence of the Jina’s teaching.' },
    { heading: 'Bharat and Bahubali', text: 'The story of Bharat becomes most powerful through his relationship with his brother Bahubali. When royal rivalry brought the brothers into conflict, Bahubali achieved victory but soon recognized the limitations of worldly triumph. His stillness, renunciation, and meditation became a greater victory than conquest. The story reminds devotees that the highest sovereignty is mastery over anger, pride, deceit, and attachment.' },
    { heading: 'The first renunciation of the age', text: 'Adinath Bhagwan is also revered as the first person in the present Avasarpini time cycle to renounce worldly life and become a monk. The name Adinath — the First Lord — expresses this primacy. His renunciation established the path of ascetic discipline through which souls may turn away from bondage and move toward liberation.' },
    { heading: 'The year of fasting and Akshaya Tritiya', text: 'After renouncing his kingdom, Adinath Bhagwan wandered as a monk. The people of the time did not yet understand the proper way to offer food to a Jain ascetic. Jain tradition remembers that he remained without food for a full year until Shreyans Kumar offered him sugarcane juice in the correct manner. This sacred event is commemorated as Akshaya Tritiya, a day associated with charity, restraint, and the beginning of the tradition of alms-giving to monks.' },
    { heading: 'The memory of Rishabhadeva in India’s sacred literature', text: 'The figure of Rishabha also appears in other ancient Indian religious literature, including the Bhagavata Purana, where Rishabha is portrayed as a king who renounces worldly life and teaches detachment. For Jain devotees, these parallel memories deepen the sense that the name and spiritual presence of Rishabhadeva belong to the oldest sacred imagination of India.' },
    { heading: 'From Adinath to Gommateshwara', text: 'The monumental Gommateshwara statue at Shravanabelagola in Karnataka is dedicated to Bahubali, the son of Adinath Bhagwan. Its serene, upright form expresses the victory of meditation over worldly ambition. The statue stands as a lasting reminder that the civilization taught by Adinath reaches its highest expression not in possession, but in renunciation and inner freedom.' },
    { heading: 'A heritage that points inward', text: 'The story of Adinath Bhagwan and Bharat Chakravarti is therefore more than a story about the beginning of a land or the rise of a king. It is a story about the purpose of civilization itself. Agriculture, writing, mathematics, trade, governance, and learning create the conditions for human life; dharma gives that life direction; and renunciation reveals its ultimate destination.' },
    { heading: 'The Jain message', text: 'Before empires and before the structures of modern civilization, Jain tradition remembers Rishabhanatha as the teacher who showed humanity how to live — and, more importantly, how to rise above living. Bharatavarsha carries this memory in its very name: a land connected with a Chakravarti, a Tirthankara’s lineage, and the timeless possibility of liberation.' },
  ],
  'understanding-ahimsa': [
    { heading: 'More than not causing harm', text: 'Ahimsa in Jain ethics reaches further than avoiding physical violence. It asks for restraint in thought and speech as well as action, on the understanding that every living being’s existence carries genuine weight.' },
    { heading: 'A practice, not an abstraction', text: 'Jain monastics and lay communities shape daily choices around this principle, making ahimsa one of the most consistently lived commitments in the tradition.' },
  ],
  'the-universe-within': [
    { heading: 'The soul’s true nature', text: 'Jain philosophy describes the soul in its natural state as pure and possessed of boundless knowledge. What obscures that purity is karma — understood as a subtle form of matter drawn to the soul through attachment and violence.' },
    { heading: 'Kevala jnana and the siddha state', text: 'A soul that completes the Jain path attains kevala jnana, complete and unobstructed knowledge, and upon death is liberated entirely from rebirth — entering the siddha state described in Jain scripture as pure, complete, and beyond further change.' },
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
          <p className="mt-6 text-xs text-gold-dim">JINVERSE Article #{slug === 'bharatavarsha-bharat-chakravarti' ? '002' : '001'} · {article.category}</p>
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
            </Reveal>
          )) : <p className="text-sm text-ivory-dim">Full article body is in preparation.</p>}
        </div>

        <div className="mt-10 border-t border-line pt-8"><h3 className="text-xs uppercase tracking-wide text-ivory-dim/70">Related articles</h3><ul className="mt-3 space-y-2">{articles.filter((a) => a.slug !== article.slug).map((a) => <li key={a.slug}><Link to={`/articles/${a.slug}`} className="text-sm text-ivory-dim hover:text-gold">{a.title}</Link></li>)}</ul></div>
      </div>
    </article>
  )
}
