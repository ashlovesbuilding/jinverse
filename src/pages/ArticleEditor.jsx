import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient.js'

const STORAGE_KEY = 'jinverse-article-draft'
const EMPTY_ARTICLE = {
  title: '', slug: '', subtitle: '', category: 'Beginner’s guide',
  readingTime: '5 min read', evidence: 'tradition', imageUrl: '',
  imageCaption: '', body: '',
}

function makeSlug(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function ArticleEditor() {
  const [article, setArticle] = useState(EMPTY_ARTICLE)
  const [preview, setPreview] = useState(false)
  const [status, setStatus] = useState('Not saved yet.')

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved) setArticle({ ...EMPTY_ARTICLE, ...JSON.parse(saved) })
    } catch { /* use empty draft */ }
  }, [])

  const paragraphs = useMemo(
    () => article.body.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean),
    [article.body],
  )

  function updateField(field, value) {
    setStatus('Unsaved changes.')
    setArticle((current) => ({ ...current, [field]: value }))
  }

  function handleTitleChange(event) {
    const value = event.target.value
    setStatus('Unsaved changes.')
    setArticle((current) => ({
      ...current,
      title: value,
      slug: current.slug === makeSlug(current.title) || current.slug === '' ? makeSlug(value) : current.slug,
    }))
  }

  function removePicture() {
    setArticle((current) => ({ ...current, imageUrl: '', imageCaption: '' }))
    setStatus('Picture removed. Save the draft to keep this change.')
  }

  async function saveDraft(event) {
    event.preventDefault()
    setStatus('Saving draft…')
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(article))

    if (!isSupabaseConfigured || !supabase) {
      setStatus('Saved on this device. Supabase is not configured yet.')
      return
    }

    const payload = {
      slug: article.slug,
      title: article.title,
      subtitle: article.subtitle || null,
      category: article.category || null,
      reading_time: article.readingTime || null,
      body_markdown: article.body,
      hero_image_url: article.imageUrl || null,
      status: 'draft',
    }
    const { error } = await supabase.from('articles').upsert(payload, { onConflict: 'slug' })
    setStatus(error ? 'Saved locally. Shared saving needs the authenticated editor policy.' : 'Draft saved to the shared JINVERSE library.')
  }

  function clearDraft() {
    window.localStorage.removeItem(STORAGE_KEY)
    setArticle(EMPTY_ARTICLE)
    setStatus('Draft cleared.')
  }

  return (
    <div className="container-page py-16">
      <Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">← Back to articles</Link>
      <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-dim">Editorial workspace</p>
      <h1 className="mt-2 font-display text-3xl text-ivory">Simple Article Editor</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory-dim">Prepare, preview, and save an article draft.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={() => setPreview((value) => !value)} className="border border-line px-4 py-2 text-sm text-ivory hover:border-gold">{preview ? 'Edit article' : 'Preview article'}</button>
        <span className="self-center text-xs text-gold-dim" aria-live="polite">{status}</span>
      </div>

      {preview ? (
        <article className="mt-10 max-w-3xl border border-line p-6 sm:p-10">
          <p className="text-xs text-gold-dim">{article.category || 'Uncategorised'}</p>
          <h2 className="mt-3 font-display text-3xl text-ivory">{article.title || 'Untitled article'}</h2>
          <p className="mt-3 text-ivory-dim">{article.subtitle || 'Add a short subtitle in the editor.'}</p>
          {article.imageUrl && <img src={article.imageUrl} alt={article.imageCaption || article.title || 'Article cover'} className="mt-8 max-h-[28rem] w-full object-cover" />}
          {article.imageCaption && <p className="mt-2 text-xs text-ivory-dim/70">{article.imageCaption}</p>}
          <div className="mt-10 space-y-5 text-sm leading-relaxed text-ivory-dim">{paragraphs.length ? paragraphs.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>) : <p>Your article body will appear here.</p>}</div>
        </article>
      ) : (
        <form onSubmit={saveDraft} className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-6">
            <label className="block" htmlFor="article-title"><span className="text-xs text-ivory-dim">Title</span><input id="article-title" name="title" type="text" value={article.title} onChange={handleTitleChange} placeholder="What Is Jainism?" autoComplete="off" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" required /></label>
            <label className="block" htmlFor="article-slug"><span className="text-xs text-ivory-dim">Slug</span><input id="article-slug" name="slug" type="text" value={article.slug} onChange={(event) => updateField('slug', makeSlug(event.target.value))} placeholder="what-is-jainism" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" required /></label>
            <label className="block" htmlFor="article-subtitle"><span className="text-xs text-ivory-dim">Subtitle</span><input id="article-subtitle" name="subtitle" type="text" value={article.subtitle} onChange={(event) => updateField('subtitle', event.target.value)} placeholder="A short description for article cards" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" /></label>
            <div className="border border-line p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-ivory-dim">Article picture</span>
                {article.imageUrl && <button type="button" onClick={removePicture} className="border border-red-400/60 px-3 py-1.5 text-xs text-red-300 hover:bg-red-400/10">Remove picture</button>}
              </div>
              <label className="mt-3 block" htmlFor="article-image-url"><span className="text-xs text-ivory-dim">Picture URL</span><input id="article-image-url" name="imageUrl" type="url" value={article.imageUrl} onChange={(event) => updateField('imageUrl', event.target.value)} placeholder="https://…" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" /></label>
              <label className="mt-3 block" htmlFor="article-image-caption"><span className="text-xs text-ivory-dim">Picture description</span><input id="article-image-caption" name="imageCaption" type="text" value={article.imageCaption} onChange={(event) => updateField('imageCaption', event.target.value)} placeholder="Describe the picture" className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" /></label>
              {article.imageUrl && <img src={article.imageUrl} alt={article.imageCaption || 'Article picture preview'} className="mt-4 max-h-64 w-full object-cover" />}
            </div>
            <label className="block" htmlFor="article-body"><span className="text-xs text-ivory-dim">Article body</span><textarea id="article-body" name="body" value={article.body} onChange={(event) => updateField('body', event.target.value)} placeholder="Write one paragraph at a time." rows={14} className="mt-2 w-full resize-y border border-line bg-panel px-4 py-3 text-sm leading-relaxed text-ivory outline-none focus:border-gold" required /></label>
          </div>
          <aside className="space-y-5"><label className="block"><span className="text-xs text-ivory-dim">Category</span><select value={article.category} onChange={(event) => updateField('category', event.target.value)} className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory"><option>Beginner’s guide</option><option>Philosophy</option><option>History</option><option>Texts</option><option>Heritage</option><option>Contemporary relevance</option></select></label><div className="flex flex-col gap-3 pt-2"><button type="submit" className="bg-gold px-4 py-3 text-sm font-medium text-void">Save draft</button><button type="button" onClick={clearDraft} className="border border-line px-4 py-3 text-sm text-ivory-dim">Clear draft</button></div></aside>
        </form>
      )}
    </div>
  )
}
