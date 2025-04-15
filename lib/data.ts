import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { MdWork } from "react-icons/md";

import Summarify from "@/public/Summarify.png";
import Tokyo from "@/public/Tokyo Olympic 2021 Analysis.png";
import Atliq from "@/public/Atliq Sales Analysis.png";
import QuickCart from "@/public/QuickCart.png"
import ExploreNow from "@/public/ExploreNow.png";
import Canadian_House_Predictor from "@/public/Canadian_House_Predictor.png"
import JobHunter from "@/public/JobHunter.png";

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
    name: "Experience",
    hash: "#experience",
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

] as const;

export const experienceData = [
  {
    title: "Neuraura",
    job_title: "Data Analyst",
    location: "Calgary, AB",
    description:
      "I'm currently working as a Data Analyst at Neuraura to analyze patient data related to Polycystic Ovary Syndrome (PCOS).",
    icon: React.createElement(MdWork ),
    date: "2024 July - Present",
  },
  {
    title: "NDSC",
    job_title: "Program Administrator",
    location: "Dhaka, Bangladesh",
    description:
      "I worked as a Program Administrator, assisting in organizing events and guiding students during registration.",
      icon: React.createElement(MdWork ),
      date: "2017 August - 2019 July",
  },
  
] as const;

export const projectsData = [
  {
    title: "JobHunter",
    description:
      "JobHunter is an AI-powered job discovery platform that scrapes verified Workday portals and filters out fake listings.",
    tags: ['Python',  'Tailwind', 'React.js', 'Django-Rest-Framework',
        'NLP', 'MongoDB', 'Docker', 'Selenium', 
       'Llama 3.1', 'Postman', 'Figma'],
    imageUrl: JobHunter,
    link: "https://github.com/ShouravRakshit/JobHunter"
  },
  {
    title: "ExploreNow",
    description:
      "ExploreNow is a travel app designed to help you explore new places with your friends.ExploreNow addresses this gap by offering a social media platform designed specifically for travelers.",
    tags: ["Swift Programming ", "Firebase", "iOS Development", "Figma "],
    imageUrl: ExploreNow,
    link: "https://github.com/ShouravRakshit/ExploreNow"
  },
  {
    title: "QuickCart",
    description:
      "A Minimal E-commerce Platform QuickCart is a lightweight, responsive e-commerce application designed to deliver a seamless shopping experience.",
    tags: ["HTML", "Tailwind CSS", "Javascript", "Django","SQLite", "Docker"],
    imageUrl: QuickCart,
    link: "https://github.com/ShouravRakshit/Quick-Cart"
  },
  {
    title: "Canadian-House-Prediction",
    description:
      "The Canadian House Price Predictor is a web app that estimates home prices based on inputs like location, bedrooms, and bathrooms.",
    tags: ["Python", "HTML5", "CSS", "JavaScript", "Flask", "Machine Learning Algorithm", "Amazon EC2"],
    imageUrl: Canadian_House_Predictor,
    link: "https://github.com/ShouravRakshit/Canadian-House-Prediction"
  },
  {
    title: "Summarify",
    description:
      "Revolutionizing study methods to boost academic achievements and reduce study time.",
    tags: ["HTML", "CSS", "Javascript", "Express.js","React.js", "Typescript", "MongoDB", "Material UI", "Docker"],
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
  'Swift',
  'Firebase',
  'Postman',
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
