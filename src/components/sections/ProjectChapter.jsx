import React from 'react'
import { useNavigate } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import GlowCard from '../ui/GlowCard'
import BackgroundGlow from '../ui/BackgroundGlow'
import AnimatedButton from '../ui/AnimatedButton'

export default function ProjectChapter({ chapterNumber, slug, title, subtitle, problem, solution, tech = [], features = [], learnings, github }) {
  const isEven = parseInt(chapterNumber) % 2 === 0
  const navigate = useNavigate()

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1200px] w-full mx-auto border-t border-[var(--border-subtle)] relative">
      <BackgroundGlow color={isEven ? "purple" : "blue"} size="large" className="top-1/3 right-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Side: Problem & Solution Details */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Chapter indicator */}
          <Reveal delay={0.1} y={10}>
            <div className="flex items-center space-x-2.5 text-xs font-mono uppercase tracking-wider text-[var(--text-muted)]">
              <span className="text-[var(--accent-primary)] font-semibold">Project {chapterNumber}</span>
              <span>/</span>
              <span>Case Study</span>
            </div>
          </Reveal>

          <div className="space-y-1.5">
            <Reveal delay={0.15} y={10}>
              <span className="text-xs sm:text-sm font-mono tracking-wide text-[var(--accent-secondary)] uppercase block font-semibold">
                {subtitle}
              </span>
            </Reveal>
            <Reveal delay={0.2} y={12}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
                {title}
              </h3>
            </Reveal>
          </div>
          
          {/* Problem */}
          <Reveal delay={0.25} y={12} className="space-y-1.5">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold">
              The Problem
            </h4>
            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
              {problem}
            </p>
          </Reveal>

          {/* Solution */}
          <Reveal delay={0.3} y={12} className="space-y-1.5">
            <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold">
              The Solution
            </h4>
            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
              {solution}
            </p>
          </Reveal>

          {/* Tech Stack */}
          <Reveal delay={0.35} className="space-y-2.5 pt-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] block">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[var(--text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Side: Features & Key Learnings */}
        <div className="lg:col-span-5 relative">
          <Reveal delay={0.3} y={16}>
            <GlowCard className="p-6 sm:p-7 space-y-6">
              {/* Features list */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider block text-[var(--text-muted)] font-semibold">
                  Key Features
                </span>
                <ul className="space-y-2.5">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              {learnings && (
                <div className="space-y-2 border-t border-[var(--border-subtle)] pt-4">
                  <span className="text-xs font-mono uppercase tracking-wider block text-[var(--text-muted)] font-semibold">
                    Key Learnings
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                    {Array.isArray(learnings) ? learnings.join(', ') : learnings}
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full">
                <AnimatedButton
                  onClick={() => navigate(`/projects/${slug}`)}
                  variant="primary"
                  className="w-full py-2.5 text-center text-xs font-semibold"
                >
                  View Case Study
                </AnimatedButton>
                {github && (
                  <AnimatedButton
                    href={github}
                    variant="secondary"
                    className="w-full py-2.5 text-center text-xs font-semibold"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Repository
                  </AnimatedButton>
                )}
              </div>
            </GlowCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
