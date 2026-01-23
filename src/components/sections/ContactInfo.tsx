'use client'

import { Mail, Phone, MapPin, Clock } from 'lucide-react'

interface ContactInfoProps {
  email: string
  phone?: string
  address: string[]
  hours?: string
  labels: {
    email: string
    phone: string
    address: string
    hours: string
  }
  className?: string
}

export function ContactInfo({ email, phone, address, hours, labels, className }: ContactInfoProps) {
  return (
    <div className={`space-y-8 ${className || ''}`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <Mail className="w-6 h-6 text-brand-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{labels.email}</h3>
          <a href={`mailto:${email}`} className="text-brand-primary hover:underline">
            {email}
          </a>
        </div>
      </div>

      {phone && (
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{labels.phone}</h3>
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-gray-600 hover:text-brand-primary"
            >
              {phone}
            </a>
          </div>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-brand-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">{labels.address}</h3>
          {address.map((line, index) => (
            <p key={index} className="text-gray-600">
              {line}
            </p>
          ))}
        </div>
      </div>

      {hours && (
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-brand-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{labels.hours}</h3>
            <p className="text-gray-600">{hours}</p>
          </div>
        </div>
      )}
    </div>
  )
}
