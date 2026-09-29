import React, { useState, useEffect } from 'react'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import SkillNetwork from '../components/sections/SkillNetwork'
import ProjectsSection from '../components/sections/ProjectsSection'
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
          // Merge backend response with local verified data to preserve workflows & architectures
          const mappedData = data.map((item, idx) => {
            const local = localProjects.find((p) => p.slug === item.slug) || {}
            return {
              ...local,
              ...item,
              id: item.slug,
              chapterNumber: `0${idx + 1}`,
              subtitle: item.category || local.subtitle,
              tech: item.technologies || local.tech || []
            }
          })
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
      <ProjectsSection projects={projectsList} />
      <Achievements />
      <Contact />
    </>
  )
}
