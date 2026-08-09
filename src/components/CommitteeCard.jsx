import { useState } from 'react'
import { Icon } from './icons'

export default function CommitteeCard({ member }) {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div
            className="group perspective h-[360px] w-full cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative h-full w-full preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Front */}
                <div className="absolute inset-0 flex flex-col overflow-hidden border border-line backface-hidden bg-paper shadow-sm transition-shadow group-hover:shadow-md">
                    <div className="relative flex-1 overflow-hidden bg-navy-900">
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                        />
                        {/* Subtle gradient overlay to premium-ize */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

                        <div className="absolute top-3 right-3 bg-paper/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-accent-500 border border-line opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Tap to view
                        </div>
                    </div>
                    <div className="flex flex-col justify-center border-t border-line bg-paper px-5 py-4 transition-colors group-hover:bg-white">
                        <h3 className="font-display text-lg font-bold text-ink truncate">{member.name}</h3>
                    </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex flex-col items-center justify-center border border-ink bg-ink p-6 text-center backface-hidden rotate-y-180 shadow-2xl">
                    <h3 className="font-display text-2xl font-bold text-white mb-2 leading-tight">{member.name}</h3>
                    <div className="w-8 h-px bg-accent-500 mx-auto mb-4" />
                    <p className="text-accent-400 font-medium tracking-widest mb-8 uppercase text-xs">{member.role}</p>

                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex h-11 items-center justify-center gap-2 bg-white px-6 text-sm font-semibold text-ink transition hover:bg-accent-500 hover:text-white w-full max-w-[200px]"
                    >
                        <Icon name="linkedin" className="h-4 w-4" />
                        Connect
                    </a>
                </div>
            </div>
        </div>
    )
}
