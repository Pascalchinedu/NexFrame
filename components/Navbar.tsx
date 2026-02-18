'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDemoClick = () => {
    setIsOpen(false)
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold text-primary">Nexframe</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleDemoClick}
              className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Book a Free Demo
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={handleDemoClick}
                className="w-full mt-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Book a Free Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
