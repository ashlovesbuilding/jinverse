import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { articles as seedArticles, articleCategories } from '../data/placeholderContent.js'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient.js'

export default function Articles() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [remoteArticles, setRemoteArticles] = useState([])

  useEffect(() => {
    let active = true
    async function loadArticles() {
      if (!isSupabaseConfigured || !supabase) return
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: true })
      if (!error && active) setRemoteArticles(data || [])
    }
    loadArticles()
    return () => { active = false }
  }, [])

  const libraryArticles = useMemo(() => {
    const merged = [...seedArticles]
    remoteArticles.forEach((remote) => {
      const index = merged.findIndex((article) => article.slug === remote.slug)
      const normalized = {
        ...remote,
        readingTime: remote.reading_time || remote.readingTime || '5 min read',
        excerpt: remote.excerpt || remote.subtitle || '',
      }
      if (index >= 0) merged[index] = { ...merged[index], ...normalized }
      else merged.push(normalized)
    })
    return merged
  }, [remoteArticles])

  const filtered = useMemo(() => {
    return libraryArticles.filter((a) => {
      const matchesCategory = category === 'All' || a.category === category
      const haystack = `${a.title || ''} ${a.excerpt || ''} ${a.subtitle || ''}`.toLowerCase()
      return matchesCategory && (query.trim() === '' || haystack.includes(query.toLowerCase()))
    })
  }, [libraryArticles, query, category])

  return (
    <div className="container-page py-20">
      <Reveal><SectionHeading eyebrow="Articles" title="The JINVERSE library" /></Reveal>
      <Reveal delay={60}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" aria-label="Search articles" className="w-full max-w-xs rounded-sm border border-line bg-panel px-4 py-2.5 text-sm text-ivory placeholder:text-ivory-dim/50" />
          <div className="flex flex-wrap gap-2">
            {['All', ...articleCategories].map((c) => <button key={c} type="button" onClick={() => setCategory(c)} className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${category === c ? 'border-gold text-gold' : 'border-line text-ivory-dim hover:text-ivory'}`}>{c}</button>)}
          </div>
        </div>
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {filtered.map((a, i) => <Reveal key={a.slug} delay={i * 60}><Link to={`/articles/${a.slug}`} className="group flex h-full flex-col border border-line p-6 transition-colors hover:border-gold-dim"><p className="text-xs text-gold-dim">{a.category}</p><h3 className="mt-2 font-display text-lg text-ivory">{a.title}</h3><p className="mt-1 text-xs text-ivory-dim/70">{a.subtitle}</p><p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-dim">{a.excerpt}</p><p className="mt-4 text-xs text-ivory-dim/60">{a.readingTime}</p></Link></Reveal>)}
        {filtered.length === 0 && <p className="text-sm text-ivory-dim">No articles match that search yet.</p>}
      </div>
    </div>
  )
}
