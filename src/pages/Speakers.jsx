import SpeakerRow from '../components/SpeakerRow'
import SectionHeading from '../components/SectionHeading'
import { SPEAKERS, REGISTRATION_LINKS } from '../data/siteData'

const headliners = SPEAKERS.filter((s) => s.tier === 'top')
const others = SPEAKERS.filter((s) => s.tier !== 'top')

export default function Speakers() {
  return (
    <div className="bg-paper min-h-screen">
      {/* ── Headliners ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 pt-16 sm:px-8 sm:pt-24">
        <SectionHeading
          index="01"
          eyebrow="Headliners"
          title="Six speakers. No recycled decks."
          subtitle="Honest, 45-minute talks about what actually breaks when you build at scale — followed by 20 minutes of open Q&A."
        />
        <div className="mt-10 divide-y divide-line border-t border-line">
          {headliners.map((speaker, i) => (
            <SpeakerRow key={speaker.id} speaker={speaker} number={`0${i + 1}`} featured />
          ))}
        </div>
      </section>

      {/* ── Also speaking ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
        <SectionHeading index="02" eyebrow="Also speaking" title="Rounding out the lineup" />
        <div className="mt-10 divide-y divide-line border-t border-line">
          {others.map((speaker, i) => (
            <SpeakerRow key={speaker.id} speaker={speaker} number={`0${headliners.length + i + 1}`} />
          ))}
        </div>
      </section>

      {/* ── Registration ─────────────────────────────────────────────── */}
      <section className="border-t border-line bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                index="03"
                eyebrow="Get in"
                title="Don't just watch. Ask your hardest questions."
                light
              />
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
                One ticket, full access — all 6 talks, live Q&A after every session,
                and the post-event lawn mixer where most of the real conversations happen.
              </p>
            </div>

            <div className="border border-white/15 bg-navy-900/90 p-8 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-400">
                  SYCON '26 Pass
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
              </div>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6">
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
