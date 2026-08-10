import { useState } from 'react'
import { Icon } from './icons'

const getImagePath = (path) => {
  if (!path) return 'https://placehold.co/400x400/171c2b/f9622c?text=Speaker'
  if (path.startsWith('/public/')) {
    return path.replace('/public', '')
  }
  return path
}

const getFitClass = (fit = 'cover') => {
  switch (fit.toLowerCase()) {
    case 'contain':
      return 'object-contain bg-navy-950'
    case 'top':
      return 'object-cover object-top'
    case 'bottom':
      return 'object-cover object-bottom'
    case 'center':
      return 'object-cover object-center'
    default:
      return 'object-cover'
  }
}

export default function SpeakerCard({ speaker }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const imageSrc = getImagePath(speaker.photo)
  const fitClass = getFitClass(speaker.fit || speaker.objectFit)

  const handleCardClick = (e) => {
    // Prevent flip toggle when clicking direct links (LinkedIn button)
    if (e.target.closest('a')) return
    setIsFlipped(!isFlipped)
  }

  // Allow custom inline objectPosition if provided (e.g. position: "center 20%")
  const customPosition = speaker.position || speaker.objectPosition || undefined

  return (
    <div 
      id={`speaker-card-${speaker.id}`}
      onClick={handleCardClick}
      className="group perspective h-[480px] w-full cursor-pointer select-none"
    >
      <div 
        className={`relative h-full w-full preserve-3d transition-transform duration-700 ease-out ${
          isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
        } group-hover:shadow-[0_20px_40px_rgba(249,98,44,0.15)]`}
      >
        
        {/* ── Front Face (Photo, Name, Role — Clean, No Hover Text) ────── */}
        <div 
          className="absolute inset-0 h-full w-full flex flex-col overflow-hidden border border-line bg-white backface-hidden transition-colors duration-300 group-hover:border-accent-500/50"
          style={{ height: '100%', width: '100%', transform: 'translateZ(1px)', WebkitTransform: 'translateZ(1px)' }}
        >
          {/* Image Container */}
          <div className="relative flex-1 overflow-hidden bg-navy-950">
            <img 
              src={imageSrc} 
              alt={speaker.name} 
              className={`h-full w-full transition-all duration-700 ease-out group-hover:scale-105 ${fitClass}`} 
              style={customPosition ? { objectPosition: customPosition } : undefined}
              onError={(e) => {
                e.target.src = `https://placehold.co/400x400/171c2b/f9622c?text=${encodeURIComponent(speaker.name || 'Speaker')}`
              }}
            />
            {/* Soft dark vignette gradient at image bottom */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/80 to-transparent pointer-events-none" />
          </div>

          {/* Clean Name & Role Area on Front */}
          <div className="border-t border-line bg-paper p-5 flex flex-col justify-center flex-shrink-0">
            <h3 className="font-display text-lg sm:text-xl font-bold text-ink group-hover:text-accent-600 transition-colors duration-300">
              {speaker.name}
            </h3>
            <p className="mt-0.5 text-xs font-semibold tracking-wider text-accent-600 font-mono uppercase truncate">
              {speaker.role}
            </p>
          </div>
        </div>

        {/* ── Back Face (Details on Hover / Flip) ────────────────────── */}
        <div 
          className="absolute inset-0 h-full w-full flex flex-col justify-between border border-accent-500/40 bg-ink p-6 backface-hidden grain-dark shadow-2xl"
          style={{ height: '100%', width: '100%', transform: 'rotateY(180deg) translateZ(1px)', WebkitTransform: 'rotateY(180deg) translateZ(1px)' }}
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="border-b border-white/15 pb-3">
                <span className="font-mono text-[10px] text-accent-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                  Speaker Bio
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-white">
                  {speaker.name}
                </h3>
                <p className="text-xs font-semibold text-accent-400 tracking-wider font-mono uppercase mt-1">
                  {speaker.role}
                </p>
              </div>

              {/* Bio / About section */}
              <div className="mt-4">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-1.5 font-semibold">About</span>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-200 font-sans">
                  {speaker.bio}
                </p>
              </div>
            </div>

            {/* Connect on LinkedIn Footer */}
            <div className="border-t border-white/15 pt-4 mt-4 flex items-center justify-between flex-shrink-0">
              {speaker.linkedin ? (
                <a
                  href={speaker.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Connect with ${speaker.name} on LinkedIn`}
                  className="inline-flex items-center gap-2 border border-accent-500/40 bg-accent-500/15 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-accent-500 hover:border-accent-500 hover:shadow-lg hover:shadow-accent-500/20 w-full justify-center"
                >
                  <Icon name="linkedin" className="h-4 w-4 text-accent-400 group-hover:text-white" />
                  <span>Connect on LinkedIn</span>
                  <span aria-hidden="true" className="text-xs transition-transform group-hover:translate-x-1">→</span>
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic">LinkedIn unavailable</span>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
