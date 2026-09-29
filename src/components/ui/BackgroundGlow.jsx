import React from 'react'

export default function BackgroundGlow({ color = 'blue', size = 'medium', className = "" }) {
  const colors = {
    blue: 'bg-blue-500/5 dark:bg-blue-500/10',
    purple: 'bg-indigo-500/4 dark:bg-purple-500/8',
    pink: 'bg-pink-500/4 dark:bg-pink-500/8',
    indigo: 'bg-indigo-500/5 dark:bg-indigo-500/10'
  }

  const sizes = {
    small: 'w-40 h-40',
    medium: 'w-64 h-64',
    large: 'w-96 h-96',
    huge: 'w-[450px] h-[450px]'
  }

  return (
    <div 
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${colors[color] || colors.blue} ${sizes[size] || sizes.medium} ${className}`} 
    />
  )
}
