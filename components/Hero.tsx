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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-8">
      {/* Subtle Gradient Background Wash */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Headline & CTA */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Headline with Teal Underline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight text-balance">
                Transform Your{' '}
                <span className="relative inline-block">
                  Accounting Workflow
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
                </span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="text-lg sm:text-xl text-primary leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Say goodbye to manual data entry — no developers needed
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <Button
                onClick={handleDemoClick}
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 font-semibold text-base"
              >
                Book a Free Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleVideoClick}
                className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold text-base"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch 2-min Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column: Dark UI Mockup Card */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Floating Dark Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1A1A2E] to-[#16213E] p-8 border border-accent/20">
              {/* Card Background Accent */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

              {/* User Profile Section */}
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-accent to-accent/60" />
                <div>
                  <p className="text-white font-semibold">Jordan Adams</p>
                  <p className="text-white/60 text-sm">Controller</p>
                </div>
              </div>

              {/* Main Stat with Teal Badge */}
              <div className="relative z-10 mb-8">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 rounded-full px-4 py-2 mb-4">
                  <span className="text-accent font-semibold text-sm">+15 hours</span>
                  <span className="text-white/70 text-sm">saved this week</span>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-white/60 text-xs mb-1">Proposals Sent</p>
                  <p className="text-white font-bold text-lg">7</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Documents</p>
                  <p className="text-white font-bold text-lg">67</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Client Tasks</p>
                  <p className="text-white font-bold text-lg">14</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">Faster Onboarding</p>
                  <p className="text-white font-bold text-lg">35%</p>
                </div>
              </div>

              {/* Integration Icons */}
              <div className="relative z-10 pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs mb-3">Top Apps Automated</p>
                <div className="flex gap-3">
                  {[
                    { bg: 'bg-blue-500', icon: '∫' },
                    { bg: 'bg-purple-500', icon: '≈' },
                    { bg: 'bg-green-500', icon: '◉' },
                    { bg: 'bg-orange-500', icon: '★' },
                    { bg: 'bg-red-500', icon: '⚙' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`h-10 w-10 rounded-full ${item.bg} flex items-center justify-center text-white font-bold text-sm opacity-90`}
                    >
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* Vertical Gradient Accent */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-transparent to-transparent" />
            </div>

            {/* Floating Shadow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
