import { useEffect, useMemo, useRef, useState } from 'react'
import { SPONSORS } from '../data/siteData'

// ─── Data slices ──────────────────────────────────────────────────────────────
const titleSponsor  = SPONSORS.filter((s) => s.tier === 'Title Sponsor')
const coSponsors    = SPONSORS.filter((s) => s.tier === 'Co-Sponsor')
const otherSponsors = SPONSORS.filter((s) => !['Title Sponsor', 'Co-Sponsor'].includes(s.tier))

// ─── Build a randomised collage layout each page-load ─────────────────────────
// Divides the stage into a loose grid of zones, then offsets each item
// randomly within its zone so nothing clusters but nothing overlaps badly.
function buildCollageLayout(items) {
  const shuffled = [...items].sort(() => Math.random() - 0.5)

  const COLS = 4
  // 4 cols × 24% = 96% total width, 4% overall margin
  const ZONE_W = 24   // % of stage width per column
  // 3 rows × 130px = 390px; logos max 70px tall, leaving 60px gap
  const ZONE_H = 130  // px per row

  return shuffled.map((sponsor, i) => {
    const col = i % COLS
    const row = Math.floor(i / COLS)

    // x: start of zone + tiny nudge (max 3% so logo never crosses into next zone)
    const x = col * ZONE_W + 1 + Math.random() * 3

    // y: top of row + small nudge (max 20px so logo never bleeds into next row)
    const y = 10 + row * ZONE_H + Math.random() * 20

    // Rotation: subtle tilts only
    const rotate = (Math.random() - 0.5) * (Math.random() > 0.8 ? 16 : 8)

    // Width: safe max so logo fits inside its 24%-wide zone at 980px stage
    // 24% of 980px ≈ 235px; logo must fit with 1–4% x-nudge (max ~39px offset)
    // so logo width max ≈ 235 - 40 = 195px. We keep max at 160 for comfort.
    const w = Math.round(Math.random() * 30 + 130) // 130–160 px
    const h = Math.round(Math.random() * 10 + 60)  //  60– 70 px

    return {
      sponsor,
      x,
      y,
      rotate,
      w, h,
      zIndex:   Math.floor(Math.random() * 6) + 1,
      floatDir: Math.random() > 0.5 ? 'A' : 'B',
      floatDur: (Math.random() * 2 + 3.5).toFixed(1),
      dropDelay: i * 0.06 + Math.random() * 0.06,
    }
  })
}

// ─── Particle field (hero background) ─────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Use Math.random() for particles — hero doesn't need stable positions
    const particles = Array.from({ length: 55 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a:  Math.random() * 0.5 + 0.1,
    }))

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width)  p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(249,98,44,${p.a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
  )
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let start = null
      const step = (ts) => {
        if (!start) start = ts
        const prog = Math.min((ts - start) / 1200, 1)
        setVal(Math.floor(prog * to))
        if (prog < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [to])
  return <span ref={ref}>{val}{suffix}</span>
}

// ─── Single collage item ───────────────────────────────────────────────────────
// Two-div approach: outer div owns position + float animation (translateY only),
// inner div owns rotation + hover scale. This prevents animation conflicts.
function CollageItem({ item }) {
  const [hovered, setHovered] = useState(false)
  const { sponsor, x, y, rotate, w, h, zIndex, floatDir, floatDur, dropDelay } = item

  return (
    <div
      className={`collage-float collage-float--${floatDir}`}
      style={{
        position: 'absolute',
        left:   `${x}%`,
        top:    `${y}px`,
        zIndex: hovered ? 50 : zIndex,
        animationDuration: `${floatDur}s`,
        animationDelay: `${dropDelay + 0.5}s`,
      }}
    >
      <div
        className="collage-inner"
        style={{
          width:  `${w}px`,
          height: `${h}px`,
          transform: hovered
            ? 'rotate(0deg) scale(1.14)'
            : `rotate(${rotate}deg)`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={sponsor.logo}
          alt={sponsor.name}
          className="collage-logo-img"
          style={{
            opacity: hovered ? 1 : 0.82,
            filter: hovered ? 'none' : 'saturate(0.85)',
          }}
          draggable={false}
        />

        {/* Name tooltip on hover */}
        {hovered && (
          <div className="collage-tooltip">
            <span className="collage-tooltip-tier">{sponsor.tier}</span>
            <span className="collage-tooltip-name">{sponsor.name}</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Sponsors() {
  // useMemo with [] → computed once per mount → new random layout on every page load
  const collageLayout = useMemo(() => buildCollageLayout(otherSponsors), [])

  return (
    <div style={{ background: 'var(--color-ink)', color: '#fff', overflow: 'hidden' }}>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section className="sponsors-hero">
        <ParticleField />
        <div className="sponsors-hero-inner">
          <p className="sponsors-eyebrow">SYCON '26 · Backed By</p>
          <h1 className="sponsors-hero-title">
            Our <span className="sponsors-accent">Sponsors</span>
          </h1>
          <p className="sponsors-hero-sub">
            The organisations making SYCON possible — funding the kits,
            <br className="hidden sm:block" />
            the lunch, the stage, and everything in between.
          </p>
          <div className="sponsors-stats">
            {[
              { label: 'Partners',  val: 14,  suffix: '+' },
              { label: 'In Prizes', val: 50,  suffix: 'K' },
              { label: 'Attendees', val: 500, suffix: '+' },
            ].map((s) => (
              <div key={s.label} className="sponsors-stat-pill">
                <span className="sponsors-stat-num"><Counter to={s.val} suffix={s.suffix} /></span>
                <span className="sponsors-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="sponsors-hero-stripe" aria-hidden="true" />
      </section>

      {/* ── TITLE SPONSOR ──────────────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="sponsors-tier-label">
          <span className="sponsors-tier-line" />
          <span className="sponsors-tier-text">Title Sponsor</span>
          <span className="sponsors-tier-line" />
        </div>
        <div className="title-sponsor-wrap">
          {titleSponsor.map((s) => (
            <div key={s.id} className="title-sponsor-card">
              <div className="title-sponsor-badge">Presenting Partner</div>
              <img src={s.logo} alt={s.name} className="title-sponsor-logo" />
              <p className="title-sponsor-tagline">{s.tagline}</p>
              <div className="title-sponsor-glow" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      {/* ── CO-SPONSORS ────────────────────────────────────────────────── */}
      <section className="sponsors-section sponsors-section--dark">
        <div className="sponsors-tier-label sponsors-tier-label--light">
          <span className="sponsors-tier-line sponsors-tier-line--light" />
          <span className="sponsors-tier-text sponsors-tier-text--light">Co-Sponsors</span>
          <span className="sponsors-tier-line sponsors-tier-line--light" />
        </div>
        <div className="cosponsor-grid">
          {coSponsors.map((s, i) => (
            <div key={s.id} className="cosponsor-card" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="cosponsor-inner">
                <img src={s.logo} alt={s.name} className="cosponsor-logo" />
                <div>
                  <span className="cosponsor-name">{s.name}</span>
                  <span className="cosponsor-tagline">{s.tagline}</span>
                </div>
              </div>
              <div className="cosponsor-bar" />
            </div>
          ))}
        </div>
      </section>

      {/* ── SUPPORTING SPONSORS COLLAGE ─────────────────────────────────── */}
      <section className="collage-section">
        <div className="collage-header">
          <div className="sponsors-tier-label">
            <span className="sponsors-tier-line" />
            <span className="sponsors-tier-text">Supporting Sponsors</span>
            <span className="sponsors-tier-line" />
          </div>
          <p className="collage-sub">Hover to reveal</p>
        </div>

        <div className="collage-stage">
          {/* Subtle noise texture so logos have a surface to sit on */}
          <div className="collage-stage-bg" aria-hidden="true" />

          {collageLayout.map((item) => (
            <CollageItem key={item.sponsor.id} item={item} />
          ))}

          {/* Fade edges so logos don't hard-clip */}
          <div className="collage-fade collage-fade--top"    aria-hidden="true" />
          <div className="collage-fade collage-fade--bottom" aria-hidden="true" />
          <div className="collage-fade collage-fade--left"   aria-hidden="true" />
          <div className="collage-fade collage-fade--right"  aria-hidden="true" />
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section className="sponsors-cta">
        <div className="sponsors-cta-inner">
          <div>
            <p className="kicker text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent-400)' }}>
              Want to be part of this?
            </p>
            <h2 className="sponsors-cta-title">Deck's ready if you want the numbers.</h2>
            <p className="sponsors-cta-sub">
              Sponsor packages for every budget — booth space, kit branding, and stage acknowledgment.
            </p>
          </div>
          <a href="mail.lakshyatech@gmail.com" className="sponsors-cta-btn">
            Email the team <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
