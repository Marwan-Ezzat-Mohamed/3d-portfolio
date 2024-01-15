import { skills } from "@/utils/constants";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="text-primary">
      <h1 className="sm:text-5xl text-3xl font-semibold sm:leading-snug">
        Hello, I&apos;m{" "}
        <span className="font-semibold drop-shadow bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
          {" "}
          Marwan
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-primary/80 sm:text-2xl text-xl font-semibold sm:leading-snug">
        <p>
          Experienced React FrontEnd Developer with 3+ years of expertise in
          JavaScript, TypeScript, and React, dedicated to crafting user-friendly
          and responsive web applications.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="font-semibold sm:text-3xl text-xl relative text-primary/80">
          My Skills
        </h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center w-1/2 h-1/2">
                <div className="w-full h-full relative">
                  <Image
                    fill
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="object-contain mix-blend-c"
                    title={`${skill.name}\n${skill.type}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="font-semibold sm:text-3xl text-xl relative text-primary/80">
          Work Experience
          <br />
          <br />
          Under Development
        </h3>
      </div>
    </section>
  );
};

export default About;
