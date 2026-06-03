import React from 'react'

export default function BackgroundGlow({ color = 'blue', size = 'medium', variant = 'standard', className = "" }) {
  const colors = {
    blue: 'bg-blue-500/10',
    purple: 'bg-purple-500/10',
    pink: 'bg-pink-500/10',
    indigo: 'bg-indigo-500/10'
  }

  const sizes = {
    small: 'w-48 h-48',
    medium: 'w-80 h-80',
    large: 'w-[500px] h-[500px]',
    huge: 'w-[700px] h-[700px]'
  }

  const animationClass = variant === 'alt' ? 'animate-float-slow-alt' : 'animate-float-slow'

  return (
    <div className={`absolute rounded-full blur-3xl pointer-events-none ${colors[color]} ${sizes[size]} ${animationClass} ${className}`} />
  )
}
