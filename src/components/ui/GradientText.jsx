import React from 'react'

export default function GradientText({ children, className = "" }) {
  return (
    <span className={`bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-text ${className}`}>
      {children}
    </span>
  )
}
