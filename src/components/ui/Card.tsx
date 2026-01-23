import { type ReactNode, type HTMLAttributes } from 'react'

export type CardVariant = 'default' | 'flat' | 'frosted' | 'highlight' | 'dark' | 'glow'
export type CardPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl'
export type CardRadius = 'md' | 'lg' | 'xl' | '2xl' | '3xl'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children: ReactNode
  /** Visual style of the card */
  variant?: CardVariant
  /** Internal padding */
  padding?: CardPadding
  /** Corner radius */
  radius?: CardRadius
  /** Add hover lift and shadow effect */
  hoverable?: boolean
  /** Full width and height */
  fullHeight?: boolean
  className?: string
}

const paddingClasses: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
  xl: 'p-8 lg:p-12',
}

const radiusClasses: Record<CardRadius, string> = {
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl', // Our standard default
  '2xl': 'rounded-2xl', // Alias for xl to be safe
  '3xl': 'rounded-3xl', // For large containers like Clients
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'xl',
  hoverable = false,
  fullHeight = false,
  className = '',
  ...props
}: CardProps) {
  const baseClasses = 'transition-all duration-300'
  const padClass = paddingClasses[padding]
  const radClass = radiusClasses[radius]
  const heightClass = fullHeight ? 'h-full flex flex-col' : ''

  let variantClasses: string
  switch (variant) {
    case 'default': // Standard content card (Blog, Services)
      variantClasses = 'bg-white border border-slate-100 shadow-sm'
      break
    case 'flat': // Secondary content, no shadow
      variantClasses = 'bg-slate-50 border border-slate-100'
      break
    case 'frosted': // For overlay on images/gradients (Stats, Hero)
      variantClasses =
        'bg-white/70 backdrop-blur-xl border border-white/50 shadow-lg supports-[backdrop-filter]:bg-white/60'
      break
    case 'dark': // Dark mode card (e.g. Footer area or dark section)
      variantClasses = 'bg-brand-dark/95 border border-white/10 text-white shadow-xl'
      break
    case 'highlight': // Featured items
      variantClasses =
        'bg-gradient-to-br from-white to-brand-surface border border-brand-primary/20 shadow-lg shadow-brand-primary/5'
      break
    case 'glow': // Glowing border card for dark gradient backgrounds (Premium SaaS look)
      // Combines: subtle base border + bright top inset highlight + deep shadow
      variantClasses =
        'bg-brand-dark/95 text-white border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_25px_50px_-12px_rgba(0,0,0,0.5)]'
      break
  }

  const hoverClasses = hoverable
    ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/10 hover:border-brand-primary/20'
    : ''

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${padClass} ${radClass} ${heightClass} ${hoverClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

/**
 * Specialized frosted glass card for client logos and similar sections.
 * @deprecated Use <Card variant="frosted" radius="3xl" padding="xl" /> instead.
 */
export function FrostedCard({
  children,
  className = '',
  ...props
}: Omit<CardProps, 'variant' | 'padding' | 'radius'>) {
  return (
    <Card variant="frosted" radius="3xl" padding="xl" className={className} {...props}>
      {children}
    </Card>
  )
}
