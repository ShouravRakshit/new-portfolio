import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Summarify from "@/public/Summarify.png";
import Tokyo from "@/public/Tokyo Olympic 2021 Analysis.png";
import Atliq from "@/public/Atliq Sales Analysis.png";

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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const educationData = [
  {
    title: "University of Calgary",
    location: "Calgary, AB",
    description:
      "I'm currently pursuing a Bachelor of Science in Computer Science at the University of Calgary. I'm expected to graduate in 2025",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - Present",
  },
  {
    title: "Notre Dame College",
    location: "Dhaka, Bangladesh",
    description:
      "I completed my High School from Notre Dame College, one of the most prestigious schools in Bangladesh. I studied Mathematics, Physics, Biology, and Chemistry.",
      icon: React.createElement(LuGraduationCap),
      date: "2017 - 2019",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const experienceData = [
  {
    title: "Neuraura",
    location: "Calgary, AB",
    description:
      "I'm currently working as a Data Analyst at Neuraura to analyze patient data related to Polycystic Ovary Syndrome (PCOS).",
    icon: React.createElement(LuGraduationCap),
    date: "2024 July - Present",
  },
  {
    title: "Notre Dame Science Club",
    location: "Dhaka, Bangladesh",
    description:
      "I worked as a Program Administrator, assisting in organizing events and guiding students during registration.",
      icon: React.createElement(LuGraduationCap),
      date: "2017 - 2019",
  },
  
] as const;

export const projectsData = [
  {
    title: "Summarify",
    description:
      "Revolutionizing study methods to boost academic achievements and reduce study time.",
    tags: ["HTML", "CSS", "Javascript", "Express.js","React.js", "Typescript", "MongoDB", "Material UI",],
    imageUrl: Summarify,
    link: "https://github.com/the-sin14/seng-513-project"
  },
  {
    title: "Tokyo 2021 Olympics Data Analysis",
    description:
      "The goal of this project was to leverage advanced data analytics to uncover valuable insights from the Tokyo 2021 Olympics data.",
    tags: ["Synapse Analytics", "Azure Databricks", "MySQL", "Apache Spark", "Power BI"],
    imageUrl: Tokyo,
    link: "https://github.com/ShouravRakshit/Tokyo-Olympic-2021"
  },
  {
    title: "Atliq Company Sales Analysis",
    description:
      "The objective of this project was to analyze Atliq Company's sales data from 2017 to 2020 to identify trends and key performance indicators. ",
    tags: ["MySQL", "Power BI"],
    imageUrl: Atliq,
    link: "https://github.com/ShouravRakshit/Atliq-Company-Sales-Analysis"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Git",
  "Material UI",
  "Bootstrap5",
  "MongoDB",
  "Docker",
  "Power BI",
  "Tableau",
  "MySQL",
  "Microsoft Azure",
  "PostgreSQL",
  "Python",
  "Django",
  "Microsoft Excel",
  "Figma",
  "Microsoft Powerpoint",
  "Microsoft Word",
  "Microsoft Outlook",
  "Microsoft Teams",
  "Active Directory",
  "Windows Server",
  "Linux",
  "VPN",
  "Network Security",
  

] as const;
