import { Link } from 'react-router-dom'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-ink text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* Official Branding Logos Container */}
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3.5 backdrop-blur-xs w-fit">
            <div className="flex items-center gap-2 rounded bg-white px-2 py-1 shadow-xs" title="SSN College of Engineering">
              <img src="/ssn-logo.jpg" alt="SSN College Logo" className="h-7 w-auto object-contain" />
            </div>
            <span className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-2 px-1" title="SYCON '26">
              <img src="/sycon_logo.png" alt="SYCON Logo" className="h-7 w-auto object-contain" />
            </div>
            <span className="h-6 w-px bg-white/20" />
            <div className="flex items-center gap-2 rounded bg-white px-2 py-1 shadow-xs" title="Organized by Lakshya">
              <img src="/logo.png" alt="Lakshya Logo" className="h-7 w-auto object-contain" />
            </div>
          </div>

          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-white">SYCON</span>
            <span className="kicker text-xs text-accent-500">/26</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-400">
            Organized by <strong className="text-slate-200">SSN Lakshya</strong> — Department Symposium Committee at <strong className="text-slate-200">SSN College of Engineering</strong>.
            One day, six speakers, four workshop tracks.
          </p>
        </div>

        <div>
          <h4 className="kicker text-xs font-medium text-slate-500">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" onClick={scrollToTop} className="transition-colors hover:text-accent-400">Home</Link></li>
            <li><Link to="/speakers" onClick={scrollToTop} className="transition-colors hover:text-accent-400">Speakers</Link></li>
            <li><Link to="/sponsors" onClick={scrollToTop} className="transition-colors hover:text-accent-400">Sponsors</Link></li>
            <li><Link to="/committee" onClick={scrollToTop} className="transition-colors hover:text-accent-400">Leadership Team</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="kicker text-xs font-medium text-slate-500">Reach us</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="mailto:mail.lakshyatech@gmail.com" className="transition-colors hover:text-accent-400">mail.lakshyatech@gmail.com</a></li>
            <li>SSN College of Engineering, Kalavakkam</li>
            <li className="flex gap-4 pt-1">
              <a href="https://instagram.com/ssnlakshya" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent-400">Instagram</a>
              <a href="https://www.linkedin.com/company/lakshya-ssn" target="_blank" rel="noreferrer" className="transition-colors hover:text-accent-400">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-xs text-slate-500 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-slate-400 font-semibold">SSN</span>
            <span>•</span>
            <span className="font-mono text-accent-400 font-bold">SYCON'26</span>
            <span>•</span>
            <span className="font-mono text-slate-400 font-semibold">LAKSHYA</span>
          </div>
          <span>Built with 🧡 by SSN Lakshya Tech Team</span>
        </div>
      </div>
    </footer>
  )
}
