import React from 'react'
import Reveal from './Reveal'

export default function SectionIdentityHeader({ label, title, description, align = 'left', className = "" }) {
  const isCenter = align === 'center'
  const alignClass = isCenter ? 'text-center items-center mx-auto' : 'text-left items-start'
  
  return (
    <div className={`flex flex-col space-y-4 mb-16 relative z-10 ${alignClass} ${className}`}>
      {label && (
        <Reveal delay={0.1} y={12}>
          <span className="text-xs md:text-sm font-mono tracking-[0.25em] text-blue-400 uppercase bg-blue-900/10 border border-blue-500/15 px-4.5 py-1.5 rounded-full backdrop-blur-sm select-none">
            {label}
          </span>
        </Reveal>
      )}
      
      {title && (
        <Reveal delay={0.18} y={15}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.25] max-w-3xl">
            {title}
          </h2>
        </Reveal>
      )}
      
      {description && (
        <Reveal delay={0.25} y={15}>
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-xl font-sans">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
