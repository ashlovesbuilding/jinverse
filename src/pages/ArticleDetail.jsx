import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Reveal from '../components/ui/Reveal.jsx'
import { articles as seedArticles } from '../data/placeholderContent.js'
import { readLocalArticles } from '../lib/articleStore.js'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient.js'

const imageBySlug = {
  'what-is-jainism': 'https://raw.githubusercontent.com/ashlovesbuilding/jinverse/main/Screenshot_2026-09-04-19-18-01-00_f9ee0578fe1cc94de7482bd41accb329.jpg',
  'bharatavarsha-bharat-chakravarti': 'https://raw.githubusercontent.com/ashlovesbuilding/jinverse/main/HGQZVZkaUAAeOkA.jpg',
}

function toSections(body = '') {
  return body
    .split(/\n\s*\n/)
    .filter(Boolean)
    .map((part, index) => {
      const lines = part.split('\n')
      return {
        heading: lines.length > 1 ? lines[0] : index === 0 ? 'The article' : 'Further reflection',
        text: lines.length > 1 ? lines.slice(1).join(' ') : part,
      }
    })
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [remoteArticle, setRemoteArticle] = useState(null)

  useEffect(() => {
    let active = true
    async function loadArticle() {
      if (!isSupabaseConfigured || !supabase) return
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle()
      if (!error && data && active) setRemoteArticle(data)
    }
    loadArticle()
    return () => { active = false }
  }, [slug])

  const localArticle = readLocalArticles().find((item) => item.slug === slug && item.status === 'published')
  const seedArticle = seedArticles.find((item) => item.slug === slug)
  const article = remoteArticle || localArticle || seedArticle

  if (!article) return <div className="container-page py-24 text-center"><p className="font-display text-2xl text-ivory">Article not found</p></div>

  const body = toSections(article.body)
  const articleImage = article.image_url || article.imageUrl || imageBySlug[slug]
  const articleTitle = article.title || (slug === 'what-is-jainism' ? 'Jainism: An Ancient Tradition of Liberation' : '')

  function editArticle() {
    const editableArticle = {
      title: articleTitle,
      slug: article.slug,
      subtitle: article.subtitle || '',
      category: article.category || 'Beginner’s guide',
      readingTime: article.reading_time || article.readingTime || '5 min read',
      evidence: article.evidence || 'tradition',
      imageUrl: articleImage || '',
      imageCaption: article.image_caption || article.imageCaption || '',
      body: article.body || body.map((section) => `${section.heading}\n${section.text}`).join('\n\n'),
    }
    window.localStorage.setItem('jinverse-article-draft', JSON.stringify(editableArticle))
    navigate('/editor')
  }

  return (
    <article className="py-20">
      <div className="container-page max-w-prose">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">← Back to articles</Link>
            <button type="button" onClick={editArticle} className="border border-gold px-4 py-2 text-sm text-gold hover:bg-gold hover:text-void">Edit article</button>
          </div>
          <p className="mt-6 text-xs text-gold-dim">JINVERSE Article · {article.category}</p>
          <h1 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">{articleTitle}</h1>
          <p className="mt-3 text-ivory-dim">{article.subtitle}</p>
          <p className="mt-3 text-xs text-ivory-dim/60">{article.reading_time || article.readingTime}</p>
        </Reveal>
        {articleImage && <Reveal delay={60}><img src={articleImage} alt={article.image_caption || article.imageCaption || 'Jain heritage image'} className="mt-10 w-full aspect-[16/7] object-cover border border-line" /></Reveal>}
        <div className="mt-12 space-y-10">
          {body.map((section, index) => <Reveal key={`${section.heading}-${index}`} delay={index * 30}><h2 className="font-display text-xl text-ivory">{section.heading}</h2><p className="mt-3 text-sm leading-relaxed text-ivory-dim">{section.text}</p></Reveal>)}
        </div>
      </div>
    </article>
  )
}
