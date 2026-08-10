import { GALLERY_IMAGES } from '../data/siteData'

export default function GalleryMarquee() {
  const track = [...GALLERY_IMAGES, ...GALLERY_IMAGES]

  return (
    <div className="group relative w-full overflow-hidden border-y border-line bg-ink">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-ink to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-ink to-transparent sm:w-24" />

      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {track.map((img, i) => (
          <figure key={`${img.id}-${i}`} className="relative h-40 w-60 flex-shrink-0 border-r border-white/10 sm:h-52 sm:w-80">
            <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
            <figcaption className="kicker absolute bottom-2 left-2 bg-ink/80 px-2 py-1 text-[10px] text-white">
              SYCON '25
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
