<script setup lang="ts">
const educationItems = [
  {
    title: 'Ingeniería Informática: Tecnologías de la Información',
    institution: 'Universidad Ricardo Palma (Lima)',
    date: '2026',
    description: 'Formación profesional orientada al desarrollo e ingeniería de software integral.'
  },
  {
    title: 'Desarrollador MongoDB',
    institution: 'Cibertec (Lima)',
    date: '06/2023',
    description: 'Especialización en el manejo, modelado e implementación de bases de datos NoSQL con MongoDB.'
  },
  {
    title: 'Idioma Inglés Intermedio',
    institution: 'Instituto Británico (Lima)',
    date: '07/2019',
    description: 'Dominio intermedio del idioma que me permite leer y comprender documentación técnica avanzada.'
  }
]

const certificates = [
  'Certificado MongoDB Developer',
  'Certificado Taller SQL SERVER'
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh] transition-colors duration-300">
    <div class="text-center mb-16 opacity-0 animate-fade-in-up">
      <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B6FC9] to-[#3EC6E8] mb-6">
        Formación Académica
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-lg">
        La base teórica y académica de mi camino como profesional tecnológico.
      </p>
    </div>

    <!-- Timeline -->
    <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#3B6FC9]/40 dark:before:via-[#3B6FC9]/30 before:to-transparent mb-24 transition-colors">

      <div
        v-for="(item, index) in educationItems"
        :key="index"
        class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active opacity-0 animate-fade-in-up"
        :style="`animation-delay: ${index * 200}ms`"
      >
        <!-- Icon -->
        <div class="flex items-center justify-center w-10 h-10 rounded-full border border-slate-300 dark:border-[#3B6FC9]/30 bg-white dark:bg-[#1a2035] group-hover:bg-[#3B6FC9]/8 dark:group-hover:bg-[#3B6FC9]/15 text-slate-500 dark:text-slate-500 group-hover:text-[#3B6FC9] dark:group-hover:text-[#3EC6E8] group-hover:border-[#3B6FC9]/50 dark:group-hover:border-[#3EC6E8]/40 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 z-10">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
          </svg>
        </div>

        <!-- Content -->
        <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-[#1e2845]/60 p-6 rounded-2xl border border-slate-200 dark:border-[#3B6FC9]/15 group-hover:border-[#3B6FC9]/40 dark:group-hover:border-[#3EC6E8]/25 group-hover:bg-slate-50 dark:group-hover:bg-[#232946] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,111,201,0.1)] hover:-translate-y-1 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h3 class="font-bold text-slate-800 dark:text-white text-xl">{{ item.title }}</h3>
            <span class="text-sm font-medium text-[#3B6FC9] dark:text-[#3EC6E8] bg-[#3B6FC9]/8 dark:bg-[#3B6FC9]/15 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 border border-[#3B6FC9]/15 dark:border-[#3B6FC9]/25 transition-colors">{{ item.date }}</span>
          </div>
          <h4 class="text-[#3B6FC9] dark:text-[#3EC6E8] font-medium mb-3 transition-colors">{{ item.institution }}</h4>
          <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed transition-colors">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Certificados -->
    <div class="bg-white dark:bg-[#1e2845]/60 rounded-3xl p-8 border border-slate-200 dark:border-[#3B6FC9]/15 opacity-0 animate-fade-in-up delay-500 shadow-sm transition-colors">
      <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center transition-colors">
        <svg class="w-6 h-6 mr-3 text-[#3B6FC9] dark:text-[#3EC6E8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
        Certificados de Trabajo
      </h3>
      <ul class="space-y-4">
        <li v-for="cert in certificates" :key="cert" class="flex items-center text-slate-700 dark:text-slate-300 transition-colors">
          <span class="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B6FC9] to-[#3EC6E8] mr-4 shrink-0"></span>
          {{ cert }}
        </li>
      </ul>
    </div>

  </div>
</template>
