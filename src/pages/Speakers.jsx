import SectionHeading from '../components/SectionHeading'
import SpeakerCard from '../components/SpeakerCard'
import { SPEAKERS } from '../data/siteData'

export default function Speakers() {
  const top = SPEAKERS.filter((s) => s.tier === 'top')
  const bottom = SPEAKERS.filter((s) => s.tier === 'bottom')

  return (
    <div className="bg-paper">
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Lineup"
            title="Six people worth an hour of your time"
            subtitle="Hover a card — the back has their actual talk topic, not just a job title."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <p className="kicker mb-8 text-xs uppercase tracking-widest text-navy-700/50">Headlining</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {top.map((speaker, i) => (
            <SpeakerCard key={speaker.id} speaker={speaker} number={`0${i + 1}`} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 sm:pb-28">
        <p className="kicker mb-8 text-xs uppercase tracking-widest text-navy-700/50">Also on stage</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bottom.map((speaker, i) => (
            <SpeakerCard key={speaker.id} speaker={speaker} number={`0${i + 4}`} />
          ))}
        </div>
      </section>
    </div>
  )
}
