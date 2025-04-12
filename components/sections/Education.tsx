"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { education, certifications } from "@/data/education";
import {
  Calendar,
  Building,
  Award,
  ExternalLink,
  GraduationCap,
  BadgeCheck,
} from "lucide-react";

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");
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
      id="education"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-5 border border-gray-300 dark:border-gray-600">
              FORMACIÓN
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Educación y Certificaciones
            </h2>
          </div>

          {/* Tabs mejorados */}
          <div className="mt-4 md:mt-0">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-xl p-1.5 shadow-lg border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setActiveTab("education")}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "education"
                    ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Educación
              </button>
              <button
                onClick={() => setActiveTab("certifications")}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === "certifications"
                    ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <BadgeCheck className="w-4 h-4" />
                Certificaciones
              </button>
            </div>
          </div>
        </motion.div>

        {/* Contenido con AnimatePresence para transiciones suaves */}
        <AnimatePresence mode="wait">
          {/* Contenido de Educación */}
          {activeTab === "education" && (
            <motion.div
              key="education"
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              {education.map((item, index) => {
                const Icon = item.icon || Building;
                return (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 mb-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    variants={itemVariants}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-600 shadow-md">
                        <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                          {item.degree}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 gap-y-2 gap-x-6 mb-4">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                            <span className="font-medium">
                              {item.institution}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                            <span>{item.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* Contenido de Certificaciones */}
          {activeTab === "certifications" && (
            <motion.div
              key="certifications"
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
            >
              {certifications.map((cert, index) => {
                const Icon = cert.icon || Award;
                return (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 md:p-8 mb-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    variants={itemVariants}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 border border-gray-200 dark:border-gray-600 shadow-md">
                        <Icon className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                              {cert.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 gap-y-2 gap-x-6 mb-4">
                              <div className="flex items-center">
                                <Award className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                                <span className="font-medium">
                                  {cert.issuer}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
                                <span>{cert.date}</span>
                              </div>
                            </div>
                          </div>
                          {cert.url && (
                            <motion.a
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              href={cert.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium border border-gray-200 dark:border-gray-600"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Ver certificado
                            </motion.a>
                          )}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {cert.description}
                        </p>

                        {cert.skills && cert.skills.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                              Aptitudes adquiridas:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
