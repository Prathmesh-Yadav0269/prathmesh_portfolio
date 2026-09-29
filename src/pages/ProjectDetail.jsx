import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { projects as localProjects } from '../data/projects'
import { fetchProjectBySlug } from '../utils/api'
import Reveal from '../components/ui/Reveal'
import GlowCard from '../components/ui/GlowCard'
import BackgroundGlow from '../components/ui/BackgroundGlow'
import AnimatedButton from '../components/ui/AnimatedButton'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [project, setProject] = useState(() => localProjects.find((p) => p.slug === slug))
  const [prevSlug, setPrevSlug] = useState(slug)

  // Adjust state inside render when slug changes (standard React recommendation)
  if (slug !== prevSlug) {
    setPrevSlug(slug)
    setProject(localProjects.find((p) => p.slug === slug))
  }

  // Scroll to top on page load/change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  useEffect(() => {
    let active = true
    async function loadProjectDetails() {
      try {
        const data = await fetchProjectBySlug(slug)
        if (active && data) {
          const local = localProjects.find((p) => p.slug === slug) || {}
          setProject({
            ...local,
            ...data,
            tech: data.technologies || data.tech || local.tech || []
          })
        }
      } catch {
        // Fallback already loaded from local data
      }
    }
    loadProjectDetails()
    return () => {
      active = false
    }
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-[65vh] flex flex-col items-center justify-center text-[var(--text-primary)] px-6 py-24">
        <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] mb-2 font-semibold">404 Error</span>
        <h2 className="text-2xl sm:text-3xl font-bold font-mono text-[var(--text-primary)] mb-3">Project Not Found</h2>
        <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-md text-center">
          The project case study you are looking for does not exist or may have been moved.
        </p>
        <AnimatedButton onClick={() => navigate('/#projects')} variant="primary" aria-label="Return to Projects">
          Return to Projects
        </AnimatedButton>
      </div>
    )
  }

  // Project navigation (Previous & Next) without ranking bias
  const projectIndex = localProjects.findIndex((p) => p.slug === slug)
  const prevProjectIndex = (projectIndex - 1 + localProjects.length) % localProjects.length
  const nextProjectIndex = (projectIndex + 1) % localProjects.length
  const prevProject = localProjects[prevProjectIndex]
  const nextProject = localProjects[nextProjectIndex]

  // Project architecture steps based on verified stack
  const getArchitectureSteps = () => {
    switch (project.slug) {
      case 'insightiq':
        return [
          { name: 'React Frontend', desc: 'Dataset upload, interactive analytics views, and chat interface' },
          { name: 'Node / Express API', desc: 'Data ingestion pipeline, sanitization, and orchestration' },
          { name: 'MongoDB Database', desc: 'Persistent dataset profiles, classification records, and analysis' },
          { name: 'Gemma 4 AI Layer', desc: 'Root cause analysis, recommendations, and natural language tabular chat' }
        ]
      case 'opsync':
        return [
          { name: 'React Frontend', desc: 'Interactive task boards, team chat, and real-time state sync' },
          { name: 'Node / Express API', desc: 'REST endpoints, JWT role authorization, and WebSocket server' },
          { name: 'MongoDB Database', desc: 'Structured task documents, channel records, and file metadata' }
        ]
      case 'dairymitra':
        return [
          { name: 'Streamlit UI', desc: 'Interactive multilingual dashboard and visualization controls' },
          { name: 'Pandas Engine', desc: 'Production aggregations, feed calculations, and data profiling' },
          { name: 'Scikit-Learn Model', desc: 'Yield estimation and seasonal regression analysis' }
        ]
      case 'migraineguardian':
        return [
          { name: 'Input & Triggers', desc: 'Lifestyle, environmental, and sleep factor collection' },
          { name: 'Logistic Regression', desc: 'Multi-variable episode risk probability engine' },
          { name: 'Trajectory Engine', desc: 'Risk trend visualizations and mitigation advisory output' }
        ]
      default:
        return []
    }
  }

  // InsightIQ 5-Phase Technical Flow
  const insightIqPhases = [
    { phase: "01", name: "INGEST", desc: "CSV and Excel file parsing with schema detection" },
    { phase: "02", name: "PREPARE", desc: "Missing value imputation, column profiling, and classification" },
    { phase: "03", name: "EVALUATE", desc: "Data quality scoring and persistent MongoDB storage" },
    { phase: "04", name: "UNDERSTAND", desc: "AI-assisted root-cause analysis and operational recommendations" },
    { phase: "05", name: "INTERACT", desc: "Natural-language tabular queries powered by Gemma 4" }
  ]

  const steps = getArchitectureSteps()

  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden text-[var(--text-primary)]">
      {/* Background Ambient Depth */}
      <BackgroundGlow color="blue" size="large" className="top-10 left-10" />
      <BackgroundGlow color="purple" size="large" className="bottom-20 right-10" />

      <div className="max-w-[1040px] mx-auto space-y-12 sm:space-y-16 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <Reveal delay={0.1} y={-6}>
          <Link 
            to="/#projects" 
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
            aria-label="Back to Homepage Projects"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </Link>
        </Reveal>

        {/* 1. OVERVIEW: Project Hero Header */}
        <div className="space-y-5">
          <div className="space-y-2">
            <Reveal delay={0.12} y={8}>
              <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[var(--accent-primary)] uppercase bg-[var(--accent-soft)] border border-[var(--badge-border)] px-3.5 py-1.5 rounded-md select-none inline-block">
                {project.category}
              </span>
            </Reveal>

            <Reveal delay={0.18} y={10}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                {project.title}
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.22} y={10}>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
              {project.summary}
            </p>
          </Reveal>

          {/* Technology Chips */}
          <Reveal delay={0.28} className="flex flex-wrap gap-2 pt-1">
            {(project.technologies || project.tech || []).map((tech, idx) => (
              <span 
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-medium"
              >
                {tech}
              </span>
            ))}
          </Reveal>
        </div>

        {/* InsightIQ Specific Sections: WHY I BUILT IT & WHO IT CAN HELP */}
        {project.slug === 'insightiq' && (
          <div className="space-y-12">
            
            {/* 2. WHY I BUILT IT */}
            <Reveal delay={0.1} y={10}>
              <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-6 sm:p-8 space-y-3.5 shadow-[var(--shadow-card)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-primary)] font-bold block">
                  Project Origin
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                  Why I Built It
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-3xl">
                  Working with raw CSV or Excel data often requires several steps before the data becomes useful — cleaning it, understanding columns, checking quality and interpreting patterns.
                </p>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed max-w-3xl">
                  InsightIQ brings these steps into one workflow and adds AI-assisted analysis so users can move from raw data toward useful findings without manually inspecting every part of the dataset.
                </p>
              </div>
            </Reveal>

            {/* 3. WHO IT CAN HELP */}
            <div className="space-y-5">
              <Reveal delay={0.1} y={10}>
                <div className="space-y-1 border-b border-[var(--border-subtle)] pb-2.5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Target Application
                  </h3>
                  <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    Who It Can Help
                  </h4>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Reveal delay={0.12} y={10}>
                  <div className="rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-5 h-full space-y-2 shadow-[var(--shadow-card)]">
                    <span className="text-xs font-mono text-[var(--accent-primary)] font-bold uppercase block">
                      01 • Businesses
                    </span>
                    <h5 className="text-base font-bold text-[var(--text-primary)]">Operational Analysis</h5>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Explore operational datasets and identify quality issues, recurring patterns, and actionable findings for business decisions.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.16} y={10}>
                  <div className="rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-5 h-full space-y-2 shadow-[var(--shadow-card)]">
                    <span className="text-xs font-mono text-[var(--accent-secondary)] font-bold uppercase block">
                      02 • Researchers
                    </span>
                    <h5 className="text-base font-bold text-[var(--text-primary)]">Data Exploration</h5>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Inspect, profile, and understand tabular dataset structures and missing values prior to deeper statistical modeling.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.2} y={10}>
                  <div className="rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-5 h-full space-y-2 shadow-[var(--shadow-card)]">
                    <span className="text-xs font-mono text-emerald-500 font-bold uppercase block">
                      03 • Model Practitioners
                    </span>
                    <h5 className="text-base font-bold text-[var(--text-primary)]">Data Preparation</h5>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      Evaluate and sanitize tabular datasets before passing clean matrices into downstream analytical or ML workflows.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* 4. HOW IT WORKS (5-Phase Compressed Flow) */}
            <div className="space-y-5">
              <Reveal delay={0.1} y={10}>
                <div className="space-y-1 border-b border-[var(--border-subtle)] pb-2.5">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                    Technical Execution
                  </h3>
                  <h4 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                    How It Works
                  </h4>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                {insightIqPhases.map((item, idx) => (
                  <Reveal key={item.phase} delay={0.1 + idx * 0.04} y={10}>
                    <div className="p-4 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] h-full flex flex-col justify-between shadow-[var(--shadow-card)]">
                      <div className="space-y-2">
                        <span className="font-mono text-xs text-[var(--accent-primary)] font-bold bg-[var(--accent-soft)] px-2 py-0.5 rounded inline-block">
                          {item.phase}
                        </span>
                        <h5 className="text-sm font-bold text-[var(--text-primary)] font-mono">
                          {item.name}
                        </h5>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* Standard Problem & Solution for Non-InsightIQ Projects */}
        {project.slug !== 'insightiq' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <Reveal delay={0.3} y={12}>
              <GlowCard className="p-6 sm:p-8 h-full">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span>The Engineering Problem</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight">
                    Operational Challenge
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </GlowCard>
            </Reveal>

            <Reveal delay={0.35} y={12}>
              <GlowCard className="p-6 sm:p-8 h-full">
                <div className="space-y-3.5">
                  <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>The Solution</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] tracking-tight">
                    Engineered Approach
                  </h3>
                  <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </GlowCard>
            </Reveal>
          </div>
        )}

        {/* 5. CORE CAPABILITIES */}
        <div className="space-y-5 pt-2">
          <Reveal delay={0.1} y={10}>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2.5 block font-semibold">
              Core Capabilities
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(project.features || []).map((feature, idx) => (
              <Reveal key={idx} delay={0.1 + idx * 0.03} y={10}>
                <GlowCard className="p-5 h-full flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-md bg-[var(--surface-hover)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--accent-primary)] shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] tracking-wide font-mono">
                      {feature}
                    </h4>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* 6. TECHNICAL ARCHITECTURE */}
        {steps.length > 0 && (
          <div className="space-y-5 pt-2">
            <Reveal delay={0.1} y={10}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2.5 block font-semibold">
                Technical Architecture
              </h3>
            </Reveal>
            
            <div className={`grid grid-cols-1 ${steps.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'} gap-4 items-stretch relative`}>
              {steps.map((step, idx) => (
                <Reveal key={idx} delay={0.1 + idx * 0.05} y={10} className="w-full">
                  <div className="p-5 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] flex flex-col items-center text-center space-y-2 h-full shadow-[var(--shadow-card)]">
                    <div className="w-7 h-7 rounded-full bg-[var(--surface-hover)] border border-[var(--border-subtle)] flex items-center justify-center text-xs font-mono text-[var(--accent-primary)] font-bold">
                      0{idx + 1}
                    </div>
                    <h4 className="text-sm font-bold text-[var(--text-primary)] font-mono">{step.name}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* 7. LEARNINGS */}
        {project.learnings && (
          <div className="space-y-5 pt-2">
            <Reveal delay={0.1} y={10}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-2.5 block font-semibold">
                Technical Challenges & Learnings
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(Array.isArray(project.learnings) ? project.learnings : [project.learnings]).map((learning, idx) => (
                <Reveal key={idx} delay={0.1 + idx * 0.04} y={10}>
                  <div className="p-5 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] flex items-start gap-3 shadow-[var(--shadow-card)] h-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] mt-1.5 shrink-0" />
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {learning}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Repository Action (if verified repo available) */}
        {project.github && (
          <Reveal delay={0.2} className="flex justify-center pt-4">
            <AnimatedButton
              href={project.github}
              target="_blank"
              rel="noreferrer"
              variant="glow"
              className="px-8 py-3"
              aria-label="View Project Code on GitHub"
            >
              View Repository on GitHub
            </AnimatedButton>
          </Reveal>
        )}

        {/* Two-Way Project Navigation (Previous Project / Next Project) */}
        <div className="pt-12 border-t border-[var(--border-subtle)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
              Explore Another Project
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Previous Project */}
            <Link 
              to={`/projects/${prevProject.slug}`}
              className="p-5 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--accent-primary)] bg-[var(--surface-card)] flex items-center justify-between transition-all duration-200 shadow-[var(--shadow-card)] text-left group"
              aria-label={`Previous Project: ${prevProject.title}`}
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                  ← Previous Project
                </span>
                <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-200">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Next Project */}
            <Link 
              to={`/projects/${nextProject.slug}`}
              className="p-5 rounded-2xl border border-[var(--border-primary)] hover:border-[var(--accent-primary)] bg-[var(--surface-card)] flex items-center justify-between transition-all duration-200 shadow-[var(--shadow-card)] text-right group"
              aria-label={`Next Project: ${nextProject.title}`}
            >
              <div className="space-y-1 ml-auto">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                  Next Project →
                </span>
                <span className="text-base sm:text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-200">
                  {nextProject.title}
                </span>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
