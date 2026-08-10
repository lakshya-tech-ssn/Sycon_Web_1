import { useEffect, useState } from 'react'
import { EVENT_DATE } from '../data/siteData'

function getTimeLeft() {
  const diff = Math.max(0, EVENT_DATE.getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Unit({ value, label, accent }) {
  const padded = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-lg border sm:h-20 sm:w-20 ${
          accent
            ? 'border-accent-500/40 bg-accent-500/10'
            : 'border-white/10 bg-white/5'
        }`}
      >
        <span
          className={`kicker font-display text-2xl font-bold tabular-nums sm:text-3xl ${
            accent ? 'text-accent-400' : 'text-white'
          }`}
        >
          {padded}
        </span>
      </div>
      <span className="kicker text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="inline-flex w-fit items-center gap-3 rounded-xl border border-white/10 bg-ink px-5 py-5 shadow-sm sm:gap-4 sm:px-6">
      <Unit value={time.days} label="Days" />
      <span className="kicker mb-6 text-lg font-bold text-white/15 sm:text-xl">:</span>
      <Unit value={time.hours} label="Hrs" />
      <span className="kicker mb-6 text-lg font-bold text-white/15 sm:text-xl">:</span>
      <Unit value={time.minutes} label="Min" />
      <span className="kicker mb-6 text-lg font-bold text-white/15 sm:text-xl">:</span>
      <Unit value={time.seconds} label="Sec" accent />
    </div>
  )
}
