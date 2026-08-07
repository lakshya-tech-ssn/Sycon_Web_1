import SectionHeading from '../components/SectionHeading'
import TeamCarousel from '../components/TeamCarousel'
import { COMMITTEE } from '../data/siteData'

export default function Committee() {
  return (
    <div className="bg-paper">
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Committee"
            title="The people actually running this"
            subtitle="Senior Core handles budgets, sponsors and speaker logistics. Junior Core runs registration desks, workshops and the day-of chaos."
          />
        </div>
      </section>

      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
            <h3 className="font-display text-xl font-bold text-white">Senior Core Team</h3>
            <span className="kicker text-xs text-slate-500">{COMMITTEE.senior.length} members</span>
          </div>
          <div className="mt-8">
            <TeamCarousel members={COMMITTEE.senior} />
          </div>

          <div className="mt-16 flex items-baseline justify-between border-b border-white/10 pb-4">
            <h3 className="font-display text-xl font-bold text-white">Junior Core Team</h3>
            <span className="kicker text-xs text-slate-500">{COMMITTEE.junior.length} members</span>
          </div>
          <div className="mt-8">
            <TeamCarousel members={COMMITTEE.junior} />
          </div>
        </div>
      </section>
    </div>
  )
}
