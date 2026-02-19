import Hero from "@/components/sections/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      
      {/* Summary Sections */}
      <section className="max-w-7xl mx-auto px-6 w-full space-y-24">
        
        {/* About Summary */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Sobre mí</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Ingeniero en formación con pasión por la arquitectura de software escalable.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition-colors">
            Conoce más sobre mi trayectoria <ArrowRight size={16} />
          </Link>
        </div>

        {/* Projects Summary */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Proyectos Destacados</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Explora algunas de las soluciones tecnológicas que he desarrollado.
          </p>
          <Link href="/projects" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium transition-colors">
            Ver portafolio completo <ArrowRight size={16} />
          </Link>
        </div>

        {/* Contact CTA */}
        <div className="bg-white/50 dark:bg-zinc-900/50 p-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center space-y-6">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">¿Listo para comenzar?</h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Si tienes una idea o proyecto en mente, me encantaría escucharlo.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-zinc-900 dark:text-white rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]">
            Contáctame ahora
          </Link>
        </div>

      </section>
    </div>
  );
}
