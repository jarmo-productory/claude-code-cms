'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface ContactFormProps {
  labels: {
    name: string
    email: string
    company: string
    message: string
    submit: string
    success: string
    error: string
  }
  className?: string
}

export function ContactForm({ labels, className }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('idle')

    const form = e.currentTarget
    const formData = new FormData(form)

    // For now, we'll use a mailto: approach
    // In production, replace with actual API endpoint
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const company = formData.get('company') as string
    const message = formData.get('message') as string

    const mailtoLink = `mailto:info@agrello.io?subject=Contact from ${name} (${company})&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    )}`

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Open mailto link
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setStatus('success')
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className || ''}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            {labels.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            {labels.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
          {labels.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          {labels.message} *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="p-4 bg-green-50 text-green-700 rounded-xl">{labels.success}</div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 text-red-700 rounded-xl">{labels.error}</div>
      )}

      <Button type="submit" size="lg" className="w-full md:w-auto px-8" disabled={isSubmitting}>
        {isSubmitting ? '...' : labels.submit}
      </Button>
    </form>
  )
}
