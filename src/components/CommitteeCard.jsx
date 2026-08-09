import { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './icons'

export default function CommitteeCard({ member }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="group perspective h-[420px] w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative h-full w-full preserve-3d"
                initial={false}
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 70, damping: 20, mass: 1 }}
            >
                {/* Front - Styled distinctly mapping SpeakerCard.jsx */}
                <div className="absolute inset-0 flex flex-col overflow-hidden border border-line backface-hidden bg-paper">
                    <div className="relative flex-1 overflow-hidden bg-navy-900">
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0"
                        />
                        {/* Ambient hover effect over the image */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

                        <span className="kicker absolute left-0 top-0 bg-ink px-2 py-1 text-[10px] text-accent-400 border-b border-r border-ink shadow-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Hover to Reveal
                        </span>
                    </div>
                    <div className="border-t border-line bg-paper p-5 transition-colors group-hover:bg-white">
                        <h3 className="font-display text-base font-bold text-ink">{member.name}</h3>
                        <p className="mt-0.5 text-sm text-navy-700/70">{member.role}</p>
                    </div>
                </div>

                {/* Back - Retains framer-motion utility but themed perfectly cleanly */}
                <div className="absolute inset-0 flex flex-col justify-between border border-ink bg-ink p-6 backface-hidden rotate-y-180 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]">
                    <div>
                        <span className="kicker text-[10px] text-accent-500">SYCON'26</span>
                        <h3 className="mt-2 font-display text-lg font-bold text-white">{member.name}</h3>
                        <p className="text-sm text-slate-400">{member.role}</p>
                        <p className="mt-4 border-l-2 border-accent-500 pl-3 text-sm font-medium leading-snug text-slate-300">
                            Connect to chat about my vertical and opportunities.
                        </p>
                    </div>
                    <div className="flex gap-3 border-t border-white/10 pt-4">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`${member.name} on LinkedIn`}
                            className="grid h-10 w-10 place-items-center border border-white/15 text-white transition hover:border-accent-500 hover:text-accent-500"
                        >
                            <Icon name="linkedin" className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
