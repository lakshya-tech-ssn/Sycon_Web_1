import { Icon } from './icons'

const getCategory = (role = '') => {
  const lower = role.toLowerCase()
  if (lower.includes('ai')) return 'AI / ML'
  if (lower.includes('founder')) return 'Startups'
  if (lower.includes('design')) return 'Design'
  if (lower.includes('cloud')) return 'Infra'
  if (lower.includes('product')) return 'Product'
  if (lower.includes('robot')) return 'Robotics'
  return 'Keynote'
}

export default function SpeakerRow({ speaker, number, featured = false }) {
  const parts = speaker.role.split(',')
  const designation = parts[0]?.trim() || speaker.role
  const organization = parts[1]?.trim() || ''
  const category = getCategory(speaker.role)

  return (
    <article className="group grid grid-cols-[auto_1fr] gap-5 border-b border-line py-8 transition-colors hover:bg-white/40 sm:grid-cols-[auto_auto_1fr_auto] sm:items-center sm:gap-8 sm:px-2">
      <span className="kicker self-start text-xs text-navy-600/40 sm:self-center">{number}</span>

      <div className={`relative flex-shrink-0 overflow-hidden bg-navy-950 ${featured ? 'h-20 w-20 sm:h-24 sm:w-24' : 'h-16 w-16 sm:h-20 sm:w-20'}`}>
        <img
          src={speaker.photo}
          alt={speaker.name}
          className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>

      <div className="col-span-2 sm:col-span-1">
        <div className="flex flex-wrap items-center gap-2.5">
          <h3 className={`font-display font-bold text-ink transition-colors group-hover:text-accent-600 ${featured ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
            {speaker.name}
          </h3>
          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-accent-600 border border-accent-500/30 bg-accent-500/10 px-1.5 py-0.5">
            {category}
          </span>
        </div>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-navy-700/60 sm:text-sm">
          {designation}{organization && <span className="text-navy-700/40"> — {organization}</span>}
        </p>
        <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-navy-700/80 sm:text-base">
          "{speaker.topic}"
        </p>
      </div>

      <div className="col-span-2 mt-1 flex items-center gap-2 sm:col-span-1 sm:mt-0 sm:flex-col sm:items-end sm:gap-2.5">
        {speaker.linkedin && (
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${speaker.name} on LinkedIn`}
            className="grid h-8 w-8 flex-shrink-0 place-items-center border border-line text-navy-700 transition-colors hover:border-accent-500 hover:bg-accent-500 hover:text-white"
          >
            <Icon name="linkedin" className="h-3.5 w-3.5" />
          </a>
        )}
        {speaker.twitter && (
          <a
            href={speaker.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label={`${speaker.name} on Twitter`}
            className="grid h-8 w-8 flex-shrink-0 place-items-center border border-line text-navy-700 transition-colors hover:border-accent-500 hover:bg-accent-500 hover:text-white"
          >
            <Icon name="twitter" className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </article>
  )
}
