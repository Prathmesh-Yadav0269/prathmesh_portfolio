import React from 'react'
import { motion } from 'framer-motion'

export default function GlowCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6, borderColor: "rgba(139, 92, 246, 0.3)", boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(139, 92, 246, 0.05)" }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`relative rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-md transition-colors duration-500 overflow-hidden group ${className}`}
    >
      {/* Background hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-transparent group-hover:from-blue-500/5 group-hover:via-purple-500/5 transition-all duration-550 pointer-events-none" />
      {children}
    </motion.div>
  )
}
