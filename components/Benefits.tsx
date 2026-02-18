'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const services = [
  {
    title: 'Automated Workflows',
    description: 'Get your accounting processes running with little to no human input. We design and build automations that save your team hours every week.',
    icons: [
      { color: 'bg-orange-500', symbol: '⚡' },
      { color: 'bg-purple-500', symbol: '◆' },
    ],
  },
  {
    title: 'Spreadsheet Automations',
    description: 'Go beyond manual copy-pasting. We develop custom scripts that cut your spreadsheet work in half.',
    icons: [
      { color: 'bg-green-500', symbol: '✓' },
      { color: 'bg-red-500', symbol: '📊' },
    ],
  },
  {
    title: 'Custom Integrations',
    description: 'Get your apps talking to each other. API, Webhooks, and RPA to connect tools you thought were impossible to integrate.',
    icons: [
      { color: 'bg-pink-500', symbol: '🔗' },
      { color: 'bg-gray-500', symbol: '⚙' },
    ],
  },
  {
    title: 'Data Design',
    description: 'Build a single source of truth for your firm\'s data — structured to support automation, reporting, and AI-readiness.',
    icons: [
      { color: 'bg-yellow-500', symbol: '📈' },
      { color: 'bg-blue-500', symbol: '◉' },
    ],
  },
  {
    title: 'Profitability Dashboards',
    description: 'Bring your KPIs into real-time view so partners can make faster, more informed business decisions.',
    icons: [
      { color: 'bg-black', symbol: '■' },
      { color: 'bg-yellow-400', symbol: '★' },
    ],
  },
  {
    title: 'AI Agents',
    description: 'Move beyond rule-based automation. Integrate AI into your workflows to handle senior-level repetitive tasks automatically.',
    icons: [
      { color: 'bg-emerald-500', symbol: '🤖' },
      { color: 'bg-rose-500', symbol: '✨' },
    ],
  },
]

export function Benefits() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 text-balance">
            Customized to your needs, specialized in your industry
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants} className="flex flex-col">
              {/* Icon Pair */}
              <div className="flex flex-col gap-3 mb-6">
                {service.icons.map((icon, iconIdx) => (
                  <div
                    key={iconIdx}
                    className={`h-12 w-12 rounded-lg ${icon.color} flex items-center justify-center text-white text-lg font-bold`}
                  >
                    {icon.symbol}
                  </div>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
