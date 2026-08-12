import SpeakerCard from '../components/SpeakerCard'
import ParticleField from '../components/ParticleField'
import { SPEAKERS, REGISTRATION_LINKS } from '../data/siteData'

export default function Speakers() {
  return (
    <div className="min-h-screen bg-ink">
      {/* ── Editorial Hero Section ────────────────────────────────────────── */}
      <section className="sponsors-hero relative overflow-hidden border-b border-line py-16 sm:py-24">
        <ParticleField />

        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
          {/* Top Kicker Badge */}
          <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
            <span className="kicker text-xs uppercase font-semibold text-white/80">
              SYCON '26 Lineup • 6 Keynote Sessions
            </span>
          </div>

          {/* Main Title & Lead */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl">
                The minds shaping <br className="hidden sm:inline" />
                <span className="text-accent-500">what gets built</span> next.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-200/80 sm:text-lg">
                Six leaders from AI, engineering, product design, and robotics. No recycled deck templates or corporate sales pitches — just honest, 45-minute postmortems of what breaks when you build at scale.
              </p>
            </div>

            {/* Quick Lineup Stats Spec Box */}
            <div className="border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase font-bold tracking-widest text-white/60">
                  Keynote Format
                </span>
                <span className="font-mono text-xs font-bold text-accent-400">
                  100% Practical
                </span>
              </div>
              <div className="mt-4 space-y-3 font-mono text-xs text-slate-200/80">
                <div className="flex items-center justify-between">
                  <span>Talk Duration</span>
                  <span className="font-bold text-white">45 Mins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Open Q&A</span>
                  <span className="font-bold text-white">20 Mins</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Post-Talk Access</span>
                  <span className="font-bold text-accent-400">Lawn Mixer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Speakers Grid ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((speaker) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
            />
          ))}
        </div>
      </section>

      {/* ── World-Class Redesigned Bottom Hub ─────────────────────────────── */}
      <section className="border-t border-line bg-navy-950 text-white py-20 sm:py-28 grain-dark relative overflow-hidden">
        {/* Subtle Ambient Light Glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">

            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-accent-400">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                Lineup Pass & Access
              </div>

              <h2 className="mt-6 font-display text-3xl sm:text-5xl font-bold leading-tight text-white">
                Don't just watch. <br />
                <span className="text-accent-400">Ask your hardest</span> questions.
              </h2>

              <p className="mt-6 text-base text-slate-300 leading-relaxed max-w-xl">
                Every ticket grants full access to all 6 keynote talks, live Q&A sessions, hands-on workshop tracks, the post-event lawn mixer, and the official SYCON '26 participant kit.
              </p>

              {/* Feature Checklist */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 border-t border-white/10 pt-8 font-sans text-sm">
                <div className="flex items-start gap-3 text-slate-300">
                  <span className="font-mono text-accent-400 font-bold">✓</span>
                  <span>20-Min Open Microphone Q&A</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <span className="font-mono text-accent-400 font-bold">✓</span>
                  <span>Post-Talk Lawn Mixer Pass</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <span className="font-mono text-accent-400 font-bold">✓</span>
                  <span>Full 4K Video Archive Access</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <span className="font-mono text-accent-400 font-bold">✓</span>
                  <span>Official SYcon '26 Badge & Kit</span>
                </div>
              </div>
            </div>

            {/* Right Pass Registration Card */}
            <div className="border border-white/15 bg-navy-900/90 p-8 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-400">
                  SYcon '26 Pass
                </span>
                <span className="font-mono text-[10px] bg-accent-500/20 text-accent-300 border border-accent-500/30 px-2 py-0.5 uppercase tracking-wider font-semibold">
                  Starts at ₹150
                </span>
              </div>

              <div className="mt-6 space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>SSN Students</span>
                  <span className="font-bold text-white text-sm">₹150</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Other Colleges</span>
                  <span className="font-bold text-accent-400 text-sm">₹200</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span></span>
                  <span className="font-bold text-white text-sm"></span>
                </div>
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                <a
                  href={REGISTRATION_LINKS.inside}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center bg-accent-500 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-600 shadow-lg shadow-accent-500/20"
                >
                  Register — SSN Students →
                </a>
                <a
                  href={REGISTRATION_LINKS.outside}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full text-center border border-white/20 bg-navy-950 py-3.5 text-sm font-semibold text-white transition hover:border-accent-500 hover:text-accent-400"
                >
                  Register — Other Colleges
                </a>
              </div>

              <p className="mt-4 text-center font-mono text-[10px] text-slate-400">
                ● Limited seats available for auditorium talks
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
