<script setup lang="ts">
import cvPdfUrl from '@/assets/GiancarloJoel_AlvarezGallardo_CV.pdf'

const exp = [
  {
    role: 'Analista Programador Fullstack',
    company: 'Infomatica Servicios Generales',
    location: 'Lima',
    date: 'Feb 2026 - Actual',
    details: 'Lidero la modernización del frontend migrando sistemas corporativos a React y Next.js. Desarrollé una librería de componentes estandarizada con Material UI para unificar la interfaz de usuario y optimicé la arquitectura tecnológica de la empresa mediante la investigación e integración de nuevas herramientas.'
  },
  {
    role: 'Desarrollador Fullstack',
    company: 'JOYIT SAC',
    location: 'Lima',
    date: 'Jun 2025 - Jul 2025',
    details: 'Me desempeñé con Desarrollador Fullstack en el proyecto al cliente Oben Group para el sistema Oben Prime, orientado a la gestión de los procesos de manufactura.'
  },
  {
    role: 'Desarrollador Fullstack Junior',
    company: 'Software Enterprise Services',
    location: 'Lima',
    date: 'Feb 2024 - Oct 2024',
    details: 'Resolución de incidencias y atención a requerimientos diversos dentro de los sistemas principales de SES.'
  },
  {
    role: 'Desarrollador Web TI',
    company: 'Remain Computers',
    location: 'Lima',
    date: 'Feb 2023 - Feb 2024',
    details: 'Me desempeñaba como programador web y gestor de hosting de los clientes de la empresa, asegurando la calidad de sus páginas webs, el despliegue correcto en el hosting y la creación de funcionalidades a medida.'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh] flex flex-col items-center">

    <!-- About Me Section -->
    <div class="grid md:grid-cols-2 gap-12 items-center w-full mb-24 opacity-0 animate-fade-in-up mt-8">
      <!-- Image / Visual -->
      <div class="relative w-full max-w-sm mx-auto group perspective-1000">
        <!-- Floating Effects & Border -->
        <div class="absolute -inset-0.5 bg-gradient-to-br from-sky-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-500 animate-pulse"></div>
        <div class="aspect-square rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center p-2 backdrop-blur-sm relative overflow-hidden bg-white dark:bg-slate-800 transition-colors shadow-2xl group-hover:scale-[1.02] transform duration-700">
          <img src="@/assets/giancarlo-alvarez.jpg" alt="Giancarlo Alvarez" class="w-full h-full object-cover rounded-full transition-transform duration-1000 group-hover:scale-110" />
        </div>
        <!-- Decorations -->
        <div class="absolute -top-4 -right-4 w-24 h-24 bg-sky-500/20 rounded-full blur-[80px] -z-10 group-hover:blur-[100px] transition-all"></div>
        <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-[80px] -z-10 group-hover:blur-[100px] transition-all delay-100"></div>
      </div>

      <!-- Content -->
      <div class="flex flex-col text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 mb-4">
          Giancarlo Joel Alvarez Gallardo
        </h1>
        <h2 class="text-2xl text-slate-700 dark:text-slate-300 mb-6 font-light">
          Analista Programador Fullstack
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
          Desarrollador Fullstack con más de un año y ocho meses de experiencia sólida en soluciones web integrales. Domino el desarrollo backend y frontend, la gestión estratégica de bases de datos SQL y NoSQL, y aplico activamente metodologías ágiles (Scrum) para asegurar entregas continuas y eficientes de software.
        </p>

        <div class="flex items-center justify-center md:justify-start gap-4">
          <a :href="cvPdfUrl" download="GiancarloJoel_AlvarezGallardo_CV.pdf" target="_blank" class="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 text-white font-bold hover:bg-sky-400 hover:-translate-y-1 transition-all duration-300 shadow-[0_10px_30px_rgba(56,189,248,0.3)] hover:shadow-[0_15px_40px_rgba(56,189,248,0.5)] group relative overflow-hidden">
            <span class="relative z-10">Descargar CV (PDF)</span>
            <svg class="w-5 h-5 relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            <div class="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          </a>
        </div>
      </div>
    </div>

    <!-- Experience Timeline -->
    <div class="w-full max-w-4xl mx-auto border-t border-slate-200 dark:border-slate-800/50 pt-16 opacity-0 animate-fade-in-up delay-200 transition-colors">
      <h3 class="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Experiencia <span class="text-indigo-600 dark:text-indigo-400">Laboral</span></h3>

      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">

        <div
          v-for="(job, index) in exp"
          :key="index"
          class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active opacity-0 animate-fade-in-up"
          :style="`animation-delay: ${(index * 150) + 300}ms`"
        >
          <!-- Icon Point -->
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900 text-slate-500 dark:text-slate-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:border-indigo-300 dark:group-hover:border-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 z-10">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </div>

          <!-- Box Content -->
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800/40 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(99,102,241,0.08)] hover:-translate-y-1.5 relative overflow-hidden">
             <!-- Top Gradient Line on Hover -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            <h4 class="font-black text-slate-800 dark:text-white text-xl mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{{ job.role }}</h4>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <span class="text-sky-600 dark:text-sky-400 font-semibold">{{ job.company }}</span>
              <span class="text-xs font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/80 px-4 py-1.5 rounded-full mt-2 sm:mt-0 transition-colors border border-slate-200 dark:border-slate-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/50">{{ job.date }}</span>
            </div>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300">
              {{ job.details }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
