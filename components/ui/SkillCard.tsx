"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

export default function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>

      <ul className="space-y-5">
        {skills.map((skill, index) => (
          <motion.li
            key={skill.name}
            className="flex flex-col"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
              <span className="text-sm font-semibold px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <motion.div
                className="bg-gray-800 dark:bg-gray-300 h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{
                  duration: 1,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
                aria-label={`${skill.level}% de dominio en ${skill.name}`}
              ></motion.div>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
