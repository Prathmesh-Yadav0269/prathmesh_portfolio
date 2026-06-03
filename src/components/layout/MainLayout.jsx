import React from 'react'
import Navbar from './Navbar'
import useLenis from '../../hooks/useLenis'
import MouseGlow from '../ui/MouseGlow'

export default function MainLayout({ children }) {
  // Activate Lenis smooth scroll
  useLenis()

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/35 selection:text-white relative overflow-hidden">
      {/* Trailing cursor backdrop glow */}
      <MouseGlow />

      {/* Cinematic subtle background grid pattern */}
      <div className="fixed inset-0 grid-overlay pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="relative z-10 pt-20">
        {children}
      </main>
    </div>
  )
}
