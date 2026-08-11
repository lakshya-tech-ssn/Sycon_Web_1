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

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="grid grid-flow-col gap-6 sm:gap-8 text-center auto-cols-max">
      <div className="flex flex-col items-center">
        <span className="countdown font-mono text-6xl sm:text-7xl text-white">
          <span style={{ '--value': time.days }} aria-live="polite" aria-label={time.days}></span>
        </span>
        <span className="kicker text-xs sm:text-sm uppercase tracking-widest text-slate-400 mt-1.5">days</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono text-6xl sm:text-7xl text-white">
          <span style={{ '--value': time.hours }} aria-live="polite" aria-label={time.hours}></span>
        </span>
        <span className="kicker text-xs sm:text-sm uppercase tracking-widest text-slate-400 mt-1.5">hours</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono text-6xl sm:text-7xl text-white">
          <span style={{ '--value': time.minutes }} aria-live="polite" aria-label={time.minutes}></span>
        </span>
        <span className="kicker text-xs sm:text-sm uppercase tracking-widest text-slate-400 mt-1.5">min</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="countdown font-mono text-6xl sm:text-7xl text-accent-500">
          <span style={{ '--value': time.seconds }} aria-live="polite" aria-label={time.seconds}></span>
        </span>
        <span className="kicker text-xs sm:text-sm uppercase tracking-widest text-slate-400 mt-1.5">sec</span>
      </div>
    </div>
  )
}
