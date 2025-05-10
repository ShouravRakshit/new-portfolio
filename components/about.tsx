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
        I transform complex data into intelligent solutions using Generative AI
        and machine learning. As a final year Computer Science student at the{" "}
        <span className="font-bold">University of Calgary</span> with <span className="font-bold">three
        years</span> of hands-on experience working with large complex datasets, I've
        built <span className="font-bold">LLM-powered applications</span>{" "}
        (including a 40% more efficient semantic search engine), developed{" "}
        <span className="font-bold">predictive models</span> with 94% accuracy,
        and created interactive dashboards that drive data-driven decisions.
      </p>

      <p className="mb-3">
        My expertise spans <span className="font-medium">AI/ML development</span> (specializing in LLMs, 
        computer vision, and predictive modeling), <span className="font-medium">full-stack web development</span>,
        <span className="font-medium"> iOS development</span> with Swift/SwiftUI,
        and <span className="font-medium">data engineering</span>. I've worked extensively with modern frameworks 
        and tools to build intelligent applications that solve real business problems.
      </p>

      <p className="mb-3">
        <span className="italic">When I'm not optimizing algorithms</span>,
        you'll find me strategizing over chess games, playing piano, or watching
        UFC matches. I find the same analytical thinking that powers my data
        science work applies equally to chess tactics, musical patterns, and
        fight analytics. What excites me most is translating intricate data
        insights into actionable business strategies.
      </p>

      <p>
        Let's connect to discuss{" "}
        <span className="font-bold">AI Innovation</span> and{" "}
        <span className="font-bold">Data Solutions</span>!
      </p>
    </motion.section>
  );
}