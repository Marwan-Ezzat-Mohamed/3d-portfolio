'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { useEffect } from 'react'

import { Shapes } from '@/components/Shapes'

import About from '@/components/About'
import { HeroParallax } from '@/components/ui/hero-parallax'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '.name-animation',
      { x: -100, opacity: 0, rotate: -10 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,

        ease: 'elastic.out(1,0.3)',
        duration: 1,
        transformOrigin: 'left top',
        stagger: { each: 0.1, from: 'random' },
      },
    )
    gsap.fromTo(
      '.job-title',
      {
        y: 20,
        opacity: 0,
        scale: 1.2,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: 'elastic.out(1,0.3)',
      },
    )
  }, [])

  const renderLetters = (name: string) => {
    if (!name) return
    return name.split('').map(letter => (
      <span key={name} className={`name-animation inline-block opacity-0 `}>
        {letter}
      </span>
    ))
  }
  return (
    <div className="h-max  ">
      <section
        className="-mt-20 mb-20 grid h-screen snap-start grid-cols-1 items-center md:grid-cols-2"
        id="home"
      >
        <Shapes />

        <div className="relative col-start-1 md:row-start-1">
          <h1
            className="mb-8 text-[clamp(3rem,18vmin,10rem)] font-extrabold leading-none tracking-tighter"
            aria-label={'Marwan Ezzat'}
          >
            <span className="block text-slate-300 ">
              {renderLetters('Marwan')}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters('Ezzat')}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            {'Frontend Engineer'}
          </span>
        </div>
      </section>

      <About />

      <HeroParallax items={externalProject} />
    </div>
  )
}

export default Home

const externalProject = [
  {
    title: 'Rick and Morty',
    description:
      'Rick and Morty Characters with infinite scroll and Grid virtualization. Built with React.js, and Tailwind CSS, Appolo Client and Zustand.',
    thumbnail: 'https://i.ibb.co/120MYWJ/Screenshot-2.png',
    link: 'https://rick-and-morty-seven-jet.vercel.app/',
    githubLink: 'https://github.com/Marwan-Ezzat-Mohamed/rick-and-morty',
  },
  {
    title: 'Tip Calculator',
    description:
      'Frontend Mentor challenge. Tip calculator app. Built with React.js',
    thumbnail: 'https://i.ibb.co/DRnDfmV/Screenshot-3.png',
    link: 'https://tip-calculator-alpha-ochre.vercel.app/',
    githubLink: 'https://github.com/Marwan-Ezzat-Mohamed/TipCalculator',
  },
  {
    title: 'Meact',
    description: `a lightweight and simplified version of React, designed to provide a basic understanding of how React works under the hood.`,
    thumbnail: 'https://i.ibb.co/tqKfk8W/Screenshot-4.png',
    link: 'https://github.com/Marwan-Ezzat-Mohamed/meact',
    githubLink: 'https://github.com/Marwan-Ezzat-Mohamed/meact',
  },

  {
    title: 'Innoloft proof of concept',
    description:
      'Innoloft task. Proof of concept. Built with Next.js, and Tailwind CSS',
    thumbnail:
      'https://i.ibb.co/FXBtnTj/Web-capture-23-12-2023-163812-innoloft-task-virid-vercel-app.jpg',
    link: 'https://innoloft-task-virid.vercel.app/',
    githubLink: 'https://github.com/Marwan-Ezzat-Mohamed/innoloft-task',
  },
  {
    title: 'Statistical Dashboard',
    description:
      'Proof of concept for a client. Statistical Dashboard. Built with React.js, and Tailwind CSS',
    thumbnail: 'https://i.ibb.co/k4zc6nW/Screenshot-2023-09-14-025516.png',
    link: 'https://statistical-dashboard.vercel.app/',
    githubLink: 'https://github.com/Marwan-Ezzat-Mohamed/statistical-dashboard',
  },

  {
    title: 'My Reads',
    description:
      'My Reads is a book tracking app that allows you to select and categorize books you have read, are currently reading, or want to read. Built with React.js, and bootstrap',
    thumbnail: 'https://i.ibb.co/SNdT5zy/Screenshot-1.png',
    link: 'https://my-reads-a-book-tracking-app-udacity.vercel.app/',
    githubLink:
      'https://github.com/Marwan-Ezzat-Mohamed/My-Reads-A-Book-Tracking-App-Udacity',
  },
]
