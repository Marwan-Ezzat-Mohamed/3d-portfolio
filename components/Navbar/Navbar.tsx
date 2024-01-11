import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center p-4 bg-secondary text-primary/70 shadow-lg w-[90%] transition-all top-2 mx-auto rounded-full mx-auto fixed inset-x-0 top-1 max-w-5xl z-50">
      <div className="flex flex-1 gap-8 px-8">
        <Link
          className="font-bold hover:bg-inherit hover:text-primary hover:scale-105 text-xl p-0"
          href="/"
        >
          Home
        </Link>
        <Link
          className="font-bold hover:bg-inherit hover:text-primary hover:scale-105 text-xl p-0"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="font-bold hover:bg-inherit hover:text-primary hover:scale-105 text-xl p-0"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
