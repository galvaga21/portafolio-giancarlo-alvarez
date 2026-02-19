"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Section from "./Section";

const projects = [
  {
    title: "Sistema de Gestión Oben Prime",
    description: "Plataforma integral para gestión operativa con módulos de reporte en tiempo real y dashboard administrativo.",
    tech: ["React", "Node.js", "SQL Server"],
    image: "/project-oben.jpg", // Placeholder
    github: "#",
    demo: "#"
  },
  {
    title: "Modernización Legacy - Infomatica",
    description: "Migración de sistema monolítico a arquitectura de micro-frontends con Next.js, mejorando el rendimiento en un 40%.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/project-migration.jpg", // Placeholder
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Personal V1",
    description: "Primera versión de mi portafolio digital enfocado en minimalismo y performance.",
    tech: ["HTML/CSS", "JavaScript"],
    image: "/project-portfolio.jpg", // Placeholder
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <Section id="projects" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Proyectos Destacados
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Una selección de trabajos clave que demuestran capacidades técnicas y resolución de problemas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 shadow-lg hover:shadow-indigo-500/10"
          >
            {/* Image Placeholder */}
            <div className="h-48 w-full bg-zinc-800 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bold bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:scale-105 transition-transform duration-500">
                 {project.title} Preview
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-800">
                <a href={project.github} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                  <Github size={16} /> Code
                </a>
                <a href={project.demo} className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
