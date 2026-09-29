import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

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
    
    if (location.pathname === '/') {
      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    } else {
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
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 px-4 sm:px-6 md:px-12 flex items-center justify-between h-16 md:h-18 ${
          scrolled || mobileMenuOpen
            ? 'bg-[var(--nav-bg)] backdrop-blur-xl border-b border-[var(--nav-border)] shadow-sm' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Brand Logo */}
        <a 
          href="/#home" 
          className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-[var(--text-primary)] relative group shrink-0 flex items-center"
          aria-label="Prathmesh J. Yadav Home"
        >
          <span>Prathmesh J</span>
          <span className="text-[var(--accent-primary)] font-bold">.</span>
          <span>&nbsp;Yadav</span>
        </a>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2 py-1">
          {navItems.map((item) => {
            const anchor = item.href.split('#')[1]
            const isItemActive = location.pathname === '/' && activeSection === anchor
            return (
              <a
                key={item.label}
                href={item.href}
                className={`text-xs lg:text-sm font-medium px-3 py-1.5 rounded-lg relative transition-colors duration-200 ${
                  isItemActive 
                    ? 'text-[var(--text-primary)] font-semibold' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isItemActive && (
                  <motion.span
                    layoutId="navActiveIndicator"
                    className="absolute inset-0 bg-[var(--surface-hover)] border border-[var(--border-subtle)] rounded-lg z-0"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Right Action: Theme Toggle + Mobile Menu Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="w-9 h-9 rounded-lg border border-[var(--border-primary)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-primary)] flex items-center justify-center transition-all duration-200 cursor-pointer"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-blue-600 transition-transform duration-300 hover:-rotate-12" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-9 h-9 rounded-lg border border-[var(--border-primary)] bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center justify-center transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden w-full bg-[var(--nav-bg)] backdrop-blur-2xl border-b border-[var(--nav-border)] px-4 py-4 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const anchor = item.href.split('#')[1]
                const isItemActive = location.pathname === '/' && activeSection === anchor
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isItemActive
                        ? 'bg-[var(--accent-soft)] text-[var(--accent-primary)] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
