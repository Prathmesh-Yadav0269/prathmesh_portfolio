import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedButton({ children, href, onClick, variant = 'primary', className = "", ...props }) {
  const baseStyle = "px-8 py-3.5 rounded-full font-semibold text-sm relative overflow-hidden inline-flex items-center justify-center cursor-pointer transition-colors duration-300"
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 shadow-md shadow-white/5",
    secondary: "border border-neutral-800 bg-neutral-950/40 text-white hover:bg-neutral-900/80 hover:border-neutral-700",
    glow: "bg-gradient-to-r from-blue-500 to-purple-600 text-white border border-blue-400/25"
  }

  const hoverVariants = {
    primary: { scale: 1.03, boxShadow: "0 6px 20px rgba(255, 255, 255, 0.15)" },
    secondary: { scale: 1.03, boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3)" },
    glow: { scale: 1.03, boxShadow: "0 0 25px rgba(139, 92, 246, 0.45)" }
  }

  const motionProps = {
    whileHover: hoverVariants[variant],
    whileTap: { scale: 0.97 },
    transition: { type: "spring", stiffness: 450, damping: 20 },
    ...props
  }

  if (href) {
    return (
      <motion.a 
        href={href} 
        className={`${baseStyle} ${variants[variant]} ${className}`}
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
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...motionProps}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  )
}
