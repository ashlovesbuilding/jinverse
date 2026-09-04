import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import PlaceholderNote from '../components/ui/PlaceholderNote.jsx'
import { tirthankaras } from '../data/placeholderContent.js'

export default function Tirthankaras() {
  return (
    <div className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Tirthankaras"
          title="The twenty-four ford-makers"
          description="Jain tradition reveres twenty-four Tirthankaras in the current cosmic age. Details below are shown only where verified; the rest are clearly marked as placeholders pending research."
        />
      </Reveal>

      <Reveal delay={60} className="mt-8">
        <PlaceholderNote>
          Names, emblems, and biographical details for most Tirthankaras are not yet verified against a
          primary source in JINVERSE's research pack. Only Rishabhanatha, Parshvanatha and Mahavira are
          currently confirmed. The remaining entries are numbered placeholders — no symbol, date or
          biography has been invented for them.
        </PlaceholderNote>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tirthankaras.map((t, i) => (
          <Reveal key={t.number} delay={(i % 8) * 40}>
            <div
              className={`flex h-full flex-col items-center justify-center border p-6 text-center ${
                t.verified ? 'border-gold-dim/60' : 'border-line border-dashed'
              }`}
            >
              <p className="text-xs text-ivory-dim/60">Tirthankara {t.number}</p>
              <p className="mt-2 font-display text-base text-ivory">{t.name}</p>
              {t.verified ? (
                <p className="mt-2 text-xs text-gold-dim">Emblem: {t.emblem}</p>
              ) : (
                <p className="mt-2 text-xs text-ivory-dim/50">Unverified — pending research</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
