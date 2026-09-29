import React from 'react'
import prathmeshImg from '../../assets/prathmesh.jpg'

export default function AboutPortrait() {
  return (
    <div className="relative flex flex-col items-center justify-center select-none w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] mx-auto">
      {/* Subtle ambient depth behind card */}
      <div className="absolute w-[85%] h-[85%] rounded-full bg-[var(--accent-soft)] blur-3xl -z-10 pointer-events-none" />

      {/* Main Clean Portrait Frame */}
      <div className="w-full aspect-[4/5] rounded-2xl p-2 bg-[var(--surface-card)] border border-[var(--border-primary)] shadow-[var(--shadow-card)] transition-colors duration-300">
        <div className="w-full h-full rounded-xl overflow-hidden bg-[var(--surface-hover)]">
          <img 
            src={prathmeshImg} 
            alt="Prathmesh J. Yadav" 
            className="w-full h-full object-cover object-[center_18%] grayscale-[8%] hover:grayscale-0 transition-all duration-500" 
          />
        </div>
      </div>

      {/* Grounded Professional Caption */}
      <div className="mt-3.5 text-center space-y-1">
        <div className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
          Prathmesh J. Yadav
        </div>
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <span>B.Tech CS</span>
          <span className="w-1 h-1 rounded-full bg-[var(--border-primary)]" />
          <span>Full Stack Developer</span>
        </div>
      </div>
    </div>
  )
}
