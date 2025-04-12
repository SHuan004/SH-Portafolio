"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      // Ajustamos el offset para tener en cuenta el header fijo
      const headerHeight = 100; // Aumentamos el valor para dar más espacio
      const targetPosition =
        targetSection.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const footerLinks = [
    { id: "about", label: "Sobre mí" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
    { id: "interests", label: "Intereses" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-800/50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-800/50 rounded-full opacity-30 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {personalInfo.name}
              </h3>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                {personalInfo.title}. Especializado en crear soluciones robustas
                y escalables para problemas complejos.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={`mailto:${personalInfo.email}`}
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => scrollToSection(e, link.id)}
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-2"></span>
                  <span>{personalInfo.location}</span>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-2"></span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li className="text-gray-400 flex items-start">
                  <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2 mt-2"></span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                    className="hover:text-white transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left flex items-center gap-1">
            &copy; {new Date().getFullYear()} {personalInfo.name}. Desarrollado
            con <Heart className="w-4 h-4 text-red-500 inline-block" /> y
            Next.js
          </p>
          <motion.button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            aria-label="Volver arriba"
            whileHover={{ y: -5 }}
          >
            Volver arriba{" "}
            <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
