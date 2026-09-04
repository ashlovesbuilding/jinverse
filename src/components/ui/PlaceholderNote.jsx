export default function PlaceholderNote({ children }) {
  return (
    <p className="rounded-sm border border-dashed border-line px-4 py-3 text-xs leading-relaxed text-ivory-dim/80">
      {children ?? 'Research pending — this content is placeholder and will be replaced once sourcing is verified.'}
    </p>
  )
}
