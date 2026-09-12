import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300'

const variants = {
  primary:
    'bg-gold text-ink shadow-[0_0_0_1px_rgba(201,162,74,0.35)] hover:bg-ivory hover:shadow-[0_0_28px_rgba(201,162,74,0.35)]',
  secondary:
    'border border-gold-dim/60 text-ivory hover:border-gold hover:text-gold hover:bg-gold/5',
  // For use on parchment/light sections, where the default secondary's
  // ivory text would fail contrast against a light background.
  secondaryLight:
    'border border-ink-dim/40 text-ink hover:border-saffron hover:text-saffron hover:bg-ink/5',
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