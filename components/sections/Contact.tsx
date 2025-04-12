"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/components/ui/ContactInfo";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Elementos decorativos mejorados */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>

      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-5 border border-gray-300 dark:border-gray-600">
            CONECTEMOS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6  dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Interesado en trabajar juntos? Contáctame para discutir cómo puedo
            ayudar en tu próximo proyecto.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="grid md:grid-cols-5 gap-0">
              <motion.div
                className="md:col-span-2 p-8 md:p-10 bg-gray-50 dark:bg-gray-800/80 border-r border-gray-100 dark:border-gray-700"
                variants={itemVariants}
              >
                <ContactInfo />
              </motion.div>
              <motion.div
                className="md:col-span-3 p-8 md:p-10"
                variants={itemVariants}
              >
                <ContactForm />
              </motion.div>
            </div>
          </motion.div>

          {/* Sección adicional con mapa o información de disponibilidad */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Actualmente disponible para proyectos remotos y consultoría.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                Disponible para nuevos proyectos
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full border border-gray-200 dark:border-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Respuesta en 24-48h
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
