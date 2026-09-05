const ARTICLE_STORAGE_KEY = 'jinverse-articles'
const ARTICLE_DRAFT_KEY = 'jinverse-article-draft'

export function readLocalArticles() {
  try {
    const saved = window.localStorage.getItem(ARTICLE_STORAGE_KEY)
    const articles = saved ? JSON.parse(saved) : []
    return Array.isArray(articles) ? articles : []
  } catch {
    return []
  }
}

export function writeLocalArticles(articles) {
  try {
    window.localStorage.setItem(ARTICLE_STORAGE_KEY, JSON.stringify(articles))
  } catch {
    // Local persistence is optional; the UI should continue working.
  }
}

export function upsertLocalArticle(article) {
  const current = readLocalArticles()
  const next = current.filter((item) => item.slug !== article.slug)
  next.push(article)
  writeLocalArticles(next)
  return article
}

export { ARTICLE_STORAGE_KEY, ARTICLE_DRAFT_KEY }
