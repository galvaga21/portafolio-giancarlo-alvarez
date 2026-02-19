import About from "@/components/sections/About";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Sobre mí | Giancarlo Alvarez",
  description: "Conoce más sobre mi trayectoria educativa y profesional.",
};

export default function AboutPage() {
  return (
    <div className="pt-10">
      <About />
      
      <Section className="py-10">
        <h3 className="text-2xl font-bold text-white mb-6">Educación</h3>
        <div className="space-y-8 border-l border-zinc-800 ml-4 pl-8 relative">
           <div className="relative group">
            <div className="absolute -left-[37px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-black"></div>
            <h4 className="text-xl font-bold text-white">Ingeniería Informática</h4>
            <p className="text-zinc-400">Universidad Ricardo Palma</p>
            <p className="text-sm text-zinc-500 mt-1">2019 - Presente</p>
            <p className="mt-2 text-zinc-400">
              Enfoque en Ciencias de la Computación, Ingeniería de Software y Gestión de Proyectos TI.
              Participación en círculos de estudios de Algoritmia y Desarrollo Web.
            </p>
           </div>
           
           <div className="relative group">
            <div className="absolute -left-[37px] top-1 w-4 h-4 bg-zinc-700 rounded-full border-2 border-black group-hover:bg-indigo-500 transition-colors"></div>
            <h4 className="text-xl font-bold text-white">Full Stack Development Bootcamp</h4>
            <p className="text-zinc-400">Platzi / Udemy</p>
            <p className="text-sm text-zinc-500 mt-1">2021</p>
            <p className="mt-2 text-zinc-400">
              Especialización intensiva en el ecosistema JavaScript moderno (React, Node.js, Express, MongoDB).
            </p>
           </div>
        </div>
      </Section>
    </div>
  );
}
