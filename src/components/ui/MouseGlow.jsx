import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseGlow() {
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  const springConfig = { damping: 45, stiffness: 180, mass: 0.5 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Only track if pointer is fine (desktop)
    const isFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!isFinePointer) return

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 160)
      mouseY.set(e.clientY - 160)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="pointer-events-none fixed z-30 w-[320px] h-[320px] rounded-full hidden md:block"
      style={{
        x: glowX,
        y: glowY,
        background: 'radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }}
    />
  )
}
