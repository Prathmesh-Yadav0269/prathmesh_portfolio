import React from 'react'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import BackgroundGlow from '../ui/BackgroundGlow'
import FeaturedProject from './FeaturedProject'
import SecondaryProjectCard from './SecondaryProjectCard'
import Reveal from '../ui/Reveal'

export default function ProjectsSection({ projects = [] }) {
  if (!projects || projects.length === 0) return null

  // Latest project: InsightIQ
  const latestProject = projects.find((p) => p.slug === 'insightiq') || projects[0]
  // Remaining major projects
  const otherProjects = projects.filter((p) => p.slug !== latestProject.slug)

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-[1200px] w-full mx-auto relative">
      <BackgroundGlow color="blue" size="large" className="top-1/3 left-10" />
      <BackgroundGlow color="purple" size="large" className="bottom-1/4 right-10" />

      <SectionIdentityHeader 
        label="PROJECTS"
        title="Selected Work"
        description="A selection of projects where I worked across full-stack development, data, analytics and AI."
      />

      {/* Latest Project Block: InsightIQ */}
      <Reveal delay={0.15} y={14}>
        <FeaturedProject project={latestProject} />
      </Reveal>

      {/* Other Major Projects Grid: Opsync, DairyMitra, MigraineGuardian */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {otherProjects.map((project, idx) => (
          <Reveal key={project.slug || idx} delay={0.2 + idx * 0.08} y={14}>
            <SecondaryProjectCard project={project} index={idx} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
