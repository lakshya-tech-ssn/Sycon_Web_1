import { Link } from 'react-router-dom'
import Countdown from '../components/Countdown'
import GalleryMarquee from '../components/GalleryMarquee'
import SectionHeading from '../components/SectionHeading'
import { Icon } from '../components/icons'
import {
  REGISTRATION_LINKS,
  FEES,
  BENEFITS,
  TIMELINE,
  EVENT_DATE,
} from '../data/siteData'

const eventDateLabel = EVENT_DATE.toLocaleDateString('en-IN', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 pt-14 sm:px-8 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 bg-accent-500" />
                <span className="kicker text-xs uppercase tracking-widest text-navy-700/70">
                  {eventDateLabel}
                </span>
              </div>

              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl md:text-[4.5rem]">
                SYcon<span className="text-accent-500">'26</span>
              </h1>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-navy-700/80">
                A one-day symposium at SSN. Six speakers, four workshop tracks, and
                a room full of people who'd rather build something than watch a slide deck.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={REGISTRATION_LINKS.inside}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600"
                >
                  Register — SSN Students <span aria-hidden="true">→</span>
                </a>
                <a
                  href={REGISTRATION_LINKS.outside}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  Register — Other Colleges
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <p className="kicker mb-3 text-xs uppercase tracking-widest text-navy-700/50">
                Doors close in
              </p>
              <Countdown />
            </div>
          </div>
        </div>

        <div className="mt-14">
          <GalleryMarquee />
        </div>
      </section>

      {/* ── What is SYcon ───────────────────────────────────────────────*/}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading index="01" eyebrow="What it is" title="Not another guest-lecture afternoon" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700/80 sm:text-lg">
              <p>
                SYcon is the department's annual symposium — one full day split between talks,
                hands-on workshops, a panel, and a couple of on-the-spot challenges. It started
                as a single afternoon of guest lectures; this year it's grown into something
                closer to a small conference.
              </p>
              <p>
                The goal hasn't changed though: get people who are actually building things —
                speakers, sponsors, students — into the same room, and leave enough unstructured
                time that conversations happen on their own.
              </p>
            </div>
          </div>

          <div className="border border-line p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold text-ink">Who should come</h3>
            <ul className="mt-6 space-y-4 border-t border-line pt-6">
              {[
                'Any SSN student, any year, any department',
                'Students from other colleges — outside registration is open',
                'Anyone who wants to sit through a workshop and actually build something',
                'Groups of 4 or more registering together get a lower per-head rate',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-navy-700/80 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
              <a
                href={REGISTRATION_LINKS.inside}
                target="_blank"
                rel="noreferrer"
                className="bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-600"
              >
                Inside SSN
              </a>
              <a
                href={REGISTRATION_LINKS.outside}
                target="_blank"
                rel="noreferrer"
                className="border border-ink px-5 py-2.5 text-sm font-semibold text-ink hover:bg-ink hover:text-white"
              >
                Outside SSN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            index="02"
            eyebrow="Why bother"
            title="What you get for the entry fee"
            light
          />
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-ink p-7 transition hover:bg-navy-900">
                <Icon name={b.icon} className="h-6 w-6 text-accent-500" />
                <h3 className="mt-5 font-display text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Fee ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          index="03"
          eyebrow="Registration"
          title="Three ways to register, one price each"
        />
        <div className="mt-14 grid border border-line md:grid-cols-3">
          {FEES.map((fee, i) => (
            <div
              key={fee.title}
              className={`flex flex-col p-8 ${i !== 0 ? 'border-t border-line md:border-t-0 md:border-l' : ''} ${
                fee.highlight ? 'bg-ink text-white' : 'bg-paper text-ink'
              }`}
            >
              {fee.highlight && (
                <span className="kicker mb-4 inline-block w-fit bg-accent-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Recommended
                </span>
              )}
              <h3 className="font-display text-lg font-bold">{fee.title}</h3>
              <div className="mt-3 font-display text-4xl font-bold text-accent-500">
                {fee.price}
              </div>
              <p className={`mt-1 text-sm ${fee.highlight ? 'text-slate-400' : 'text-navy-700/60'}`}>{fee.note}</p>
              <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${fee.highlight ? 'border-white/10' : 'border-line'}`}>
                {fee.perks.map((perk) => (
                  <li key={perk} className={`flex items-start gap-2.5 text-sm ${fee.highlight ? 'text-slate-300' : 'text-navy-700/80'}`}>
                    <span className="text-accent-500">+</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={REGISTRATION_LINKS.inside}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 block px-5 py-3 text-center text-sm font-semibold transition ${
                  fee.highlight
                    ? 'bg-accent-500 text-white hover:bg-accent-600'
                    : 'bg-ink text-white hover:bg-accent-600'
                }`}
              >
                Register
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-paper py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <SectionHeading
            index="04"
            eyebrow="Nov 6, 2026"
            title="How the day runs"
          />
          <div className="mt-14 divide-y divide-line border-t border-b border-line">
            {TIMELINE.map((item) => (
              <div key={item.title} className="grid gap-2 py-6 sm:grid-cols-[120px_1fr] sm:gap-6">
                <span className="kicker text-sm font-semibold text-accent-600">{item.time}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-700/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────── */}
      <section className="border-t border-line bg-ink py-16 sm:py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-end sm:justify-between sm:px-8">
          <div>
            <p className="kicker text-xs uppercase tracking-widest text-slate-500">Seats are capped</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
              Registration closes when the venue fills up.
            </h2>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-4">
            <a
              href={REGISTRATION_LINKS.inside}
              target="_blank"
              rel="noreferrer"
              className="bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600"
            >
              Register — SSN
            </a>
            <a
              href={REGISTRATION_LINKS.outside}
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
            >
              Register — Outside
            </a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-6 text-sm text-slate-500 sm:px-8">
          Want to know who's speaking first?{' '}
          <Link to="/speakers" className="font-semibold text-accent-400 underline underline-offset-4 hover:text-accent-300">
            See the lineup
          </Link>
        </p>
      </section>
    </>
  )
}
