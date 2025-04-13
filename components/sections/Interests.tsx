"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { interests } from "@/data/interests";

export default function Interests() {
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
      id="interests"
      ref={ref}
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-t border-b border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 relative overflow-hidden"
    >
      {/* Elementos decorativos sutiles */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-gray-100 dark:bg-gray-800/30 rounded-full opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full mb-5 border border-gray-300 dark:border-gray-600">
            INTERESES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6  dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Más Allá del Código
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex flex-col items-center text-center"
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className={`${interest.bgColor} w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center mb-5 shadow-lg transform transition-all duration-300 group-hover:shadow-xl`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {interest.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="md:w-1/3">
            <motion.div
              className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-white dark:border-gray-700"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/images/balanced-life-juggling.png"
                alt="Balance en la vida"
                fill
                className="object-cover"
              />

              {/* Overlay decorativo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold mb-6  dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
              Equilibrio y Pasión
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              Creo firmemente en mantener un equilibrio entre la vida
              profesional y personal. Estos intereses no solo me ayudan a
              desconectar, sino que también nutren mi creatividad y enfoque como
              desarrollador.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              La misma pasión que pongo en escribir código la aplico a estas
              actividades, buscando siempre aprender y mejorar en todos los
              aspectos de mi vida.
            </p>

            {/* Elemento decorativo adicional */}
            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                "El equilibrio no es algo que encuentras, es algo que creas."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
