import React from 'react'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import GlowCard from '../ui/GlowCard'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'
import AboutPortrait from '../ui/AboutPortrait'

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 max-w-[1200px] mx-auto relative overflow-hidden">
      <BackgroundGlow color="blue" size="large" className="top-1/4 left-1/3" />
      
      <SectionIdentityHeader 
        label="ABOUT"
        title="What Drives Me"
        description="A glimpse into my mindset, interests, and approach to building software."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center mt-8 md:mt-12">
        {/* Left Column: text card + three cards */}
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          <Reveal delay={0.25} y={20}>
            <GlowCard className="p-8 md:p-10 hover:border-neutral-800/80 transition-all duration-300">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  Building with purpose
                </h3>
                <div className="space-y-4 text-neutral-300 text-base md:text-lg leading-relaxed font-sans font-medium">
                  <p>
                    I enjoy turning ideas into working products.
                  </p>
                  <p>
                    Whether it's a team collaboration platform, an AI-powered healthcare solution, or a data analytics dashboard, I like building software that solves real problems and creates real value.
                  </p>
                  <p>
                    For me, development is not just about writing code. It's about understanding a problem, designing a solution, and continuously improving it.
                  </p>
                </div>
              </div>
            </GlowCard>
          </Reveal>

          {/* Three small cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Problem Solving",
                desc: "I enjoy breaking complex problems into simple and practical solutions.",
                icon: (
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Full Stack Development",
                desc: "Building complete applications from frontend experiences to backend systems.",
                icon: (
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                title: "Continuous Learning",
                desc: "Always exploring new technologies, tools, and development practices.",
                icon: (
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <GlowCard 
                key={idx} 
                delay={0.1 * idx}
                className="p-6 hover:border-neutral-800/80 transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex flex-col gap-4 text-left h-full">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/5 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-2 flex-grow">
                    <h4 className="text-sm md:text-base font-bold text-white tracking-wide font-mono leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed font-sans font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>

        {/* Right Column: portrait */}
        <div className="flex justify-center order-1 lg:order-2">
          <Reveal delay={0.3} y={20}>
            <AboutPortrait />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
