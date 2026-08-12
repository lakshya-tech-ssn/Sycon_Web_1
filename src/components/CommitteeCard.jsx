import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './icons'

function getDirectImageUrl(url) {
  if (!url) return ''
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/id=([a-zA-Z0-9_-]+)/)
    if (match && match[1]) {
      return `https://lh3.googleusercontent.com/d/${match[1]}`
    }
  }
  return url
}

export default function CommitteeCard({ member }) {
  const [isHovered, setIsHovered] = useState(false)
  const imageSrc = getDirectImageUrl(member.photo)

  return (
    <motion.div
      className="group relative h-[420px] w-full min-w-[260px] overflow-hidden rounded-xl border border-white/10 bg-navy-900 shadow-lg cursor-pointer select-none transition-all duration-500 ease-out hover:-translate-y-2.5 hover:border-accent-500/60 hover:shadow-[0_20px_45px_-10px_rgba(249,98,44,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Animated Accent Glow Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Member Photo Background with Zoom & Grayscale reveal */}
      <div className="absolute inset-0 h-full w-full overflow-hidden bg-navy-950">
        <img
          src={imageSrc}
          alt={member.name}
          className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
        />
        {/* Permanent Subtle Bottom Shadow gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60" />
      </div>

      {/* Domain Badge Pill (Top-Left) */}
      {member.domain && (
        <div className="absolute top-3.5 left-3.5 z-20">
          <span className="kicker rounded-md border border-accent-500/40 bg-ink/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-400 backdrop-blur-md shadow-sm">
            {member.domain}
          </span>
        </div>
      )}

      {/* Sliding Glass Drawer Info Panel (Bottom Up Reveal) */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end p-5 transition-all duration-500 ease-out group-hover:p-6 bg-gradient-to-t from-ink via-ink/95 to-transparent">
        {/* Always Visible Section */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
          <span className="kicker text-[10px] uppercase tracking-widest text-accent-400 font-bold">
            {member.role || 'Committee Member'}
          </span>
          <h3 className="mt-1 font-display text-xl font-bold text-white tracking-tight group-hover:text-accent-400 transition-colors duration-300">
            {member.name}
          </h3>
        </div>

        {/* Expandable/Sliding Content on Hover */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-3">
          <div className="overflow-hidden">
            <div className="border-t border-white/10 pt-3">
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Connect to chat about vertical leadership and SYcon '26 operations.
              </p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3.5 inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
                >
                  <Icon name="linkedin" className="h-3.5 w-3.5" />
                  <span>Connect</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
