import React from 'react'
import Reveal from '../ui/Reveal'
import AnimatedButton from '../ui/AnimatedButton'

export default function FeaturedProject({ project }) {
  if (!project) return null

  return (
    <div className="relative rounded-3xl border border-[var(--border-primary)] bg-[var(--surface-card)] shadow-[var(--shadow-card)] p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden mb-12 transition-all duration-300">
      {/* Background ambient depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent-soft)] rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* Left Column: Project Identity & Value Proposition */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          <div className="space-y-2">
            <Reveal delay={0.1} y={8}>
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono font-bold tracking-wider text-[var(--accent-primary)] uppercase bg-[var(--accent-soft)] border border-[var(--badge-border)] px-3 py-1 rounded-md inline-block">
                  PROJECT 01 • LATEST PROJECT
                </span>
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  MERN + AI Pipeline
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.15} y={10}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                {project.title}
              </h3>
            </Reveal>

            <Reveal delay={0.18} y={10}>
              <span className="text-sm sm:text-base font-mono font-semibold text-[var(--accent-secondary)] block">
                {project.category}
              </span>
            </Reveal>
          </div>

          <Reveal delay={0.22} y={10}>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
              InsightIQ turns raw CSV and Excel datasets into structured, cleaner, and easier-to-understand data with automated analysis and AI-assisted insights.
            </p>
          </Reveal>

          {/* Value / Application Areas */}
          <Reveal delay={0.26} y={10} className="space-y-3 pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
              Primary Use Cases
            </span>
            <div className="space-y-2.5 text-xs text-[var(--text-secondary)]">
              <div className="p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border-subtle)]">
                <div className="font-mono font-bold text-[var(--text-primary)] mb-0.5">Business Analysis</div>
                <p className="text-[11px] sm:text-xs leading-relaxed text-[var(--text-secondary)]">
                  Helps examine operational datasets, identify patterns, data-quality issues, and useful findings.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border-subtle)]">
                <div className="font-mono font-bold text-[var(--text-primary)] mb-0.5">Research & Data Exploration</div>
                <p className="text-[11px] sm:text-xs leading-relaxed text-[var(--text-secondary)]">
                  Helps researchers inspect, profile, and understand tabular datasets before deeper analysis.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[var(--surface-hover)] border border-[var(--border-subtle)]">
                <div className="font-mono font-bold text-[var(--text-primary)] mb-0.5">Model-Ready Data Preparation</div>
                <p className="text-[11px] sm:text-xs leading-relaxed text-[var(--text-secondary)]">
                  Helps inspect and clean tabular datasets before using them in downstream analytical workflows.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Tech Stack Pills */}
          <Reveal delay={0.3} className="space-y-2">
            <div className="flex flex-wrap gap-1.5">
              {(project.technologies || project.tech || []).map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* CTA Action */}
          <Reveal delay={0.34} className="pt-2">
            <AnimatedButton
              href={`/projects/${project.slug}`}
              variant="glow"
              className="px-6 py-3 text-sm font-semibold flex items-center gap-2 group"
            >
              <span>View Case Study</span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">→</span>
            </AnimatedButton>
          </Reveal>
        </div>

        {/* Right Column: Compact Data Transformation Architecture Visual */}
        <div className="lg:col-span-6 w-full">
          <Reveal delay={0.25} y={12}>
            <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-hover)] p-6 shadow-sm">
              <div className="border-b border-[var(--border-subtle)] pb-3 mb-5 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-primary)]">
                  Transformation Architecture
                </span>
                <span className="text-[10px] font-mono text-[var(--text-muted)]">
                  Data Pipeline Flow
                </span>
              </div>

              {/* Stage 1: Raw Data */}
              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Input Source
                  </span>
                  <span className="text-[10px] font-mono text-[var(--accent-primary)] font-bold">RAW DATA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)] font-semibold">
                  <span className="px-2 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)]">CSV</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)]">Excel (.xlsx)</span>
                  <span className="text-[11px] text-[var(--text-muted)] font-normal">Unsanitized tabular records</span>
                </div>
              </div>

              {/* Connecting arrow 1 */}
              <div className="flex justify-center py-2 text-[var(--text-muted)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Stage 2: Processing Engine */}
              <div className="p-4 rounded-xl border border-[var(--accent-primary)]/30 bg-[var(--accent-soft)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold">
                    InsightIQ Processing Engine
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)]">ETL + Gemma 4</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
                    <span className="block text-[var(--text-primary)] font-semibold">Cleaning & Sanitization</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Null imputation & types</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
                    <span className="block text-[var(--text-primary)] font-semibold">Profiling & Scoring</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Distribution & quality metrics</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
                    <span className="block text-[var(--text-primary)] font-semibold">AI Root Cause Engine</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Operational pattern analysis</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
                    <span className="block text-[var(--text-primary)] font-semibold">Persistent MongoDB</span>
                    <span className="text-[10px] text-[var(--text-muted)]">Schema-indexed analysis</span>
                  </div>
                </div>
              </div>

              {/* Connecting arrow 2 */}
              <div className="flex justify-center py-2 text-[var(--text-muted)]">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Stage 3: Usable Output */}
              <div className="p-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Actionable Deliverables
                  </span>
                  <span className="text-[10px] font-mono text-emerald-500 font-bold">STRUCTURED OUTPUT</span>
                </div>
                <div className="flex flex-wrap gap-1.5 text-xs text-[var(--text-secondary)]">
                  <span className="px-2 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[11px] font-mono">Clean Data Export</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[11px] font-mono">Quality Scorecard</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[11px] font-mono">Recommendations</span>
                  <span className="px-2 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[11px] font-mono">Tabular NL Chat</span>
                </div>
              </div>

            </div>
          </Reveal>
        </div>

      </div>
    </div>
  )
}
