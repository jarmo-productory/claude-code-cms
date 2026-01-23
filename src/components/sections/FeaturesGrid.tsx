'use client'

import {
  Zap,
  FileText,
  PenTool,
  Layout,
  Link2,
  Shield,
  LucideIcon,
  FileSignature,
  FolderKanban,
  Users,
  Mail,
  Lock,
  Puzzle,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  Zap,
  FileText,
  PenTool,
  Layout,
  Link2,
  Shield,
  FileSignature,
  FolderKanban,
  Users,
  Mail,
  Lock,
  Puzzle,
}

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeaturesGridProps {
  overline?: string
  headline?: string
  description?: string
  features: Feature[]
  className?: string
}

export function FeaturesGrid({
  overline,
  headline,
  description,
  features,
  className,
}: FeaturesGridProps) {
  return (
    <section className={`py-16 lg:py-24 bg-white ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        {(overline || headline || description) && (
          <div className="text-center mb-16">
            {overline && (
              <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">
                {overline}
              </p>
            )}
            {headline && (
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                {headline}
              </h2>
            )}
            {description && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Zap
            return (
              <div
                key={index}
                className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
