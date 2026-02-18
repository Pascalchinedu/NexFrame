'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { trackingEvents } from '@/lib/analytics'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!email.trim()) {
      setError('Email is required')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Failed to subscribe')
      }

      // Track successful newsletter signup
      trackingEvents.newsletterSignup()

      toast.success("You're in! Check your inbox soon.")
      setEmail('')
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
      console.error('Subscription error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-12 lg:py-16 bg-white border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
              Stay Updated
            </h3>
            <p className="text-foreground/60">
              Get the latest insights on accounting automation, efficiency tips, and Nexframe updates delivered to your inbox.
            </p>
          </div>

          {/* Right Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                className={error ? 'border-red-500' : ''}
                disabled={loading}
              />
              {error && (
                <p className="mt-1 text-xs text-red-500">{error}</p>
              )}
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
