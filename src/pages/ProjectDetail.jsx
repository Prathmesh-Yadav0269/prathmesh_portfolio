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
          setProject({
            ...data,
            tech: data.technologies || data.tech
          })
        }
      } catch {
        // Silent fallback
      }
    }
    loadProjectDetails()
    return () => {
      active = false
    }
  }, [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
        <h2 className="text-2xl font-bold font-mono text-red-500 mb-4">Project Not Found</h2>
        <AnimatedButton onClick={() => navigate('/#projects')} variant="primary" aria-label="Back to Projects">
          Back to Projects
        </AnimatedButton>
      </div>
    )
  }

  // Next project mapping
  const projectIndex = localProjects.findIndex((p) => p.slug === slug)
  const nextProjectIndex = (projectIndex !== -1 ? projectIndex + 1 : 0) % localProjects.length
  const nextProject = localProjects[nextProjectIndex]

  // Custom architecture steps based on slug
  const getArchitectureSteps = () => {
    switch (project.slug) {
      case 'opsync':
        return [
          { name: 'React Frontend', desc: 'Interactive UI & Real-Time Sync' },
          { name: 'Node/Express API', desc: 'REST Endpoints & WebSocket Server' },
          { name: 'MongoDB Database', desc: 'Secure & Structured Data Storage' }
        ]
      case 'dairymitra':
        return [
          { name: 'Python App', desc: 'Streamlit Execution Engine' },
          { name: 'Data Processing', desc: 'Pandas Aggregations & ML Inference' },
          { name: 'Analytics Dashboard', desc: 'Production & Financial Insights' }
        ]
      case 'migraineguardian':
        return [
          { name: 'User Inputs', desc: 'Lifestyle & Environmental Triggers' },
          { name: 'ML Model', desc: 'Logistic Regression Probability Engine' },
          { name: 'Risk Prediction', desc: 'Early Warnings & Trend Visualizations' }
        ]
      default:
        return []
    }
  }

  const steps = getArchitectureSteps()

  return (
    <div className="min-h-screen bg-black text-white py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <BackgroundGlow color="blue" size="large" className="top-10 left-10" />
      <BackgroundGlow color="purple" size="large" className="bottom-20 right-10" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Back Button */}
        <Reveal delay={0.1} y={-10}>
          <Link 
            to="/#projects" 
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-200"
            aria-label="Back to Homepage Projects"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Projects</span>
          </Link>
        </Reveal>

        {/* Hero Section / Header */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Reveal delay={0.15} y={15}>
              <span className="text-xs md:text-sm font-mono tracking-[0.2em] text-blue-400 uppercase bg-blue-900/10 border border-blue-500/15 px-4.5 py-1.5 rounded-full backdrop-blur-sm select-none inline-block">
                {project.category}
              </span>
            </Reveal>
            <Reveal delay={0.2} y={20}>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
                {project.title}
              </h1>
            </Reveal>
          </div>
          <Reveal delay={0.25} y={20}>
            <p className="text-neutral-400 text-lg md:text-xl font-sans leading-relaxed max-w-3xl">
              {project.summary}
            </p>
          </Reveal>

          {/* Tech stack pills */}
          <Reveal delay={0.3} className="flex flex-wrap gap-2 pt-2">
            {(project.technologies || project.tech || []).map((tech, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-neutral-950 border border-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </Reveal>
        </div>

        {/* Problem & Solution Double Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <Reveal delay={0.35} y={20}>
            <GlowCard className="p-8 h-full border-neutral-900/60 hover:border-neutral-800/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  The Problem
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-medium">
                  {project.problem}
                </p>
              </div>
            </GlowCard>
          </Reveal>

          <Reveal delay={0.4} y={20}>
            <GlowCard className="p-8 h-full border-neutral-900/60 hover:border-neutral-800/80 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  The Solution
                </h3>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed font-sans font-medium">
                  {project.solution}
                </p>
              </div>
            </GlowCard>
          </Reveal>
        </div>

        {/* Architecture Flow */}
        {steps.length > 0 && (
          <div className="space-y-8 pt-8">
            <Reveal delay={0.1} y={15}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-3 block">
                System Architecture
              </h3>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative">
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <Reveal delay={0.2 + idx * 0.1} y={20} className="w-full">
                    <div className="p-6 rounded-2xl border border-white/5 bg-neutral-950/40 backdrop-blur-md flex flex-col items-center text-center space-y-3 relative group hover:border-blue-500/20 transition-all duration-350 shadow-lg">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-xs font-mono text-blue-400 font-bold">
                        0{idx + 1}
                      </div>
                      <h4 className="text-base font-bold text-white font-mono">{step.name}</h4>
                      <p className="text-xs text-neutral-400 font-sans leading-relaxed">{step.desc}</p>
                    </div>
                  </Reveal>

                  {/* Connect arrow (only between columns on desktop) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 text-neutral-800 pointer-events-none justify-center"
                         style={{ left: `${(idx + 1) * 33.33 - 2}%`, width: '4%' }}
                    >
                      <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Feature Cards Grid */}
        <div className="space-y-8 pt-8">
          <Reveal delay={0.1} y={15}>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-3 block">
              Key Features
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {(project.features || []).map((feature, idx) => (
              <Reveal key={idx} delay={0.15 + idx * 0.05} y={15}>
                <GlowCard className="p-6 h-full flex flex-col justify-between border-neutral-900/60 hover:border-neutral-850/80 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-sm md:text-base font-bold text-white tracking-wide font-mono">
                      {feature}
                    </h4>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="space-y-8 pt-8">
          <Reveal delay={0.1} y={15}>
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-900 pb-3 block">
              Key Learnings & Takeaways
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(project.learnings || []).map((learning, idx) => (
              <Reveal key={idx} delay={0.15 + idx * 0.05} y={15}>
                <div className="p-6 rounded-2xl border border-white/5 bg-neutral-950/20 backdrop-blur-sm flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 shrink-0 shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans font-medium">
                    {learning}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Actions (GitHub if available) */}
        {project.github && (
          <Reveal delay={0.2} className="flex justify-center pt-8">
            <AnimatedButton
              href={project.github}
              target="_blank"
              rel="noreferrer"
              variant="glow"
              className="px-8 py-3.5 !rounded-xl"
              aria-label="View Project Code on GitHub"
            >
              View Repository on GitHub
            </AnimatedButton>
          </Reveal>
        )}

        {/* Next Project Navigation */}
        <div className="pt-16 border-t border-neutral-900/60 flex flex-col items-center">
          <Reveal delay={0.1} y={10}>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">
              Up Next
            </span>
          </Reveal>
          <Reveal delay={0.2} y={15} className="w-full max-w-lg">
            <Link 
              to={`/projects/${nextProject.slug}`}
              className="group w-full p-8 rounded-2xl border border-neutral-900 hover:border-neutral-800 bg-neutral-950/20 hover:bg-neutral-950/40 backdrop-blur-md flex items-center justify-between transition-all duration-350 shadow-md text-left"
              aria-label={`Navigate to Next Project Case Study: ${nextProject.title}`}
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block">
                  {nextProject.category}
                </span>
                <span className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors duration-300">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 group-hover:border-blue-500/25 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-blue-500/10 transition-all duration-300">
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </Reveal>
        </div>

      </div>
    </div>
  )
}
