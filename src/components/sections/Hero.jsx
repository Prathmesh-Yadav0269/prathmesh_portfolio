import React from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import GradientText from '../ui/GradientText'
import Reveal from '../ui/Reveal'
import BackgroundGlow from '../ui/BackgroundGlow'
import HeroConstellation from '../ui/HeroConstellation'
import AnimatedButton from '../ui/AnimatedButton'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = React.useState(false)

  const springConfig = { damping: 25, stiffness: 120, mass: 0.4 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left - 150)
    mouseY.set(clientY - top - 150)
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 md:px-12 relative overflow-hidden bg-radial from-neutral-950 to-black pt-[72px] lg:pt-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Introduction"
    >
      {/* Interactive Mouse Glow */}
      <motion.div
        className="pointer-events-none absolute w-[300px] h-[300px] rounded-full blur-[80px] z-0 opacity-0 lg:block hidden"
        style={{
          x: glowX,
          y: glowY,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)',
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Background glow spots */}
      <BackgroundGlow color="blue" size="large" className="top-1/4 left-1/4" />
      <BackgroundGlow color="purple" size="huge" variant="alt" className="bottom-1/3 right-1/4" />

      <div className="relative z-10 max-w-[1200px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        
        {/* Left Side Column */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 flex flex-col items-start text-left">
          
          {/* Badge */}
          <Reveal delay={0.1} y={20}>
            <span className="text-[10px] sm:text-xs md:text-sm font-mono tracking-widest text-blue-400 uppercase bg-blue-900/10 border border-blue-500/15 px-4.5 py-2 rounded-full backdrop-blur-sm select-none">
              B.Tech Computer Science • Full Stack Developer
            </span>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.18} y={15}>
            <span className="text-xs sm:text-sm md:text-base font-mono tracking-wider text-neutral-400 uppercase block">
              Hi, I'm Prathmesh Yadav
            </span>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.25} duration={0.8} y={30}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] md:leading-[1.15] max-w-2xl">
              From concept <br />
              <GradientText>to code.</GradientText>
            </h1>
          </Reveal>

          {/* Subtitle */}
          <Reveal delay={0.35} y={25}>
            <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed font-sans font-medium">
              Full Stack Developer focused on building modern web applications, data-driven systems, and real-world software solutions.
            </p>
          </Reveal>

          {/* Buttons */}
          <Reveal delay={0.45} className="flex flex-wrap gap-4 w-full sm:w-auto">
            <AnimatedButton
              href="#projects"
              variant="glow"
              className="px-6 py-3.5 !rounded-xl font-semibold flex items-center space-x-2 group shrink-0"
              aria-label="View Portfolio Projects"
            >
              <span>View Projects</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </AnimatedButton>
            <AnimatedButton
              href="/resume.pdf"
              download="Prathmesh_Yadav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="px-6 py-3.5 !rounded-xl font-semibold flex items-center space-x-2 group shrink-0"
              aria-label="Download Resume"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </AnimatedButton>
          </Reveal>

          {/* Social Icons row */}
          <Reveal delay={0.55} className="flex items-center space-x-3.5 pt-4">
            <a
              href="https://github.com/Prathmesh-Yadav0269"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/prathmesh-yadav-a8959b293/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="mailto:yadavprathmesh88180269@gmail.com?subject=Portfolio%20Connection%20Request&body=Hi%20Prathmesh,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards,"
              className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-900 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
              aria-label="Send Email Connection Request"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Right Side Column (Constellation only) */}
        <div className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center">
          <Reveal delay={0.4} y={35} className="relative">
            <HeroConstellation />
          </Reveal>
        </div>

      </div>
    </section>
  )
}
