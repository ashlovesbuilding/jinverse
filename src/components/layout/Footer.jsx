import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-line/70">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-display text-lg text-ivory">JINVERSE</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory-dim">
            A digital knowledge and heritage platform for Jain philosophy, history, texts and living tradition —
            built to preserve the tradition's own voice for generations to come.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-ivory-dim/70">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/teachings" className="text-ivory-dim hover:text-ivory">Teachings</Link></li>
            <li><Link to="/tirthankaras" className="text-ivory-dim hover:text-ivory">Tirthankaras</Link></li>
            <li><Link to="/history" className="text-ivory-dim hover:text-ivory">History &amp; Heritage</Link></li>
            <li><Link to="/texts" className="text-ivory-dim hover:text-ivory">Texts</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-ivory-dim/70">About</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="text-ivory-dim hover:text-ivory">Our approach to sources</Link></li>
            <li><Link to="/articles" className="text-ivory-dim hover:text-ivory">Articles</Link></li>
            <li><Link to="/reels" className="text-ivory-dim hover:text-ivory">Reels</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-page flex flex-col gap-2 border-t border-line/70 py-6 text-xs text-ivory-dim/60 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} JINVERSE. Built with respect for Jain tradition and source discipline.</p>
        <p>Placeholder content is clearly labeled and will be replaced as sourcing is verified.</p>
      </div>
    </footer>
  )
}