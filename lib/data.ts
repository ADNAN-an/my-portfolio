import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import DonorNation from "@/public/DonorNation.jpg"
import iElect from "@/public/iElect.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Initiation Internship",
    location: "Tangier, MA",
    description:
    "I completed a 1-month internship at TMZ (Tangier Free Zones), which was my first experience in the professional environment.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2023 - 08/2023",
  },
  {
    title: "4th year of Software Engineering",
    location: "Tangier, MA",
    description:
      "Currently pursuing my 4th year of software engineering studies.",
    icon: React.createElement(LuGraduationCap),
    date: "Present",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DonorNation",
    description:
      "My end-of-year project from my 3rd year of Software Engineering. DonorNation, is a blood donation platform.",
    tags: ["Laravel", "PHP", "mySQL", "GMaps API"],
    imageUrl: DonorNation,
  },
  {
    title: "iElect",
    description:
      "A voting platform with MetaMask authentication for secure and transparent participation in the democratic process.",
    tags: ["DJANGO", "Python", "Tailwind", "PostgreSQL", "MetaMask"],
    imageUrl: iElect,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Laravel",
  "TypeScript",
  "React",
  "Next.js",
  // "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  // "MongoDB",
  // "Redux",
  // "GraphQL",
  // "Apollo",
  // "Express",
  "Java",
  ".NET",
  "SQL Server",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;