import { Server, Database, Code, Cloud, Lock, Cpu } from "lucide-react";

export const skillCategories = {
  backend: {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "NestJS", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Django", level: 70 },
    ],
  },
  databases: {
    icon: Database,
    title: "Bases de Datos",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "SQL Server", level: 88 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "DynamoDB", level: 70 },
    ],
  },
  devops: {
    icon: Cloud,
    title: "DevOps",
    skills: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "AWS", level: 80 },
      { name: "Terraform", level: 75 },
      { name: "Monitoring", level: 85 },
    ],
  },
  security: {
    icon: Lock,
    title: "Seguridad",
    skills: [
      { name: "OAuth/JWT", level: 90 },
      { name: "HTTPS/TLS", level: 85 },
      { name: "OWASP", level: 80 },
      { name: "Penetration Testing", level: 75 },
      { name: "Encryption", level: 85 },
      { name: "Security Audits", level: 80 },
    ],
  },
  architecture: {
    icon: Cpu,
    title: "Arquitectura",
    skills: [
      { name: "Microservicios", level: 90 },
      { name: "API Design", level: 95 },
      { name: "Event-Driven", level: 85 },
      { name: "Domain-Driven Design", level: 80 },
      { name: "System Design", level: 85 },
      { name: "Scalability Patterns", level: 80 },
    ],
  },
  tools: {
    icon: Code,
    title: "Herramientas",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Jira/Confluence", level: 85 },
      { name: "Postman/Insomnia", level: 90 },
      { name: "VS Code/JetBrains", level: 90 },
      { name: "Linux/Bash", level: 85 },
      { name: "Testing Frameworks", level: 80 },
    ],
  },
};
