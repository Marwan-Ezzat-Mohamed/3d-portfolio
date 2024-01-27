'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion'

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    imageUrl: string
    name: string
    type: string
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-50, 50], [-15, 15]), springConfig)

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <>
      {items.map((item, idx) => (
        <div
          className="group  relative -mr-4"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  rotate: rotate,
                  whiteSpace: 'nowrap',
                }}
                className="absolute -top-20  left-0 z-50 flex translate-x-1/2  flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                <div className="text-xs text-white">{item.type}</div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="block-container relative h-20 w-20"
            key={item.name}
            onMouseMove={handleMouseMove}
          >
            <div className="btn-back rounded-xl" />
            <div className="btn-front flex h-1/2 w-1/2 items-center justify-center rounded-xl p-1">
              <div className=" h-full w-full">
                <Image
                  fill
                  src={item.imageUrl}
                  alt={item.name}
                  className="mix-blend-c object-contain"
                />
              </div>
            </div>
          </div>
          {/* <Image
            
            height={100}
            width={100}
            src={item.imageUrl}
            alt={item.name}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition  duration-500 group-hover:z-30 group-hover:scale-105"
          /> */}
        </div>
      ))}
    </>
  )
}
