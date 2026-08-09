// import { useState } from 'react'
import { motion } from 'framer-motion'
import CommitteeCard from '../components/CommitteeCard'
import AutoCarousel from '../components/AutoCarousel'
import { COMMITTEE } from '../data/siteData'

export default function Committee() {
  const renderItem = (member) => (
    <CommitteeCard member={member} />
  )

  return (
    <div className="bg-paper pb-28">
      <section className="relative overflow-hidden border-b border-line py-20 sm:py-28 lg:py-32">
        {/* Soft, premium SaaS glow utilizing the requested theme constraints */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent-400 to-accent-600 opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-4xl px-6 sm:px-8 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/60 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-accent-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Committee
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[1.1] mb-6"
          >
            The people actually <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">running this.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-navy-700/70 leading-relaxed"
          >
            Meet the core team and vertical heads behind SYcon'26. We execute on budget, speaker procurement, and handling the day-of chaos.
          </motion.p>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-6 pt-16 sm:px-8 sm:pt-20"
      >
        <div className="mb-12 flex items-baseline justify-between border-b border-line pb-4">
          <h3 className="font-display text-2xl font-bold text-ink">Vertical Heads</h3>
          <span className="kicker text-xs text-navy-700/50">{COMMITTEE.vertical?.length || 0} members</span>
        </div>

        <div className="flex flex-col gap-20">
          {Array.from(new Set(COMMITTEE.vertical.map(v => v.domain))).map(domain => {
            const heads = COMMITTEE.vertical.filter(v => v.domain === domain)
            return (
              <div key={domain} className="flex flex-col gap-8">
                <h4 className="kicker text-center text-sm font-bold tracking-widest text-accent-500 uppercase flex items-center justify-center gap-4">
                  <span className="h-px w-8 bg-line" />
                  {domain}
                  <span className="h-px w-8 bg-line" />
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
                  {heads.map(renderItem)}
                </div>
              </div>
            )
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-6 pt-20 sm:px-8"
      >
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <h3 className="font-display text-2xl font-bold text-ink">Senior Core Team</h3>
          <span className="kicker text-xs text-navy-700/50">{COMMITTEE.senior?.length || 0} members</span>
        </div>
        <AutoCarousel items={COMMITTEE.senior} renderItem={renderItem} />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-6xl px-6 pt-20 sm:px-8"
      >
        <div className="mb-8 flex items-baseline justify-between border-b border-line pb-4">
          <h3 className="font-display text-2xl font-bold text-ink">Junior Core Team</h3>
          <span className="kicker text-xs text-navy-700/50">{COMMITTEE.junior?.length || 0} members</span>
        </div>
        <AutoCarousel items={COMMITTEE.junior} renderItem={renderItem} />
      </motion.section>
    </div>
  )
}
