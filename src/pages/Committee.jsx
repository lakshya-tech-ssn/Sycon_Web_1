import SectionHeading from '../components/SectionHeading'
import CommitteeCard from '../components/CommitteeCard'
import { COMMITTEE } from '../data/siteData'

export default function Committee() {
  return (
    <div className="bg-paper pb-28">
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Committee"
            title="The people actually running this"
            subtitle="Meet the core team and vertical heads behind SYcon'26."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-16 sm:px-8 sm:pt-20">
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <h3 className="font-display text-2xl font-bold text-ink">Vertical Heads</h3>
          <span className="kicker text-xs text-navy-700/50">{COMMITTEE.vertical?.length || 0} members</span>
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {COMMITTEE.vertical?.map((member) => (
            <CommitteeCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20 sm:px-8">
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <h3 className="font-display text-2xl font-bold text-ink">Senior Core Team</h3>
          <span className="kicker text-xs text-navy-700/50">{COMMITTEE.senior?.length || 0} members</span>
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {COMMITTEE.senior?.map((member) => (
            <CommitteeCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-20 sm:px-8">
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <h3 className="font-display text-2xl font-bold text-ink">Junior Core Team</h3>
          <span className="kicker text-xs text-navy-700/50">{COMMITTEE.junior?.length || 0} members</span>
        </div>
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {COMMITTEE.junior?.map((member) => (
            <CommitteeCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}
