'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInViewProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function FadeInView({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}: FadeInViewProps) {
  const directionOffset = {
    up: { y: 30, x: 0 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    none: { x: 0, y: 0 }
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
