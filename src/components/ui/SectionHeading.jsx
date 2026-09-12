const TONES = {
  dark: { eyebrow: 'text-gold-dim', title: 'text-ivory', description: 'text-ivory-dim' },
  light: { eyebrow: 'text-saffron', title: 'text-ink', description: 'text-ink-dim' },
}

export default function SectionHeading({ eyebrow, title, description, align = 'left', tone = 'dark' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const colors = TONES[tone] || TONES.dark
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? <p className={`text-xs uppercase tracking-[0.2em] ${colors.eyebrow}`}>{eyebrow}</p> : null}
      <h2 className={`mt-3 font-display text-3xl leading-tight sm:text-4xl ${colors.title}`}>{title}</h2>
      {description ? <p className={`mt-4 leading-relaxed ${colors.description}`}>{description}</p> : null}
    </div>
  )
}
