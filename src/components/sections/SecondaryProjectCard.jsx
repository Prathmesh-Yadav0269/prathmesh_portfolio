import React from 'react'
import GlowCard from '../ui/GlowCard'
import AnimatedButton from '../ui/AnimatedButton'

// Distinct technical visual for Opsync
function OpsyncVisual() {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-hover)] p-3.5 space-y-2 font-mono text-[11px]">
      <div className="flex items-center justify-between text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-1.5">
        <span className="text-[10px] font-bold uppercase text-[var(--accent-primary)]">System Architecture</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--surface-card)]">WebSocket + RBAC</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
          <div className="font-semibold text-[var(--text-primary)]">Real-Time Messaging</div>
          <div className="text-[var(--text-muted)] text-[9px]">Sub-50ms Socket sync</div>
        </div>
        <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
          <div className="font-semibold text-[var(--text-primary)]">Role Authorization</div>
          <div className="text-[var(--text-muted)] text-[9px]">JWT middleware guards</div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)] text-[10px]">
        <span className="text-[var(--text-secondary)]">Task Workflow Board</span>
        <div className="flex items-center gap-1 text-[9px] text-[var(--text-muted)]">
          <span className="px-1 rounded bg-blue-500/10 text-blue-400">Todo</span>
          <span>→</span>
          <span className="px-1 rounded bg-amber-500/10 text-amber-400">Active</span>
          <span>→</span>
          <span className="px-1 rounded bg-emerald-500/10 text-emerald-400">Done</span>
        </div>
      </div>
    </div>
  )
}

// Distinct technical visual for DairyMitra
function DairyMitraVisual() {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-hover)] p-3.5 space-y-2 font-mono text-[11px]">
      <div className="flex items-center justify-between text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-1.5">
        <span className="text-[10px] font-bold uppercase text-emerald-500">Analytics Engine</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--surface-card)]">Pandas + Scikit</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
          <div className="font-semibold text-[var(--text-primary)]">Production Yield</div>
          <div className="text-[var(--text-muted)] text-[9px]">Time-series tracking</div>
        </div>
        <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
          <div className="font-semibold text-[var(--text-primary)]">Operating Margin</div>
          <div className="text-[var(--text-muted)] text-[9px]">Feed cost vs. Revenue</div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)] text-[10px]">
        <span className="text-[var(--text-secondary)]">Multilingual Interface</span>
        <span className="text-[9px] text-[var(--accent-primary)] font-semibold">Localized Streamlit</span>
      </div>
    </div>
  )
}

// Distinct technical visual for MigraineGuardian
function MigraineGuardianVisual() {
  return (
    <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-hover)] p-3.5 space-y-2 font-mono text-[11px]">
      <div className="flex items-center justify-between text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-1.5">
        <span className="text-[10px] font-bold uppercase text-purple-400">Risk Model</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[var(--surface-card)]">Logistic Regression</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
          <div className="font-semibold text-[var(--text-primary)]">Trigger Signals</div>
          <div className="text-[var(--text-muted)] text-[9px]">Sleep • Stress • Weather</div>
        </div>
        <div className="p-2 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)]">
          <div className="font-semibold text-[var(--text-primary)]">Attack Probability</div>
          <div className="text-[var(--text-muted)] text-[9px]">Calculated risk score</div>
        </div>
      </div>
      <div className="flex items-center justify-between px-2 py-1.5 rounded bg-[var(--surface-card)] border border-[var(--border-subtle)] text-[10px]">
        <span className="text-[var(--text-secondary)]">Risk Trajectory</span>
        <span className="text-[9px] text-amber-400 font-semibold">Trend Simulation</span>
      </div>
    </div>
  )
}

export default function SecondaryProjectCard({ project, index }) {
  if (!project) return null

  // Render project-specific visual
  const renderProjectVisual = () => {
    switch (project.slug) {
      case 'opsync':
        return <OpsyncVisual />
      case 'dairymitra':
        return <DairyMitraVisual />
      case 'migraineguardian':
        return <MigraineGuardianVisual />
      default:
        return null
    }
  }

  return (
    <GlowCard className="p-6 sm:p-7 h-full flex flex-col justify-between">
      <div className="space-y-4">
        
        {/* Header */}
        <div className="space-y-1.5 border-b border-[var(--border-subtle)] pb-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-[var(--accent-primary)] uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs font-mono text-[var(--text-muted)] font-semibold">
              PROJECT 0{index + 2}
            </span>
          </div>
          <h4 className="text-2xl font-bold tracking-tight text-[var(--text-primary)]">
            {project.title}
          </h4>
        </div>

        {/* Concise Description (2-3 sentences max) */}
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
          {project.summary}
        </p>

        {/* Project Specific Architecture Visual */}
        {renderProjectVisual()}

        {/* Engineering Focus Items (2-4 items max) */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] block font-semibold">
              Engineering Focus
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[var(--text-secondary)]">
              {project.features.slice(0, 4).map((f, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[var(--accent-primary)] shrink-0" />
                  <span className="truncate">{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        <div className="space-y-1.5 pt-1">
          <div className="flex flex-wrap gap-1.5">
            {(project.technologies || project.tech || []).map((t, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Action CTA */}
      <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center gap-3">
        <AnimatedButton
          href={`/projects/${project.slug}`}
          variant="primary"
          className="w-full py-2.5 text-xs font-semibold text-center"
        >
          View Case Study
        </AnimatedButton>
        {project.github && (
          <AnimatedButton
            href={project.github}
            variant="secondary"
            className="w-full py-2.5 text-xs font-semibold text-center"
            target="_blank"
            rel="noreferrer"
          >
            Repository
          </AnimatedButton>
        )}
      </div>
    </GlowCard>
  )
}
