const LABELS = {
  established: {
    text: 'Established',
    dot: 'bg-emerald-500/70',
    why: 'Supported by independently dateable physical evidence (an inscription, an archaeological find) and/or corroborated by multiple non-sectarian scholarly sources.',
  },
  debated: {
    text: 'Supported but debated',
    dot: 'bg-amber-400/80',
    why: 'Real scholarly argument exists, but no single answer commands full consensus, or the evidence is textual/circumstantial rather than physical.',
  },
  tradition: {
    text: 'Jain traditional account',
    dot: 'bg-gold',
    why: "This account's authority is internal to Jain scripture and tradition. That describes its evidentiary category, not its spiritual or cultural importance.",
  },
  unverified: {
    text: 'Unverified',
    dot: 'bg-ivory-dim/70',
    why: 'A citation or source location for this claim has not yet been confirmed. It is shown only in general terms until verification is complete.',
  },
}

export default function EvidenceLabel({ status = 'tradition', className = '' }) {
  const info = LABELS[status] ?? LABELS.tradition
  return (
    <details className={`group inline-block ${className}`}>
      <summary className="flex w-fit cursor-pointer list-none items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-ivory-dim transition-colors hover:border-gold-dim hover:text-ivory">
        <span className={`h-1.5 w-1.5 rounded-full ${info.dot}`} aria-hidden="true" />
        {info.text}
        <span className="text-ivory-dim/60 transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <p className="mt-2 max-w-sm text-xs leading-relaxed text-ivory-dim">{info.why}</p>
    </details>
  )
}
