import React from 'react'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'

export default function ProjectsIntro() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-black text-center">
      <BackgroundGlow color="blue" size="large" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <SectionIdentityHeader 
          label="PORTFOLIO"
          title="Selected Projects"
          description="A showcase of my recent full-stack applications, data analytics platforms, and AI warning systems."
          align="center"
        />
        
        <Reveal delay={0.6} className="pt-12">
          <div className="flex flex-col items-center justify-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 animate-pulse">
              Scroll to explore
            </span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
