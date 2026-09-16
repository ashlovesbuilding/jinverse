// Deterministic "Today's Article" selection — same calendar day (in IST)
// always picks the same article for every visitor, with no database field,
// no manual configuration and no randomness. IST has been a fixed UTC+5:30
// offset with no DST since 1945 (see the same convention in Home.jsx's
// getSeasonalBanner), so the boundary is computed directly rather than via
// a timezone library.
const IST_OFFSET_MS = 5.5 * 60 * 60 * 1000

export function getIstDateKey(date = new Date()) {
  const istMs = date.getTime() + IST_OFFSET_MS
  const istDate = new Date(istMs)
  const year = istDate.getUTCFullYear()
  const month = String(istDate.getUTCMonth() + 1).padStart(2, '0')
  const day = String(istDate.getUTCDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Small, order-stable hash (djb2-style) — a plain array index derived from
// Date.now() would drift whenever the merged article collection's order
// changes (e.g. once the async Supabase fetch resolves), so the date key
// is hashed instead of used as a raw index.
function hashDateKey(key) {
  let hash = 5381
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 33 + key.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

// `articles` is expected to be the merged seed+Supabase collection from
// useArticleLibrary(). Sorting by slug here establishes a candidate order
// that does not depend on fetch timing, so the same date always resolves
// to the same article regardless of when Supabase data arrives.
export function getTodaysArticle(articles, date = new Date()) {
  if (!Array.isArray(articles) || articles.length === 0) return null
  const ordered = [...articles].sort((a, b) => (a.slug || '').localeCompare(b.slug || ''))
  const index = hashDateKey(getIstDateKey(date)) % ordered.length
  return ordered[index]
}
