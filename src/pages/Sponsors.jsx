import SectionHeading from '../components/SectionHeading'
import { SPONSORS } from '../data/siteData'

const tierOrder = ['Title Sponsor', 'Platinum', 'Gold', 'Silver']

export default function Sponsors() {
  const grouped = tierOrder
    .map((tier) => ({ tier, items: SPONSORS.filter((s) => s.tier === tier) }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="bg-paper">
      <section className="border-b border-line py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            eyebrow="Backers"
            title="The companies paying for the lunch and the kits"
            subtitle="No pay-to-speak slots this year — sponsors get booth space and logo placement, not stage time."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-14 px-6 py-16 sm:px-8 sm:py-20">
        {grouped.map((group) => (
          <div key={group.tier} className="border-t border-line pt-8">
            <h3 className="kicker mb-8 text-xs font-semibold uppercase tracking-widest text-accent-600">
              {group.tier}
            </h3>
            <div
              className={`grid gap-px border border-line bg-line ${
                group.tier === 'Title Sponsor'
                  ? 'mx-auto max-w-md grid-cols-1'
                  : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4'
              }`}
            >
              {group.items.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="flex items-center justify-center bg-paper p-6 transition hover:bg-white"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-14 w-full object-contain grayscale transition hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-line bg-ink py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="kicker text-xs uppercase tracking-widest text-slate-500">Sponsorship</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              Deck's ready if you want the numbers.
            </h2>
          </div>
          <a
            href="mailto:sycon26@ssn.edu.in"
            className="inline-flex flex-shrink-0 items-center gap-2 bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600"
          >
            Email the team <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
