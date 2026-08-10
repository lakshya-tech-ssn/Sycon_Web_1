import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import Countdown from '../components/Countdown'
import GalleryMarquee from '../components/GalleryMarquee'
import ParticleField from '../components/ParticleField'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
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

// Fade in on scroll hook
function useFadeInSection() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function Home() {
  const section2Ref = useFadeInSection()
  const section3Ref = useFadeInSection()
  const section4Ref = useFadeInSection()

  return (
    <div className="bg-ink text-white">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="sponsors-hero relative overflow-hidden border-b border-line">
        <ParticleField />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-2 sm:px-8 sm:pt-2">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
            <div className="hero-content">
              {/* Institutional & Event Branding Badge */}
              <div className="mb-8 flex w-fit flex-wrap items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 p-3 shadow-xs backdrop-blur-md sm:gap-3.5 sm:p-3.5 fade-in-item" style={{ animationDelay: '0.05s' }}>
                <div className="flex items-center gap-2" title="SSN College of Engineering">
                  <img src="/ssn-logo.jpg" alt="SSN College Logo" className="h-6 w-auto object-contain sm:h-7" />
                  <span className="hidden text-[12px] font-semibold text-white sm:inline">SSN College of Engineering</span>
                </div>
                <span className="h-4 w-px bg-white/15" />
                <div className="flex items-center gap-1.5" title="SYCON '26">
                  <img src="/sycon_logo_1.png" alt="SYCON Logo" className="h-6 w-auto object-contain sm:h-7" />
                  <span className="text-[12px] font-bold text-white">SYCON'26</span>
                </div>
                <span className="h-4 w-px bg-white/15" />
                <div className="flex items-center gap-1.5" title="Organized by SSN Lakshya">
                  <img src="/logo.png" alt="Lakshya Logo" className="h-5 w-auto object-contain sm:h-6" />
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/80">Lakshya</span>
                </div>
              </div>

              <div className="flex items-center gap-3 fade-in-item" style={{ animationDelay: '0.1s' }}>
                <span className="h-2 w-2 bg-accent-500" />
                <span className="kicker text-xs uppercase tracking-widest text-white/70">
                  {eventDateLabel}
                </span>
              </div>

              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] fade-in-item" style={{ animationDelay: '0.2s' }}>
                SYCON<span className="text-accent-500">'26</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200/80 sm:text-xl fade-in-item" style={{ animationDelay: '0.3s' }}>
                A one-day symposium at SSN. Six speakers, four workshop tracks, and
                a room full of people who'd rather build something than watch a slide deck.
              </p>

              {/* Pitch strip */}
              <div className="mt-6 flex items-center gap-3 fade-in-item" style={{ animationDelay: '0.35s' }}>
                <span className="h-px w-8 bg-accent-500/60" />
                <p className="kicker text-xs font-bold uppercase tracking-widest text-accent-400 sm:text-sm">
                  Seats are limited — lock yours in before the room fills up
                </p>
              </div>
            </div>
          </div>
          {/* Registration */}
            <div className="mt-7 flex w-fit flex-col gap-3">
                <a
                  href={REGISTRATION_LINKS.inside}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600 button-hover"
                >
                  Register Now — SSN Students <span aria-hidden="true">→</span>
                </a>
                <a
                  href={REGISTRATION_LINKS.outside}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 button-hover"
                >
                  Register Now — Other Colleges
                </a>
              </div>
              <div className="mt-8 flex flex-col items-start gap-3 countdown-section">
                <p className="kicker text-xs uppercase tracking-widest text-white/50 fade-in-item" style={{ animationDelay: '0.2s' }}>
                  Doors close in
                </p>
                <div className="fade-in-item" style={{ animationDelay: '0.3s' }}>
                  <Countdown />
                </div>
              </div>
        </div>

        <div className="mt-14 gallery-section">
          <GalleryMarquee />
        </div>
      </section>

      {/* ── What is SYcon ───────────────────────────────────────────────*/}
      <section className="bg-ink px-6 py-20 sm:px-8 sm:py-28 fade-in-section" ref={section2Ref}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading index="01" eyebrow="What it is" title="Not another guest-lecture afternoon" light />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                <p>
                  SYCON is the department's annual symposium — one full day split between talks,
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

            <div className="border border-white/10 bg-navy-900/80 p-8 sm:p-10 card-hover">
              <h3 className="font-display text-xl font-bold text-white">Who should come</h3>
              <ul className="mt-6 space-y-4 border-t border-white/10 pt-6">
                {[
                  'Any SSN student, any year, any department',
                  'Students from other colleges — outside registration is open',
                  'Anyone who wants to sit through a workshop and actually build something',
                  'Groups of 4 or more registering together get a lower per-head rate',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-accent-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                <a
                  href={REGISTRATION_LINKS.inside}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-600 button-hover"
                >
                  Inside SSN
                </a>
                <a
                  href={REGISTRATION_LINKS.outside}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 button-hover"
                >
                  Outside SSN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────── */}
      <section className="border-y border-line bg-ink py-20 sm:py-28 fade-in-section" ref={section3Ref}>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            index="02"
            eyebrow="Why bother"
            title="What you get for the entry fee"
            light
          />
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => (
              <div 
                key={b.title} 
                className="bg-ink p-7 transition hover:bg-navy-900 card-hover"
                style={{ 
                  animation: 'fadeInUp 0.5s ease-out',
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                <Icon name={b.icon} className="h-6 w-6 text-accent-500" />
                <h3 className="mt-5 font-display text-lg font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Fee ─────────────────────────────────────────── */}
      <section className="bg-ink px-6 py-20 sm:px-8 sm:py-28 fade-in-section" ref={section4Ref}>
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            index="03"
            eyebrow="Registration"
            title="Three ways to register, one price each"
            light
          />
          <div className="mt-14 grid border border-white/10 md:grid-cols-3">
            {FEES.map((fee, i) => (
              <div
                key={fee.title}
                className={`flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${i !== 0 ? 'border-t border-white/10 md:border-t-0 md:border-l md:border-white/10' : ''} ${
                  fee.highlight ? 'bg-ink text-white' : 'bg-navy-900 text-white'
                }`}
                style={{ 
                  animation: 'fadeInUp 0.5s ease-out',
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {fee.highlight && (
                  <span className="kicker mb-4 inline-block w-fit bg-accent-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Recommended
                  </span>
                )}
                <h3 className="font-display text-lg font-bold text-white">{fee.title}</h3>
                <div className="mt-3 font-display text-4xl font-bold text-accent-500">
                  {fee.price}
                </div>
                <p className={`mt-1 text-sm ${fee.highlight ? 'text-slate-400' : 'text-slate-300'}`}>{fee.note}</p>
                <ul className={`mt-6 flex-1 space-y-3 border-t pt-6 ${fee.highlight ? 'border-white/10' : 'border-white/10'}`}>
                  {fee.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-300">
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
                      : 'bg-white/5 text-white hover:bg-accent-600'
                  }`}
                >
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHeading
            index="04"
            eyebrow="Nov 6, 2026"
            title="How the day runs"
            light
          />
          <div className="mt-14">
            <Timeline events={TIMELINE} dark />
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
              className="bg-accent-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600 button-hover"
            >
              Register — SSN
            </a>
            <a
              href={REGISTRATION_LINKS.outside}
              target="_blank"
              rel="noreferrer"
              className="border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink button-hover"
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

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in-item {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.fade-in-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-hover {
          transition: all 0.3s ease-out;
        }

        .button-hover {
          transition: all 0.2s ease-out;
        }

        .hero-content {
          animation: fadeInUp 0.8s ease-out;
        }

        .countdown-section {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .gallery-section {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        /* Subtle hover scale on benefit/fee cards */
        .card-hover:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}
