import { type ReactNode } from 'react'

type BadgeVariant = 'default' | 'outline' | 'status'

interface BadgeProps {
  children: ReactNode
  variant?: BadgeVariant
  /** Show animated pulse dot (for status badges) */
  showDot?: boolean
  /** For dark backgrounds - inverts color scheme */
  onDark?: boolean
  className?: string
}

export function Badge({
  children,
  variant = 'default',
  showDot = false,
  onDark = false,
  className = '',
}: BadgeProps) {
  const baseClasses =
    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider'

  let variantClasses: string
  if (onDark) {
    switch (variant) {
      case 'default':
        variantClasses = 'bg-white/10 backdrop-blur-sm border border-white/20 text-white/90'
        break
      case 'outline':
        variantClasses = 'border border-white/30 text-white'
        break
      case 'status':
        variantClasses = 'bg-white/10 backdrop-blur-sm text-white/90'
        break
    }
  } else {
    switch (variant) {
      case 'default':
        variantClasses = 'bg-brand-primary/10 text-brand-primary'
        break
      case 'outline':
        variantClasses = 'border border-brand-primary/30 text-brand-primary'
        break
      case 'status':
        variantClasses = 'bg-brand-primary/10 text-brand-primary'
        break
    }
  }

  return (
    <span className={`${baseClasses} ${variantClasses} ${className}`.trim()}>
      {showDot && <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse" />}
      {children}
    </span>
  )
}
