import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import GalleryMarquee from '../components/GalleryMarquee'
import ParticleField from '../components/ParticleField'
import SectionHeading from '../components/SectionHeading'
import Timeline from '../components/Timeline'
import { Icon } from '../components/icons'
import OrbitalHeroSection from '../components/OrbitalHeroSection'
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

function getTimeLeft(targetDate) {
  const diff = Math.max(0, targetDate.getTime() - Date.now())

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(EVENT_DATE))

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(EVENT_DATE))
    tick()
    const timer = window.setInterval(tick, 1000)
    return () => window.clearInterval(timer)
  }, [])

  const units = [
    { label: 'days', short: 'days', value: timeLeft.days },
    { label: 'hours', short: 'hours', value: timeLeft.hours },
    { label: 'minutes', short: 'min', value: timeLeft.minutes },
    { label: 'seconds', short: 'sec', value: timeLeft.seconds },
  ]

  return (
    <div className="w-full">
      <p className="kicker mb-6 text-center text-[10px] uppercase tracking-[0.28em] text-accent-400 sm:text-xs">
        
      </p>
      <div className="flex items-end justify-center gap-2 text-center sm:gap-3 lg:gap-4">
        {units.map((unit, index) => (
          <div key={unit.label} className="flex items-end gap-2 sm:gap-3 lg:gap-4">
            <div className="flex min-w-[72px] flex-col items-center sm:min-w-[96px] lg:min-w-[110px]">
              <span
                className="font-mono text-4xl font-semibold text-white sm:text-5xl lg:text-[4.25rem]"
                aria-live="polite"
                aria-label={`${unit.value} ${unit.label}`}
              >
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[9px] uppercase tracking-[0.22em] text-slate-300 sm:text-[10px] lg:text-xs">
                {unit.short}
              </span>
            </div>
            {index < units.length - 1 && (
              <span className="pb-5 text-2xl font-semibold text-accent-400 sm:text-3xl lg:pb-7 lg:text-4xl">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

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
      <section className="sponsors-hero relative overflow-hidden border-b border-line py-5 sm:py-8 lg:py-10">
        <div className="absolute inset-y-0 right-0 z-0 w-full max-w-[56%] opacity-90">
          <OrbitalHeroSection
            interactive={true}
            showOrbits={true}
            showSunTrack={true}
            glow={1.1}
            compress={0.45}
            sunColor="#ff8a4c"
            viewRadius={3.5}
            className="h-full w-full"
          />
        </div>
        <ParticleField />
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-4 pb-4 sm:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-8 lg:items-center w-full min-w-0">
            <div className="hero-content flex flex-col items-start text-left justify-self-start max-w-2xl lg:max-w-3xl min-w-0">
              {/* Branding Section */}
              <div className="mb-6 flex flex-col items-start gap-3 fade-in-item" style={{ animationDelay: '0.05s' }}>
                <div className="flex items-center gap-4">
                  <img src="/ssn_transparent.png" alt="SSN College Logo" className="h-10 w-auto object-contain brightness-0 invert opacity-90" />

                  <span className="text-white/30 text-xl font-light">+</span>
                  <img src="/Lakshya Logo Transparent.png" alt="Lakshya Logo" className="h-12 w-auto object-contain" />
                </div>
                <span className="kicker text-[11px] uppercase tracking-[0.2em] text-accent-400 pl-18">presents</span>
              </div>

              {/* Main Title with Logo */}
              <h1 className="mt-2 flex flex-row flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] fade-in-item" style={{ animationDelay: '0.2s' }}>
                <img src="/sycon_logo_1.png" alt="SYCON Logo" className="h-12 sm:h-16 md:h-20 lg:h-[80px] w-auto object-contain flex-shrink-0" />
                <span>SYCON<span className="text-accent-500">'26</span></span>
              </h1>

              <div className="mt-5 flex items-center gap-3 fade-in-item" style={{ animationDelay: '0.25s' }}>
                <span className="h-2 w-2 rounded-full bg-accent-500" />
                <span className="kicker text-xs uppercase tracking-widest text-slate-300">
                  {eventDateLabel}
                </span>
              </div>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-200/90 sm:text-xl fade-in-item" style={{ animationDelay: '0.3s' }}>
                  One room. A hundred perspectives. Endless possibilities.
              </p>

              {/* Pitch strip */}
              <div className="mt-6 flex items-center gap-3 fade-in-item" style={{ animationDelay: '0.35s' }}>
                <span className="h-px w-8 bg-accent-500/60" />
                <p className="kicker text-xs font-bold uppercase tracking-widest text-accent-400 sm:text-sm">
                  Seats are limited ! Grab Yours
                </p>
              </div>

              {/* Registration Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 fade-in-item" style={{ animationDelay: '0.4s' }}>
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
            </div>
          </div>
        </div>

      </section>

      <div className="gallery-section border-b border-line bg-ink">
        <GalleryMarquee />
      </div>

      <section className="border-b border-line bg-ink py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="kicker mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-accent-400 sm:text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-accent-500" />
              Registration closes in
            </p>
            <div className="w-full max-w-5xl">
              <EventCountdown />
            </div>
          </div>
        </div>
      </section>

      {/* ── What is SYcon ───────────────────────────────────────────────*/}
      <section className="bg-ink px-6 py-20 sm:px-8 sm:py-28 fade-in-section" ref={section2Ref}>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionHeading index="01" eyebrow="What it is" title="One Conversation To Change The Way You See Your Future." light />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                <p>
                  SYCON is more than a conference - it is a meeting point for ideas, experiences and ambition. 
                  SYCON brings students face to face with accomplished individuals from diverse fields, offering an opportunity to learn from their journeys, question the status quo and explore possibilities beyond the conventional.
                </p>
                <p>
                   From entrepreneurship and technology to business, creativity, leadership, sports, media and social impact, SYCON brings together voices that have taken different paths to create an impact.
                </p>
              </div>
            </div>

            <div className="border border-white/10 bg-navy-900/80 p-8 sm:p-10 card-hover">
              <h3 className="font-display text-xl font-bold text-accent-500">Who should come</h3>
              <ul className="mt-6 space-y-4 border-t border-white/10 pt-6">
                {[
                  'Any SSN student, any year, any department',
                  'Students from other colleges — outside registration is open',
                  'Anyone eager to learn directly from startup founders and ask bold questions',
                  'Aspiring creators looking to network with founders, sponsors, and peers',
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
          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
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
                <h3 className="mt-5 font-display text-lg font-bold text-accent-500">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration Fee ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 fade-in-section fade-in-visible" ref={section4Ref}>
        <SectionHeading
          index="03"
          eyebrow="Registration"
          title="Two ways to register, one price each"
          light
        />
        <div className="mt-14 grid border border-line md:grid-cols-2">
          {FEES.map((fee, i) => (
            <div
              key={fee.title}
              className={`flex flex-col p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${i !== 0 ? 'border-t border-line md:border-t-0 md:border-l' : ''
                } ${fee.highlight ? 'bg-white/5 text-white' : 'bg-ink text-white'}`}
              style={{
                animation: 'fadeInUp 0.5s ease-out',
                animationDelay: `${i * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {fee.highlight && (
                <span className="kicker mb-4 inline-block w-fit bg-accent-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Recommended
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-white">{fee.title}</h3>
              <div className="mt-3 font-display text-4xl font-bold text-accent-500">
                {fee.price}
              </div>
              <p className="mt-1 text-sm text-slate-400">{fee.note}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                {fee.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <span className="text-accent-500 font-bold">+</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <a
                href={fee.highlight ? REGISTRATION_LINKS.outside : REGISTRATION_LINKS.inside}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 block px-5 py-3 text-center text-sm font-semibold transition ${fee.highlight
                  ? 'bg-accent-500 text-white hover:bg-accent-600'
                  : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
              >
                Register
              </a>
            </div>
          ))}
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
          <div className="relative mt-14 overflow-hidden rounded-2xl border border-white/5 bg-navy-950/40 p-4 sm:p-8">
            {/* Blurred timeline preview without text visible */}
            <div className="filter blur-md select-none pointer-events-none opacity-30">
              <Timeline events={TIMELINE} dark />
            </div>

            {/* Disclaimer Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20 bg-ink/40 backdrop-blur-sm">
              <div className="inline-flex items-center gap-3 rounded-full border border-accent-500/50 bg-navy-950/90 px-6 py-3.5 shadow-[0_0_35px_rgba(249,98,44,0.3)] backdrop-blur-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-500 animate-pulse" />
                <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent-400">
                  TO BE FINALIZED SHORTLY
                </span>
              </div>
              <p className="mt-4 font-mono text-xs text-slate-300 max-w-md">
                The session schedule and event timeline are currently being finalized and will be published soon.
              </p>
            </div>
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
