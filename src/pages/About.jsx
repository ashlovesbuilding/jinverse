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
            JINVERSE is built slowly and carefully, and it is better for being read closely. If you
            would like to contribute, or if something here needs correcting, we would genuinely like
            to hear from you.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ivory-dim">
            <li>
              <span className="text-ivory">Contribute an article.</span> If you have written on Jain
              philosophy, history, texts or practice, or would like to, we welcome submissions.
            </li>
            <li>
              <span className="text-ivory">Suggest a correction.</span> If a verse, translation,
              date, attribution or explanation is wrong, please tell us. Corrections are taken
              seriously and made openly.
            </li>
            <li>
              <span className="text-ivory">Share a source.</span> Manuscripts, editions, inscriptions
              or scholarship we should know about — especially texts not easily found online.
            </li>
            <li>
              <span className="text-ivory">Anything else.</span> Questions, suggestions, or a note
              about something you would like to see covered.
            </li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-ivory-dim">
            Write to us at{' '}
            <a
              href="mailto:jinversecontact@gmail.com"
              className="text-gold underline underline-offset-4 hover:text-ivory"
            >
              jinversecontact@gmail.com
            </a>
            . Please mention the article title if your message is about a specific page.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <h2 className="font-display text-xl text-ivory">Disclaimer</h2>
          <div className="mt-3 space-y-4 text-sm leading-relaxed text-ivory-dim">
            <p>
              JINVERSE is an independent educational and heritage project created to make Jain philosophy,
              history, texts and traditions more accessible. The content is provided for general
              informational and educational purposes only and should not be treated as professional, legal,
              academic, medical or religious advice.
            </p>
            <p>
              We make reasonable efforts to present information carefully and to distinguish Jain traditional
              accounts from historical, archaeological and academic interpretations. However, some material
              may be incomplete, interpretive, disputed, translated from different editions, or still
              undergoing verification. Information marked as “Research pending,” “Supported but debated,”
              “Jain traditional account,” or “Unverified” should be read in that context.
            </p>
            <p>
              JINVERSE does not guarantee that every statement, translation, date, attribution, citation,
              image or external reference is complete, current or error-free. Readers should consult original
              texts, qualified scholars, recognised institutions and other reliable sources before relying on
              information for research, publication, teaching, religious decisions or any other important
              purpose.
            </p>
            <p>
              The views expressed in an article may reflect the cited source or the author’s interpretation
              and do not necessarily represent the views of every Jain community, sect, institution or
              scholar. Differences in terminology, tradition and interpretation should be approached
              respectfully.
            </p>
            <p>
              We do not knowingly intend to misrepresent, defame, infringe the rights of, or diminish any
              person, community, author, institution or tradition. If you believe that content is inaccurate,
              improperly attributed, misleading, or uses material without appropriate permission, please
              contact us with the relevant details. We will review credible concerns and make corrections or
              removals where appropriate.
            </p>
            <p>
              External links and third-party materials are provided for reference and convenience. JINVERSE
              does not control or endorse their content, availability, accuracy or policies.
            </p>
            <p>
              To the extent permitted by applicable law, JINVERSE and its contributors are not responsible
              for losses, decisions or consequences arising from reliance on the website’s content. Use of
              the website constitutes acceptance that readers are responsible for evaluating information and
              seeking appropriate independent advice.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
