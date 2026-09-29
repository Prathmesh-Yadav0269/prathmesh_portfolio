import React from 'react'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'

export default function ProjectsIntro() {
  return (
    <section id="projects" className="pt-16 pb-6 md:pt-24 md:pb-8 px-4 sm:px-6 md:px-12 max-w-[1200px] w-full mx-auto relative text-center">
      <BackgroundGlow color="blue" size="large" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 w-full flex flex-col items-center">
        <SectionIdentityHeader 
          label="PORTFOLIO"
          title="Selected Projects"
          description="A showcase of recent full-stack applications, data analytics platforms, and AI warning systems."
          align="center"
        />
        
        <Reveal delay={0.3} y={8} className="pt-4">
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
              Featured Case Studies
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[var(--accent-primary)] to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
