import { useEffect, useRef } from 'react'

export default function Timeline({ events, dark = false }) {
  const itemsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-animate')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [events])

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical line */}
      <div
        className={`absolute top-0 bottom-0 w-0.5 max-sm:left-4 sm:left-1/2 sm:-translate-x-1/2 ${
          dark ? 'bg-white/10' : 'bg-line'
        }`}
      />

      {/* Timeline items */}
      <div className="space-y-6 px-0 py-4">
        {events.map((event, i) => (
          <div
            key={event.time + '-' + i}
            ref={(el) => (itemsRef.current[i] = el)}
            style={{ animationDelay: `${Math.min(i * 0.04 + 0.05, 0.5).toFixed(2)}s` }}
            className={`timeline-item group relative flex ${
              i % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'
            } justify-start`}
          >
            {/* Dot */}
            <div className="absolute top-6 z-10 flex items-center justify-center max-sm:left-4 max-sm:-translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2">
              <div
                className={`h-3.5 w-3.5 rounded-full border-2 border-accent-500 ${
                  dark ? 'bg-ink' : 'bg-paper'
                } transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_14px_rgba(249,98,44,0.6)]`}
              />
            </div>

            {/* Content card */}
            <div
              className={`w-full max-sm:pl-10 sm:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
              }`}
            >
              <div
                className={`relative rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${
                  dark
                    ? 'border-white/10 bg-navy-900/90 backdrop-blur-sm hover:border-accent-500/40 hover:bg-navy-900'
                    : 'border-line bg-paper'
                }`}
              >
                <div className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-400">
                    {event.time}
                  </span>
                </div>
                <h3 className={`mt-2 font-display text-base sm:text-lg font-bold ${dark ? 'text-white' : 'text-ink'}`}>
                  {event.title}
                </h3>
                {event.desc && (
                  <p className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${dark ? 'text-slate-300' : 'text-navy-700/70'}`}>
                    {event.desc}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(20px);
        }

        .timeline-item.timeline-animate {
          animation: slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}