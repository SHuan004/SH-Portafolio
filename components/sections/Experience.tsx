"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent dark:from-gray-900 dark:to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-5 border border-gray-300 dark:border-gray-600">
            TRAYECTORIA PROFESIONAL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Experiencia Profesional
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Mi trayectoria como Backend Developer con enfoque en arquitecturas
            escalables y soluciones de alto rendimiento.
          </p>
        </motion.div>

        {/* Tabs mejorados para seleccionar experiencia */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 sm:flex-nowrap sm:gap-0 bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-lg border border-gray-200 dark:border-gray-700">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {exp.company.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido de experiencia con AnimatePresence para transiciones suaves */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {experiences.map(
              (experience, index) =>
                activeTab === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                        <div>
                          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-3 border border-gray-200 dark:border-gray-600">
                            {experience.period}
                          </span>
                          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 gap-y-2 gap-x-6">
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                              <span className="font-medium">
                                {experience.company}
                              </span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="text-base font-semibold mb-4 flex items-center text-gray-900 dark:text-white">
                          <Calendar className="w-5 h-5 mr-2 text-gray-700 dark:text-gray-300" />
                          Responsabilidades y Logros
                        </h4>
                        <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                          {experience.description.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start"
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              custom={idx}
                            >
                              <ChevronRight className="w-5 h-5 text-gray-800 dark:text-gray-200 mt-0.5 mr-3 flex-shrink-0" />
                              <p className="text-sm md:text-base leading-relaxed">
                                {item}
                              </p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base font-semibold mb-4 text-gray-900 dark:text-white">
                          Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
