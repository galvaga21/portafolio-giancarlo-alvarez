<script setup lang="ts">
const educationItems = [
  {
    title: 'Ingeniería Informática',
    institution: 'Universidad Tecnológica de la Información',
    date: '2020 - 2024',
    description: 'Licenciatura enfocada en ciencias de la computación, arquitectura de software, bases de datos complejas y metodologías ágiles de trabajo. Proyecto de titulación con honores.'
  },
  {
    title: 'Diplomado en Desarrollo Fullstack Moderno',
    institution: 'Tech Institute Avanzado',
    date: '2023',
    description: 'Especialización intensiva en el ecosistema JavaScript/TypeScript, construyendo APIS robustas orientadas a micro-servicios y SPA altamente interactivas.'
  },
  {
    title: 'Certificación de Arquitectura Cloud',
    institution: 'Cloud Native Training',
    date: '2022',
    description: 'Diseño de infraestructuras escalables, gestión de costos, serverless y despliegues automáticos (CI/CD) en la nube.'
  }
]
</script>
<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh]">
    <div class="text-center mb-16 opacity-0 animate-fade-in-up">
      <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-6">
        Formación Académica
      </h1>
      <p class="text-slate-400 text-lg">
        Mi trayectoria educativa y certificaciones que respaldan mi conocimiento técnico en ingeniería.
      </p>
    </div>
    <!-- Timeline Wrapper -->
    <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

      <div
        v-for="(item, index) in educationItems"
        :key="index"
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active opacity-0 animate-fade-in-up"
        :style="`animation-delay: ${index * 200}ms`"
      >
        <!-- Icon -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-slate-800 text-slate-500 group-hover:text-sky-400 group-hover:border-sky-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 z-10">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
        </div>

        <!-- Content -->
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-800/40 p-6 rounded-2xl border border-slate-700/50 group-hover:border-sky-500/30 group-hover:bg-slate-800/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:-translate-y-1">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h3 class="font-bold text-white text-xl">{{ item.title }}</h3>
            <span class="text-sm font-medium text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-sky-400/20">{{ item.date }}</span>
          </div>
          <h4 class="text-indigo-400 font-medium mb-3">{{ item.institution }}</h4>
          <p class="text-slate-400 text-sm leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
