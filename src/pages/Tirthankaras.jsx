import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { tirthankaraList } from '../data/tirthankaraList.js'
import { digambaraTirthankaraInfo } from '../data/digambaraTirthankaraInfo.js'

const ANANTANATHA_IMAGE = 'https://raw.githubusercontent.com/ashlovesbuilding/jinverse/main/FSs1LsyUEAEP2Z3.jpg'

export default function Tirthankaras() {
  return (
    <div className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Tirthankaras"
          title="The twenty-four ford-makers"
          description="Jain tradition reveres twenty-four Tirthankaras in the current cosmic age. Each is presented here with the traditional name and emblem, inviting us to remember their lives, virtues, and path to liberation."
        />
      </Reveal>

      <Reveal delay={80} className="mt-10">
        <figure className="overflow-hidden border border-gold-dim/50 bg-panel/40">
          <img
            src={ANANTANATHA_IMAGE}
            alt="Pratima of Bhagwan Anantanatha at Nellikaru, Karnataka"
            className="block h-auto max-h-[520px] w-full object-cover object-center"
          />
          <figcaption className="px-5 py-4 text-sm leading-6 text-ivory-dim/75 sm:px-7">
            Pratima of Bhagwan Anantanatha, the fourteenth Tirthankara, at Nellikaru, Karnataka.
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tirthankaraList.map((t, i) => (
          <Reveal key={t.number} delay={(i % 8) * 40}>
            <div className="flex h-full flex-col items-center justify-center border border-gold-dim/60 p-6 text-center">
              <p className="text-xs text-ivory-dim/60">Tirthankara {t.number}</p>
              <p className="mt-2 font-display text-base text-ivory">{t.name}</p>
              <p className="mt-2 text-xs text-gold-dim">Emblem: {t.emblem}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={100} className="mt-20">
        <section className="border border-gold-dim/40 bg-panel/40 p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-gold-dim">Tradition and iconography</p>
          <h2 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">{digambaraTirthankaraInfo.title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ivory-dim">{digambaraTirthankaraInfo.introduction}</p>
          <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-ivory-dim">
            {digambaraTirthankaraInfo.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </Reveal>
    </div>
  )
}
