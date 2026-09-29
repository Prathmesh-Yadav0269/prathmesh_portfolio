import React from 'react'
import { profile } from '../../data/profile'
import Reveal from '../ui/Reveal'
import GlowCard from '../ui/GlowCard'
import BackgroundGlow from '../ui/BackgroundGlow'
import AnimatedButton from '../ui/AnimatedButton'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  const mailtoUrl = "mailto:yadavprathmesh88180269@gmail.com?subject=Portfolio%20Connection%20Request&body=Hi%20Prathmesh,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards,"
  const linkedinUrl = "https://www.linkedin.com/in/prathmesh-yadav-a8959b293/"
  const githubUrl = "https://github.com/Prathmesh-Yadav0269"
  const phoneUrl = "tel:+919766258818"
  const phoneDisplay = "+91 97662 58818"

  const contactChannels = [
    {
      id: "linkedin",
      title: "LinkedIn",
      desc: "Connect with me professionally and follow my work.",
      actionLabel: "View LinkedIn Profile",
      href: linkedinUrl,
      isExternal: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-blue-500" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    },
    {
      id: "email",
      title: "Email",
      desc: "For opportunities, project discussions, or technical conversations.",
      actionLabel: "Send Email",
      href: mailtoUrl,
      isExternal: false,
      icon: <Mail className="w-5 h-5 text-purple-500" aria-hidden="true" />
    },
    {
      id: "github",
      title: "GitHub",
      desc: "Explore my projects, experiments, and source code.",
      actionLabel: "View GitHub",
      href: githubUrl,
      isExternal: true,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-emerald-500" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      )
    },
    {
      id: "phone",
      title: "Phone",
      desc: "Available for professional and interview-related communication.",
      displayValue: phoneDisplay,
      actionLabel: "Call",
      href: phoneUrl,
      isExternal: false,
      icon: <Phone className="w-5 h-5 text-amber-500" aria-hidden="true" />
    }
  ]

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 md:px-12 w-full relative" aria-label="Contact Information">
      <BackgroundGlow color="blue" size="large" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Centered Content Container */}
      <div className="w-full max-w-[1100px] mx-auto">
        <SectionIdentityHeader 
          label="CONTACT"
          title="Get in Touch"
          description="Open to software engineering opportunities, technical discussions, and project collaborations."
        />

        {/* 2x2 Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 w-full">
          {contactChannels.map((channel, idx) => (
            <Reveal key={channel.id} delay={0.1 + idx * 0.05} y={12} className="h-full">
              <GlowCard className="p-6 sm:p-7 h-full flex flex-col justify-between">
                <div className="space-y-4 flex flex-col flex-grow">
                  {/* Top: Icon + Optional Metadata Badge */}
                  <div className="flex items-center justify-between min-h-[40px]">
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-hover)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
                      {channel.icon}
                    </div>
                    {channel.displayValue && (
                      <span className="text-xs font-mono font-medium text-[var(--text-secondary)] bg-[var(--surface-hover)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-md select-all">
                        {channel.displayValue}
                      </span>
                    )}
                  </div>

                  {/* Middle: Title + Description with flex-grow */}
                  <div className="space-y-1.5 flex-grow">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] tracking-wide">
                      {channel.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed font-normal">
                      {channel.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom: Action CTA Button (mt-auto aligns across row) */}
                <div className="pt-6 mt-auto">
                  <AnimatedButton
                    href={channel.href}
                    target={channel.isExternal ? "_blank" : undefined}
                    rel={channel.isExternal ? "noopener noreferrer" : undefined}
                    variant="secondary"
                    className="w-full py-2.5 text-xs font-semibold text-center block"
                    aria-label={`${channel.actionLabel} (${channel.title})`}
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      <span>{channel.actionLabel}</span>
                      {channel.isExternal && <span className="text-[10px]">↗</span>}
                    </span>
                  </AnimatedButton>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Centered Footer */}
      <footer className="w-full max-w-[1100px] mx-auto mt-16 md:mt-24 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-muted)]">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>Built with React & Vite</span>
      </footer>
    </section>
  )
}
