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

function Unit({ value, label, last }) {
  const padded = String(value).padStart(2, '0')
  return (
    <div className={`flex flex-1 flex-col items-center gap-2 py-1 ${!last ? 'border-r border-white/10' : ''}`}>
      <span className="kicker font-display text-3xl font-bold tabular-nums text-white sm:text-4xl md:text-5xl">
        {padded}
      </span>
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
    <div className="flex w-full max-w-md items-stretch justify-center bg-ink px-2 py-5 sm:max-w-lg sm:px-4">
      <Unit value={time.days} label="Days" />
      <Unit value={time.hours} label="Hrs" />
      <Unit value={time.minutes} label="Min" />
      <Unit value={time.seconds} label="Sec" last />
    </div>
  )
}
