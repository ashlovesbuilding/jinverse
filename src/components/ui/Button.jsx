import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm transition-colors'

const variants = {
  primary: 'bg-gold text-void hover:bg-ivory',
  secondary: 'border border-line text-ivory hover:border-gold-dim hover:text-gold',
}

export default function Button({ to, href, variant = 'primary', children, className = '', ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}