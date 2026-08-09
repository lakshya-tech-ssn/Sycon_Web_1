import { useRef, useEffect, useState } from 'react'

export default function AutoCarousel({ items, renderItem }) {
    const scrollRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isDragging, setIsDragging] = useState(false)

    // Append items strictly in triple sequence to permit a robust seamless infinite loop.
    const displayItems = [...(items || []), ...(items || []), ...(items || []), ...(items || [])]

    useEffect(() => {
        let animationFrameId
        const step = () => {
            if (scrollRef.current && !isHovered && !isDragging) {
                const element = scrollRef.current

                // Add to scrollLeft every frame for buttery auto scroll
                element.scrollLeft += 0.8

                // Seamless Loop conditional calculations based on duplicating sets
                const singleLength = element.scrollWidth / 4
                if (element.scrollLeft >= singleLength * 2) {
                    element.scrollLeft -= singleLength
                } else if (element.scrollLeft <= 0) {
                    element.scrollLeft += singleLength
                }
            }
            animationFrameId = requestAnimationFrame(step)
        }
        animationFrameId = requestAnimationFrame(step)
        return () => cancelAnimationFrame(animationFrameId)
    }, [isHovered, isDragging])

    // Manual navigation logic ensuring smooth offsets
    const scrollByAmount = (amount) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
        }
    }

    return (
        <div
            className="relative group -mx-6 sm:-mx-8 px-6 sm:px-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={() => scrollByAmount(-330)}
                className="absolute left-6 sm:left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-none bg-paper border border-line flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-white text-ink shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] focus:outline-none"
                aria-label="Scroll left"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto no-scrollbar py-4"
                style={{ scrollBehavior: 'auto' }} // Eradicated snap scrolling interference
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            >
                {displayItems?.map((item, i) => (
                    <div key={`${item.id}-${i}`} className="min-w-[280px] w-[300px] flex-shrink-0">
                        {renderItem(item)}
                    </div>
                ))}
            </div>

            <button
                onClick={() => scrollByAmount(330)}
                className="absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-12 h-12 rounded-none bg-paper border border-line flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-white text-ink shadow-[0_0_15px_-3px_rgba(0,0,0,0.1)] focus:outline-none"
                aria-label="Scroll right"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
        </div>
    )
}
