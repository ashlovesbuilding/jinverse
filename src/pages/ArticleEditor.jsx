import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { isSupabaseConfigured, supabase } from '../lib/supabaseClient.js'

const IMAGE_BUCKET = 'article-images'
const APPROVED_EDITOR_EMAILS = ['ashishjainpatni2001@gmail.com', 'sportsfeverworld@gmail.com']
const EMPTY_ARTICLE = { title: '', slug: '', subtitle: '', category: 'Beginner’s guide', readingTime: '5 min read', imageUrl: '', imageCaption: '', body: '' }
const makeSlug = (value) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ArticleEditor() {
  const [searchParams] = useSearchParams()
  const requestedSlug = searchParams.get('slug') || ''
  const [article, setArticle] = useState(EMPTY_ARTICLE)
  const [preview, setPreview] = useState(false)
  const [status, setStatus] = useState('Not saved yet.')
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [loadingArticle, setLoadingArticle] = useState(false)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) { setAuthLoading(false); return undefined }
    let mounted = true
    supabase.auth.getSession().then(({ data }) => { if (mounted) { setUser(data.session?.user ?? null); setAuthLoading(false) } })
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => { setUser(session?.user ?? null); setAuthLoading(false) })
    return () => { mounted = false; listener.subscription.unsubscribe() }
  }, [])

  useEffect(() => {
    if (!user || !supabase || !requestedSlug) return
    let mounted = true
    setLoadingArticle(true)
    supabase.from('articles').select('*').eq('slug', requestedSlug).maybeSingle().then(({ data, error }) => {
      if (!mounted) return
      if (error) setStatus(`Article load failed: ${error.message}`)
      else if (data) setArticle({ ...EMPTY_ARTICLE, title: data.title || '', slug: data.slug || '', subtitle: data.subtitle || '', category: data.category || EMPTY_ARTICLE.category, readingTime: data.reading_time || EMPTY_ARTICLE.readingTime, imageUrl: data.hero_image_url || '', imageCaption: data.hero_image_caption || '', body: data.body_markdown || '' })
      else setStatus('Article not found.')
      setLoadingArticle(false)
    })
    return () => { mounted = false }
  }, [user, requestedSlug])

  const approved = APPROVED_EDITOR_EMAILS.includes(user?.email?.toLowerCase() || '')
  const paragraphs = useMemo(() => article.body.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean), [article.body])
  const update = (field, value) => { setArticle((current) => ({ ...current, [field]: value })); setStatus('Unsaved changes.') }
  const signIn = async () => { if (!supabase) { setStatus('Sign-in is not configured yet.'); return }; setStatus('Opening Google sign-in…'); const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: window.location.origin } }); if (error) setStatus(`Sign-in failed: ${error.message}`) }
  const signOut = async () => { await supabase?.auth.signOut() }
  const clearDraft = () => { setArticle(EMPTY_ARTICLE); setStatus('Blank article form.') }

  async function uploadImage(event) {
    const file = event.target.files?.[0]; event.target.value = ''
    if (!file || !supabase || !user) return
    if (!file.type.startsWith('image/')) { setStatus('Please choose an image file.'); return }
    if (file.size > 8 * 1024 * 1024) { setStatus('Image must be smaller than 8 MB.'); return }
    setUploading(true); setStatus('Uploading image…')
    const safeName = file.name.replace(/[^a-z0-9.-]/gi, '-').replace(/-+/g, '-').toLowerCase() || 'image.jpg'
    const path = `${user.id}/${Date.now()}-${safeName}`
    const { error } = await supabase.storage.from(IMAGE_BUCKET).upload(path, file, { cacheControl: '3600', upsert: false, contentType: file.type })
    if (error) { setStatus(`Image upload failed: ${error.message}`); setUploading(false); return }
    const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path)
    update('imageUrl', data.publicUrl); setStatus('Image uploaded. Click Save changes.'); setUploading(false)
  }

  async function saveDraft(event) {
    event.preventDefault(); if (!approved || !supabase) return
    setStatus('Saving article…')
    const payload = { slug: article.slug, title: article.title, subtitle: article.subtitle || null, category: article.category || null, reading_time: article.readingTime || null, body_markdown: article.body, hero_image_url: article.imageUrl || null, hero_image_caption: article.imageCaption || null, status: 'published' }
    const { data, error } = await supabase.from('articles').upsert(payload, { onConflict: 'slug' }).select('*').single()
    if (error) { setStatus(`Shared save failed: ${error.message}`); return }
    setArticle({ ...article, imageUrl: data.hero_image_url || '', imageCaption: data.hero_image_caption || '' })
    setStatus('Article saved to the shared JINVERSE library.')
  }

  if (authLoading) return <div className="container-page py-16 text-sm text-ivory-dim">Checking editor access…</div>
  if (!approved) return <div className="container-page py-16"><Link to="/articles">← Back to articles</Link><h1 className="mt-6 font-display text-3xl text-ivory">Editor access required</h1><p className="mt-3 text-sm text-ivory-dim">{user ? `The signed-in account (${user.email}) is not approved to edit Jinverse articles.` : 'Sign in with the approved editor account to continue.'}</p>{user ? <button type="button" onClick={signOut}>Sign out</button> : <button type="button" onClick={signIn}>Sign in with Google</button>}</div>

  return <div className="container-page py-16"><div className="flex flex-wrap items-center justify-between gap-3"><Link to="/articles">← Back to articles</Link><button type="button" onClick={signOut}>Sign out</button></div><p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-dim">Editorial workspace</p><h1 className="mt-2 font-display text-3xl text-ivory">Simple Article Editor</h1><p className="mt-3 text-sm text-ivory-dim">Signed in as {user.email}. {loadingArticle ? 'Loading article…' : requestedSlug ? `Editing ${requestedSlug}` : 'Prepare, preview, and save an article.'}</p><div className="mt-8 flex flex-wrap gap-3"><button type="button" onClick={() => setPreview(!preview)} className="border border-line px-4 py-2 text-sm text-ivory">{preview ? 'Edit article' : 'Preview article'}</button><span className="self-center text-xs text-gold-dim" aria-live="polite">{status}</span></div>{preview ? <article className="mt-10 max-w-3xl border border-line p-6 sm:p-10"><p className="text-xs text-gold-dim">{article.category}</p><h2 className="mt-3 font-display text-3xl text-ivory">{article.title || 'Untitled article'}</h2><p className="mt-3 text-ivory-dim">{article.subtitle}</p>{article.imageUrl && <img src={article.imageUrl} alt={article.imageCaption || article.title} className="mt-8 max-h-[28rem] w-full object-cover" />}<div className="mt-10 space-y-5 text-sm leading-relaxed text-ivory-dim">{paragraphs.map((p, i) => <p key={i}>{p}</p>)}</div></article> : <form onSubmit={saveDraft} className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]"><div className="space-y-6"><label className="block text-xs text-ivory-dim">Title<input required value={article.title} onChange={(e) => update('title', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Slug<input required value={article.slug} onChange={(e) => update('slug', makeSlug(e.target.value))} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Subtitle<input value={article.subtitle} onChange={(e) => update('subtitle', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><div><label className="block text-xs text-ivory-dim" htmlFor="article-image-upload">Picture</label><div className="mt-2 flex flex-wrap gap-3"><label htmlFor="article-image-upload" className="cursor-pointer border border-line px-4 py-3 text-sm text-ivory">{uploading ? 'Uploading…' : 'Choose image'}</label><input id="article-image-upload" type="file" accept="image/*" onChange={uploadImage} disabled={uploading} className="sr-only" /></div>{article.imageUrl && <img src={article.imageUrl} alt="Selected article image" className="mt-4 max-h-56 w-full object-cover" />}<input type="url" value={article.imageUrl} onChange={(e) => update('imageUrl', e.target.value)} placeholder="Or paste an image URL" className="mt-4 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></div><label className="block text-xs text-ivory-dim">Picture description (optional)<input value={article.imageCaption} onChange={(e) => update('imageCaption', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label><label className="block text-xs text-ivory-dim">Article body<textarea required rows={14} value={article.body} onChange={(e) => update('body', e.target.value)} className="mt-2 w-full border border-line bg-panel px-4 py-3 text-sm text-ivory" /></label></div><aside className="space-y-5"><button type="submit" disabled={uploading || loadingArticle} className="w-full bg-gold px-4 py-3 text-sm font-medium text-void disabled:opacity-50">Save changes</button><button type="button" onClick={clearDraft} className="w-full border border-line px-4 py-3 text-sm text-ivory-dim">Start blank article</button></aside></form>}</div>
}
