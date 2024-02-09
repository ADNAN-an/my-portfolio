"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About");

  return <motion.section ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-m-28"
           initial={{opacity: 0, y: 100}}
           animate={{opacity: 1, y: 0}}
           transition={{
            delay: 0.175
           }} id="about">
     <SectionHeading>About me</SectionHeading>
     <p className="mb-3">
         Currently in my{" "}
        <span className="font-medium">fourth year of Software Engineering.</span>
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem 
        {/* <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span> */}
        . I'm familiar with Django , TypeScript , React , NextJS and .NET. and I'm always looking to
        learn new technologies. I'm eager to apply my skills and knowledge in a real-world setting through a {" "}
        <span className="font-medium">three-month internship</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movie. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning{" "}
        <span className="font-medium">Japanese</span>
      </p>
  </motion.section>
}
