import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'

export default function About() {
  return (
    <div className="container-page max-w-prose py-20">
      <Reveal>
        <SectionHeading eyebrow="About" title="What JINVERSE is, and why it exists" />
      </Reveal>

      <div className="mt-12 space-y-10">
        <Reveal delay={40}>
          <h2 className="font-display text-xl text-ivory">What JINVERSE is</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
            JINVERSE is a digital knowledge and heritage platform dedicated to Jainism — its philosophy,
            history, texts, Tirthankaras, heritage and living relevance today, presented for a general
            English-speaking audience and especially for younger readers encountering the tradition for
            the first time.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display text-xl text-ivory">Why it exists</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
            Jain philosophy, scripture and heritage deserve a home that is accessible, modern and lasting
            — one that lets the tradition speak in its own voice while still being honest about what can
            and cannot be independently verified by history and archaeology. JINVERSE exists so that this
            inheritance remains available, intact and clearly presented, to whoever comes looking for it.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h2 className="font-display text-xl text-ivory">Our commitment to tradition, accuracy and accessibility</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
            Jain scripture and Jain tradition hold the primary voice throughout JINVERSE. Historical and
            academic context is offered where it genuinely helps a reader, never to challenge or diminish
            what the tradition itself teaches. Every article separates a Jain traditional account from
            independently established historical or archaeological evidence, so readers always know which
            they are reading.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <h2 className="font-display text-xl text-ivory">Our approach to sources and uncertainty</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
            Every claim on JINVERSE carries one of four evidence labels — Established, Supported but
            debated, Jain traditional account, or Unverified — shown quietly alongside the content itself.
            We do not invent citations, chapter numbers or dates. Where sourcing is still being verified,
            content is clearly marked as placeholder or research-pending rather than presented as settled.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <h2 className="font-display text-xl text-ivory">Get in touch</h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory-dim">
            Contact and feedback options are being set up. This section will carry a working form once
            JINVERSE’s content infrastructure is connected.
          </p>
        </Reveal>
      </div>
    </div>
  )
}
