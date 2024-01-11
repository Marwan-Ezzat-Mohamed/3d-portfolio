"use client";
import gsap from "gsap";
import { useEffect } from "react";

import { Shapes } from "@/components/Shapes";

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      ".name-animation",
      { x: -100, opacity: 0, rotate: -10 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,

        ease: "elastic.out(1,0.3)",
        duration: 1,
        transformOrigin: "left top",
        stagger: { each: 0.1, from: "random" },
      }
    );
    gsap.fromTo(
      ".job-title",
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
        ease: "elastic.out(1,0.3)",
      }
    );
  }, []);

  const renderLetters = (name: string) => {
    if (!name) return;
    return name.split("").map((letter, index) => (
      <span key={name} className={`name-animation inline-block opacity-0 `}>
        {letter}
      </span>
    ));
  };
  return (
    <div className="grid  grid-cols-1 items-center md:grid-cols-2 h-full">
      <Shapes />

      <div className="col-start-1 md:row-start-1">
        <h1
          className="mb-8 text-[clamp(3rem,18vmin,20rem)] font-extrabold leading-none tracking-tighter"
          aria-label={"Marwan Ezzat"}
        >
          <span className="block text-slate-300 ">
            {renderLetters("Marwan")}
          </span>
          <span className="-mt-[.2em] block text-slate-500">
            {renderLetters("Ezzat")}
          </span>
        </h1>
        <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
          {"Frontend Engineer"}
        </span>
      </div>
    </div>
  );
};

export default Home;
