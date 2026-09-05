import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/explore', label: 'Explore' },
  { to: '/teachings', label: 'Teachings' },
  { to: '/tirthankaras', label: 'Tirthankaras' },
  { to: '/history', label: 'History' },
  { to: '/texts', label: 'Texts' },
  { to: '/articles', label: 'Articles' },
  { to: '/reels', label: 'Reels' },
  { to: '/about', label: 'About' },
]

const JAIN_EMBLEM = 'https://raw.githubusercontent.com/ashlovesbuilding/jinverse/main/file_0000000024e0820888a7c6321e76afcf.png'

const linkClass = ({ isActive }) =>
  `text-sm transition-colors ${isActive ? 'text-gold' : 'text-ivory-dim hover:text-ivory'}`

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-void/95 backdrop-blur">
      <div className="jain-flag-strip" aria-label="Jain flag colours" />
      <div className="container-page flex min-h-20 items-center justify-between gap-4 py-3">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)} aria-label="JINVERSE home">
          <img
            src={JAIN_EMBLEM}
            alt="Jain emblem"
            className="h-14 w-10 shrink-0 object-contain object-center"
          />
          <span className="min-w-0">
            <span className="block font-display text-2xl tracking-[0.18em] text-ivory sm:text-3xl">JINVERSE</span>
            <span className="hidden text-[8px] uppercase tracking-[0.28em] text-gold-dim sm:block">Explore Jainism · Discover the Universe Within</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>{item.label}</NavLink>
          ))}
        </nav>

        <button type="button" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-line text-ivory lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((v) => !v)}>
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-px w-4 bg-ivory transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute left-0 top-1.5 h-px w-4 bg-ivory transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-3 h-px w-4 bg-ivory transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <nav id="mobile-nav" className={`overflow-hidden border-t border-line/70 bg-void transition-[max-height] duration-300 ease-in-out lg:hidden ${open ? 'max-h-96' : 'max-h-0 border-t-0'}`} aria-label="Mobile">
        <div className="container-page flex flex-col gap-1 py-3">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `rounded-sm px-2 py-2.5 text-sm ${isActive ? 'text-gold' : 'text-ivory-dim hover:text-ivory'}`}>{item.label}</NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
