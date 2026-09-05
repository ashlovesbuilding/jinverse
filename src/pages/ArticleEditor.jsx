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

  function handleTitleChange(value) {
    setStatus('Unsaved changes.')
    setArticle((current) => ({
      ...current,
      title: value,
      slug: current.slug === makeSlug(current.title) || current.slug === '' ? makeSlug(value) : current.slug,
    }))
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
    if (error) {
      setStatus('Saved locally. Shared saving needs the authenticated editor policy.')
    } else {
      setStatus('Draft saved to the shared JINVERSE library.')
    }
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
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory-dim">
        Prepare, preview, and save an article draft. Drafts are always retained on this device; shared saving is attempted when Supabase is configured.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={() => setPreview((value) => !value)} className="border border-line px-4 py-2 text-sm text-ivory hover:border-gold">
          {preview ? 'Edit article' : 'Preview article'}
        </button>
        <span className="self-center text-xs text-gold-dim" aria-live="polite">{status}</span>
      </div>

      {preview ? (
        <article className="mt-10 max-w-3xl border border-line p-6 sm:p-10">
          <p className="text-xs text-gold-dim">{article.category || 'Uncategorised'}</p>
          <h2 className="mt-3 font-display text-3xl text-ivory">{article.title || 'Untitled article'}</h2>
          <p className="mt-3 text-ivory-dim">{article.subtitle || 'Add a short subtitle in the editor.'}</p>
          {article.imageUrl && <img src={article.imageUrl} alt={article.imageCaption || article.title || 'Article cover'} className="mt-8 max-h-[28rem] w-full object-cover" />}
          <div className="mt-10 space-y-5 text-sm leading-relaxed text-ivory-dim">
            {paragraphs.length ? paragraphs.map((paragraph, index) => <p key={`${index}-${paragraph.slice(0, 20)}`}>{paragraph}</p>) : <p>Your article body will appear here.</p>}
          </div>
          <p className="mt-10 border-t border-line pt-5 text-xs text-ivory-dim/60">Evidence label: {article.evidence}</p>
        </article>
      ) : (
        <form onSubmit={saveDraft} className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-6">
            {[
              ['title', 'Title', 'What Is Jainism?'],
              ['slug', 'Slug', 'what-is-jainism'],
              ['subtitle', 'Subtitle', 'A short description for article cards'],
            ].map(([field, label, placeholder]) => (
              <label key={field} className="block"><span className="text-xs text-ivory-dim">{label}</span><input value={article[field]} onChange={(event) => field === 'title' ? handleTitleChange(event.target.value) : updateField(field, field === 'slug' ? makeSlug(event.target.value) : event.target.value)} placeholder={placeholder} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory outline-none focus:border-gold" required={field !== 'subtitle'} /></label>
            ))}
            <label className="block"><span className="text-xs text-ivory-dim">Article body</span><textarea value={article.body} onChange={(event) => updateField('body', event.target.value)} placeholder="Write one paragraph at a time. Leave a blank line between paragraphs." rows={14} className="mt-2 w-full resize-y border border-line bg-panel px-4 py-3 text-sm leading-relaxed text-ivory outline-none focus:border-gold" required /></label>
          </div>
          <aside className="space-y-5">
            <label className="block"><span className="text-xs text-ivory-dim">Category</span><select value={article.category} onChange={(event) => updateField('category', event.target.value)} className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold"><option>Beginner’s guide</option><option>Philosophy</option><option>History</option><option>Texts</option><option>Heritage</option><option>Contemporary relevance</option></select></label>
            <label className="block"><span className="text-xs text-ivory-dim">Reading time</span><input value={article.readingTime} onChange={(event) => updateField('readingTime', event.target.value)} className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold" /></label>
            <label className="block"><span className="text-xs text-ivory-dim">Evidence label</span><select value={article.evidence} onChange={(event) => updateField('evidence', event.target.value)} className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold"><option value="tradition">Tradition</option><option value="established">Established</option><option value="debated">Debated</option><option value="unverified">Unverified</option></select></label>
            <label className="block"><span className="text-xs text-ivory-dim">Cover image URL</span><input type="url" value={article.imageUrl} onChange={(event) => updateField('imageUrl', event.target.value)} placeholder="https://…" className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold" /></label>
            <label className="block"><span className="text-xs text-ivory-dim">Image caption</span><input value={article.imageCaption} onChange={(event) => updateField('imageCaption', event.target.value)} placeholder="Optional caption" className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory outline-none focus:border-gold" /></label>
            {article.imageUrl ? <img src={article.imageUrl} alt="Cover preview" className="aspect-video w-full object-cover" /> : <div className="flex aspect-video items-center justify-center border border-dashed border-line text-center text-xs text-ivory-dim/60">Cover preview appears here</div>}
            <div className="flex flex-col gap-3 pt-2"><button type="submit" className="bg-gold px-4 py-3 text-sm font-medium text-void hover:opacity-90">Save draft</button><button type="button" onClick={clearDraft} className="border border-line px-4 py-3 text-sm text-ivory-dim hover:border-gold hover:text-ivory">Clear draft</button></div>
          </aside>
        </form>
      )}
    </div>
  )
}
