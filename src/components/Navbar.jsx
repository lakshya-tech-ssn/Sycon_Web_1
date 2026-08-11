import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { REGISTRATION_LINKS } from '../data/siteData'

const links = [
  { to: '/', label: 'Home' },
  { to: '/speakers', label: 'Speakers' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/committee', label: 'Leadership Team' },
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
      className={`sticky top-0 z-50 border-b bg-ink backdrop-blur transition-all duration-300 ${
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
          {/* SYCON Logo & Text */}
          <div className="flex items-center gap-2.5">
            <img 
              src="/sycon_logo_1.png" 
              alt="SYCON Logo" 
              className="h-9 w-auto object-contain scale-[1.2] transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                  SYCON
                </span>
                <span className="kicker font-display text-lg sm:text-xl font-bold text-accent-500">'26</span>
              </div>
            </div>
          </div>

          <span className="h-12 sm:h-6 w-px hidden sm:block" />

          
        </NavLink>

        <ul className="hidden items-center gap-14 md:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={({ isActive }) =>
                  `kicker flex items-baseline gap-20px text-[13px] font-medium transition-colors ${
                    isActive ? 'text-accent-500' : 'text-slate-300 hover:text-white'
                  }`
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
          className="hidden items-center gap-2 border border-white/20 bg-white/5 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-accent-500 hover:border-accent-500 md:inline-flex button-hover"
        >
          Register
          <span aria-hidden="true">→</span>
        </a>

        <button
          className="grid h-10 w-10 place-items-center text-white md:hidden"
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
        <div className="border-t border-white/10 bg-ink px-5 pb-5 md:hidden">
          {/* Mobile menu branding bar */}
          <div className="flex items-center justify-around py-3 border-b border-white/10 my-2">
            <div className="flex items-center gap-1.5">
              <img src="/ssn-logo.jpg" alt="SSN Logo" className="h-6 w-auto object-contain" />
              <span className="text-[11px] font-semibold text-slate-300">SSN</span>
            </div>
            <span className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1.5">
              <img src="/sycon_bg.png" alt="SYCON Logo" className="h-6 w-auto object-contain" />
              <span className="text-[11px] font-bold text-white">SYCON'26</span>
            </div>
            <span className="h-4 w-px bg-white/10" />
            <div className="flex items-center gap-1.5">
              <img src="/logo.png" alt="Lakshya Logo" className="h-6 w-auto object-contain" />
              <span className="text-[11px] font-semibold text-slate-300">Lakshya</span>
            </div>
          </div>

          <ul className="flex flex-col divide-y divide-white/10 pt-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => {
                    setOpen(false)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className={({ isActive }) =>
                    `block py-3 text-[15px] font-medium ${isActive ? 'text-accent-500' : 'text-slate-300'}`
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
