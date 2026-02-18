'use client'

import { Clock, BarChart3, Users, Lock } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const benefits = [
  {
    icon: Clock,
    title: 'Save 15–20 hours/week',
    description: 'Eliminate manual data entry and repetitive tasks',
  },
  {
    icon: BarChart3,
    title: 'Reduce errors by 90%',
    description: 'Automated validation catches issues before they cost money',
  },
  {
    icon: Users,
    title: 'Scales with your team',
    description: 'From single CPAs to large firms, grow without limits',
  },
  {
    icon: Lock,
    title: 'Bank-grade security',
    description: 'SOC 2 Type II, GDPR, ISO 27001 certified',
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
    <section id="services" className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose Nexframe?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Designed specifically for modern accounting teams who demand efficiency, accuracy, and security.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="flex flex-col items-center text-center p-8 bg-white border-0 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div className="mb-4 p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/60">
                    {benefit.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
