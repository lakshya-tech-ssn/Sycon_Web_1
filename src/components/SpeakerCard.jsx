import { useState } from 'react'
import { Icon } from './icons'

const getCategory = (role = '') => {
  const lower = role.toLowerCase()
  if (lower.includes('ai')) return 'AI / ML'
  if (lower.includes('founder')) return 'STARTUPS'
  if (lower.includes('design')) return 'DESIGN'
  if (lower.includes('cloud')) return 'INFRA'
  if (lower.includes('product')) return 'PRODUCT'
  if (lower.includes('robot')) return 'ROBOTICS'
  return 'KEYNOTE'
}

export default function SpeakerCard({ speaker, number, isSpotlight = false }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Parse role into designation and organization
  const parts = speaker.role.split(',')
  const designation = parts[0]?.trim() || speaker.role
  const organization = parts[1]?.trim() || ''
  const category = getCategory(speaker.role)

  const handleCardClick = (e) => {
    // Do not toggle flip if clicking on a link (e.g. social icons)
    if (e.target.closest('a')) return
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      id={`speaker-card-${speaker.id}`}
      onClick={handleCardClick}
      className={`group perspective h-[425px] w-full cursor-pointer select-none transition-all duration-500 ${
        isSpotlight ? 'scale-[1.02]' : ''
      }`}
    >
      <div 
        className={`relative h-full w-full preserve-3d transition-transform duration-700 ease-out ${
          isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
        } ${isSpotlight ? 'ring-2 ring-accent-500 shadow-[0_0_35px_rgba(249,98,44,0.3)]' : 'group-hover:shadow-[0_20px_40px_rgba(249,98,44,0.15)]'}`}
      >
        
        {/* ── Front Face ─────────────────────────────────────────────── */}
        <div 
          className="absolute inset-0 h-full w-full flex flex-col overflow-hidden border border-line bg-white backface-hidden transition-colors duration-300 group-hover:border-accent-500/50 before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-gradient-to-r before:from-accent-500 before:via-accent-400 before:to-accent-600 before:z-30 before:scale-x-0 group-hover:before:scale-x-100 before:transition-transform before:duration-500 before:origin-left"
          style={{ height: '100%', width: '100%', transform: 'translateZ(1px)', WebkitTransform: 'translateZ(1px)' }}
        >
          {/* Image Container */}
          <div className="relative flex-1 overflow-hidden bg-navy-950">
            <img 
              src={speaker.photo} 
              alt={speaker.name} 
              className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" 
            />
            {/* Soft dark vignette gradient at image bottom */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/80 to-transparent pointer-events-none" />

            {/* Number Indicator */}
            <span className="kicker absolute left-4 top-4 bg-ink/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-accent-400 border border-accent-500/20 shadow-sm">
              {number}
            </span>

            {/* Category Tag */}
            <span className="font-mono absolute right-4 top-4 bg-navy-900/90 backdrop-blur-md px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-300 border border-white/10">
              {category}
            </span>
          </div>

          {/* Text/Details Area */}
          <div className="border-t border-line bg-paper p-5 flex items-end justify-between flex-shrink-0">
            <div>
              <span className="font-mono text-[9px] text-accent-500 uppercase tracking-widest font-semibold block">Speaker</span>
              <h3 className="font-display text-base font-bold text-ink mt-0.5 group-hover:text-accent-500 transition-colors duration-300">
                {speaker.name}
              </h3>
              <p className="mt-0.5 text-xs font-semibold tracking-wider text-navy-700/60 font-mono uppercase truncate max-w-[220px]">
                {designation}
              </p>
            </div>

            {/* Micro Flip Prompt */}
            <div className="flex items-center gap-1 text-[9px] font-mono font-bold uppercase tracking-widest text-navy-700/40 group-hover:text-accent-500 transition-colors">
              <span>FLIP</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3 transition-transform duration-500 group-hover:rotate-180">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Back Face ──────────────────────────────────────────────── */}
        <div 
          className="absolute inset-0 h-full w-full flex flex-col justify-between border border-accent-500/30 bg-ink p-5.5 backface-hidden grain-dark"
          style={{ height: '100%', width: '100%', transform: 'rotateY(180deg) translateZ(1px)', WebkitTransform: 'rotateY(180deg) translateZ(1px)' }}
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Top header line */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="font-mono text-[10px] text-accent-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
                  Speaker {number}
                </span>
                {organization && (
                  <span className="font-mono text-[10px] bg-accent-500/10 text-accent-400 border border-accent-500/30 px-2 py-0.5 uppercase tracking-wider font-semibold">
                    {organization}
                  </span>
                )}
              </div>

              {/* Speaker Info */}
              <h3 className="mt-3 font-display text-lg font-bold text-white">
                {speaker.name}
              </h3>
              <p className="text-[11px] font-semibold text-slate-400 tracking-wide font-mono uppercase mt-0.5">
                {designation}
              </p>

              {/* Talk Topic (Short Description) */}
              <div className="mt-3.5 bg-navy-900/90 border-l-2 border-accent-500 p-3 shadow-inner">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[9px] text-accent-400 uppercase tracking-widest font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
                    TALK TOPIC
                  </span>
                  {/* Soundwave animation */}
                  <div className="flex items-center gap-0.5 text-accent-500">
                    <span className="h-2 w-0.5 bg-accent-500 animate-pulse" />
                    <span className="h-3 w-0.5 bg-accent-500" />
                    <span className="h-1.5 w-0.5 bg-accent-500 animate-pulse" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-semibold leading-snug text-white font-sans">
                  "{speaker.topic}"
                </p>
              </div>

              {/* Bio (About the speaker) */}
              <div className="mt-3">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block mb-1">About</span>
                <p className="text-xs leading-relaxed text-slate-300 font-sans">
                  {speaker.bio}
                </p>
              </div>
            </div>

            {/* Social Links Footer */}
            <div className="flex items-center justify-between border-t border-white/10 pt-3 mt-3 flex-shrink-0">
              <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
                <span>Connect</span>
                <span className="text-accent-500">→</span>
              </span>
              <div className="flex gap-2">
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${speaker.name} on LinkedIn`}
                    className="grid h-7.5 w-7.5 place-items-center border border-white/20 bg-navy-900 text-white transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white hover:shadow-[0_0_12px_rgba(249,98,44,0.4)]"
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
                    className="grid h-7.5 w-7.5 place-items-center border border-white/20 bg-navy-900 text-white transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white hover:shadow-[0_0_12px_rgba(249,98,44,0.4)]"
                  >
                    <Icon name="twitter" className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
