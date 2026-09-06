import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import { texts } from '../data/placeholderContent.js'

export default function Texts() {
  return (
    <div className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Texts"
          title="Jain scripture and literature"
          description="The primary sources that carry Jain philosophy, cosmology and narrative tradition forward. Translation status is shown honestly for each — no chapter or verse citation is invented."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {texts.map((t, i) => (
          <Reveal key={t.slug} delay={i * 60}>
            <div className="flex h-full flex-col border border-line p-7">
              <h3 className="font-display text-xl text-ivory">{t.title}</h3>
              <p className="mt-1 text-xs text-ivory-dim/70">
                {t.tradition} · {t.language} · {t.date}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ivory-dim">{t.description}</p>
              <p className="mt-4 text-xs leading-relaxed text-ivory-dim/60">
                {t.slug === 'namokar-mahamantra' ? 'Article available' : t.translationStatus}
              </p>
              <div className="mt-6">
                <Button
                  to={t.slug === 'namokar-mahamantra' ? '/articles/namokar-mahamantra' : `/texts#${t.slug}`}
                  variant="secondary"
                  className="w-fit"
                >
                  {t.slug === 'namokar-mahamantra' ? 'Read the article' : 'Read more'}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
