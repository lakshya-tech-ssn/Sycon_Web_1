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

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Sponsors() {
  return (
    <div style={{ background: 'var(--color-paper)', overflow: 'hidden' }}>

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

        <div className="associate-showcase-wrapper">
          {associateSponsor.map((s) => (
            <div key={s.id} className="associate-spotlight-card">
              <div className="card-vertical-hover-line" aria-hidden="true" />
              <div className="associate-accent-glow" aria-hidden="true" />
              <div className="associate-badge-banner">ASSOCIATE TITLE SPONSOR</div>

              <div className="associate-content-grid">
                <div className="associate-logo-box">
                  <img src={s.logo} alt={s.name} className="associate-logo-img" />
                  <span className="associate-cat-tag">{s.category}</span>
                </div>

                <div className="associate-details-pane">
                  <h2 className="associate-brand-title">{s.name}</h2>
                  <p className="associate-brand-tagline">"{s.tagline}"</p>
                  <p className="associate-brand-desc">{s.description}</p>

                  <div className="associate-perks-row">
                    {s.perks.map((perk, idx) => (
                      <span key={idx} className="associate-perk-chip">
                        ✦ {perk}
                      </span>
                    ))}
                  </div>

                  <a
                    href={s.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="associate-visit-link"
                  >
                    Visit CredO Platform <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. PLATINUM SPONSOR ────────────────────────────────────────── */}
      <section className="sponsors-section sponsors-section--dark">
        <div className="sponsors-tier-label sponsors-tier-label--light">
          <span className="sponsors-tier-line sponsors-tier-line--light" />
          <span className="sponsors-tier-text sponsors-tier-text--light">Platinum Sponsor</span>
          <span className="sponsors-tier-line sponsors-tier-line--light" />
        </div>

        <div className="platinum-showcase-wrap">
          {platinumSponsor.map((s) => (
            <div key={s.id} className="platinum-aesthetic-card">
              <div className="card-vertical-hover-line" aria-hidden="true" />
              <div className="platinum-shimmer-bar" />
              <div className="platinum-card-body">
                <div className="platinum-logo-side">
                  <div className="platinum-badge">PLATINUM SPONSOR</div>
                  <img src={s.logo} alt={s.name} className="platinum-logo-img" />
                </div>
                <div className="platinum-info-side">
                  <span className="platinum-cat">{s.category}</span>
                  <h3 className="platinum-name">{s.name}</h3>
                  <p className="platinum-tagline">{s.tagline}</p>
                  <p className="platinum-desc">{s.description}</p>

                  <div className="platinum-perks-list">
                    {s.perks.map((perk, idx) => (
                      <span key={idx} className="platinum-perk-pill">💎 {perk}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

        <div className="gold-showcase-wrap">
          {goldSponsor.map((s) => (
            <div key={s.id} className="gold-aesthetic-card">
              <div className="card-vertical-hover-line" aria-hidden="true" />
              <div className="gold-card-header">
                <span className="gold-badge">GOLD SPONSOR</span>
                <span className="gold-cat">{s.category}</span>
              </div>
              <div className="gold-card-body">
                <div className="gold-logo-box">
                  <img src={s.logo} alt={s.name} className="gold-logo-img" />
                </div>
                <div className="gold-info">
                  <h3 className="gold-name">{s.name}</h3>
                  <p className="gold-tagline">"{s.tagline}"</p>
                  <p className="gold-desc">{s.description}</p>
                  <div className="gold-perks">
                    {s.perks.map((perk, idx) => (
                      <span key={idx} className="gold-perk-chip">🥇 {perk}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 4. SILVER SPONSORS (3) ──────────────────────────────────────── */}
      <section className="sponsors-section sponsors-section--dark">
        <div className="sponsors-tier-label sponsors-tier-label--light">
          <span className="sponsors-tier-line sponsors-tier-line--light" />
          <span className="sponsors-tier-text sponsors-tier-text--light">Silver Sponsors</span>
          <span className="sponsors-tier-line sponsors-tier-line--light" />
        </div>

        <div className="silver-cards-grid">
          {silverSponsors.map((s) => (
            <div key={s.id} className="silver-aesthetic-card">
              <div className="card-vertical-hover-line" aria-hidden="true" />
              <div className="silver-card-top">
                <span className="silver-badge">SILVER SPONSOR</span>
                <span className="silver-cat">{s.category}</span>
              </div>
              <div className="silver-logo-box">
                <img src={s.logo} alt={s.name} className="silver-logo-img" />
              </div>
              <h3 className="silver-name">{s.name}</h3>
              <p className="silver-tagline">{s.tagline}</p>
              <p className="silver-desc">{s.description}</p>
              <div className="silver-perks-row">
                {s.perks.map((perk, idx) => (
                  <span key={idx} className="silver-perk-pill">• {perk}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. PARTNERS & STALLS (8) ────────────────────────────────────── */}
      <section className="sponsors-section">
        <div className="sponsors-tier-label">
          <span className="sponsors-tier-line" />
          <span className="sponsors-tier-text">Partners & Campus Stalls</span>
          <span className="sponsors-tier-line" />
        </div>

        <p className="stalls-section-sub">
          8 interactive campus booths bringing gourmet culinary, gaming arcades, fitness screening, and live podcast recordings to SYCON '26.
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
            <span className="btn-sparkle">✨</span> Be a Sponsor <span className="btn-arrow">→</span>
          </a>
        </div>
      </section>
    </div>
  )
}
