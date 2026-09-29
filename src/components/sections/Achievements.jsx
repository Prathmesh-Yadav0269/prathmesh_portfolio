import React from 'react'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import GlowCard from '../ui/GlowCard'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'
import { Award, CheckCircle2 } from 'lucide-react'

export default function Achievements() {
  const certifications = [
    { 
      name: "Generative AI Virtual Internship", 
      issuer: "AICTE EduSkills",
      category: "Artificial Intelligence"
    },
    { 
      name: "Programming in Java", 
      issuer: "NPTEL",
      category: "Programming Foundation"
    },
    { 
      name: "Database Management System", 
      issuer: "NPTEL",
      category: "Core Computer Science"
    },
    { 
      name: "Data Science for Beginners", 
      issuer: "Board Infinity",
      category: "Data & Analytics"
    }
  ]

  return (
    <section id="achievements" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1200px] w-full mx-auto relative" aria-label="Achievements and Certifications">
      <BackgroundGlow color="purple" size="large" className="bottom-10 left-10" />

      <SectionIdentityHeader 
        label="MILESTONES"
        title="Achievements & Certifications"
        description="Verified competition awards and technical coursework certifications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Achievement Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              Achievement
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Verified</span>
          </div>

          <Reveal delay={0.15} y={10}>
            <GlowCard className="p-6 sm:p-7 relative overflow-hidden h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-500" aria-hidden="true" />
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-[var(--accent-secondary)] font-semibold uppercase tracking-wider block">
                    Competition Milestone
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] leading-snug">
                    Runner-Up — Sustainathon 2026
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal pt-1">
                    Recognized for sustainability-driven system architecture and technical execution.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
                <span>Award Verification</span>
                <span className="text-[var(--text-secondary)] font-medium">2026</span>
              </div>
            </GlowCard>
          </Reveal>
        </div>

        {/* Certifications Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              Certifications
            </span>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">Coursework & Internships</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {certifications.map((cert, idx) => (
              <Reveal key={cert.name} delay={0.1 + idx * 0.05} y={10}>
                <div className="p-4 sm:p-5 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] hover:border-[var(--border-secondary)] hover:-translate-y-0.5 transition-all duration-200 shadow-[var(--shadow-card)] h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono text-[var(--accent-primary)] font-medium uppercase tracking-wider">
                        {cert.category}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
                    </div>

                    <h4 className="text-sm font-semibold text-[var(--text-primary)] tracking-wide leading-snug">
                      {cert.name}
                    </h4>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)]">Certified</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
