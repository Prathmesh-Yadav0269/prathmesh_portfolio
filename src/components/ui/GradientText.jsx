import React from 'react'

export default function GradientText({ children, className = "" }) {
  return (
    <span className={`bg-gradient-to-r from-[var(--accent-primary)] via-blue-500 to-[var(--accent-secondary)] bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}
