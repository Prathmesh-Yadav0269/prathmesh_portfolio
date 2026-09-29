import React from 'react'
import { motion } from 'framer-motion'

export default function GlowCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -3 }}
      className={`relative rounded-2xl border border-[var(--surface-card-border)] bg-[var(--surface-card)] transition-colors duration-300 overflow-hidden group shadow-[var(--shadow-card)] ${className}`}
    >
      {/* Subtle border highlight on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[var(--accent-primary)]/30 pointer-events-none transition-colors duration-300" />
      
      {/* Restrained subtle corner glow on hover */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--accent-soft)] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {children}
    </motion.div>
  )
}
