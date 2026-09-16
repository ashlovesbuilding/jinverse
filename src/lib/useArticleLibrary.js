import { useEffect, useMemo, useState } from 'react'
import { articles as seedArticles } from '../data/placeholderContent.js'
import { supabase, isSupabaseConfigured } from './supabaseClient.js'

// Shared article collection used by /articles, the homepage "Latest
// Articles" section, and (later) "Today's Article" — one merge path so
// they can never drift out of sync with each other.
//
// Seed articles are always present. Published Supabase rows are merged in
// on top: a matching slug overrides the seed entry's fields, a new slug is
// appended. A missing Supabase config or a failed query simply leaves the
// seed articles as the whole collection — this never throws.
export function useArticleLibrary() {
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

  const articles = useMemo(() => {
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

  return { articles }
}
