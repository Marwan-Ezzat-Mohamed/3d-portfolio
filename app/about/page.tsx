import { skills } from '@/utils/constants'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="text-primary">
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

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map(skill => (
            <div className="block-container h-20 w-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front flex h-1/2 w-1/2 items-center justify-center rounded-xl">
                <div className="relative h-full w-full">
                  <Image
                    fill
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="mix-blend-c object-contain"
                    title={`${skill.name}\n${skill.type}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="relative text-xl font-semibold text-primary/80 sm:text-3xl">
          Work Experience
          <br />
          <br />
          Under Development
        </h3>
      </div>
    </section>
  )
}

export default About
