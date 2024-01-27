'use client'
import { skills } from '@/utils/constants'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const elements = containerRef.current.children
    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.35,
        stagger: 0.04,
        ease: 'bounce.inOut',
        scrollTrigger: {
          trigger: elements,
          start: 'top 90%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
          once: true,
        },
      },
    )
  }, [])
  return (
    <section
      className="h-screen snap-start scroll-m-20 text-primary"
      id="about"
    >
      <h1 className="text-3xl font-semibold sm:text-5xl sm:leading-snug">
        Hello, I&apos;m{' '}
        <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text font-semibold text-transparent drop-shadow">
          {' '}
          Marwan
        </span>{' '}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-xl font-semibold text-primary/80 sm:text-2xl sm:leading-snug">
        <p>
          Experienced React FrontEnd Developer with 3+ years of expertise in
          JavaScript, TypeScript, and React, dedicated to crafting user-friendly
          and responsive web applications.
        </p>
      </div>

      <div className="flex flex-col py-10">
        <h3 className="relative text-xl font-semibold text-primary/80 sm:text-3xl">
          My Skills
        </h3>

        <div className="mt-16 flex flex-wrap gap-10" ref={containerRef}>
          <AnimatedTooltip items={skills} />
        </div>
      </div>

      <div className="py-16">
        <h3 className="relative text-xl font-semibold text-primary/80 sm:text-3xl">
          Work Experience
        </h3>
        <h3 className="relative text-xl font-semibold text-primary/80 sm:text-3xl">
          Under Development
        </h3>
      </div>
    </section>
  )
}

export default About
