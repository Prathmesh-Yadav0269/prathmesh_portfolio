import React from 'react'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import GlowCard from '../ui/GlowCard'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'

export default function Achievements() {
  const certifications = [
    { name: "Generative AI Virtual Internship", issuer: "AICTE EduSkills" },
    { name: "Programming in Java", issuer: "NPTEL" },
    { name: "Database Management System", issuer: "NPTEL" },
    { name: "Data Science for Beginners", issuer: "Board Infinity" }
  ]

  return (
    <section id="achievements" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      <BackgroundGlow color="purple" size="large" className="bottom-10 left-10" />

      <SectionIdentityHeader 
        label="MILESTONES"
        title="Achievements & Certifications"
        description="A list of my verified academic milestones, project awards, and professional training certifications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Achievements Column */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-3 block">
            Competitions
          </h3>
          <Reveal delay={0.15}>
            <GlowCard className="p-8 hover:border-purple-500/25 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent blur-xl" />
              <div className="space-y-4">
                <span className="text-sm font-mono text-purple-400 font-semibold uppercase tracking-wider block">
                  Award Winner
                </span>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  Runner-Up
                </h4>
                <p className="text-lg text-neutral-250 font-semibold">
                  Sustainathon 2026
                </p>
                <p className="text-xs text-neutral-500 font-mono">
                  Recognized for innovative sustainability-driven system solutions.
                </p>
              </div>
            </GlowCard>
          </Reveal>
        </div>

        {/* Certifications Column */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-3 block">
            Professional Qualifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <Reveal key={idx} delay={0.1 + idx * 0.05} y={15}>
                <GlowCard className="p-6 hover:border-blue-500/20 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-neutral-400 font-mono">
                      {cert.issuer}
                    </p>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
