import Seo from '../components/Seo.jsx'
import { DasLakshanSection, DasLakshanObservanceSection } from '../components/sections/DasLakshanSection.jsx'

export default function DasLakshan() {
  return (
    <article>
      <Seo
        title="Das Lakshan Parv"
        description="Why Digambara Jains observe Das Lakshan Parv and how the ten uttama dharmas are practiced — scriptural foundation in Tattvārtha Sūtra 9.6, classical commentary, daily observance, household niyam and the deeper purpose of the ten-day parv."
        path="/das-lakshan"
      />
      <DasLakshanSection />
      <DasLakshanObservanceSection />
    </article>
  )
}
