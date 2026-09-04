import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import { reels } from '../data/placeholderContent.js'

export default function Reels() {
  return (
    <div className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Reels"
          title="Short, cinematic explainers"
          description="A growing gallery of short videos. MP4 sources will replace these placeholders as they’re produced."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reels.map((r, i) => (
          <Reveal key={r.slug} delay={i * 60}>
            <div className="border border-line">
              <div className="flex aspect-video items-center justify-center border-b border-line text-xs text-ivory-dim/60">
                Video thumbnail placeholder
              </div>
              <div className="p-5">
                <h3 className="font-display text-base text-ivory">{r.title}</h3>
                <p className="mt-1 text-sm text-ivory-dim">{r.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-ivory-dim/60">{r.duration}</span>
                  <Button variant="secondary" className="px-4 py-1.5 text-xs" disabled>
                    Watch Reel
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
