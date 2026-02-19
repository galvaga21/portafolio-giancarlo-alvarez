export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Infomatica Servicios Generales",
    role: "Líder de Modernización Frontend",
    period: "2023 - Presente",
    description: "Liderando la migración de sistemas legados a tecnologías modernas (React/Next.js). Implementación de mejores prácticas de UI/UX y estandarización de componentes UI."
  },
  {
    company: "JOYIT SAC",
    role: "Desarrollador Fullstack - Proyecto Oben Prime",
    period: "2022 - 2023",
    description: "Desarrollo de módulos críticos para la gestión operativa en Oben Prime. Integración de servicios backend y optimización de rendimiento en base de datos."
  },
  {
    company: "Software Enterprise Services",
    role: "Analista Programador",
    period: "2021 - 2022",
    description: "Análisis de requerimientos y desarrollo de soluciones empresariales. Mantenimiento de sistemas legacy y desarrollo de nuevas funcionalidades en entorno Java/Spring."
  }
];
