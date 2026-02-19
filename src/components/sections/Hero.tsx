"use client";

import { motion, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };


  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-black to-black opacity-50"></div>
      
      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-6"
      >
        <motion.p variants={item} className="text-lg md:text-xl text-indigo-600 dark:text-indigo-400 font-medium tracking-wide">
          Hola, soy
        </motion.p>
        
        <motion.h1 
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-slate-200 dark:to-slate-400 pb-2"
        >
          Giancarlo Alvarez
        </motion.h1>
        
        <motion.h2 
          variants={item}
          className="text-2xl md:text-4xl font-semibold text-zinc-600 dark:text-slate-400"
        >
          Desarrollador Fullstack & <span className="text-indigo-600 dark:text-indigo-400">Analista Programador</span>
        </motion.h2>

        <motion.p 
          variants={item}
          className="max-w-2xl mx-auto text-base md:text-lg text-zinc-600 dark:text-slate-400 leading-relaxed"
        >
          Especializado en transformar ideas complejas en soluciones web escalables y modernas. 
          Experto en React, Next.js y el ecosistema Cloud.
        </motion.p>

        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Link 
            href="#projects"
            className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)]"
          >
            Ver Proyectos
          </Link>
          <a
            href="/cv.pdf" // Placeholder for CV path
            className="px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
          >
            <FileText size={18} /> Descargar CV
          </a>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex gap-6 justify-center pt-8 text-slate-400"
        >
          <a href="https://github.com/giancarlo-alvarez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/giancarlo-alvarez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@giancarlo.dev" className="hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
