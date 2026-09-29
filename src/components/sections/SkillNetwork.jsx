import React, { useState } from 'react'
import { skillCategories } from '../../data/skills'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'

export default function SkillNetwork() {
  // Default to React (applied) so panel has immediate rich content
  const defaultSkill = skillCategories[1]?.skills[0] || skillCategories[0]?.skills[0]
  const [activeSkill, setActiveSkill] = useState(defaultSkill)

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1200px] w-full mx-auto relative">
      <BackgroundGlow color="indigo" size="large" className="top-1/2 right-10" />
      
      <SectionIdentityHeader 
        label="SKILLS"
        title="Technical Toolkit"
        description="Core programming languages, frameworks, systems knowledge, and engineering tools."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-start">
        
        {/* Left 8 cols: Categorized Skill Blocks */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((group, idx) => {
            const isLastOdd = idx === skillCategories.length - 1 && skillCategories.length % 2 !== 0
            
            return (
              <Reveal 
                key={group.category} 
                delay={0.05 * idx} 
                y={12}
                className={isLastOdd ? 'sm:col-span-2' : ''}
              >
                <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-5 sm:p-6 h-full flex flex-col justify-between shadow-[var(--shadow-card)]">
                  <div>
                    <div className="border-b border-[var(--border-subtle)] pb-3 mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-[var(--text-primary)] tracking-wide">
                          {group.category}
                        </h3>
                        <p className="text-[11px] text-[var(--text-muted)] mt-0.5">
                          {group.description}
                        </p>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] opacity-70" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => {
                        const isSelected = activeSkill?.name === skill.name
                        const isApplied = skill.status === 'APPLIED'
                        const isBoth = skill.status === 'STUDIED + APPLIED'

                        return (
                          <button
                            key={skill.name}
                            type="button"
                            tabIndex={0}
                            onMouseEnter={() => setActiveSkill(skill)}
                            onFocus={() => setActiveSkill(skill)}
                            onClick={() => setActiveSkill(skill)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                setActiveSkill(skill)
                              }
                            }}
                            aria-label={`${skill.name} (${skill.category} - ${skill.status})`}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer select-none text-left flex items-center gap-1.5 border ${
                              isSelected
                                ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)] text-[var(--accent-primary)] font-semibold shadow-sm'
                                : 'bg-[var(--surface-hover)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-primary)]'
                            }`}
                          >
                            <span>{skill.name}</span>
                            {isApplied && (
                              <span 
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                  isSelected ? 'bg-[var(--accent-primary)]' : 'bg-[var(--accent-primary)]/70'
                                }`} 
                              />
                            )}
                            {isBoth && (
                              <span 
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                  isSelected ? 'bg-amber-400' : 'bg-amber-500/70'
                                }`} 
                              />
                            )}
                            {!isApplied && !isBoth && (
                              <span 
                                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                  isSelected ? 'bg-[var(--text-secondary)]' : 'bg-[var(--text-muted)]'
                                }`} 
                              />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Right 4 cols: Structured Skill Context Panel (stacks underneath on tablet/mobile) */}
        <div className="lg:col-span-4 w-full sticky top-24">
          <Reveal delay={0.2} y={12}>
            <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-5 sm:p-6 shadow-[var(--shadow-card)] min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="border-b border-[var(--border-subtle)] pb-3 mb-4 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                    Skill Context
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">
                    Architecture & Usage
                  </span>
                </div>

                {activeSkill ? (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    {/* Skill Identity & Status Badge */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-mono">
                          {activeSkill.name}
                        </span>
                        <span className={`text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded border ${
                          activeSkill.status === 'APPLIED' 
                            ? 'bg-[var(--accent-soft)] border-[var(--badge-border)] text-[var(--accent-primary)]'
                            : activeSkill.status === 'STUDIED + APPLIED' 
                            ? 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400' 
                            : 'bg-[var(--surface-hover)] border-[var(--border-subtle)] text-[var(--text-secondary)]'
                        }`}>
                          {activeSkill.status}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[var(--text-muted)] block">
                        {activeSkill.category}
                      </span>
                    </div>

                    {/* Section 1: WHAT I STUDIED (if present) */}
                    {activeSkill.whatIStudied && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
                          What I Studied
                        </span>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {activeSkill.whatIStudied}
                        </p>
                      </div>
                    )}

                    {/* Section 2: HOW I USE IT (if present) */}
                    {activeSkill.howIUseIt && (
                      <div className="space-y-1 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
                          How I Use It
                        </span>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {activeSkill.howIUseIt}
                        </p>
                      </div>
                    )}

                    {/* Foundation Note when no project chips */}
                    {activeSkill.note && (!activeSkill.projects || activeSkill.projects.length === 0) && (
                      <div className="p-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-hover)] flex items-start gap-2.5 pt-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)] mt-1.5 shrink-0" />
                        <p className="text-[11px] font-mono text-[var(--text-secondary)] leading-relaxed">
                          {activeSkill.note}
                        </p>
                      </div>
                    )}

                    {/* Section 3: RELATED WORK (only if projects exist) */}
                    {activeSkill.projects && activeSkill.projects.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
                          Related Work
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {activeSkill.projects.map((projName) => (
                            <a
                              key={projName}
                              href="#projects"
                              className="px-2.5 py-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-hover)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)] transition-colors flex items-center gap-1.5 text-xs font-mono text-[var(--text-primary)] group"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" />
                              <span>{projName}</span>
                              <span className="text-[10px] text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]">↗</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="py-8 text-center space-y-2">
                    <div className="w-8 h-8 mx-auto rounded-full bg-[var(--surface-hover)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    </div>
                    <h4 className="text-xs font-bold text-[var(--text-primary)] font-mono">
                      Hover or Tap a Skill
                    </h4>
                    <p className="text-[11px] text-[var(--text-muted)] max-w-[200px] mx-auto leading-relaxed">
                      Select any skill to view studied concepts and project applications.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Subtle Status Legend */}
              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--text-muted)]">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" /> Applied
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Both
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-muted)]" /> Studied
                </span>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
