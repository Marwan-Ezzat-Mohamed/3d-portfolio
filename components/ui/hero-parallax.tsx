'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeroParallax = ({
  items,
}: {
  items: {
    title: string
    link: string
    thumbnail: string
    description: string
  }[]
}) => {
  const firstRow = items.slice(0, 3)
  const secondRow = items.slice(3, 6)
  const thirdRow = items.slice(6, 9)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0, -30]),
    springConfig,
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.4], [0, 30]),
    springConfig,
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [20, 0]),
    springConfig,
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.11], [-500, -100]),
    springConfig,
  )
  return (
    <div
      ref={ref}
      className="relative flex h-[160vh]  flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
      id="projects"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col gap-5"
      >
        <motion.div className=" flex flex-row-reverse space-x-5 space-x-reverse">
          {firstRow.map(item => (
            <ItemCard item={item} translate={translateX} key={item.title} />
          ))}
        </motion.div>
        <motion.div className=" flex  flex-row space-x-5 ">
          {secondRow.map(item => (
            <ItemCard
              item={item}
              translate={translateXReverse}
              key={item.title}
            />
          ))}
        </motion.div>

        <motion.div className=" flex flex-row-reverse space-x-5 space-x-reverse">
          {thirdRow.map(item => (
            <ItemCard item={item} translate={translateX} key={item.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4  py-20 md:py-40">
      <h1 className="text-2xl font-bold md:text-7xl dark:text-white">
        Explore My Frontend Projects
      </h1>
      <p className="mt-8 max-w-2xl text-base md:text-xl dark:text-neutral-200">
        Check out some of my featured projects showcasing my skills and
        creativity in frontend development.
      </p>
    </div>
  )
}

export const ItemCard = ({
  item,
  translate,
}: {
  item: {
    title: string
    link: string
    thumbnail: string
    description: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
      key={item.title}
      className="group/item relative w-[24rem] flex-shrink-0"
    >
      <Link
        href={item.link}
        about="_blank"
        className="block group-hover/item:shadow-2xl "
      >
        <div className="relative  aspect-video">
          <Image
            src={item.thumbnail}
            className="absolute inset-0 h-full w-full object-left-top"
            alt={item.title}
            fill
            objectFit="cover"
          />
        </div>
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/item:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/item:opacity-100">
        {item.title}
        <span className="block text-sm font-normal">{item.description}</span>
      </h2>
    </motion.div>
  )
}
