import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import EvidenceLabel from '../components/ui/EvidenceLabel.jsx'
import { teachings } from '../data/placeholderContent.js'

export default function Teachings() {
  return (
    <div className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Teachings"
          title="The foundations of Jain philosophy"
          description="Each teaching is presented on its own terms first — its meaning within Jainism — with historical or scholarly context noted only where it matters."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {teachings.map((t, i) => (
          <Reveal key={t.slug} delay={i * 50}>
            <div className="flex h-full flex-col border border-line p-7">
              <h3 className="font-display text-xl text-ivory">{t.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ivory-dim">{t.short}</p>
              {t.note ? (
                <p className="mt-3 text-xs leading-relaxed text-ivory-dim/70">{t.note}</p>
              ) : null}
              <div className="mt-5 flex items-center justify-between">
                <EvidenceLabel status={t.status} />
                <span className="text-xs text-gold-dim">Explore topic →</span>
              </div>
              <p className="mt-4 text-xs text-ivory-dim/50">Verified sources: to be linked once confirmed.</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
