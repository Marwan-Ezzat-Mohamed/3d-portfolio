import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-1 top-2 z-50 mx-auto mx-auto flex w-[90%] max-w-7xl items-center rounded-full bg-secondary p-4 text-primary/70 shadow-lg transition-all">
      <div className="flex flex-1 gap-8 px-8">
        <Link
          className="p-0 text-xl font-bold hover:scale-105 hover:bg-inherit hover:text-primary"
          href="/"
        >
          Home
        </Link>
        <Link
          className="p-0 text-xl font-bold hover:scale-105 hover:bg-inherit hover:text-primary"
          href="/about"
        >
          About
        </Link>
        <Link
          className="p-0 text-xl font-bold hover:scale-105 hover:bg-inherit hover:text-primary"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="p-0 text-xl font-bold hover:scale-105 hover:bg-inherit hover:text-primary"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  )
}

export { Navbar }
