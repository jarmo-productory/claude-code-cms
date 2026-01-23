import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text above the input */
  label?: string
  /** Helper text below the input */
  helperText?: string
  /** Error message (also sets error state) */
  error?: string
  /** Size variant */
  size?: 'sm' | 'md' | 'lg'
  /** Left icon or element */
  leftElement?: ReactNode
  /** Right icon or element */
  rightElement?: ReactNode
  /** Full width */
  fullWidth?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'md',
      leftElement,
      rightElement,
      fullWidth = false,
      className = '',
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId()
    const inputId = id || generatedId
    const hasError = Boolean(error)

    // Consistent spacing system: 36px / 44px / 52px
    const sizeClasses = {
      sm: 'h-9 text-sm px-3', // 36px height
      md: 'h-11 text-base px-4', // 44px height
      lg: 'h-[52px] text-lg px-5', // 52px height
    }

    const baseInputClasses = `
      w-full rounded-xl border bg-white
      font-sans transition-all duration-200
      placeholder:text-slate-400
      focus:outline-none focus:ring-2 focus:ring-offset-0
      disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
    `

    const stateClasses = hasError
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
      : 'border-slate-200 hover:border-slate-300 focus:border-brand-primary focus:ring-brand-primary/20'

    const inputClasses = `
      ${baseInputClasses}
      ${sizeClasses[size]}
      ${stateClasses}
      ${leftElement ? 'pl-11' : ''}
      ${rightElement ? 'pr-11' : ''}
      ${className}
    `.trim()

    return (
      <div className={`${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-brand-dark mb-1.5">
            {label}
          </label>
        )}

        <div className="relative">
          {leftElement && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              {leftElement}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={inputClasses}
            aria-invalid={hasError}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />

          {rightElement && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              {rightElement}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p
            id={error ? `${inputId}-error` : `${inputId}-helper`}
            className={`mt-1.5 text-sm ${error ? 'text-red-500' : 'text-slate-500'}`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
