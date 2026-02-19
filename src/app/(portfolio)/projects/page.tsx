import Projects from "@/components/sections/Projects";
import Section from "@/components/ui/Section";
import { Github, ExternalLink } from "lucide-react";
import { moreProjects } from "@/data/projects";

export const metadata = {
  title: "Proyectos | Giancarlo Alvarez",
  description: "Portafolio de proyectos de desarrollo de software.",
};

const detailedProjects = moreProjects;

export default function ProjectsPage() {
  return (
    <div className="pt-10">
      <Projects />
      
      <Section className="py-20">
        <h3 className="text-3xl font-bold text-white mb-10 text-center">Más Proyectos Recientes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {detailedProjects.map((project, index) => (
             <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500/50 transition-colors">
               <div className="h-40 bg-zinc-800 relative flex items-center justify-center">
                 <span className="font-bold text-zinc-600">{project.title} Preview</span>
               </div>
               <div className="p-6 space-y-4">
                 <h4 className="text-xl font-bold text-white">{project.title}</h4>
                 <p className="text-zinc-400 text-sm">{project.description}</p>
                 <div className="flex flex-wrap gap-2">
                   {project.tech.map(t => (
                     <span key={t} className="px-2 py-1 text-xs bg-zinc-800 text-zinc-300 rounded border border-zinc-700">{t}</span>
                   ))}
                 </div>
                 <div className="space-y-1 pt-2">
                    {project.metrics?.map((m, i) => (
                      <p key={i} className="text-xs text-green-400 flex items-center gap-1">
                        ✨ {m}
                      </p>
                    ))}
                 </div>
                 <div className="flex gap-4 pt-4 border-t border-zinc-800">
                   <a href={project.github} className="text-zinc-400 hover:text-white transition-colors"><Github size={18} /></a>
                   <a href={project.demo} className="text-indigo-400 hover:text-indigo-300 transition-colors"><ExternalLink size={18} /></a>
                 </div>
               </div>
             </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
