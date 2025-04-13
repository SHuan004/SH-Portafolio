"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2 } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ProjectCard from "@/components/ui/ProjectCard"; // Asegúrate de que la ruta sea correcta

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    once: true,
  });
  const [isMounted, setIsMounted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Usamos useEffect para actualizar el estado después del montaje
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleFilterChange = useCallback((categoryId: string) => {
    setFilter(categoryId);
    setCurrentIndex(0); // Resetear a la primera página al cambiar filtro
  }, []);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  // Número de proyectos a mostrar a la vez (responsivo)
  const getProjectsPerView = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    }
    return 2; // Default fallback
  };

  const projectsPerView = isMounted ? getProjectsPerView() : 2;

  // Calcular el número total de páginas
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / projectsPerView)
  );

  // Navegar a la página anterior
  const prevPage = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  }, [totalPages]);

  // Navegar a la página siguiente
  const nextPage = useCallback(() => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  }, [totalPages]);

  // Obtener los proyectos actuales para mostrar
  const currentProjects = filteredProjects.slice(
    currentIndex * projectsPerView,
    (currentIndex + 1) * projectsPerView
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-t border-b border-gray-100 dark:border-gray-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-5 border border-gray-300 dark:border-gray-600">
              PORTAFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Proyectos Destacados
            </h2>
          </div>

          {/* Filtros con mejor diseño */}
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-2 bg-white dark:bg-gray-800 p-1.5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`px-4 py-2 text-sm rounded-lg transition-all duration-300 font-medium ${
                    filter === category.id
                      ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Carrusel de proyectos mejorado */}
        <div className="relative" ref={carouselRef}>
          {/* Flecha izquierda */}
          {isMounted && (
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-6 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Proyectos anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
            {currentProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
              />
            ))}

            {/* Mostrar mensaje si no hay proyectos */}
            {currentProjects.length === 0 && (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                <Code2 className="w-16 h-16 text-gray-400 dark:text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  No hay proyectos en esta categoría
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Prueba seleccionando otra categoría de proyectos
                </p>
              </div>
            )}
          </div>

          {/* Flecha derecha */}
          {isMounted && (
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-6 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
              aria-label="Proyectos siguientes"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Indicadores de página mejorados */}
        {totalPages > 1 && isMounted && (
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-gray-800 dark:bg-gray-200 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Ir a página ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Contador de páginas */}
        {totalPages > 1 && isMounted && (
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
            {currentIndex + 1} de {totalPages}
          </div>
        )}
      </div>
    </section>
  );
}
