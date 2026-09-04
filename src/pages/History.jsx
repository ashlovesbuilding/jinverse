import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import EvidenceLabel from '../components/ui/EvidenceLabel.jsx'
import PlaceholderNote from '../components/ui/PlaceholderNote.jsx'

const SECTIONS = [
  {
    id: 'origins',
    title: 'Origins and Early Development',
    status: 'tradition',
    body: 'Jain tradition holds that its teaching is anadi — without beginning — carried forward across a beginningless, cyclical order of time by a lineage of twenty-four Tirthankaras in each age.',
    note: 'Historical context: chronology before Parshvanatha is not independently established by archaeology.',
  },
  {
    id: 'mahavira',
    title: 'Mahavira and the Jain Tradition',
    status: 'debated',
    body: 'Mahavira, the twenty-fourth Tirthankara, is remembered as the great teacher of this age, reorganizing and revitalizing the community associated with Parshvanatha’s earlier teaching.',
    note: 'Historians place Mahavira in the 6th century BCE; exact dates vary across scholarly proposals.',
  },
  {
    id: 'expansion',
    title: 'Jain Communities and Historical Expansion',
    status: 'established',
    body: 'Jain communities and royal patrons shaped religious and cultural life across many regions of India over more than two thousand years.',
    note: null,
  },
  {
    id: 'mathura',
    title: 'Mathura and Archaeological Evidence',
    status: 'established',
    body: 'The Kankali Tila site in Mathura preserved a continuous record of Jain sculpture, devotional tablets and donor inscriptions spanning roughly the 2nd century BCE through the 12th century CE.',
    note: null,
  },
  {
    id: 'karnataka',
    title: 'Karnataka and Major Jain Monuments',
    status: 'established',
    body: 'The Western Ganga dynasty (c. 350–1000 CE) was Karnataka’s most sustained royal patron of Jainism. The later Hoysala period carried this legacy forward in its own way: King Vishnuvardhana began as a follower of Jainism before turning to Vaishnavism, while his queen, Shantala Devi, and several Hoysala generals remained devoted Jain patrons. The monolithic Gommateshwara statue at Shravanabelagola, completed in 981 CE under the minister Chavundaraya, remains the region’s most visible monument.',
    note: 'The statue’s date is established; the Bahubali narrative it depicts belongs to Jain tradition.',
  },
  {
    id: 'art',
    title: 'Jain Art, Architecture and Manuscripts',
    status: 'unverified',
    body: null,
    note: null,
  },
  {
    id: 'modern',
    title: 'Jainism in the Modern World',
    status: 'unverified',
    body: null,
    note: null,
  },
]

export default function History() {
  return (
    <div className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="History and heritage"
          title="Tradition and evidence, side by side"
          description="Every section below opens with Jain tradition, then adds historical context only where it clarifies rather than crowds the story."
        />
      </Reveal>

      <div className="mt-14 space-y-14">
        {SECTIONS.map((s, i) => (
          <Reveal key={s.id} delay={(i % 4) * 60}>
            <div className="border-t border-line pt-8">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-display text-2xl text-ivory">{s.title}</h2>
                <EvidenceLabel status={s.status} />
              </div>
              {s.body ? (
                <p className="mt-4 max-w-prose text-sm leading-relaxed text-ivory-dim">{s.body}</p>
              ) : (
                <div className="mt-4 max-w-prose">
                  <PlaceholderNote>Research pending — content for this section has not yet been sourced.</PlaceholderNote>
                </div>
              )}
              {s.note ? (
                <p className="mt-3 max-w-prose text-xs leading-relaxed text-ivory-dim/60">{s.note}</p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
