'use client'

import { Linkedin, Youtube, Twitter, Facebook } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Success Stories', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Pricing', href: '#pricing' },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Twitter, label: 'X (Twitter)', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Left: Brand Logo */}
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-accent" />
              <span className="text-lg font-bold">Nexframe Systems</span>
            </div>
          </div>

          {/* Right: Two Columns (Quick Links + Contact) */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-2 gap-8">
            {/* Column 1: Quick Links */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-primary-foreground">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Contact Us */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-primary-foreground">Contact Us</h3>
              <div className="space-y-4">
                <p className="text-sm text-primary-foreground/70">
                  <a href="mailto:info@nexframesystems.com" className="hover:text-primary-foreground transition-colors">
                    info@nexframesystems.com
                  </a>
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-sm text-primary-foreground/70 text-center">
            © {currentYear} Nexframe Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
