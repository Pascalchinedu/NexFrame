'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: '1',
    title: 'Connect Your Tools',
    description: 'Link your existing accounting software in minutes',
  },
  {
    number: '2',
    title: 'Design Your Workflow',
    description: 'Use our drag-and-drop builder, no coding required',
  },
  {
    number: '3',
    title: 'Go Live Instantly',
    description: 'Activate automations with one click',
  },
  {
    number: '4',
    title: 'Monitor & Scale',
    description: 'Track performance and expand as your firm grows',
  },
]

export function HowItWorks() {
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
    <section id="how-it-works" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How It Works
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Get started in 4 simple steps. No technical expertise required.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {steps.map((step, idx) => (
            <motion.div key={idx} className="relative" variants={itemVariants}>
              {/* Connector Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-1 bg-accent transform translate-x-1/2" />
              )}

              {/* Step Card */}
              <div className="relative z-10 bg-white border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                {/* Badge Number */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-bold text-lg">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/60">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
