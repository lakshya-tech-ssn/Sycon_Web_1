import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold text-white">SYCON</span>
            <span className="kicker text-xs text-accent-500">/26</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Run by the department symposium committee at SSN College of Engineering.
            One day, six speakers, four workshop tracks.
          </p>
        </div>

        <div>
          <h4 className="kicker text-xs font-medium text-slate-500">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-accent-400">Home</Link></li>
            <li><Link to="/speakers" className="hover:text-accent-400">Speakers</Link></li>
            <li><Link to="/sponsors" className="hover:text-accent-400">Sponsors</Link></li>
            <li><Link to="/committee" className="hover:text-accent-400">Committee</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="kicker text-xs font-medium text-slate-500">Reach us</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li><a href="mailto:mail.lakshyatech@gmail.com" className="hover:text-accent-400">mail.lakshyatech@gmail.com</a></li>
            <li>SSN College of Engineering, Kalavakkam</li>
            <li className="flex gap-4 pt-1">
              <a href="https://instagram.com_ssnlakshya" className="hover:text-accent-400">Instagram</a>
              <a href="https://www.linkedin.com/company/lakshya-ssn" className="hover:text-accent-400">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-xs text-slate-500 sm:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span> | SYCON'26 | </span>
          <span>Built with 🧡 by SSN Lakshya Tech Team</span>
        </div>
      </div>
    </footer>
  )
}
