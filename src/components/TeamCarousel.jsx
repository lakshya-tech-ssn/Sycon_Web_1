import { useRef, useState, useEffect, useCallback } from 'react'
import { Icon } from './icons'

export default function TeamCarousel({ members }) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = useCallback((i) => {
    const track = trackRef.current
    if (!track) return
    const card = track.children[i]
    if (!card) return
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' })
  }, [])

  const scrollBy = (dir) => {
    const next = Math.min(Math.max(activeIndex + dir, 0), members.length - 1)
    setActiveIndex(next)
    scrollToIndex(next)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const cardWidth = track.children[0]?.offsetWidth || 1
      const gap = 1
      const idx = Math.round(track.scrollLeft / (cardWidth + gap))
      setActiveIndex(Math.min(idx, members.length - 1))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [members.length])

  return (
    <div className="relative">
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Previous"
        className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-5 -translate-y-1/2 items-center justify-center border border-white/15 bg-ink text-white transition hover:border-accent-500 hover:text-accent-500 disabled:opacity-20 sm:flex"
        disabled={activeIndex === 0}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <div
        ref={trackRef}
        className="no-scrollbar flex gap-px overflow-x-auto scroll-smooth bg-white/10"
      >
        {members.map((m) => (
          <div
            key={m.id}
            className="w-[170px] flex-shrink-0 snap-start bg-navy-900 transition hover:bg-navy-800 sm:w-[200px]"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img src={m.photo} alt={m.name} className="h-full w-full object-cover grayscale transition hover:grayscale-0" />
            </div>
            <div className="flex items-center justify-between gap-2 border-t border-white/10 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-white">{m.name}</p>
                <p className="truncate text-xs text-slate-500">{m.role}</p>
              </div>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${m.name} on LinkedIn`}
                className="grid h-7 w-7 flex-shrink-0 place-items-center border border-white/15 text-slate-400 transition hover:border-accent-500 hover:text-accent-500"
              >
                <Icon name="linkedin" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scrollBy(1)}
        aria-label="Next"
        className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 translate-x-5 -translate-y-1/2 items-center justify-center border border-white/15 bg-ink text-white transition hover:border-accent-500 hover:text-accent-500 disabled:opacity-20 sm:flex"
        disabled={activeIndex === members.length - 1}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <div className="mt-4 flex items-center gap-1">
        <span className="kicker text-[11px] text-slate-500">
          {String(activeIndex + 1).padStart(2, '0')} / {String(members.length).padStart(2, '0')}
        </span>
        <div className="ml-3 h-px flex-1 bg-white/10">
          <div
            className="h-px bg-accent-500 transition-all"
            style={{ width: `${((activeIndex + 1) / members.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
