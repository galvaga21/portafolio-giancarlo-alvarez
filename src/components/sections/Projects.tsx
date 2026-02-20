"use client";


import { ExternalLink/* , Github */ } from "lucide-react";
import Section from "@/components/ui/Section";

import { featuredProjects } from "@/data/projects";

import SpotlightCard from "@/components/ui/SpotlightCard";

export default function Projects() {
  return (
    <Section id="projects" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
          Proyectos Destacados
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Una selección de trabajos clave que demuestran capacidades técnicas y resolución de problemas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <SpotlightCard key={index} className="h-full">
             {/* Image Placeholder */}
            <div className="h-48 w-full bg-zinc-100 dark:bg-zinc-800 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-bold bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900">
                 {project.title} Preview
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-700">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {/* <a href={project.github} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:text-white transition-colors">
                  <Github size={16} /> Code
                </a> */}
                <a href={project.demo} className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                  Live Demo <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </Section>
  );
}
