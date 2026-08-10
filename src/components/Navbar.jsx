import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { REGISTRATION_LINKS } from '../data/siteData'

const links = [
  { to: '/', label: 'Home' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/committee', label: 'Committee' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-all duration-300 ${
        scrolled ? 'border-line shadow-xs py-1' : 'border-transparent py-0'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <NavLink 
          to="/" 
          className="flex items-center gap-2.5 sm:gap-3.5 group transition-transform duration-200 hover:scale-[1.01]" 
          onClick={() => {
            setOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          title="SYCON '26 — SSN Lakshya"
        >
          {/* SSN College Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/ssnlogo.webp" 
              alt="SSN College Logo" 
              className="h-8 sm:h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
            />
          </div>

          <span className="h-5 sm:h-6 w-px bg-line/80" />

          {/* SYCON Logo & Text */}
          <div className="flex items-center gap-2">
            <img 
              src="/sycon_logo.png" 
              alt="SYCON Logo" 
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink">
                  SYCON
                </span>
                <span className="kicker text-[11px] font-bold text-accent-600">/26</span>
              </div>
            </div>
          </div>

          <span className="h-5 sm:h-6 w-px bg-line/80 hidden sm:block" />

          {/* Lakshya Logo */}
          <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-line/80 bg-white/70 px-2.5 py-1 backdrop-blur-xs transition-colors group-hover:border-accent-500/40">
            <img 
              src="/logo.png" 
              alt="Lakshya Logo" 
              className="h-5 w-auto object-contain"
            />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-navy-700">
              Lakshya
            </span>
          </div>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link, i) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  `kicker flex items-baseline gap-1.5 text-[13px] font-medium transition-colors ${
                    isActive ? 'text-accent-600' : 'text-navy-700 hover:text-ink'
                  }`
                }
                end={link.to === '/'}
              >
                <span className="text-[10px] text-navy-600/50">0{i + 1}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={REGISTRATION_LINKS.inside}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 border border-ink bg-ink px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-accent-600 hover:border-accent-600 md:inline-flex button-hover"
        >
          Register
          <span aria-hidden="true">→</span>
        </a>

        <button
          className="grid h-10 w-10 place-items-center text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-5 md:hidden">
          {/* Mobile menu branding bar */}
          <div className="flex items-center justify-around py-3 border-b border-line/60 my-2">
            <div className="flex items-center gap-1.5">
              <img src="/ssnlogo.webp" alt="SSN Logo" className="h-6 w-auto object-contain" />
              <span className="text-[11px] font-semibold text-navy-800">SSN</span>
            </div>
            <span className="h-4 w-px bg-line" />
            <div className="flex items-center gap-1.5">
              <img src="/sycon_logo.png" alt="SYCON Logo" className="h-6 w-auto object-contain" />
              <span className="text-[11px] font-bold text-ink">SYCON'26</span>
            </div>
            <span className="h-4 w-px bg-line" />
            <div className="flex items-center gap-1.5">
              <img src="/logo.png" alt="Lakshya Logo" className="h-6 w-auto object-contain" />
              <span className="text-[11px] font-semibold text-navy-800">Lakshya</span>
            </div>
          </div>

          <ul className="flex flex-col divide-y divide-line pt-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => {
                    setOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={({ isActive }) =>
                    `block py-3 text-[15px] font-medium ${isActive ? 'text-accent-600' : 'text-navy-800'}`
                  }
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={REGISTRATION_LINKS.inside}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block border border-ink bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
          >
            Register →
          </a>
        </div>
      )}
    </header>
  )
}
