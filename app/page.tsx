import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Benefits } from '@/components/Benefits'
import { HowItWorks } from '@/components/HowItWorks'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { ContactForm } from '@/components/ContactForm'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
