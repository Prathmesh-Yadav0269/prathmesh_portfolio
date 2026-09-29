import React from 'react'
import Navbar from './Navbar'
import useLenis from '../../hooks/useLenis'
import MouseGlow from '../ui/MouseGlow'

export default function MainLayout({ children }) {
  // Activate Lenis smooth scroll
  useLenis()

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans relative overflow-x-hidden transition-colors duration-300">
      {/* Trailing cursor backdrop glow */}
      <MouseGlow />

      {/* Theme-aware background grid pattern */}
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  )
}
