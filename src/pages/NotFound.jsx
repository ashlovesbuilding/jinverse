import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-3xl text-ivory">Page not found</p>
      <p className="mt-3 text-sm text-ivory-dim">The page you’re looking for doesn’t exist, or hasn’t been built yet.</p>
      <Link to="/" className="mt-8 text-sm text-gold-dim hover:text-gold">
        ← Back to home
      </Link>
    </div>
  )
}
