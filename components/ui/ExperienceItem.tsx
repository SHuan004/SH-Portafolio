"use client";

import { MapPin, Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string[] | string;
  technologies: string[];
}

export default function ExperienceItem({
  period,
  title,
  company,
  location,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
        <div className="flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600">
              {period}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-4 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="font-medium">{company}</span>
            </div>
            <div className="hidden sm:block text-gray-400 dark:text-gray-500">
              •
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        {Array.isArray(description) ? (
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {description.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="inline-block w-2 h-2 rounded-full bg-gray-800 dark:bg-gray-300 mt-2 mr-3 flex-shrink-0"></span>
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
        <h4 className="text-sm font-semibold mb-3 text-gray-900 dark:text-white">
          Tecnologías
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
