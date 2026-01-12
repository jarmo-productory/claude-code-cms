import type { Metadata } from 'next'
import {
  Hero,
  LogoCloud,
  Features,
  HowItWorks,
  Pricing,
  Testimonials,
  CTA,
} from '@/components/sections'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Claude Code CMS - A modern Next.js starter with everything you need',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
    </main>
  )
}
