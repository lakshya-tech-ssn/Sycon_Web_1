import { useState } from 'react'
import { Icon } from './icons'

export default function SpeakerCard({ speaker, number }) {
  const [isFlipped, setIsFlipped] = useState(false)

  // Parse role into designation and organization (e.g. "AI Research Lead, Xylotech")
  const parts = speaker.role.split(',')
  const designation = parts[0]?.trim() || speaker.role
  const organization = parts[1]?.trim() || ''

  const handleCardClick = (e) => {
    // Do not toggle flip if clicking on a link (e.g. social icons)
    if (e.target.closest('a')) return
    setIsFlipped(!isFlipped)
  }

  return (
    <div 
      onClick={handleCardClick}
      className="group perspective h-[420px] w-full cursor-pointer select-none"
    >
      <div 
        className={`relative h-full w-full preserve-3d transition-transform duration-700 ease-out ${
          isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
        } group-hover:shadow-[0_20px_50px_rgba(249,98,44,0.12)]`}
      >
        
        {/* ── Front Face ─────────────────────────────────────────────── */}
        <div 
          className="absolute inset-0 h-full w-full flex flex-col overflow-hidden border border-line bg-white backface-hidden"
          style={{ height: '100%', width: '100%', transform: 'translateZ(1px)', WebkitTransform: 'translateZ(1px)' }}
        >
          {/* Image Container */}
          <div className="relative flex-1 overflow-hidden bg-navy-900">
            <img 
              src={speaker.photo} 
              alt={speaker.name} 
              className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0" 
            />
            {/* Number Indicator */}
            <span className="kicker absolute left-4 top-4 bg-ink px-2.5 py-1 text-[10px] font-bold text-accent-400 border border-accent-500/10">
              {number}
            </span>
          </div>

          {/* Text/Details Area */}
          <div className="border-t border-line bg-paper p-5 flex flex-col justify-between flex-shrink-0">
            <div>
              <span className="font-mono text-[9px] text-accent-500 uppercase tracking-widest font-semibold block">Speaker</span>
              <h3 className="font-display text-base font-bold text-ink mt-0.5 group-hover:text-accent-500 transition-colors duration-300">
                {speaker.name}
              </h3>
              <p className="mt-0.5 text-xs font-semibold tracking-wider text-navy-700/60 font-mono uppercase truncate">
                {designation}
              </p>
            </div>
          </div>
        </div>

        {/* ── Back Face ──────────────────────────────────────────────── */}
        <div 
          className="absolute inset-0 h-full w-full flex flex-col justify-between border border-ink bg-ink p-5.5 backface-hidden grain-dark"
          style={{ height: '100%', width: '100%', transform: 'rotateY(180deg) translateZ(1px)', WebkitTransform: 'rotateY(180deg) translateZ(1px)' }}
        >
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Top header line */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <span className="font-mono text-[10px] text-accent-400 uppercase tracking-widest">
                  Speaker {number}
                </span>
                {organization && (
                  <span className="font-mono text-[10px] bg-accent-500/10 text-accent-400 border border-accent-500/20 px-2 py-0.5 uppercase tracking-wider font-semibold">
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
              <div className="mt-3 bg-navy-900 border-l-2 border-accent-500 p-3">
                <span className="font-mono text-[9px] text-accent-400 uppercase tracking-widest block mb-1">Talk Topic</span>
                <p className="text-xs sm:text-sm font-semibold leading-snug text-white">
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
              <span className="text-[10px] font-mono text-slate-500">Connect with them</span>
              <div className="flex gap-2">
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${speaker.name} on LinkedIn`}
                    className="grid h-7 w-7 place-items-center border border-white/15 bg-navy-900 text-white transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                  >
                    <Icon name="linkedin" className="h-3 w-3" />
                  </a>
                )}
                {speaker.twitter && (
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${speaker.name} on Twitter`}
                    className="grid h-7 w-7 place-items-center border border-white/15 bg-navy-900 text-white transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
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
