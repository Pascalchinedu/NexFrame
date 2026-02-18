'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Sarah Jenkins',
    title: 'Founder & Managing Partner',
    company: 'Jenkins & Associates',
    quote: 'Nexframe reduced our data entry time by 80% in the first month. Our team loves it, and our clients notice the faster turnarounds.',
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    title: 'CFO',
    company: 'Pacific CPA Group',
    quote: 'The automation accuracy is unmatched. We went from manual reconciliation taking 2 days to automated verification in minutes.',
    initials: 'MC',
  },
  {
    name: 'Jessica Rodriguez',
    title: 'Practice Manager',
    company: 'Rodriguez & Co. CPAs',
    quote: 'Best investment we\'ve made for our firm. Nexframe paid for itself within 3 months through improved efficiency.',
    initials: 'JR',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const handleDotClick = (index: number) => {
    setCurrent(index)
    setAutoPlay(false)
  }

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-foreground/60">
            Hear from CPAs who've transformed their workflows with Nexframe.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white border border-border rounded-lg p-8 md:p-12 shadow-sm">
            <div className="flex flex-col items-center text-center space-y-6">
              <Avatar className="h-16 w-16 bg-accent/10">
                <AvatarFallback className="bg-accent/20 text-accent font-semibold">
                  {testimonials[current].initials}
                </AvatarFallback>
              </Avatar>

              <blockquote className="text-lg text-foreground/80 italic">
                "{testimonials[current].quote}"
              </blockquote>

              <div>
                <p className="font-semibold text-primary">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-foreground/60">
                  {testimonials[current].title} at {testimonials[current].company}
                </p>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-accent"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`h-2 rounded-full transition-colors ${
                    idx === current ? 'bg-accent w-8' : 'bg-border w-2'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
