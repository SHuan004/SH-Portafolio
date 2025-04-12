"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  // Añadimos un estado para controlar si estamos en el cliente
  const [isMounted, setIsMounted] = useState(false);

  // Usamos useEffect para actualizar el estado después del montaje
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Si no estamos montados, renderizamos una versión estática sin animaciones
  if (!isMounted) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
        <div className="h-48 relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-grow">
            {description}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
              {githubUrl && (
                <a
                  href={githubUrl}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${title} en GitHub`}
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  Código
                </a>
              )}
              {demoUrl && (
                <a
                  href={demoUrl}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver demo de ${title}`}
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Versión con animaciones para el cliente
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
    >
      <div className="h-48 relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Overlay con links en hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${title} en GitHub`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
          {demoUrl && (
            <motion.a
              href={demoUrl}
              className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-gray-800 hover:bg-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${title}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 group-hover:text-gray-700 dark:text-white dark:group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3 flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
            {githubUrl && (
              <a
                href={githubUrl}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center text-sm font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver código de ${title} en GitHub`}
              >
                <Github className="w-4 h-4 mr-1.5" />
                Código
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center text-sm font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver demo de ${title}`}
              >
                <ExternalLink className="w-4 h-4 mr-1.5" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
