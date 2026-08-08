import SectionHeading from '../components/SectionHeading'
import SpeakerCard from '../components/SpeakerCard'
import { SPEAKERS } from '../data/siteData'

export default function Speakers() {
  return (
    <div className="bg-paper">
      {/* Page Header */}
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Lineup"
            title="Six people worth an hour of your time"
            subtitle="Hover or tap a card — the back has their actual talk topic, not just a job title."
          />
        </div>
      </section>

      {/* Unified Speakers Grid */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker, i) => (
            <SpeakerCard 
              key={speaker.id} 
              speaker={speaker} 
              number={`0${i + 1}`} 
            />
          ))}
        </div>
      </section>
    </div>
  )
}
