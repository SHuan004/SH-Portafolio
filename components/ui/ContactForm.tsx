"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, ArrowUp, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error when user types
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulación de envío de formulario
    try {
      // Aquí iría la lógica real de envío
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Envíame un Mensaje
      </h3>

      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            className="mb-6 p-5 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-xl flex items-start border border-green-100 dark:border-green-800/30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <CheckCircle className="w-5 h-5 mr-3 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium mb-2">Mensaje enviado correctamente</p>
              <p className="text-sm text-green-700 dark:text-green-300">
                ¡Gracias por contactarme! Te responderé lo antes posible.
              </p>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="text-sm text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-100 flex items-center mt-3 font-medium"
              >
                Volver arriba <ArrowUp className="w-3 h-3 ml-1" />
              </button>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            className="mb-6 p-5 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-xl flex items-start border border-red-100 dark:border-red-800/30"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <AlertCircle className="w-5 h-5 mr-3 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium mb-2">Error al enviar el mensaje</p>
              <p className="text-sm text-red-700 dark:text-red-300">
                Hubo un problema al enviar tu mensaje. Por favor, intenta
                nuevamente o contáctame directamente por correo.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form className="space-y-6 flex-grow" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name
                  ? "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10"
                  : "border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 dark:bg-gray-800/50"
              } focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors`}
              placeholder="Tu nombre"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email
                  ? "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10"
                  : "border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 dark:bg-gray-800/50"
              } focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors dark:bg-gray-800/50"
            placeholder="Asunto de tu mensaje"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Mensaje <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.message
                ? "border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/10"
                : "border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-400 dark:bg-gray-800/50"
            } focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 transition-colors`}
            placeholder="Tu mensaje..."
          ></textarea>
          {errors.message && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">
              {errors.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
            isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span className="ml-2">Enviando...</span>
            </>
          ) : (
            <>
              <span>Enviar Mensaje</span>
              <Send className="w-4 h-4 ml-1" />
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
}
