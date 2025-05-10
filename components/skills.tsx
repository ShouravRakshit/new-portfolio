"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
    },
  }),
};

const categoryVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const categoryChildVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  // List of all categories plus "all"
  const categories = ["all", ...Object.keys(skillsData)];

  // Get skills based on active filter
  const getFilteredSkills = () => {
    if (activeFilter === "all") {
      return Object.entries(skillsData).map(([key, category]) => ({
        id: key,
        title: category.title,
        skills: category.skills
      }));
    }
    
    return Object.entries(skillsData)
      .filter(([key]) => key === activeFilter)
      .map(([key, category]) => ({
        id: key,
        title: category.title,
        skills: category.skills
      }));
  };

  const filteredCategories = getFilteredSkills();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[62rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      
      {/* Category filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === category
                ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {category === "all" 
              ? "All Skills" 
              : skillsData[category as keyof typeof skillsData].title}
          </button>
        ))}
      </div>

      {/* Skills categories */}
      <motion.div 
        className="space-y-10"
        variants={categoryVariants}
        initial="initial"
        animate="animate"
      >
        {filteredCategories.map((category) => (
          <motion.div 
            key={category.id}
            className="mb-8" 
            variants={categoryChildVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-gray-100">
              {category.title}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {category.skills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-sm hover:shadow transition-all"
                  key={`${category.id}-${index}`}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}