import { 
  SiJavascript, SiTypescript, SiPython,
  SiReact, SiNextdotjs, SiAngular, SiTailwindcss, SiMaterialdesign,
  SiMongodb, SiFirebase, SiMysql,
  SiAmazon, SiGit, SiJira, SiDocker
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { IconType } from "react-icons";

export interface SkillCategory {
  title: string;
  skills: { name: string; icon: IconType; color: string }[];
}

export const skillCategories: SkillCategory[] = [
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
