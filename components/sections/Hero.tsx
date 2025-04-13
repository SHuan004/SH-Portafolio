"use client";

import { useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Download,
  ArrowDown,
  Github,
  Linkedin,
} from "lucide-react";
import { personalInfo } from "@/data/personal";
import { TypeAnimation } from "react-type-animation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function Hero() {
  const [heroRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  const scrollToSection = useCallback((sectionId: string) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const headerHeight = 100;
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
      id="about"
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-100 dark:border-gray-800 overflow-hidden"
    >
      {/* Decorative elements - enhanced with more subtle and modern effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-100 dark:bg-gray-800/30 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-10"></div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="order-2 md:order-1 max-w-xl"
            variants={itemVariants}
          >
            <motion.span
              className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-6 border border-gray-300 dark:border-gray-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              👋 ¡Hola! Soy Sebastian
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Sebastian
              </motion.span>
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Huanca Ardiles
              </motion.span>
            </h1>

            <div className="h-12 mb-8">
              <TypeAnimation
                sequence={[
                  personalInfo.role,
                  2000,
                  "Arquitecto de Sistemas",
                  2000,
                  "Especialista en APIs",
                  2000,
                  "Desarrollador Node.js",
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium"
              />
            </div>

            <motion.p
              className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-8 py-4 rounded-xl flex items-center justify-center transition-all duration-300 font-medium shadow-lg"
              >
                Contactar
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)",
                }}
                whileTap={{ scale: 0.95 }}
                href="/cv-sebastian-huanca.pdf"
                className="border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-4 rounded-xl flex items-center justify-center transition-all duration-300 text-gray-800 dark:text-gray-200 font-medium"
                download
              >
                Descargar CV
                <Download className="ml-2 w-5 h-5" />
              </motion.a>
            </div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-4">
                Encuéntrame en
              </p>
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

          <motion.div
            className="order-1 md:order-2 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Enhanced profile image with better glow effect */}
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 blur-xl opacity-70"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.8, 0.7],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              ></motion.div>

              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {personalInfo.isAvailable && (
                <motion.div
                  className="absolute -right-4 bottom-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 flex items-center gap-2 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    Disponible para proyectos
                  </span>
                </motion.div>
              )}

              {/* Added decorative element */}
              <motion.div
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-3 flex items-center gap-2 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  +3 años de experiencia
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <button
          onClick={() => scrollToSection("backend-process")}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors group"
          aria-label="Ver más"
        >
          <span className="text-sm font-medium mb-2 group-hover:transform group-hover:translate-y-1 transition-transform">
            Ver más
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
