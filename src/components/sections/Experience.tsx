import Section from "@/components/ui/Section";
import { Briefcase } from "lucide-react";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <Section id="experience" className="bg-transparent">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
          Experiencia Profesional
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
          Mi trayectoria profesional construyendo soluciones de valor en diferentes industrias.
        </p>
      </div>

      <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 md:ml-12 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            {/* Timeline Dot */}
            <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white dark:bg-zinc-950 border-2 border-indigo-500 rounded-full group-hover:bg-indigo-500 transition-colors duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-400 transition-colors">
                  {exp.role}
                </h3>
                <h4 className="text-lg text-zinc-600 dark:text-zinc-400 font-medium flex items-center gap-2 mt-1">
                  <Briefcase className="w-4 h-4" />
                  {exp.company}
                </h4>
              </div>
              <span className="text-sm font-mono text-zinc-600 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1 rounded-md w-fit">
                {exp.period}
              </span>
            </div>
            
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
