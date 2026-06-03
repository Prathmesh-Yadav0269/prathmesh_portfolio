import React from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import prathmeshImg from '../../assets/prathmesh.jpg'

export default function AboutPortrait() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 100, damping: 22 }
  const mouseX = useSpring(x, springConfig)
  const mouseY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const clientX = e.clientX - rect.left - width / 2
    const clientY = e.clientY - rect.top - height / 2
    x.set((clientX / (width / 2)) * 14)
    y.set((clientY / (height / 2)) * 14)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const ringX1 = useTransform(mouseX, (val) => val * 0.15)
  const ringY1 = useTransform(mouseY, (val) => val * 0.15)
  
  const ringX2 = useTransform(mouseX, (val) => val * -0.08)
  const ringY2 = useTransform(mouseY, (val) => val * -0.08)
  
  const ringX3 = useTransform(mouseX, (val) => val * 0.25)
  const ringY3 = useTransform(mouseY, (val) => val * 0.25)

  const portraitX = useTransform(mouseX, (val) => val * 0.3)
  const portraitY = useTransform(mouseY, (val) => val * 0.3)

  const badgeX1 = useTransform(mouseX, (val) => val * 0.7)
  const badgeY1 = useTransform(mouseY, (val) => val * 0.7)
  const badgeX2 = useTransform(mouseX, (val) => val * 0.85)
  const badgeY2 = useTransform(mouseY, (val) => val * 0.85)
  const badgeX3 = useTransform(mouseX, (val) => val * 0.65)
  const badgeY3 = useTransform(mouseY, (val) => val * 0.65)
  const badgeX4 = useTransform(mouseX, (val) => val * 0.9)
  const badgeY4 = useTransform(mouseY, (val) => val * 0.9)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 25 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.95, ease: 'easeOut' }}
      className="relative flex items-center justify-center p-12 sm:p-14 select-none max-w-full cursor-default"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
    >
      
      {/* Background soft glow behind portrait */}
      <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-blue-600/15 to-purple-600/15 blur-3xl -z-10 animate-pulse" />

      {/* Floating light particles around portrait */}
      {[
        { id: 1, size: 5, color: 'rgba(59, 130, 246, 0.3)', x: '10%', y: '16%', d: 7, delay: 0 },
        { id: 2, size: 3, color: 'rgba(139, 92, 246, 0.25)', x: '85%', y: '20%', d: 9, delay: 1 },
        { id: 3, size: 4, color: 'rgba(97, 218, 251, 0.3)', x: '8%', y: '74%', d: 8, delay: 1.5 },
        { id: 4, size: 5, color: 'rgba(139, 92, 246, 0.25)', x: '90%', y: '65%', d: 10, delay: 0.5 },
        { id: 5, size: 3, color: 'rgba(59, 130, 246, 0.35)', x: '45%', y: '6%', d: 6, delay: 2 },
        { id: 6, size: 4, color: 'rgba(139, 92, 246, 0.25)', x: '50%', y: '94%', d: 8.5, delay: 1.2 }
      ].map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[0.5px] pointer-events-none z-10"
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            left: p.x,
            top: p.y,
            boxShadow: `0 0 10px ${p.color}`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            opacity: [0.25, 0.85, 0.35, 0.25]
          }}
          transition={{
            duration: p.d,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay
          }}
        />
      ))}

      {/* Outer Rings System */}
      <div className="absolute w-76 h-76 sm:w-84 sm:h-84 md:w-[370px] md:h-[370px] pointer-events-none flex items-center justify-center">
        {/* Ring 1 - Outermost (Clockwise) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-full h-full"
          style={{ x: ringX1, y: ringY1 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="gradient-ring-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="url(#gradient-ring-1)"
            strokeWidth="0.4"
            strokeDasharray="70 170"
            strokeLinecap="round"
          />
        </motion.svg>

        {/* Ring 2 - Middle (Counter-Clockwise) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-[94%] h-[94%]"
          style={{ x: ringX2, y: ringY2 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="gradient-ring-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="url(#gradient-ring-2)"
            strokeWidth="0.6"
            strokeDasharray="140 100"
            strokeLinecap="round"
            className="opacity-80"
          />
        </motion.svg>

        {/* Ring 3 - Innermost (Clockwise) */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute w-[88%] h-[88%]"
          style={{ x: ringX3, y: ringY3 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        >
          <defs>
            <linearGradient id="gradient-ring-3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#61dafb" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="46"
            fill="none"
            stroke="url(#gradient-ring-3)"
            strokeWidth="0.3"
            strokeDasharray="30 220"
            strokeLinecap="round"
            className="opacity-70"
          />
        </motion.svg>
      </div>

      {/* Main Glass Portrait Container */}
      <motion.div 
        style={{ x: portraitX, y: portraitY }}
        className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full p-1.5 bg-neutral-950/40 border border-white/10 shadow-[0_0_40px_rgba(97,218,251,0.15)] flex items-center justify-center transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]"
      >
        <div className="w-full h-full rounded-full overflow-hidden border border-white/5 relative shadow-inner">
          <img 
            src={prathmeshImg} 
            alt="Prathmesh Yadav" 
            className="w-full h-full object-cover scale-102 hover:scale-106 transition-transform duration-700 ease-out" 
          />
        </div>
      </motion.div>

      {/* Floating Badges */}
      
      {/* Full Stack - Top Left */}
      <motion.div
        style={{ x: badgeX1, y: badgeY1 }}
        className="absolute top-[8%] left-[-8%] sm:left-[-6%] md:left-[-14%] backdrop-blur-md bg-neutral-950/80 border border-white/10 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-medium text-neutral-200 shadow-xl flex items-center gap-1.5"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span>Full Stack</span>
      </motion.div>

      {/* AI/ML - Top Right */}
      <motion.div
        style={{ x: badgeX2, y: badgeY2 }}
        className="absolute top-[12%] right-[-8%] sm:right-[-6%] md:right-[-14%] backdrop-blur-md bg-neutral-950/80 border border-white/10 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-medium text-neutral-200 shadow-xl flex items-center gap-1.5"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
        <span>AI/ML</span>
      </motion.div>

      {/* MERN - Bottom Left */}
      <motion.div
        style={{ x: badgeX3, y: badgeY3 }}
        className="absolute bottom-[12%] left-[-10%] sm:left-[-8%] md:left-[-16%] backdrop-blur-md bg-neutral-950/80 border border-white/10 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-medium text-neutral-200 shadow-xl flex items-center gap-1.5"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>MERN</span>
      </motion.div>

      {/* Problem Solver - Bottom Right */}
      <motion.div
        style={{ x: badgeX4, y: badgeY4 }}
        className="absolute bottom-[8%] right-[-10%] sm:right-[-8%] md:right-[-16%] backdrop-blur-md bg-neutral-950/80 border border-white/10 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-mono font-medium text-neutral-200 shadow-xl flex items-center gap-1.5"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        <span>Problem Solver</span>
      </motion.div>

    </motion.div>
  )
}
