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
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-colors ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <NavLink to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            SYCON
          </span>
          <span className="kicker text-xs font-medium text-accent-600">/26</span>
        </NavLink>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link, i) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
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
          className="hidden items-center gap-2 border border-ink bg-ink px-5 py-2.5 text-[13px] font-semibold text-white transition hover:bg-accent-600 hover:border-accent-600 md:inline-flex"
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
          <ul className="flex flex-col divide-y divide-line pt-2">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3.5 text-[15px] font-medium ${isActive ? 'text-accent-600' : 'text-navy-800'}`
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
