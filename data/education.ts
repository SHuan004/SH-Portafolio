import { GraduationCap, Award, BookOpen } from "lucide-react";

export const education = [
  {
    degree: "Ingeniería en Computación e Informática",
    institution: "Universidad Católica del Norte",
    period: "2020 - 2023",
    description:
      "Formación integral en ciencias de la computación, algoritmos, estructuras de datos, arquitectura de sistemas y desarrollo de software. Especialización en desarrollo de aplicaciones y sistemas distribuidos.",
    icon: GraduationCap,
  },
];

export const certifications = [
  {
    name: "IBM Back-End Development",
    issuer: "IBM",
    date: "Diciembre 2024",
    icon: Award,
    credentialId: "H1WZ89S9K83X",
    description:
      "Programa especializado que cubre el desarrollo de aplicaciones backend escalables, arquitecturas de microservicios, contenedores, y prácticas DevOps. Incluye formación en bases de datos SQL y NoSQL, así como implementación de APIs RESTful y GraphQL.",
    skills: [
      "Microservicios",
      "Kubernetes",
      "NoSQL",
      "SQL",
      "CI/CD",
      "Python",
      "MongoDB",
      "Docker",
      "DevOps",
    ],
    url: "https://www.ibm.com/training/badge/ibm-back-end-development",
  },
  {
    name: "Health Level Seven (HL7)",
    issuer: "HL7 Chile",
    date: "Agosto 2024",
    icon: Award,
    description:
      "Certificación oficial en estándares HL7 para interoperabilidad en sistemas de salud. Incluye conocimientos en intercambio de datos clínicos, integración de sistemas hospitalarios, y manejo de información médica siguiendo estándares internacionales de seguridad y privacidad.",
    skills: [
      "Administración de bases de datos",
      "Microsoft SQL Server",
      "HL7",
      "MySQL",
      "Interoperabilidad",
      "Sistemas de Salud",
    ],
    url: "https://www.hl7chile.cl/",
  },
  {
    name: "Desarrollador Backend Node.js TypeScript",
    issuer: "Desafío Latam",
    date: "2023",
    icon: BookOpen,
    description:
      "Bootcamp intensivo de desarrollo backend con Node.js y TypeScript. El programa cubre arquitectura de servidores, diseño de APIs RESTful, integración con bases de datos, autenticación y autorización, testing, y despliegue de aplicaciones en entornos de producción.",
    skills: [
      "Node.js",
      "TypeScript",
      "Express",
      "APIs RESTful",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "Testing",
      "JWT",
    ],
    url: "https://desafiolatam.com/",
  },
];
