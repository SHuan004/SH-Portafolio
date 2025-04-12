export const projects = [
  {
    title: "Sistema de Microservicios para E-commerce",
    description:
      "Arquitectura de microservicios para una plataforma de e-commerce que maneja más de 10,000 transacciones diarias. Implementación con Node.js, Express y comunicación asíncrona con RabbitMQ.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "MongoDB", "RabbitMQ", "Docker"],
    category: "backend",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "API RESTful para Gestión de Inventario",
    description:
      "API de alto rendimiento para gestión de inventario con Node.js y Express. Incluye autenticación JWT, roles de usuario, reportes en tiempo real y sincronización con sistemas externos.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    category: "api",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Plataforma de E-learning",
    description:
      "Sistema de gestión de cursos online desarrollado con Laravel. Incluye sistema de pagos, gestión de contenido multimedia, analíticas de aprendizaje y API para aplicaciones móviles.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Laravel", "MySQL", "Redis", "AWS S3", "WebSockets"],
    category: "fullstack",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Sistema de Procesamiento de Datos en Tiempo Real",
    description:
      "Plataforma para procesamiento y análisis de datos en tiempo real utilizando arquitectura de streaming. Procesa millones de eventos diarios con latencia mínima.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Kafka", "Elasticsearch", "Docker", "Kubernetes"],
    category: "backend",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "API GraphQL para Aplicación Móvil",
    description:
      "API GraphQL que sirve como backend para una aplicación móvil de fitness con más de 50,000 usuarios. Optimizada para consultas complejas y bajo consumo de datos.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "GraphQL", "Apollo", "MongoDB", "Redis"],
    category: "api",
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Sistema de Autenticación Multifactor",
    description:
      "Servicio de autenticación centralizado con soporte para múltiples factores, integración con proveedores OAuth y gestión avanzada de sesiones y permisos.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Node.js", "Express", "JWT", "OAuth", "PostgreSQL"],
    category: "security",
    githubUrl: "#",
    demoUrl: "#",
  },
];

export const projectCategories = [
  { id: "all", name: "Todos" },
  { id: "backend", name: "Backend" },
  { id: "api", name: "APIs" },
  { id: "fullstack", name: "Full Stack" },
  { id: "security", name: "Seguridad" },
];
