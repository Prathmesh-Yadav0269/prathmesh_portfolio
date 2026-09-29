import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroConstellation() {
  const [selectedNodeId, setSelectedNodeId] = useState(null)
  const [hoveredNodeId, setHoveredNodeId] = useState(null)
  const containerRef = useRef(null)

  const nodes = [
    {
      id: 'frontend',
      name: 'Frontend',
      color: '#3b82f6',
      angle: 0,
      skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-5 h-5 text-blue-500 fill-none" aria-hidden="true">
          <circle cx="50" cy="50" r="8" fill="currentColor" />
          <ellipse rx="38" ry="14" cx="50" cy="50" stroke="currentColor" strokeWidth="3" transform="rotate(0 50 50)" />
          <ellipse rx="38" ry="14" cx="50" cy="50" stroke="currentColor" strokeWidth="3" transform="rotate(60 50 50)" />
          <ellipse rx="38" ry="14" cx="50" cy="50" stroke="currentColor" strokeWidth="3" transform="rotate(120 50 50)" />
        </svg>
      )
    },
    {
      id: 'database',
      name: 'Database',
      color: '#10b981',
      angle: 90,
      skills: ['MongoDB', 'DBMS concepts', 'Database-backed application design'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-5 h-5 text-emerald-500 fill-none" aria-hidden="true">
          <path d="M50 15 C50 15 30 40 30 60 C30 75 40 85 50 85 C60 85 70 75 70 60 C70 40 50 15 50 15 Z" stroke="currentColor" strokeWidth="4" />
          <path d="M50 15 L50 85" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 'aiml',
      name: 'AI/ML',
      color: '#f59e0b',
      angle: 180,
      skills: ['Python', 'Machine Learning', 'Data analysis / AI-assisted workflows'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-5 h-5 text-amber-500 fill-none" aria-hidden="true">
          <path d="M50 15 C35 15 35 25 35 25 L35 35 L50 35 L50 40 L30 40 C20 40 20 50 20 60 C20 70 30 70 30 70 L35 70 L35 65 C35 65 35 55 45 55 L55 55 C65 55 65 45 65 45 L65 35 C65 35 65 15 50 15 Z" fill="#3b82f6" opacity="0.85" />
          <path d="M50 85 C65 85 65 75 65 75 L65 65 L50 65 L50 60 L70 60 C80 60 80 50 80 40 C80 30 70 30 70 30 L65 30 L65 35 C65 35 65 45 55 45 L45 45 C35 45 35 55 35 55 L35 65 C35 65 35 85 50 85 Z" fill="#f59e0b" />
        </svg>
      )
    },
    {
      id: 'backend',
      name: 'Backend',
      color: '#8b5cf6',
      angle: 270,
      skills: ['Node.js', 'Express.js', 'REST APIs'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-5 h-5 text-purple-500 fill-none" aria-hidden="true">
          <path d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z" stroke="currentColor" strokeWidth="4" />
          <text x="50" y="55" fill="currentColor" fontSize="16" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="monospace">API</text>
        </svg>
      )
    }
  ]

  const selectedNode = nodes.find(n => n.id === selectedNodeId)
  const isPaused = Boolean(selectedNodeId)

  // Handle click outside and escape key to close details and resume orbit
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setSelectedNodeId(null)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedNodeId(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center select-none w-[320px] h-[320px] sm:w-[360px] sm:h-[360px] md:w-[380px] md:h-[380px]"
      aria-label="Engineering constellation visualization"
    >
      <style>{`
        @keyframes heroConstellationOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroConstellationCounter {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .hero-constellation-spin {
          animation: heroConstellationOrbit 42s linear infinite;
        }
        .hero-constellation-counter {
          animation: heroConstellationCounter 42s linear infinite;
        }
        .hero-constellation-paused,
        .hero-constellation-paused .hero-constellation-counter {
          animation-play-state: paused !important;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-constellation-spin,
          .hero-constellation-counter {
            animation: none !important;
          }
        }
      `}</style>

      {/* Stationary Background SVG: Orbit Track & Subtle Crosshairs */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        {/* Ambient Orbit Track (radius 125px on 360x360) */}
        <circle
          cx="50%"
          cy="50%"
          r="125"
          fill="none"
          stroke="var(--border-subtle)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Stationary Subtle Center Crosshairs */}
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="var(--border-subtle)" strokeWidth="1" strokeDasharray="3 4" opacity="0.4" />
      </svg>

      {/* Rotating Orbital Ring (42s full cycle, counter-rotated nodes remain upright) */}
      <div 
        className={`absolute inset-0 w-full h-full flex items-center justify-center hero-constellation-spin ${
          isPaused ? 'hero-constellation-paused' : ''
        }`}
      >
        {nodes.map((node) => {
          const isSelected = selectedNodeId === node.id
          const isHovered = hoveredNodeId === node.id

          // Position on circular orbit of radius R = 125px
          // 0deg = top, 90deg = right, 180deg = bottom, 270deg = left
          const rad = (node.angle * Math.PI) / 180
          const radius = 125
          const x = Math.sin(rad) * radius
          const y = -Math.cos(rad) * radius

          return (
            <div
              key={node.id}
              className="absolute z-20"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              {/* Counter-rotation container: cancels out the parent spin so icons/labels stay upright */}
              <div className="hero-constellation-counter">
                <button
                  type="button"
                  tabIndex={0}
                  onClick={() => setSelectedNodeId(isSelected ? null : node.id)}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onFocus={() => setHoveredNodeId(node.id)}
                  onBlur={() => setHoveredNodeId(null)}
                  aria-label={`${node.name} domain: ${node.skills.join(', ')}`}
                  aria-expanded={isSelected}
                  className={`relative flex flex-col items-center justify-center p-1.5 rounded-2xl cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                    isSelected
                      ? 'scale-105'
                      : isHovered
                      ? 'scale-102'
                      : ''
                  }`}
                >
                  {/* Node Circular Token */}
                  <div
                    className={`w-12 h-12 rounded-full border flex items-center justify-center bg-[var(--surface-card)] transition-all duration-200 shadow-[var(--shadow-card)] ${
                      isSelected
                        ? 'border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/30 bg-[var(--accent-soft)]'
                        : isHovered
                        ? 'border-[var(--accent-primary)]/80 shadow-md'
                        : 'border-[var(--border-primary)]'
                    }`}
                  >
                    <span className="relative z-10">{node.icon}</span>
                  </div>

                  {/* Node Label (Always Upright) */}
                  <span
                    className={`font-mono text-[11px] mt-1 font-medium transition-colors duration-200 whitespace-nowrap ${
                      isSelected
                        ? 'text-[var(--accent-primary)] font-semibold'
                        : isHovered
                        ? 'text-[var(--text-primary)] font-medium'
                        : 'text-[var(--text-secondary)]'
                    }`}
                  >
                    {node.name}
                  </span>
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Stationary Center Area: Idle Hub OR Selected Node Compact Info Card */}
      <div className="absolute z-30 pointer-events-none flex items-center justify-center">
        <AnimatePresence mode="wait">
          {selectedNode ? (
            <motion.div
              key={selectedNode.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="w-[210px] sm:w-[230px] p-3 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-primary)] shadow-[var(--shadow-card)] flex flex-col gap-2 text-left pointer-events-auto"
            >
              {/* Card Header with Node Color, Title, and Close Button */}
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: selectedNode.color }} />
                  <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                    {selectedNode.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedNodeId(null)}
                  className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] px-1 py-0.5 rounded transition-colors"
                  aria-label="Close details and resume orbit"
                >
                  ✕
                </button>
              </div>

              {/* Technologies List */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1">
                  {selectedNode.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--surface-hover)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Stationary Center Point when idle */
            <div
              key="center-core"
              className="w-9 h-9 rounded-full border border-[var(--border-primary)] bg-[var(--surface-card)] flex items-center justify-center shadow-sm pointer-events-none"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
