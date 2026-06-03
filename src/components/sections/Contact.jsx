import React from 'react'
import { profile } from '../../data/profile'
import Reveal from '../ui/Reveal'
import GlowCard from '../ui/GlowCard'
import BackgroundGlow from '../ui/BackgroundGlow'
import AnimatedButton from '../ui/AnimatedButton'
import SectionIdentityHeader from '../ui/SectionIdentityHeader'

export default function Contact() {
  const mailtoUrl = "mailto:yadavprathmesh88180269@gmail.com?subject=Portfolio%20Connection%20Request&body=Hi%20Prathmesh,%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0ARegards,"
  const linkedinUrl = "https://www.linkedin.com/in/prathmesh-yadav-a8959b293/"

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-12 max-w-5xl mx-auto relative overflow-hidden" aria-label="Contact Information">
      <BackgroundGlow color="blue" size="large" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <SectionIdentityHeader 
        label="CONNECTIONS"
        title="Get in Touch"
        description="Have an interesting opportunity, system optimization project, or creative front-end task? Let's talk."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 w-full max-w-4xl mx-auto">
        {/* Action 1: LinkedIn */}
        <Reveal delay={0.2} y={20}>
          <GlowCard className="p-8 h-full flex flex-col justify-between border-neutral-900/60 hover:border-blue-500/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Connect on LinkedIn
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-sans font-medium">
                  Let's connect on my professional network, share insights, or chat about future collaborations.
                </p>
              </div>
            </div>
            <div className="pt-8">
              <AnimatedButton
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                variant="primary"
                className="w-full py-3.5 !rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/5 text-center block"
                aria-label="Connect on LinkedIn"
              >
                Open LinkedIn Profile
              </AnimatedButton>
            </div>
          </GlowCard>
        </Reveal>

        {/* Action 2: Email */}
        <Reveal delay={0.3} y={20}>
          <GlowCard className="p-8 h-full flex flex-col justify-between border-neutral-900/60 hover:border-purple-500/30 transition-all duration-300">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Send Email
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-sans font-medium">
                  Send a direct mail with a pre-filled template. I'll get back to you as soon as possible.
                </p>
              </div>
            </div>
            <div className="pt-8">
              <AnimatedButton
                href={mailtoUrl}
                variant="secondary"
                className="w-full py-3.5 !rounded-xl text-sm font-semibold text-center block"
                aria-label="Send Email Connection Request"
              >
                Send Message via Mail
              </AnimatedButton>
            </div>
          </GlowCard>
        </Reveal>
      </div>

      <footer className="mt-24 pt-8 border-t border-neutral-900/50 text-center text-xs font-mono text-neutral-600">
        © {new Date().getFullYear()} {profile.name}. All rights reserved. Built with Vite and Tailwind.
      </footer>
    </section>
  )
}
