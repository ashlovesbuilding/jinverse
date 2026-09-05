import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'jinverse-article-draft'

const EMPTY_ARTICLE = {
  title: '',
  slug: '',
  subtitle: '',
  category: 'Beginner’s guide',
  readingTime: '5 min read',
  evidence: 'tradition',
  imageUrl: '',
  imageCaption: '',
  body: '',
}

function makeSlug(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export default function ArticleEditor() {
  const [article, setArticle] = useState(() => {
    try {
      return { ...EMPTY_ARTICLE, ...JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}') }
    } catch {
      return EMPTY_ARTICLE
    }
  })
  const [saved, setSaved] = useState(false)
  const [preview, setPreview] = useState(false)

  const paragraphs = useMemo(
    () => article.body.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean),
    [article.body],
  )

  function updateField(field, value) {
    setSaved(false)
    setArticle((current) => ({ ...current, [field]: value }))
  }

  function handleTitleChange(value) {
    setSaved(false)
    setArticle((current) => ({
      ...current,
      title: value,
      slug: current.slug === makeSlug(current.title) || current.slug === '' ? makeSlug(value) : current.slug,
    }))
  }

  function saveDraft(event) {
    event.preventDefault()
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(article))
    setSaved(true)
  }

  function clearDraft() {
    window.localStorage.removeItem(STORAGE_KEY)
    setArticle(EMPTY_ARTICLE)
    setSaved(false)
  }

  return (
    <div className="container-page py-16">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">
            ← Back to articles
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-dim">Editorial workspace</p>
          <h1 className="mt-2 font-display text-3xl text-ivory">Simple Article Editor</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory-dim">
            Prepare an article draft, preview it, and save it on this device. Publishing to the shared library will be connected after Supabase is configured.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setPreview((current) => !current)}
          className="border border-line px-4 py-2 text-sm text-ivory transition-colors hover:border-gold"
        >
          {preview ? 'Edit article' : 'Preview article'}
        </button>
      </div>

      {preview ? (
        <article className="mt-12 max-w-3xl border border-line p-6 sm:p-10">
          <p className="text-xs text-gold-dim">{article.category || 'Uncategorised'}</p>
          <h2 className="mt-3 font-display text-3xl text-ivory">{article.title || 'Untitled article'}</h2>
          <p className="mt-3 text-ivory-dim">{article.subtitle || 'Add a short subtitle in the editor.'}</p>
          <p className="mt-3 text-xs text-ivory-dim/60">{article.readingTime}</p>
          {article.imageUrl ? (
            <figure className="mt-8">
              <img src={article.imageUrl} alt={article.imageCaption || article.title || 'Article cover'} className="max-h-[28rem] w-full object-cover" />
              {article.imageCaption ? <figcaption className="mt-2 text-xs text-ivory-dim/60">{article.imageCaption}</figcaption> : null}
            </figure>
          ) : null}
          <div className="mt-10 space-y-5 text-sm leading-relaxed text-ivory-dim">
            {paragraphs.length ? paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <p>Your article body will appear here.</p>}
          </div>
          <p className="mt-10 border-t border-line pt-5 text-xs text-ivory-dim/60">Evidence label: {article.evidence}</p>
        </article>
      ) : (
        <form onSubmit={saveDraft} className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-6">
            <label className="block">
              <span className="text-xs text-ivory-dim">Title</span>
              <input value={article.title} onChange={(event) => handleTitleChange(event.target.value)} placeholder="What Is Jainism?" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" required />
            </label>
            <label className="block">
              <span className="text-xs text-ivory-dim">Slug</span>
              <input value={article.slug} onChange={(event) => updateField('slug', makeSlug(event.target.value))} placeholder="what-is-jainism" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" required />
            </label>
            <label className="block">
              <span className="text-xs text-ivory-dim">Subtitle</span>
              <input value={article.subtitle} onChange={(event) => updateField('subtitle', event.target.value)} placeholder="A short description for article cards" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" />
            </label>
            <label className="block">
              <span className="text-xs text-ivory-dim">Article body</span>
              <textarea value={article.body} onChange={(event) => updateField('body', event.target.value)} placeholder="Write one paragraph at a time. Leave a blank line between paragraphs." rows={14} className="mt-2 w-full resize-y border border-line bg-panel px-4 py-3 text-sm leading-relaxed text-ivory outline-none focus:border-gold" required />
            </label>
          </div>

          <aside className="space-y-5">
            <label className="block">
              <span className="text-xs text-ivory-dim">Category</span>
              <select value={article.category} onChange={(event) => updateField('category', event.target.value)} className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold">
                <option>Beginner’s guide</option><option>Philosophy</option><option>History</option><option>Texts</option><option>Heritage</option><option>Contemporary relevance</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-ivory-dim">Reading time</span>
              <input value={article.readingTime} onChange={(event) => updateField('readingTime', event.target.value)} placeholder="5 min read" className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold" />
            </label>
            <label className="block">
              <span className="text-xs text-ivory-dim">Evidence label</span>
              <select value={article.evidence} onChange={(event) => updateField('evidence', event.target.value)} className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold">
                <option value="tradition">Tradition</option><option value="established">Established</option><option value="debated">Debated</option><option value="unverified">Unverified</option>
              </select>
            </label>
            <label className="block">
              <span className="text-xs text-ivory-dim">Cover image URL</span>
              <input type="url" value={article.imageUrl} onChange={(event) => updateField('imageUrl', event.target.value)} placeholder="https://..." className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold" />
            </label>
            <label className="block">
              <span className="text-xs text-ivory-dim">Image caption</span>
              <input value={article.imageCaption} onChange={(event) => updateField('imageCaption', event.target.value)} placeholder="Optional caption" className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold" />
            </label>
            {article.imageUrl ? <img src={article.imageUrl} alt="Cover preview" className="aspect-video w-full object-cover" /> : <div className="flex aspect-video items-center justify-center border border-dashed border-line text-center text-xs text-ivory-dim/60">Cover preview appears here</div>}
            <div className="flex flex-col gap-3 pt-2">
              <button type="submit" className="bg-gold px-4 py-3 text-sm font-medium text-void transition-opacity hover:opacity-90">Save draft</button>
              <button type="button" onClick={clearDraft} className="border border-line px-4 py-3 text-sm text-ivory-dim hover:border-gold hover:text-ivory">Clear draft</button>
              <p aria-live="polite" className="text-xs text-gold-dim">{saved ? 'Draft saved on this device.' : 'Not saved yet.'}</p>
            </div>
          </aside>
        </form>
      )}
    </div>
  )
}
