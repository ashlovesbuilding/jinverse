import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient.js'

const STORAGE_KEY = 'jinverse-article-draft'
const APPROVED_EDITOR_EMAIL = 'ashishjainpatni2001@gmail.com'
const EMPTY_ARTICLE = { title: '', slug: '', subtitle: '', category: 'Beginner’s guide', readingTime: '5 min read', imageUrl: '', imageCaption: '', body: '' }
const makeSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ArticleEditor() {
  const [article, setArticle] = useState(EMPTY_ARTICLE)
  const [preview, setPreview] = useState(false)
  const [status, setStatus] = useState('Not saved yet.')
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) { setAuthLoading(false); return undefined }
    let mounted = true
    supabase.auth.getSession().then(({ data }) => { if (mounted) { setUser(data.session?.user ?? null); setAuthLoading(false) } })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => { setUser(session?.user ?? null); setAuthLoading(false) })
    return () => { mounted = false; listener.subscription.unsubscribe() }
  }, [])

  useEffect(() => {
    if (!user) return
    try { const saved = window.localStorage.getItem(STORAGE_KEY); if (saved) setArticle({ ...EMPTY_ARTICLE, ...JSON.parse(saved) }) } catch {}
  }, [user])

  const approved = user?.email?.toLowerCase() === APPROVED_EDITOR_EMAIL
  const paragraphs = useMemo(() => article.body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean), [article.body])
  const update = (field, value) => { setArticle((current) => ({ ...current, [field]: value })); setStatus('Unsaved changes.') }
  const signIn = async () => {
    if (!supabase) { setStatus('Sign-in is not configured yet.'); return }
    setStatus('Opening Google sign-in…')
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } })
    if (error) setStatus(`Sign-in failed: ${error.message}`)
  }
  const signOut = async () => { await supabase?.auth.signOut() }
  const clearDraft = () => { window.localStorage.removeItem(STORAGE_KEY); setArticle(EMPTY_ARTICLE); setStatus('Draft cleared.') }
  async function saveDraft(event) {
    event.preventDefault()
    if (!approved || !supabase) return
    setStatus('Saving draft…')
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(article))
    const payload = { slug: article.slug, title: article.title, subtitle: article.subtitle || null, category: article.category || null, reading_time: article.readingTime || null, body_markdown: article.body, hero_image_url: article.imageUrl || null, hero_image_caption: article.imageCaption || null, status: 'draft' }
    const { error } = await supabase.from('articles').upsert(payload, { onConflict: 'slug' })
    setStatus(error ? `Shared save failed: ${error.message}` : 'Draft saved to the shared JINVERSE library.')
  }

  if (authLoading) return <div className="container-page py-16 text-sm text-ivory-dim">Checking editor access…</div>
  if (!approved) return <div className="container-page py-16"><Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">← Back to articles</Link><p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-dim">Protected workspace</p><h1 className="mt-2 font-display text-3xl text-ivory">Editor access required</h1><p className="mt-3 max-w-xl text-sm leading-relaxed text-ivory-dim">{user ? `The signed-in account (${user.email}) is not approved to edit Jinverse articles.` : 'Sign in with the approved editor account to continue.'}</p>{user ? <button type="button" onClick={signOut} className="mt-6 border border-line px-4 py-2 text-sm text-ivory">Sign out</button> : <button type="button" onClick={signIn} className="mt-6 bg-gold px-4 py-3 text-sm font-medium text-void">Sign in with Google</button>}<p className="mt-3 text-xs text-ivory-dim" aria-live="polite">{status}</p></div>

  return <div className="container-page py-16"><div className="flex flex-wrap items-center justify-between gap-3"><Link to="/articles" className="text-xs text-ivory-dim hover:text-ivory">← Back to articles</Link><button type="button" onClick={signOut} className="border border-line px-3 py-1.5 text-xs text-ivory-dim">Sign out</button></div><p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-dim">Editorial workspace</p><h1 className="mt-2 font-display text-3xl text-ivory">Simple Article Editor</h1><p className="mt-3 text-sm text-ivory-dim">Signed in as {user.email}. Prepare, preview, and save an article draft.</p><div className="mt-8 flex flex-wrap gap-3"><button type="button" onClick={() => setPreview(!preview)} className="border border-line px-4 py-2 text-sm text-ivory">{preview ? 'Edit article' : 'Preview article'}</button><span className="self-center text-xs text-gold-dim" aria-live="polite">{status}</span></div>{preview ? <article className="mt-10 max-w-3xl border border-line p-6 sm:p-10"><p className="text-xs text-gold-dim">{article.category}</p><h2 className="mt-3 font-display text-3xl text-ivory">{article.title || 'Untitled article'}</h2><p className="mt-3 text-ivory-dim">{article.subtitle}</p>{article.imageUrl && <img src={article.imageUrl} alt={article.imageCaption || article.title} className="mt-8 max-h-[28rem] w-full object-cover" />}<div className="mt-10 space-y-5 text-sm leading-relaxed text-ivory-dim">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></article> : <form onSubmit={saveDraft} className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]"><div className="space-y-6"><label className="block text-xs text-ivory-dim">Title<input required value={article.title} onChange={(e) => update('title', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Slug<input required value={article.slug} onChange={(e) => update('slug', makeSlug(e.target.value))} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Subtitle<input value={article.subtitle} onChange={(e) => update('subtitle', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Picture URL<input type="url" value={article.imageUrl} onChange={(e) => update('imageUrl', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Picture description<input value={article.imageCaption} onChange={(e) => update('imageCaption', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Article body<textarea required rows={14} value={article.body} onChange={(e) => update('body', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label></div><aside className="space-y-5"><label className="block text-xs text-ivory-dim">Category<select value={article.category} onChange={(e) => update('category', e.target.value)} className="mt-2 w-full border border-line bg-panel px-3 py-3 text-sm text-ivory"><option>Beginner’s guide</option><option>Philosophy</option><option>History</option><option>Texts</option><option>Heritage</option><option>Contemporary relevance</option></select></label><button type="submit" className="w-full bg-gold px-4 py-3 text-sm font-medium text-void">Save draft</button><button type="button" onClick={clearDraft} className="w-full border border-line px-4 py-3 text-sm text-ivory-dim">Clear draft</button></aside></form>}</div>
}
