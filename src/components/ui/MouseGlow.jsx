import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseGlow() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 200)
      mouseY.set(e.clientY - 200)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed z-30 w-[400px] h-[400px] rounded-full hidden md:block"
      style={{
        x: glowX,
        y: glowY,
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(147, 51, 234, 0.06) 50%, transparent 100%)',
        filter: 'blur(40px)',
      }}
    />
  )
}
