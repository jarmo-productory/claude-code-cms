'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface ContactHeroProps {
  overline?: string
  headline?: React.ReactNode
  description?: string
  ctaText?: string
  ctaHref?: string
  trustText?: string
  tabs?: {
    bookCall: string
    askQuestion: string
  }
  formLabels?: {
    name: string
    email: string
    company: string
    message: string
    submit: string
    success: string
    error: string
  }
  calendlyUrl?: string
}

export function ContactHero({
  overline = 'GET IN TOUCH',
  headline = (
    <>
      Let&apos;s find out if Agrello <span className="text-brand-primary">fits you</span>
    </>
  ),
  description = 'Each company is unique. Skip the email threads and book a direct slot with us to see how we can handle your specific document workflow needs.',
  ctaText = 'Call us now',
  ctaHref = 'tel:+3726005015',
  trustText = 'Get a free Personalized platform tour.',
  tabs = {
    bookCall: 'Book a call',
    askQuestion: 'Ask a question',
  },
  formLabels = {
    name: 'Your name',
    email: 'Email address',
    company: 'Company name',
    message: 'Your message',
    submit: 'Send message',
    success: "Thank you! Your message has been sent. We'll get back to you soon.",
    error: 'Something went wrong. Please try again or email us directly.',
  },
  calendlyUrl = 'https://calendly.com/harry-375/agrello-workshop?embed_domain=www.agrello.io&embed_type=Inline',
}: ContactHeroProps) {
  const [activeTab, setActiveTab] = useState<'book' | 'ask'>('book')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setIsSubmitting(false)
  }

  return (
    <section className="relative overflow-hidden bg-gray-200 pt-32 pb-16 lg:pt-48 lg:pb-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero/dots.svg)',
          backgroundPosition: '0 0',
          backgroundSize: 'auto',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            <div className="inline-block mb-6">
              <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                {overline}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 font-display">
              {headline}
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">{description}</p>

            <div className="relative inline-block mb-6">
              <Button
                size="lg"
                className="px-8 py-6 text-lg rounded-xl bg-brand-primary hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
                onClick={() => (window.location.href = ctaHref || '#')}
              >
                {ctaText}
              </Button>

              {/* Arrow Decoration */}
              <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden md:block">
                <Image
                  src="/images/hero/arrow.svg"
                  alt=""
                  width={80}
                  height={40}
                  className="w-20 h-auto opacity-80 rotate-[-10deg]"
                />
              </div>
            </div>

            <p className="text-sm text-gray-500 font-medium">{trustText}</p>
          </div>

          {/* Right Column: Tabbed Card */}
          <div className="relative w-full lg:w-[32rem] mx-auto lg:mr-0">
            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-900/10 overflow-hidden">
              {/* Tab Headers */}
              <div className="flex border-b border-gray-100">
                <button
                  onClick={() => setActiveTab('book')}
                  className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                    activeTab === 'book'
                      ? 'text-brand-primary border-b-2 border-brand-primary bg-white'
                      : 'text-gray-500 hover:text-gray-700 bg-gray-50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {tabs.bookCall}
                </button>
                <button
                  onClick={() => setActiveTab('ask')}
                  className={`flex-1 py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 transition-colors ${
                    activeTab === 'ask'
                      ? 'text-brand-primary border-b-2 border-brand-primary bg-white'
                      : 'text-gray-500 hover:text-gray-700 bg-gray-50'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  {tabs.askQuestion}
                </button>
              </div>

              {/* Tab Content */}
              <div>
                {activeTab === 'book' ? (
                  <div className="min-h-[400px]">
                    <iframe
                      src={calendlyUrl}
                      width="100%"
                      height="400"
                      frameBorder="0"
                      title="Schedule a call"
                    ></iframe>
                  </div>
                ) : (
                  <form name="contact" onSubmit={handleSubmit} className="space-y-4 p-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        <input name="bot-field" type="text" />
                      </label>
                    </p>
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {formLabels.name} *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {formLabels.email} *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {formLabels.company}
                      </label>
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        {formLabels.message} *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-none"
                      />
                    </div>

                    {status === 'success' && (
                      <div className="p-3 bg-green-50 text-green-700 rounded-xl text-sm">
                        {formLabels.success}
                      </div>
                    )}

                    {status === 'error' && (
                      <div className="p-3 bg-red-50 text-red-700 rounded-xl text-sm">
                        {formLabels.error}
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? '...' : formLabels.submit}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Zigzag Decoration */}
            <div className="absolute -left-12 bottom-12 z-20 hidden lg:block">
              <Image
                src="/images/hero/zigzag.svg"
                alt=""
                width={60}
                height={30}
                className="w-16 h-auto"
              />
            </div>
          </div>
        </div>

        {/* Blobs Decoration */}
        <div
          className="absolute z-0 pointer-events-none"
          style={{
            inset: 'auto 0 -40% 18%',
            minWidth: '600px',
            minHeight: '600px',
          }}
        >
          <Image
            src="/images/hero/blobs.svg"
            alt=""
            fill
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}
