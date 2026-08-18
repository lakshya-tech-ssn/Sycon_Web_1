import { useEffect, useMemo, useRef, useState } from 'react'
import { SPONSORS } from '../data/siteData'

// ─── Data Slices ──────────────────────────────────────────────────────────────
const associateSponsor = SPONSORS.filter((s) => s.tier === 'Associate Sponsor')
const platinumSponsor = SPONSORS.filter((s) => s.tier === 'Platinum Sponsor')
const goldSponsor = SPONSORS.filter((s) => s.tier === 'Gold Sponsor')
const silverSponsors = SPONSORS.filter((s) => s.tier === 'Silver Sponsor')
const partnersAndStalls = SPONSORS.filter((s) => s.tier === 'Partners and Stalls')

// ─── Hero Particle Field ──────────────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.1,
    }))

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
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

// ─── Animated Counter ────────────────────────────────────────────────────────
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

// ─── Stall Card Component ─────────────────────────────────────────────────────
function StallCard({ stall, index }) {
  const floatClass = index % 2 === 0 ? 'stall-float-A' : 'stall-float-B'

  return (
    <div
      className={`stall-expo-card ${floatClass}`}
      style={{ animationDelay: `${(index % 4) * 0.3}s` }}
    >
      <div className="stall-vertical-line" aria-hidden="true" />

      <div className="stall-card-badge-row">
        <span className="stall-code-pill">{stall.stallNumber}</span>
        <span className="stall-location-pill">📍 {stall.location}</span>
      </div>

      <div className="stall-profile-row">
        <img src={stall.logo} alt={stall.name} className="stall-profile-img" />
        <div>
          <span className="stall-cat-label">{stall.category}</span>
          <h3 className="stall-title-name">{stall.name}</h3>
        </div>
      </div>

      <p className="stall-tagline-text">{stall.tagline}</p>

      <div className="stall-host-footer">
        <span className="stall-host-text">Host: {stall.host}</span>
      </div>
    </div>
  )
}

// ─── Unified Sponsor Card Component ───────────────────────────────────────────
function SponsorCard({ sponsor, tierTheme, isGrid = false }) {
  return (
    <div className={`unified-sponsor-card tier-${tierTheme} ${isGrid ? 'is-grid-card' : ''}`}>
      <div className="card-vertical-hover-line" aria-hidden="true" />
      <div className="card-linear-glow" aria-hidden="true" />

      <div className="sponsor-card-top-bar">
        <span className="sponsor-badge-tag">{sponsor.tier.toUpperCase()}</span>
        <span className="sponsor-category-tag">{sponsor.category}</span>
      </div>

      <div className="sponsor-card-main-grid">
        <div className="sponsor-card-logo-container">
          <img src={sponsor.logo} alt={sponsor.name} className="sponsor-card-logo-img" />
        </div>

        <div className="sponsor-card-info-pane">
          <h3 className="sponsor-card-name">{sponsor.name}</h3>
          <p className="sponsor-card-tagline">"{sponsor.tagline}"</p>
          <p className="sponsor-card-desc">{sponsor.description}</p>

          {sponsor.website && (
            <a
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="sponsor-card-website-btn"
            >
              Visit Website <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Sponsors() {
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
              { label: 'Partners', val: 14, suffix: '+' },
              { label: 'Speakers', val: 5, suffix: '+' },
              { label: 'Attendees', val: 800, suffix: '+' },
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

      {/* ── 1. ASSOCIATE SPONSOR ───────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="sponsors-tier-label">
          <span className="sponsors-tier-line" />
          <span className="sponsors-tier-text">Associate Sponsor</span>
          <span className="sponsors-tier-line" />
        </div>

        <div className="sponsors-showcase-single">
          {associateSponsor.map((s) => (
            <SponsorCard key={s.id} sponsor={s} tierTheme="associate" />
          ))}
        </div>
      </section>

      {/* ── 2. PLATINUM SPONSOR ────────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="sponsors-tier-label">
          <span className="sponsors-tier-line" />
          <span className="sponsors-tier-text">Platinum Sponsor</span>
          <span className="sponsors-tier-line" />
        </div>

        <div className="sponsors-showcase-single">
          {platinumSponsor.map((s) => (
            <SponsorCard key={s.id} sponsor={s} tierTheme="platinum" />
          ))}
        </div>
      </section>

      {/* ── 3. GOLD SPONSOR ────────────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="sponsors-tier-label">
          <span className="sponsors-tier-line" />
          <span className="sponsors-tier-text">Gold Sponsor</span>
          <span className="sponsors-tier-line" />
        </div>

        <div className="sponsors-showcase-single">
          {goldSponsor.map((s) => (
            <SponsorCard key={s.id} sponsor={s} tierTheme="gold" />
          ))}
        </div>
      </section>

      {/* ── 4. SILVER SPONSORS (3) ──────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="sponsors-tier-label">
          <span className="sponsors-tier-line" />
          <span className="sponsors-tier-text">Silver Sponsors</span>
          <span className="sponsors-tier-line" />
        </div>

        <div className="silver-sponsors-grid">
          {silverSponsors.map((s) => (
            <SponsorCard key={s.id} sponsor={s} tierTheme="silver" isGrid={true} />
          ))}
        </div>
      </section>

      {/* ── 5. PARTNERS & STALLS (8) ────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="sponsors-tier-label">
          <span className="sponsors-tier-line" />
          <span className="sponsors-tier-text">Partners & Community</span>
          <span className="sponsors-tier-line" />
        </div>

        <p className="stalls-section-sub">
          Our valued event and community partners supporting the student ecosystem and experience at SYCON '26.
        </p>

        <div className="stalls-expo-grid">
          {partnersAndStalls.map((stall, idx) => (
            <StallCard key={stall.id} stall={stall} index={idx} />
          ))}
        </div>

        {/* ── BE A SPONSOR CTA BUTTON ───────────────────────────────────── */}
        <div className="be-a-sponsor-container">
          <a
            href="mailto:mail.lakshytech@gmail.com?subject=SYCON%20%2726%20Sponsorship%20Inquiry"
            className="be-a-sponsor-main-btn"
          >
            <span className="btn-sparkle">💹</span> Be a Sponsor <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
