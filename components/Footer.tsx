import { Linkedin, Youtube, Twitter } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', href: '#' },
    { label: 'Integrations', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Security: [
    { label: 'SOC 2 Type II', href: '#' },
    { label: 'GDPR Compliant', href: '#' },
    { label: 'ISO 27001', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
  Support: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'Status Page', href: '#' },
  ],
}

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
  { icon: Twitter, label: 'X (Twitter)', href: 'https://twitter.com' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-accent" />
              <span className="text-xl font-bold text-accent">Nexframe</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              Transform your accounting workflow with intelligent automation.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-primary-foreground/70">
              &copy; {currentYear} Nexframe Systems. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
