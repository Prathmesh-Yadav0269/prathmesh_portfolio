import React from 'react'
import Reveal from './Reveal'

export default function SectionIdentityHeader({ label, title, description, align = 'left', className = "" }) {
  const isCenter = align === 'center'
  const alignClass = isCenter ? 'text-center items-center mx-auto' : 'text-left items-start'
  
  return (
    <div className={`flex flex-col space-y-3 mb-10 md:mb-14 relative z-10 ${alignClass} ${className}`}>
      {label && (
        <Reveal delay={0.1} y={8}>
          <span className="text-[11px] sm:text-xs font-mono font-medium tracking-wider text-[var(--badge-text)] uppercase bg-[var(--badge-bg)] border border-[var(--badge-border)] px-3.5 py-1.5 rounded-md select-none inline-block">
            {label}
          </span>
        </Reveal>
      )}
      
      {title && (
        <Reveal delay={0.15} y={10}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text-primary)] leading-tight max-w-2xl">
            {title}
          </h2>
        </Reveal>
      )}
      
      {description && (
        <Reveal delay={0.2} y={10}>
          <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed max-w-xl font-normal">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
