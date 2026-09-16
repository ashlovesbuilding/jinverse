import Seo from '../components/Seo.jsx'
import PrayerAndWorshipSection from '../components/sections/PrayerAndWorshipSection.jsx'

export default function PrayerAndWorship() {
  return (
    <article>
      <Seo
        title="Prayer & Worship"
        description="How Digambara Jains pray and worship the Jina — नमस्कार, जिन-पूजा, स्तुति and भक्ति, सामायिक, ध्यान and कायोत्सर्ग, and the classical distinction between द्रव्य पूजा and भाव पूजा."
        path="/prayer-and-worship"
        image="/images/jina-puja-devotion.png"
      />
      <PrayerAndWorshipSection />
    </article>
  )
}
