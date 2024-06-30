"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {/* After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
        I'm currently studying Computer Science at the <span className="font-bold">
          University of Calgary
        </span>, where I've had the opportunity to develop a strong foundation in various aspects of technology. My academic journey has been driven by a keen interest in <span className="font-bold">
        data analytics and visualization
        </span>, which is where I believe the future of technology lies. I've become proficient in Python and SQL for data handling and Power BI for creating insightful visualizations, skills that I've honed through both academic projects and personal initiatives. In addition to my academic pursuits, I've gained practical experience working with MERN ( <span className="font-bold">
          MongoDB, Express.js, Node.js, React
        </span> ) Stack. Whether it's through data analytics, providing meaningful insights for business decisions, or developing applications that can make people's lives easier, I am passionate about using my skills to make a tangible impact.
      </p>
      
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and piano, watching movies, and animes. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">machine learning algorithms to implement in my MERN Stack projects.</span>
      </p>
    </motion.section>
  );
}
