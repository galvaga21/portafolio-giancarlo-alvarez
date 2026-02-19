export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  metrics?: string[];
}

export const featuredProjects: Project[] = [
  {
    title: "Sistema de Gestión Oben Prime",
    description: "Plataforma integral para gestión operativa con módulos de reporte en tiempo real y dashboard administrativo.",
    tech: ["React", "Node.js", "SQL Server"],
    image: "/project-oben.jpg",
    github: "#",
    demo: "#"
  },
  {
    title: "Modernización Legacy - Infomatica",
    description: "Migración de sistema monolítico a arquitectura de micro-frontends con Next.js, mejorando el rendimiento en un 40%.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/project-migration.jpg",
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Personal V1",
    description: "Primera versión de mi portafolio digital enfocado en minimalismo y performance.",
    tech: ["HTML/CSS", "JavaScript"],
    image: "/project-portfolio.jpg",
    github: "#",
    demo: "#"
  }
];

export const moreProjects: Project[] = [
  {
    title: "E-commerce Dashboard Analytics",
    description: "Panel de administración para tiendas en línea que permite visualizar métricas de ventas en tiempo real, gestión de inventario y pedidos.",
    tech: ["Next.js 14", "Tremor UI", "PostgreSQL", "Prisma"],
    metrics: ["+40% eficiencia en gestión", "Reportes en <1s"],
    image: "/project-dashboard.jpg",
    github: "#",
    demo: "#"
  },
  {
    title: "Sistema de Citas Médicas",
    description: "Plataforma para clínicas que gestiona horarios de doctores, reserva de citas por pacientes y recordatorios automáticos por WhatsApp.",
    tech: ["React", "Node.js", "MongoDB", "Twilio API"],
    metrics: ["Reducción de ausentismo del 25%", "+1000 citas/mes"],
    image: "/project-medical.jpg",
    github: "#",
    demo: "#"
  },
   {
    title: "App de Finanzas Personales",
    description: "Aplicación móvil progresiva (PWA) para tracking de gastos e ingresos, con categorización inteligente mediante IA.",
    tech: ["Vue.js", "Firebase", "TensorFlow.js"],
    metrics: ["4.8/5 estrellas en feedback", "Offline-first"],
    image: "/project-finance.jpg",
    github: "#",
    demo: "#"
  }
];
