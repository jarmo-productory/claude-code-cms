import { type ReactNode, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  /** For dark backgrounds (hero, footer) - inverts color scheme */
  onDark?: boolean
}

type ButtonAsButton = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: 'button'
    href?: never
  }

type ButtonAsAnchor = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: 'a'
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsAnchor

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-5 text-base',
  lg: 'h-14 px-8 text-base',
}

function getVariantClasses(variant: ButtonVariant, onDark: boolean): string {
  if (onDark) {
    // For dark backgrounds (hero, colored sections)
    switch (variant) {
      case 'primary':
        return 'bg-white text-brand-dark hover:bg-white/90 shadow-lg'
      case 'secondary':
        return 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-md shadow-brand-primary/25'
      case 'outline':
        return 'border-2 border-white text-white hover:bg-white hover:text-brand-dark'
      case 'ghost':
        return 'text-white hover:bg-white/10'
    }
  } else {
    // For light backgrounds
    switch (variant) {
      case 'primary':
        return 'bg-brand-primary text-white hover:bg-brand-primary/90 shadow-md shadow-brand-primary/25'
      case 'secondary':
        return 'bg-brand-dark text-white hover:bg-brand-dark/90 shadow-md'
      case 'outline':
        return 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white'
      case 'ghost':
        return 'text-brand-primary hover:bg-brand-primary/10'
    }
  }
}

export function Button({
  variant = 'primary',
  size = 'lg',
  onDark = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold cursor-pointer active:scale-[0.98] transition-all duration-150'
  const variantClasses = getVariantClasses(variant, onDark)
  const sizeClass = sizeClasses[size]
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClass} ${className}`.trim()

  if (props.as === 'a') {
    const { as: _as, ...anchorProps } = props as ButtonAsAnchor
    void _as
    return (
      <a className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { as: _asButton, ...buttonProps } = props as ButtonAsButton
  void _asButton
  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  )
}
