import React from 'react'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'
import AboutPortrait from '../ui/AboutPortrait'
import { Layers, Cpu, Network } from 'lucide-react'

export default function About() {
  const capabilities = [
    {
      num: "01",
      title: "Full Stack",
      desc: "Building complete applications from responsive interfaces to backend systems and data layers.",
      icon: <Layers className="w-4 h-4 text-blue-500" aria-hidden="true" />
    },
    {
      num: "02",
      title: "Data & AI",
      desc: "Working with data-driven applications, analytics, and machine-learning based workflows.",
      icon: <Cpu className="w-4 h-4 text-purple-500" aria-hidden="true" />
    },
    {
      num: "03",
      title: "Systems Thinking",
      desc: "Understanding how components, APIs, databases, and application layers connect to form complete systems.",
      icon: <Network className="w-4 h-4 text-emerald-500" aria-hidden="true" />
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1200px] w-full mx-auto relative">
      <BackgroundGlow color="blue" size="large" className="top-1/4 left-1/3" />
      
      <SectionIdentityHeader 
        label="ABOUT"
        title="How I Build"
        description="My approach to software engineering, problem decomposition, and systems development."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center mt-6">
        {/* Left Column: Narrative Card + 3 Capability Cards */}
        <div className="order-2 lg:order-1 flex flex-col gap-5">
          {/* Main Narrative Card */}
          <Reveal delay={0.15} y={15}>
            <div className="rounded-2xl border border-[var(--border-primary)] bg-[var(--surface-card)] p-6 sm:p-8 md:p-9 shadow-[var(--shadow-card)]">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
                  From problem to working system
                </h3>
                <div className="space-y-3.5 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    I like taking an idea, understanding the actual problem behind it, and turning it into something people can use.
                  </p>
                  <p>
                    My projects have taken me across full-stack development, data analytics, and AI, which has pushed me to think beyond individual features and understand how the complete system fits together.
                  </p>
                  <p>
                    For me, building software means connecting the interface, backend, data, and application logic into a system that solves a real problem.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Three Capability Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {capabilities.map((item, idx) => (
              <Reveal key={item.num} delay={0.2 + 0.08 * idx} y={12}>
                <div className="h-full p-4 sm:p-5 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-card)] hover:border-[var(--border-secondary)] hover:-translate-y-0.5 transition-all duration-200 shadow-[var(--shadow-card)] flex flex-col justify-between text-left">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-[var(--surface-hover)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <span className="text-[10px] font-mono text-[var(--text-muted)] font-semibold">
                        {item.num}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Column: Refined Portrait */}
        <div className="flex justify-center order-1 lg:order-2">
          <Reveal delay={0.2} y={15}>
            <AboutPortrait />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
