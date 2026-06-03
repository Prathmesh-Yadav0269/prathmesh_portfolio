import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HeroConstellation() {
  const [hoveredNodeId, setHoveredNodeId] = useState(null)

  const nodes = [
    {
      id: 'frontend',
      name: 'Frontend',
      color: '#61dafb',
      bgGlow: 'rgba(97, 218, 251, 0.15)',
      borderColor: 'rgba(97, 218, 251, 0.3)',
      x: 200,
      y: 50,
      skills: ['React', 'JavaScript', 'HTML', 'CSS'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-7 h-7 text-[#61dafb] fill-none">
          <circle cx="50" cy="50" r="8" fill="#61dafb" />
          <ellipse rx="38" ry="14" cx="50" cy="50" stroke="#61dafb" strokeWidth="3" transform="rotate(0 50 50)" />
          <ellipse rx="38" ry="14" cx="50" cy="50" stroke="#61dafb" strokeWidth="3" transform="rotate(60 50 50)" />
          <ellipse rx="38" ry="14" cx="50" cy="50" stroke="#61dafb" strokeWidth="3" transform="rotate(120 50 50)" />
        </svg>
      ),
      labelOffset: { x: 0, y: -45 },
      wrapperClass: "absolute top-[75px] left-1/2 -translate-x-1/2 z-30 pointer-events-none",
      initAnim: { opacity: 0, scale: 0.8, y: -8 }
    },
    {
      id: 'database',
      name: 'Database',
      color: '#13aa52',
      bgGlow: 'rgba(19, 170, 82, 0.15)',
      borderColor: 'rgba(19, 170, 82, 0.3)',
      x: 350,
      y: 200,
      skills: ['MongoDB', 'DBMS'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-7 h-7 text-[#13aa52] fill-none">
          <path d="M50 15 C50 15 30 40 30 60 C30 75 40 85 50 85 C60 85 70 75 70 60 C70 40 50 15 50 15 Z" stroke="#13aa52" strokeWidth="4" />
          <path d="M50 15 L50 85" stroke="#13aa52" strokeWidth="2" />
        </svg>
      ),
      labelOffset: { x: 0, y: -45 },
      wrapperClass: "absolute right-[75px] top-1/2 -translate-y-1/2 z-30 pointer-events-none",
      initAnim: { opacity: 0, scale: 0.8, x: 8 }
    },
    {
      id: 'aiml',
      name: 'AI/ML',
      color: '#ffd43b',
      bgGlow: 'rgba(255, 212, 59, 0.15)',
      borderColor: 'rgba(255, 212, 59, 0.3)',
      x: 200,
      y: 350,
      skills: ['Python', 'Machine Learning'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-7 h-7 text-[#306998] fill-none">
          <path d="M50 15 C35 15 35 25 35 25 L35 35 L50 35 L50 40 L30 40 C20 40 20 50 20 60 C20 70 30 70 30 70 L35 70 L35 65 C35 65 35 55 45 55 L55 55 C65 55 65 45 65 45 L65 35 C65 35 65 15 50 15 Z" fill="#306998" />
          <path d="M50 85 C65 85 65 75 65 75 L65 65 L50 65 L50 60 L70 60 C80 60 80 50 80 40 C80 30 70 30 70 30 L65 30 L65 35 C65 35 65 45 55 45 L45 45 C35 45 35 55 35 55 L35 65 C35 65 35 85 50 85 Z" fill="#ffd43b" />
        </svg>
      ),
      labelOffset: { x: 0, y: 45 },
      wrapperClass: "absolute bottom-[75px] left-1/2 -translate-x-1/2 z-30 pointer-events-none",
      initAnim: { opacity: 0, scale: 0.8, y: 8 }
    },
    {
      id: 'backend',
      name: 'Backend',
      color: '#68a063',
      bgGlow: 'rgba(104, 160, 99, 0.15)',
      borderColor: 'rgba(104, 160, 99, 0.3)',
      x: 50,
      y: 200,
      skills: ['Node.js', 'Express.js', 'JWT'],
      icon: (
        <svg viewBox="0 0 100 100" className="w-7 h-7 text-[#68a063] fill-none">
          <path d="M50 15 L80 32.5 L80 67.5 L50 85 L20 67.5 L20 32.5 Z" stroke="#68a063" strokeWidth="4" />
          <text x="50" y="55" fill="#68a063" fontSize="16" fontWeight="bold" textAnchor="middle" dominantBaseline="middle" fontFamily="monospace">JS</text>
        </svg>
      ),
      labelOffset: { x: 0, y: -45 },
      wrapperClass: "absolute left-[75px] top-1/2 -translate-y-1/2 z-30 pointer-events-none",
      initAnim: { opacity: 0, scale: 0.8, x: -8 }
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative flex items-center justify-center"
    >
      <div className="relative w-[400px] h-[400px] flex items-center justify-center select-none scale-90 sm:scale-100">
        
        {/* Subtle background floating particles/orbs */}
        {[
          { id: 1, size: 6, color: 'rgba(97, 218, 251, 0.25)', x: 75, y: 75, delay: 0, duration: 12 },
          { id: 2, size: 8, color: 'rgba(139, 92, 246, 0.2)', x: 325, y: 65, delay: 2, duration: 15 },
          { id: 3, size: 5, color: 'rgba(19, 170, 82, 0.25)', x: 65, y: 315, delay: 1, duration: 14 },
          { id: 4, size: 7, color: 'rgba(255, 212, 59, 0.2)', x: 335, y: 325, delay: 3, duration: 16 },
          { id: 5, size: 6, color: 'rgba(139, 92, 246, 0.15)', x: 200, y: 200, delay: 4, duration: 18 },
        ].map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full blur-[1px] pointer-events-none"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              left: p.x,
              top: p.y,
              boxShadow: `0 0 8px ${p.color}`,
            }}
            animate={{
              x: [0, 15, -12, 0],
              y: [0, -22, 12, 0],
              opacity: [0.3, 0.6, 0.4, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
          />
        ))}

        {/* Background SVG connections & Orbit circles */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
          {/* Dash Orbit Ring */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="rgba(255, 255, 255, 0.04)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
          />

          {/* Inner glow connection ring */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="url(#orbit-grad)"
            strokeWidth="1"
            className="opacity-40"
          />

          <defs>
            <linearGradient id="orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Connection paths (Diamond structure) */}
          <line x1="200" y1="50" x2="350" y2="200" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" />
          <line x1="350" y1="200" x2="200" y2="350" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" />
          <line x1="200" y1="350" x2="50" y2="200" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" />
          <line x1="50" y1="200" x2="200" y2="50" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" />

          {/* Center connections */}
          <line x1="200" y1="200" x2="200" y2="50" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="200" y1="200" x2="350" y2="200" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="200" y1="200" x2="200" y2="350" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.2" strokeDasharray="3 3" />
          <line x1="200" y1="200" x2="50" y2="200" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1.2" strokeDasharray="3 3" />
        </svg>

        {/* Central Core Power Node */}
        <div className="absolute w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)] z-10">
          <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-60" />
        </div>

        {/* Constellation Nodes */}
        {nodes.map((node) => {
          const floatDuration = node.id === 'frontend' || node.id === 'aiml' ? 6 : 7
          const floatDelay = node.id === 'frontend' || node.id === 'database' ? 0 : 1.5

          return (
            <motion.div
              key={node.id}
              className="absolute z-20 flex flex-col items-center justify-center cursor-default"
              style={{
                left: node.x - 30,
                top: node.y - 30,
              }}
              animate={{
                y: [0, -6, 0],
                x: [0, 4, 0],
              }}
              transition={{
                duration: floatDuration,
                delay: floatDelay,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              onMouseEnter={() => setHoveredNodeId(node.id)}
              onMouseLeave={() => setHoveredNodeId(null)}
              onClick={() => setHoveredNodeId(hoveredNodeId === node.id ? null : node.id)}
            >
              {/* Outer Glow Circle */}
              <div 
                className="w-[60px] h-[60px] rounded-full border flex items-center justify-center bg-neutral-950/90 shadow-lg transition-all duration-500 hover:scale-110 relative"
                style={{
                  borderColor: node.borderColor,
                  boxShadow: hoveredNodeId === node.id ? `0 0 20px ${node.color}` : `0 0 15px ${node.bgGlow}`,
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full transition-opacity opacity-0 hover:opacity-100 duration-500"
                  style={{
                    background: `radial-gradient(circle, ${node.bgGlow} 10%, transparent 70%)`
                  }}
                />
                <span className="relative z-10">{node.icon}</span>
              </div>

              {/* Label */}
              <span 
                className="absolute font-mono text-[10px] md:text-xs text-neutral-400 font-semibold hover:text-white transition-colors duration-300 pointer-events-none"
                style={{
                  transform: `translate(0px, ${node.labelOffset.y}px)`,
                  color: hoveredNodeId === node.id ? '#ffffff' : undefined
                }}
              >
                {node.name}
              </span>

              {/* Small elegant expansion card */}
              <AnimatePresence>
                {hoveredNodeId === node.id && (
                  <div className={node.wrapperClass}>
                    <motion.div
                      initial={node.initAnim}
                      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                      exit={node.initAnim}
                      transition={{ type: 'spring', damping: 15, stiffness: 220 }}
                      className="p-2.5 min-w-[120px] rounded-xl bg-neutral-950/95 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col gap-1 text-left"
                    >
                      <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1 font-bold border-b border-white/5 pb-0.5">
                        {node.name}
                      </div>
                      {node.skills.map((skill) => (
                        <div key={skill} className="flex items-center gap-1.5 font-mono text-[11px]">
                          <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: node.color }} />
                          <span className="text-neutral-300 font-medium whitespace-nowrap">{skill}</span>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
