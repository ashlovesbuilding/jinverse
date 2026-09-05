import { useNavigate, useParams, Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import { articles as seedArticles } from '../data/placeholderContent.js'
import { readLocalArticles } from '../lib/articleStore.js'

const BODIES = {
  'bharatavarsha-bharat-chakravarti': [
    { heading: 'The first teacher of human civilization', text: 'In Jain tradition, Bhagwan Rishabhadeva, revered as Adinath Bhagwan, is remembered as the first Tirthankara of the present time cycle and as the great teacher who guided humanity into an organized and meaningful way of life. He taught agriculture, cooking, crafts, writing, trade, social order, and governance.' },
    { heading: 'The lineage of learning', text: 'His daughter Brahmi is traditionally connected with the development of the Brahmi script, while his daughter Sundari is remembered for teaching mathematics and related sciences. In this sacred account, education is part of the larger journey from worldly order toward higher understanding.' },
    { heading: 'Bharat Chakravarti', text: 'Adinath Bhagwan’s eldest son, Bharat Chakravarti, became the first Chakravarti in Jain tradition. His name is remembered through the sacred land of Bharatavarsha and through the ideal of righteous sovereignty.' },
    { heading: 'Why the land is called Bharatavarsha', text: 'Jain tradition preserves the belief that the land of Bharatavarsha received its name from Bharat Chakravarti. The name carries the memory of a Tirthankara’s lineage, righteous leadership, and the timeless possibility of liberation.' },
    { heading: 'The sacred Jinachakra', text: 'Bharat Chakravarti is associated with the sacred Jinachakra, the divine wheel of a Chakravarti. It represents righteous authority, order, and the unfolding of destiny under the presence of the Jina’s teaching.' },
    { heading: 'Bharat and Bahubali', text: 'The story of Bharat becomes most powerful through his relationship with his brother Bahubali. Bahubali’s victory over worldly rivalry and his later meditation show that mastery over the inner passions is greater than conquest.' },
    { heading: 'The first renunciation of the age', text: 'Adinath Bhagwan is revered as the first person in the present Avasarpini time cycle to renounce worldly life and become a monk. His renunciation established the path of ascetic discipline toward liberation.' },
    { heading: 'The year of fasting and Akshaya Tritiya', text: 'Jain tradition remembers that Adinath Bhagwan remained without food for a full year until Shreyans Kumar offered sugarcane juice in the proper manner. This sacred event is commemorated as Akshaya Tritiya.' },
    { heading: 'From Adinath to Gommateshwara', text: 'The monumental Gommateshwara statue at Shravanabelagola is dedicated to Bahubali, the son of Adinath Bhagwan. Its serene form expresses the victory of meditation over worldly ambition.' },
    { heading: 'A heritage that points inward', text: 'The story of Adinath Bhagwan and Bharat Chakravarti is more than a story about a land or a king. It is a story about the purpose of civilization: learning creates order, dharma gives life direction, and renunciation reveals its highest destination.' },
  ],
  'what-is-jainism': [
    { heading: 'A path devoted to liberation', text: 'Jainism is an ancient Indian tradition devoted to the liberation of the soul. It teaches that every living being has a soul, or jiva, and that the soul can become free from karmic bondage through right understanding, disciplined conduct, and spiritual effort.' },
    { heading: 'The meaning of Jina', text: 'The word Jain comes from Jina, meaning one who has conquered inner passions such as anger, pride, deceit, and greed. A Jina is not a creator god but a perfected being who discovers the path to liberation and teaches it for the benefit of others.' },
    { heading: 'Every living being possesses a soul', text: 'Jain philosophy recognises life far beyond human beings. Living beings are understood through their senses, from one-sensed earth-, water-, fire-, air-, and plant-bodied beings to five-sensed beings. Each soul has the potential for purification and moksha.' },
    { heading: 'The three jewels', text: 'The path is expressed through Ratnatraya, the three jewels: right faith, right knowledge, and right conduct. They work together. Faith gives direction, knowledge gives clarity, and conduct transforms understanding into lived practice.' },
    { heading: 'Karma as a subtle bond', text: 'In Jain thought, karma is not only a moral idea but a subtle material substance that binds to the soul because of passions and actions. As attachment and aversion decrease, karmic influx is stopped and accumulated karma is gradually shed.' },
    { heading: 'Ahimsa and compassion', text: 'Ahimsa, or non-violence, is the most recognisable Jain principle. It asks a person to avoid harm through thought, speech, and action, and to cultivate care toward all forms of life. Compassion becomes stronger when we recognise the spiritual worth of every being.' },
    { heading: 'Aparigraha and inner freedom', text: 'Aparigraha means non-possession or non-attachment. Jainism teaches that endless accumulation and possessiveness deepen bondage. Simplicity, restraint, and awareness help a person become less controlled by desire.' },
    { heading: 'The goal of moksha', text: 'Moksha is the complete liberation of the soul from karmic bondage and the cycle of birth and death. It is described as a state of infinite knowledge, perception, bliss, and energy. The journey begins through small, conscious choices made in everyday life.' },
  ],
  'understanding-ahimsa': [
    { heading: 'Ahimsa: reverence for every living being', text: 'Ahimsa is the Jain discipline of non-violence and non-harming. It is not limited to avoiding physical injury; it also asks us to examine the intentions behind our thoughts, the consequences of our speech, and the care with which we act.' },
    { heading: 'Why every living being matters', text: 'Jain philosophy teaches that every jiva possesses the potential for liberation. Life is therefore not limited to human beings or animals. Jain tradition recognises living beings with one sense through five senses, including earth-bodied, water-bodied, fire-bodied, air-bodied, and plant-bodied beings.' },
    { heading: 'The five-sensed classification of life', text: 'One-sensed beings possess touch. Two-sensed beings possess touch and taste. Three-sensed beings possess touch, taste, and smell. Four-sensed beings also possess sight. Five-sensed beings possess all five senses: touch, taste, smell, sight, and hearing.' },
    { heading: 'Violence through mind, speech, and body', text: 'Harm may be caused through action, speech, or thought. Jain ethics also considers asking another person to cause harm, approving harmful conduct, and acting carelessly. Ahimsa therefore requires awareness, restraint, and responsibility.' },
    { heading: 'Ahimsa and the Jain vows', text: 'Ahimsa is the first of the five principal vows. Truthfulness, non-stealing, chastity, and non-possession can also be understood as expressions of non-violence because they reduce deception, exploitation, uncontrolled desire, and attachment.' },
    { heading: 'Ahimsa in daily life', text: 'For householders, ahimsa means reducing avoidable harm through careful consumption, compassionate treatment of people and animals, responsible use of resources, gentle speech, and the refusal to encourage cruelty. Monks and nuns undertake a more rigorous form of this discipline.' },
    { heading: 'Ahimsa and forgiveness', text: 'Jain practices of forgiveness, including Micchami Dukkadam, remind us to recognise harm already caused and seek to prevent its repetition. Forgiveness does not ignore injustice; it refuses to answer harm with another cycle of hatred.' },
    { heading: 'The deeper message', text: 'Ahimsa changes the way we see the world. A tree is not merely timber, water is not merely a commodity, and another person is not merely an opponent. To practise ahimsa is to move through the world with less violence, less attachment, and greater compassion.' },
  ],
}

const imageBySlug = {
  'what-is-jainism': 'https://raw.githubusercontent.com/ashlovesbuilding/jinverse/main/Screenshot_2026-09-04-19-18-01-00_f9ee0578fe1cc94de7482bd41accb329.jpg',
  'bharatavarsha-bharat-chakravarti': 'https://raw.githubusercontent.com/ashlovesbuilding/jinverse/main/HGQZVZkaUAAeOkA.jpg',
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = [...readLocalArticles().filter((item) => item.status === 'published'), ...seedArticles].find((a) => a.slug === slug)
  const body = BODIES[slug] || (article?.body || '').split(/\n\s*\n/).filter(Boolean).map((text, index) => ({ heading: index === 0 ? 'The article' : 'Further reflection', text }))

  function editArticle() {
    const editableArticle = {
      title: slug === 'what-is-jainism' ? 'Jainism: An Ancient Tradition of Liberation' : article.title,
      slug: article.slug,
      subtitle: article.subtitle || '',
      category: article.category || 'Beginner’s guide',
      readingTime: article.readingTime || '5 min read',
      evidence: article.evidence || 'tradition',
      imageUrl: article.imageUrl || imageBySlug[slug] || '',
      imageCaption: article.imageCaption || '',
      body: body.map((section) => `${section.heading}\n${section.text}`).join('\n\n'),
    }
    window.localStorage.setItem('jinverse-article-draft', JSON.stringify(editableArticle))
    navigate('/editor')
  }

  if (!article) return <div className="container-page py-24 text-center"><p className="font-display text-2xl text-ivory">Article not found</p></div>

  const articleImage = article.imageUrl || imageBySlug[slug]

  return (
    <article className="py-20">
      <div className="container-page max-w-prose">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">← Back to articles</Link>
            <button type="button" onClick={editArticle} className="border border-gold px-4 py-2 text-sm text-gold hover:bg-gold hover:text-void">Edit article</button>
          </div>
          <p className="mt-6 text-xs text-gold-dim">JINVERSE Article #{slug === 'bharatavarsha-bharat-chakravarti' ? '002' : slug === 'understanding-ahimsa' ? '003' : '001'} · {article.category}</p>
          <h1 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">{slug === 'what-is-jainism' ? 'Jainism: An Ancient Tradition of Liberation' : article.title}</h1>
          <p className="mt-3 text-ivory-dim">{article.subtitle}</p>
          <p className="mt-3 text-xs text-ivory-dim/60">{article.readingTime}</p>
        </Reveal>
        {articleImage && <Reveal delay={60}><img src={articleImage} alt={slug === 'bharatavarsha-bharat-chakravarti' ? 'Bhagwan Rishabhadeva accepting the first ahar in the royal court of Hastinapur' : 'Jain heritage image'} className="mt-10 w-full aspect-[16/7] object-cover border border-line" /></Reveal>}
        <div className="mt-12 space-y-10">
          {body.map((section, i) => <Reveal key={section.heading} delay={i * 30}><h2 className="font-display text-xl text-ivory">{section.heading}</h2><p className="mt-3 text-sm leading-relaxed text-ivory-dim">{section.text}</p></Reveal>)}
        </div>
      </div>
    </article>
  )
}
