import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedButton({ 
  children, 
  href, 
  onClick, 
  variant = 'primary', 
  className = "", 
  ...props 
}) {
  const baseStyle = "px-6 py-3 rounded-xl font-medium text-sm relative inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
  
  const variants = {
    primary: "bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] hover:opacity-90 shadow-[var(--shadow-soft)] border border-transparent",
    secondary: "border border-[var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] hover:bg-[var(--surface-hover)] hover:border-[var(--border-primary)] shadow-sm",
    glow: "bg-[var(--accent-primary)] text-white hover:brightness-110 shadow-sm border border-transparent"
  }

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15, ease: 'easeOut' },
    ...props
  }

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
        {...motionProps}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.a>
    )
  }

  return (
    <motion.button 
      type="button"
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
      {...motionProps}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
