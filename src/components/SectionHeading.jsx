export default function SectionHeading({ index, eyebrow, title, subtitle, light = false, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          {index && <span className="kicker text-xs text-accent-500">{index}</span>}
          <span className={`kicker text-xs font-semibold uppercase tracking-wider ${light ? 'text-accent-400' : 'text-accent-600'}`}>
            {eyebrow}
          </span>
          <span className={`h-px flex-1 ${align === 'center' ? 'hidden' : ''} ${light ? 'bg-white/10' : 'bg-line'}`} />
        </div>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.5rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-slate-400' : 'text-navy-700/70'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
