import React from 'react'
import { skills } from '../../data/skills'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import GlowCard from '../ui/GlowCard'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'

export default function SkillNetwork() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <BackgroundGlow color="indigo" size="large" className="top-1/2 right-10" />
      
      <SectionIdentityHeader 
        label="CAPABILITIES"
        title="Skill Network"
        description="A structured landscape of technologies, tools, and paradigms that I leverage to build solutions."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {skills.map((categoryObj, index) => (
          <GlowCard
            key={index}
            delay={index * 0.15}
            className="p-8 hover:border-blue-500/20"
          >
            <h3 className="text-lg font-bold text-white mb-6 tracking-wide border-b border-neutral-900 pb-3 flex items-center justify-between">
              <span>{categoryObj.category}</span>
              <span className="w-2 h-2 rounded-full bg-blue-500/80 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            </h3>
            
            {/* Connected node pill structure */}
            <div className="flex flex-wrap gap-2.5 relative">
              {categoryObj.items.map((skill, i) => (
                <Reveal key={i} delay={0.05 + i * 0.03} y={10}>
                  <div
                    className="group/pill px-4 py-2.5 rounded-xl text-xs font-mono bg-neutral-950/60 border border-neutral-900 text-neutral-400 hover:text-white hover:border-blue-400/30 hover:bg-blue-500/5 transition-all duration-300 cursor-default flex items-center space-x-2 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover/pill:bg-blue-400 group-hover/pill:shadow-[0_0_6px_rgba(96,165,250,0.8)] transition-all duration-300" />
                    <span>{skill}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  )
}
