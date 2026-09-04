import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children in a single, quiet scroll-reveal. Respects
 * prefers-reduced-motion (handled globally in index.css, which zeroes out
 * animation-duration) and only fires once per element.
 */
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${visible ? 'animate-reveal' : 'opacity-0'} ${className}`} style={{ animationDelay: visible ? `${delay}ms` : undefined }}>
      {children}
    </div>
  )
}
