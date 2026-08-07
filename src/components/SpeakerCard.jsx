import { Icon } from './icons'

export default function SpeakerCard({ speaker, number }) {
  return (
    <div className="group perspective h-[420px] w-full">
      <div className="relative h-full w-full preserve-3d transition-transform duration-500 ease-out group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 flex flex-col overflow-hidden border border-line backface-hidden">
          <div className="relative flex-1 overflow-hidden bg-navy-900">
            <img src={speaker.photo} alt={speaker.name} className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0" />
            <span className="kicker absolute left-0 top-0 bg-ink px-2 py-1 text-[10px] text-accent-400">
              {number}
            </span>
          </div>
          <div className="border-t border-line bg-paper p-5">
            <h3 className="font-display text-base font-bold text-ink">{speaker.name}</h3>
            <p className="mt-0.5 text-sm text-navy-700/70">{speaker.role}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex flex-col justify-between border border-ink bg-ink p-6 backface-hidden rotate-y-180">
          <div>
            <span className="kicker text-[10px] text-accent-400">{number}</span>
            <h3 className="mt-2 font-display text-lg font-bold text-white">{speaker.name}</h3>
            <p className="text-sm text-slate-400">{speaker.role}</p>
            <p className="mt-4 border-l-2 border-accent-500 pl-3 text-sm font-medium leading-snug text-accent-300">
              {speaker.topic}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{speaker.bio}</p>
          </div>
          <div className="flex gap-3 border-t border-white/10 pt-4">
            <a
              href={speaker.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${speaker.name} on LinkedIn`}
              className="grid h-8 w-8 place-items-center border border-white/15 text-white transition hover:border-accent-500 hover:text-accent-500"
            >
              <Icon name="linkedin" className="h-4 w-4" />
            </a>
            <a
              href={speaker.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label={`${speaker.name} on Twitter`}
              className="grid h-8 w-8 place-items-center border border-white/15 text-white transition hover:border-accent-500 hover:text-accent-500"
            >
              <Icon name="twitter" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
