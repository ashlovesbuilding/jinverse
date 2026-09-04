export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? <p className="text-sm text-gold-dim">{eyebrow}</p> : null}
      <h2 className="mt-2 font-display text-3xl text-ivory sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-ivory-dim leading-relaxed">{description}</p> : null}
    </div>
  )
}
