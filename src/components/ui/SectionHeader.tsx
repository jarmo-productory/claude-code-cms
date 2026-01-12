import { type ReactNode } from 'react'
import { Badge } from './Badge'

interface SectionHeaderProps {
  /** Overline text (shown in badge above headline) */
  overline?: string
  /** Main headline */
  headline: string
  /** Optional body text below headline */
  body?: ReactNode
  /** Alignment */
  align?: 'left' | 'center'
  /** For dark backgrounds */
  onDark?: boolean
  /** Show animated pulse dot in overline badge */
  showDot?: boolean
  className?: string
}

export function SectionHeader({
  overline,
  headline,
  body,
  align = 'center',
  onDark = false,
  showDot = true,
  className = '',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const headlineColor = onDark ? 'text-white' : 'text-brand-dark'
  const bodyColor = onDark ? 'text-white/80' : 'text-slate-600'

  return (
    <div className={`max-w-3xl ${alignClasses} ${className}`.trim()}>
      {overline && (
        <Badge
          showDot={showDot}
          onDark={onDark}
          className="mb-6"
        >
          {overline}
        </Badge>
      )}

      <h2 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold ${headlineColor} mb-6`}>
        {headline}
      </h2>

      {body && (
        <div className={`text-lg ${bodyColor} leading-relaxed`}>
          {body}
        </div>
      )}
    </div>
  )
}
