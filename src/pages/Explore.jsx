import { Link } from 'react-router-dom'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { explorePathways } from '../data/placeholderContent.js'

const LINKS = {
  philosophy: '/teachings',
  'ethics-conduct': '/teachings',
  meditation: '/teachings',
  tirthankaras: '/tirthankaras',
  cosmology: '/history',
  'history-heritage': '/history',
  texts: '/texts',
  communities: '/about',
}

export default function Explore() {
  return (
    <div className="container-page py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Explore"
          title="Find your way into Jain thought"
          description="Eight pathways into the philosophy, history and living practice of Jainism."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {explorePathways.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60}>
            <Link
              to={LINKS[p.slug] ?? '/'}
              className="group flex h-full flex-col justify-between border border-line p-7 transition-colors hover:border-gold-dim"
            >
              <div>
                <h3 className="font-display text-lg text-ivory">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-dim">{p.description}</p>
              </div>
              <span className="mt-6 text-sm text-gold-dim transition-colors group-hover:text-gold">
                Explore
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
