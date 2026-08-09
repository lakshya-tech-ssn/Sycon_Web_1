import { useEffect, useRef } from 'react'

export default function Timeline({ events }) {
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
      { threshold: 0.2 }
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-line" />

      {/* Timeline items */}
      <div className="space-y-6 px-4 py-8 sm:px-0">
        {events.map((event, i) => (
          <div
            key={event.title}
            ref={(el) => (itemsRef.current[i] = el)}
            className={`timeline-item group flex ${
              i % 2 === 0 ? 'justify-end' : 'justify-start'
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 top-6 z-10 flex -translate-x-1/2 items-center justify-center">
              <div className="h-4 w-4 rounded-full border-3 border-accent-500 bg-paper transition-shadow group-hover:shadow-[0_0_12px_rgba(249,98,44,0.4)]" />
            </div>

            {/* Content card */}
            <div
              className={`w-full sm:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'
              }`}
            >
              <div className="relative rounded-lg border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-line hover:shadow-sm sm:p-6">
                <div className="kicker text-xs font-semibold uppercase tracking-wide text-accent-500">
                  {event.time}
                </div>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {event.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-700/70">
                  {event.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(20px);
          transition: none;
        }

        .timeline-item.timeline-animate {
          animation: slideUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .timeline-item:nth-child(1).timeline-animate { animation-delay: 0.1s; }
        .timeline-item:nth-child(2).timeline-animate { animation-delay: 0.15s; }
        .timeline-item:nth-child(3).timeline-animate { animation-delay: 0.2s; }
        .timeline-item:nth-child(4).timeline-animate { animation-delay: 0.25s; }
        .timeline-item:nth-child(5).timeline-animate { animation-delay: 0.3s; }
        .timeline-item:nth-child(6).timeline-animate { animation-delay: 0.35s; }
        .timeline-item:nth-child(7).timeline-animate { animation-delay: 0.4s; }

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

        @media (max-width: 640px) {
          .timeline-item {
            justify-content: flex-start !important;
          }

          .timeline-item .absolute {
            left: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}