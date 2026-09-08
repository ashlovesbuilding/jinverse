import { useEffect } from 'react'

const SITE_NAME = 'JINVERSE'
const SITE_URL = 'https://jinverse.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/jinverselogo.png`

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets per-page title/meta/canonical tags on mount. No dependency added —
 * plain DOM upserts, since react-helmet-async isn't installed.
 */
export default function Seo({ title, description, path = '', image, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Explore Jainism. Discover the Universe Within.`
    const canonicalUrl = `${SITE_URL}${path}`
    const metaImage = image || DEFAULT_IMAGE

    document.title = fullTitle
    if (description) upsertMeta('name', 'description', description)
    upsertLink('canonical', canonicalUrl)

    upsertMeta('property', 'og:title', fullTitle)
    if (description) upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', metaImage)
    upsertMeta('property', 'og:type', path.startsWith('/articles/') ? 'article' : 'website')
    upsertMeta('property', 'og:site_name', SITE_NAME)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    if (description) upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', metaImage)

    let robots = document.head.querySelector('meta[name="robots"]')
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta')
        robots.setAttribute('name', 'robots')
        document.head.appendChild(robots)
      }
      robots.setAttribute('content', 'noindex, nofollow')
    } else if (robots) {
      robots.remove()
    }
  }, [title, description, path, image, noindex])

  return null
}
