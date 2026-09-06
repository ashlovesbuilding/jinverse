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
  const blocks = String(body || '').trim().split(/\n\s*\n/).filter(Boolean)
  const sections = []
  let current = null

  for (const block of blocks) {
    const lines = block.split('\n')
    const headingLine = lines[0].match(/^#{1,6}\s+(.+)$/)

    if (headingLine) {
      if (current) sections.push(current)
      current = { heading: headingLine[1].trim(), paragraphs: [] }
      const remainder = lines.slice(1).join(' ').trim()
      if (remainder) current.paragraphs.push(remainder)
    } else if (current) {
      current.paragraphs.push(lines.join(' ').trim())
    } else {
      current = { heading: '', paragraphs: [lines.join(' ').trim()] }
    }
  }

  if (current) sections.push(current)
  return sections
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [remoteArticle, setRemoteArticle] = useState(null)
  const [loadState, setLoadState] = useState(isSupabaseConfigured ? 'loading' : 'ready')
  const [loadError, setLoadError] = useState('')
  const [shareStatus, setShareStatus] = useState('')

  useEffect(() => {
    let active = true

    async function loadArticle() {
      if (!isSupabaseConfigured || !supabase) {
        if (active) setLoadState('ready')
        return
      }

      setLoadState('loading')
      setLoadError('')

      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .maybeSingle()

      if (!active) return

      if (error) {
        setLoadError('We could not load this article right now. Please try again.')
        setLoadState('error')
        return
      }

      if (!data) {
        setLoadState('not-found')
        return
      }

      setRemoteArticle(data)
      setLoadState('ready')
    }

    loadArticle()
    return () => { active = false }
  }, [slug])

  if (loadState === 'loading') {
    return <div className="container-page py-24 text-center"><p className="text-sm text-ivory-dim">Loading article…</p></div>
  }

  if (loadState === 'error') {
    return <div className="container-page py-24 text-center"><p className="font-display text-2xl text-ivory">Unable to load article</p><p className="mt-3 text-sm text-ivory-dim">{loadError}</p></div>
  }

  if (loadState === 'not-found') {
    return <div className="container-page py-24 text-center"><p className="font-display text-2xl text-ivory">Article not found or not published</p></div>
  }

  const localArticle = !isSupabaseConfigured
    ? readLocalArticles().find((item) => item.slug === slug && item.status === 'published')
    : null
  const seedArticle = !isSupabaseConfigured
    ? seedArticles.find((item) => item.slug === slug)
    : null
  const article = remoteArticle || localArticle || seedArticle

  if (!article) return <div className="container-page py-24 text-center"><p className="font-display text-2xl text-ivory">Article not found</p></div>

  const articleBody = article.body_markdown || article.body || article.content || ''
  const body = toSections(articleBody)
  const articleImage = article.image_url || article.hero_image_url || article.imageUrl || imageBySlug[slug]
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
      imageCaption: article.image_caption || article.hero_image_caption || article.imageCaption || '',
      body: articleBody,
    }
    window.localStorage.setItem('jinverse-article-draft', JSON.stringify(editableArticle))
    navigate('/editor')
  }

  async function shareArticle() {
    const shareUrl = window.location.href
    const shareData = {
      title: articleTitle,
      text: `Read "${articleTitle}" on JINVERSE`,
      url: shareUrl,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl)
        setShareStatus('Link copied')
      } else {
        setShareStatus('Copy the page URL from your browser')
      }
      window.setTimeout(() => setShareStatus(''), 2200)
    } catch (error) {
      if (error?.name === 'AbortError') return
      setShareStatus('Copy failed')
      window.setTimeout(() => setShareStatus(''), 2200)
    }
  }

  return (
    <article className="py-20">
      <div className="container-page max-w-prose">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">← Back to articles</Link>
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={shareArticle} className="border border-line px-4 py-2 text-sm text-ivory-dim hover:border-gold hover:text-gold">Share article</button>
              <button type="button" onClick={editArticle} className="border border-gold px-4 py-2 text-sm text-gold hover:bg-gold hover:text-void">Edit article</button>
              {shareStatus && <span role="status" className="text-xs text-gold">{shareStatus}</span>}
            </div>
          </div>
          <p className="mt-6 text-xs text-gold-dim">JINVERSE Article · {article.category}</p>
          <h1 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">{articleTitle}</h1>
          <p className="mt-3 text-ivory-dim">{article.subtitle}</p>
          <p className="mt-3 text-xs text-ivory-dim/60">{article.reading_time || article.readingTime}</p>
        </Reveal>
        {articleImage && <Reveal delay={60}><img src={articleImage} alt={article.image_caption || article.hero_image_caption || article.imageCaption || 'Jain heritage image'} className="mt-10 w-full aspect-[16/7] object-cover border border-line" /></Reveal>}
        <div className="mt-12 space-y-10">
          {body.length ? body.map((section, index) => (
            <Reveal key={`${section.heading}-${index}`} delay={index * 30}>
              {section.heading && section.heading !== articleTitle && <h2 className="font-display text-xl text-ivory">{section.heading}</h2>}
              <div className="mt-3 space-y-4 text-sm leading-8 text-ivory-dim">
                {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
              </div>
            </Reveal>
          )) : <p className="text-sm leading-relaxed text-ivory-dim">This article has no published body yet.</p>}
        </div>
      </div>
    </article>
  )
}
