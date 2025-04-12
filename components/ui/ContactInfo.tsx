"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone, Calendar } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function ContactInfo() {
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
    <motion.div
      className="h-full flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        Información de Contacto
      </motion.h3>
      <motion.p
        variants={itemVariants}
        className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
      >
        Estoy disponible para proyectos freelance, posiciones remotas o
        consultoría. No dudes en contactarme a través de cualquiera de estos
        medios.
      </motion.p>

      <div className="space-y-6 flex-grow">
        <motion.div variants={itemVariants} className="flex items-start">
          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4 border border-gray-200 dark:border-gray-600 shadow-sm">
            <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
              Ubicación
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.location}
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4 border border-gray-200 dark:border-gray-600 shadow-sm">
            <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
              Email
            </h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4 border border-gray-200 dark:border-gray-600 shadow-sm">
            <Phone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
              Teléfono
            </h4>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {personalInfo.phone}
            </a>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-start">
          <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-4 border border-gray-200 dark:border-gray-600 shadow-sm">
            <Calendar className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 dark:text-white mb-1">
              Disponibilidad
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {personalInfo.availability}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-700"
      >
        <h4 className="font-medium text-gray-900 dark:text-white mb-4">
          Sígueme en
        </h4>
        <div className="flex space-x-4">
          <motion.a
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}
