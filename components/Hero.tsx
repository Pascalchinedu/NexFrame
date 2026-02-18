'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export function Hero() {
  const handleDemoClick = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleVideoClick = () => {
    // TODO: Replace with actual video URL or modal implementation
    window.open('#', '_blank')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 0.66, 0.66, 1] },
    },
  }

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-white pt-8">
      {/* Background SVG Graphics */}
      <div className="absolute inset-0 opacity-10">
        <svg
          viewBox="0 0 1200 600"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Graph Lines */}
          <g stroke="#00D4C8" strokeWidth="2" fill="none">
            <path d="M 100 400 L 200 300 L 300 350 L 400 200 L 500 250 L 600 100" />
            <path d="M 700 450 L 800 350 L 900 400 L 1000 250 L 1100 320" />
          </g>

          {/* Shield Icon */}
          <g stroke="#00D4C8" strokeWidth="2" fill="none">
            <path d="M 300 100 L 300 200 Q 300 300 200 350 Q 300 300 300 200 L 300 100" />
            <path d="M 950 150 L 950 250 Q 950 350 850 400 Q 950 350 950 250 L 950 150" />
          </g>

          {/* Circles */}
          <circle cx="150" cy="150" r="30" stroke="#00D4C8" strokeWidth="2" fill="none" />
          <circle cx="1050" cy="500" r="40" stroke="#00D4C8" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight"
            variants={itemVariants}
          >
            Transform Your Accounting Workflow
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-white/80 text-balance max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Say goodbye to manual data entry—no developers needed. Automate your entire accounting process in minutes.
          </motion.p>

          {/* Trust Bar */}
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-white/70"
            variants={itemVariants}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-accent/20 border-2 border-white/20"
                />
              ))}
            </div>
            <span>Trusted by CPAs at firms like Jenkins & Associates</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            variants={itemVariants}
          >
            <Button
              onClick={handleDemoClick}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold"
            >
              Book a Free Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleVideoClick}
              className="border-white/30 text-white hover:bg-white/10 text-base font-semibold"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch 2-min Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Element Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
    </section>
  )
}
