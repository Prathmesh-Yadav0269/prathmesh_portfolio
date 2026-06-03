import React, { useState, useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import SkillNetwork from '../components/sections/SkillNetwork'
import ProjectsIntro from '../components/sections/ProjectsIntro'
import ProjectChapter from '../components/sections/ProjectChapter'
import Achievements from '../components/sections/Achievements'
import Contact from '../components/sections/Contact'
import { projects as localProjects } from '../data/projects'
import { fetchProjects } from '../utils/api'

export default function Home() {
  const [projectsList, setProjectsList] = useState(localProjects)

  useEffect(() => {
    let active = true
    async function loadBackendData() {
      try {
        const data = await fetchProjects()
        if (active && Array.isArray(data) && data.length > 0) {
          // Map backend response properties back to support chapterNumber / tech fallback
          const mappedData = data.map((item, idx) => ({
            ...item,
            id: item.slug,
            chapterNumber: `0${idx + 1}`,
            subtitle: item.category,
            tech: item.technologies
          }))
          setProjectsList(mappedData)
        }
      } catch {
        // Fallback already loaded, do nothing
      }
    }
    loadBackendData()
    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <Hero />
      <About />
      <SkillNetwork />
      <ProjectsIntro />
      {projectsList.map((proj) => (
        <ProjectChapter
          key={proj.slug || proj.id}
          slug={proj.slug}
          chapterNumber={proj.chapterNumber}
          title={proj.title}
          subtitle={proj.subtitle || proj.category}
          problem={proj.problem}
          solution={proj.solution}
          tech={proj.tech || proj.technologies}
          features={proj.features}
          learnings={proj.learnings}
          github={proj.github}
        />
      ))}
      <Achievements />
      <Contact />
    </>
  )
}
