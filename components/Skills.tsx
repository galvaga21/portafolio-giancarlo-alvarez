import Section from "./Section";
import { 
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiMaterialdesign,
  SiMongodb, SiFirebase, SiMysql,
  SiAmazon, SiGit, SiJira, SiDocker
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";


interface SkillCategory {
  title: string;
  skills: { name: string; icon: React.ElementType; color: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
      { name: "Python", icon: SiPython, color: "text-blue-400" },
      { name: "Java", icon: FaJava, color: "text-red-500" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "React", icon: SiReact, color: "text-cyan-400" },
      { name: "Angular", icon: SiAngular, color: "text-red-600" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
      { name: "Material UI", icon: SiMaterialdesign, color: "text-blue-400" },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "SQL Server", icon: DiMsqlServer, color: "text-red-500" },
      { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-300" },
    ],
  },
  {
    title: "Herramientas",
    skills: [
      { name: "AWS", icon: SiAmazon, color: "text-orange-400" },
      { name: "Git", icon: SiGit, color: "text-orange-600" },
      { name: "Jira", icon: SiJira, color: "text-blue-500" },
      { name: "Docker", icon: SiDocker, color: "text-blue-400" },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Habilidades Técnicas
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
          Tecnologías que domino y utilizo para construir soluciones robustas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <h3 className="text-xl font-bold text-indigo-400 mb-6 border-b border-zinc-800 pb-2">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-zinc-800/50 transition-colors group">
                  <skill.icon className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
