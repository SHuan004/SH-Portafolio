import { Server, Database, Lock, Cpu, Code, Zap } from "lucide-react";

export const backendProcesses = [
  {
    icon: Server,
    title: "Arquitectura de Sistemas",
    description:
      "Diseño de arquitecturas escalables, microservicios y APIs RESTful que soportan millones de peticiones.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Database,
    title: "Optimización de Bases de Datos",
    description:
      "Modelado eficiente de datos, consultas optimizadas y estrategias de caché para máximo rendimiento.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Lock,
    title: "Seguridad y Autenticación",
    description:
      "Implementación de protocolos de seguridad robustos, JWT, OAuth y protección contra vulnerabilidades.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Cpu,
    title: "Rendimiento y Escalabilidad",
    description:
      "Desarrollo de sistemas de alto rendimiento con balanceo de carga, escalado horizontal y vertical.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Code,
    title: "Código Limpio y Mantenible",
    description:
      "Desarrollo siguiendo principios SOLID, patrones de diseño y prácticas de código limpio.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Zap,
    title: "Integración Continua",
    description:
      "Implementación de pipelines CI/CD, testing automatizado y despliegue continuo.",
    color: "from-indigo-500 to-indigo-600",
  },
];
