"use client";

import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Definimos un alias de tipo para las claves de skillCategories.
type SkillCategoryKey = keyof typeof skillCategories;

// Componente memoizado para las tarjetas de habilidades
const SkillCard = memo(
  ({ skill }: { skill: { name: string; level: number } }) => (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
      }}
      className="bg-white dark:bg-gray-800/95 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-lg text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className="text-sm font-semibold px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="bg-gray-800 dark:bg-gray-300 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        ></motion.div>
      </div>
    </motion.div>
  )
);

SkillCard.displayName = "SkillCard";

// Componente memoizado para los botones de categoría
const CategoryButton = memo(
  ({
    tab,
    activeTab,
    onClick,
  }: {
    tab: SkillCategoryKey;
    activeTab: SkillCategoryKey;
    onClick: (tab: SkillCategoryKey) => void;
  }) => {
    // Obtenemos el icono definido para la categoría
    const Icon = skillCategories[tab].icon;

    return (
      <motion.button
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
        }}
        onClick={() => onClick(tab)}
        className={`px-4 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 font-medium ${
          activeTab === tab
            ? "bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-900 shadow-md"
            : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-5 h-5" />
        <span>{skillCategories[tab].title}</span>
      </motion.button>
    );
  }
);

CategoryButton.displayName = "CategoryButton";

export default function Skills() {
  // Especificamos que activeTab es de tipo SkillCategoryKey
  const [activeTab, setActiveTab] = useState<SkillCategoryKey>("backend");
  const [sectionRef, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.2,
    once: true,
  });

  // Actualizamos el tipo de tab en la función
  const handleTabChange = useCallback((tab: SkillCategoryKey) => {
    setActiveTab(tab);
  }, []);

  // Forzamos la inferencia de las claves para que sean del tipo correcto
  const tabs = Object.keys(skillCategories) as SkillCategoryKey[];

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
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-b border-gray-100 dark:border-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-5 border border-gray-300 dark:border-gray-600">
            COMPETENCIAS TÉCNICAS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            He desarrollado un conjunto completo de habilidades técnicas
            enfocadas en el desarrollo backend y arquitectura de sistemas.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {tabs.map((tab) => (
            <CategoryButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              onClick={handleTabChange}
            />
          ))}
        </motion.div>

        {/* Grid de Habilidades */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories[activeTab].skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
