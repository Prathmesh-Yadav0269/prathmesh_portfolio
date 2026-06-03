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
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto py-24 border-t border-neutral-900/40 relative overflow-hidden">
      <BackgroundGlow color={isEven ? "purple" : "blue"} size="large" className="top-1/3 right-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Problem & Solution Details */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Chapter indicator */}
          <Reveal delay={0.1} y={15}>
            <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-neutral-500">
              <span className="text-blue-400 font-bold">Project {chapterNumber}</span>
              <span>/</span>
              <span>Case Study</span>
            </div>
          </Reveal>

          <div className="space-y-2">
            <Reveal delay={0.15} y={15}>
              <span className="text-sm font-mono tracking-wider text-purple-400 uppercase block">
                {subtitle}
              </span>
            </Reveal>
            <Reveal delay={0.2} y={20}>
              <h3 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
                {title}
              </h3>
            </Reveal>
          </div>
          
          {/* Problem */}
          <Reveal delay={0.25} y={20} className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-200 font-bold">
              The Problem
            </h4>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              {problem}
            </p>
          </Reveal>

          {/* Solution */}
          <Reveal delay={0.3} y={20} className="space-y-2">
            <h4 className="text-sm font-mono uppercase tracking-widest text-neutral-200 font-bold">
              The Solution
            </h4>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              {solution}
            </p>
          </Reveal>

          {/* Tech Stack */}
          <Reveal delay={0.35} className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-neutral-950 border border-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-700 transition-all duration-300 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Side: Features & Key Learnings */}
        <div className="lg:col-span-5 relative">
          <Reveal delay={0.4} y={30}>
            <GlowCard className="p-8 space-y-6 hover:border-neutral-800 transition-all duration-500 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-500/10 to-transparent blur-2xl" />
              
              {/* Features list */}
              <div className="space-y-3 relative z-10">
                <span className="text-neutral-550 text-xs font-mono uppercase tracking-widest block text-neutral-500">
                  Key Features
                </span>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2.5 text-sm text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learnings */}
              {learnings && (
                <div className="space-y-2 relative z-10 border-t border-neutral-900 pt-4">
                  <span className="text-neutral-550 text-xs font-mono uppercase tracking-widest block text-neutral-500">
                    Key Learnings
                  </span>
                  <p className="text-xs md:text-sm leading-relaxed text-neutral-400">
                    {Array.isArray(learnings) ? learnings.join(', ') : learnings}
                  </p>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 pt-2 w-full">
                <AnimatedButton
                  onClick={() => navigate(`/projects/${slug}`)}
                  variant="primary"
                  className="w-full py-3 !rounded-xl text-center text-xs font-semibold"
                >
                  View Case Study
                </AnimatedButton>
                {github && (
                  <AnimatedButton
                    href={github}
                    variant="secondary"
                    className="w-full py-3 !rounded-xl text-center text-xs font-semibold"
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
