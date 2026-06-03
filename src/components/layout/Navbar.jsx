import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.25, rootMargin: '-20% 0px -50% 0px' }
    )

    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact']
    
    // Only observe sections if we are on the homepage
    if (location.pathname === '/') {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    } else {
      // Set active section inside timeout to avoid rendering cascade in effect body
      const timer = setTimeout(() => {
        setActiveSection('')
      }, 0)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        clearTimeout(timer)
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [location.pathname])

  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/#about' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Achievements', href: '/#achievements' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-12 flex items-center justify-between h-[72px] ${
      scrolled 
        ? 'bg-black/60 backdrop-blur-xl border-b border-white/5' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <a 
        href="/#home" 
        className="text-base md:text-xl font-bold tracking-tight text-white relative group shrink-0"
      >
        <span>Prathmesh</span>
        <span className="text-blue-400">.dev</span>
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300" />
      </a>
      
      <div className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-2 relative overflow-x-auto max-w-full no-scrollbar py-1">
        {navItems.map((item, idx) => {
          const anchor = item.href.split('#')[1]
          const isItemActive = location.pathname === '/' && activeSection === anchor
          return (
            <a
              key={item.label}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`text-[10px] sm:text-xs md:text-sm font-medium px-2 py-1.5 md:px-3 rounded-full relative transition-colors duration-350 whitespace-nowrap ${
                isItemActive ? 'text-white' : 'text-neutral-400 hover:text-neutral-250'
              }`}
            >
              <span className="relative z-10">{item.label}</span>
              {isItemActive && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-0 bg-neutral-900 border border-white/5 shadow-inner rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {hoveredIndex === idx && !isItemActive && (
                <motion.span
                  layoutId="navHover"
                  className="absolute inset-0 bg-neutral-900/40 rounded-full border border-neutral-900/50 z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
