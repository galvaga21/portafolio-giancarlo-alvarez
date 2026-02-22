<script setup lang="ts">
import { RouterLink } from 'vue-router'

const topServices = [
  {
    title: 'Desarrollo Frontend',
    description: 'Interfaces modernas UI/UX con React, Vue y Angular.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Arquitectura Backend',
    description: 'APIs robustas aplicando metodologías ágiles como Scrum.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
  },
  {
    title: 'Gestión Cloud & DB',
    description: 'Bases de datos relacionales/NoSQL y AWS/Firebase.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
  }
]

const mainTechs = ['React', 'Angular', 'Vue', 'Java', 'Python', 'C#', 'SQL Server', 'MongoDB', 'AWS']
</script>

<template>
  <div class="relative overflow-x-hidden min-h-screen bg-slate-900 flex flex-col items-center pt-16 md:pt-24 pb-20">
    <!-- Hero Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center mt-8 md:mt-0 relative z-10">
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 mb-4 md:mb-6 drop-shadow-sm tracking-tight leading-tight md:leading-normal uppercase tracking-wider">
        Giancarlo Alvarez
      </h1>
      <h2 class="text-xl sm:text-2xl md:text-3xl text-slate-300 mb-6 md:mb-8 font-light px-2">
        Analista Programador Fullstack
      </h2>
      <p class="text-slate-400 max-w-2xl text-base md:text-lg mb-10 leading-relaxed px-4 mx-auto">
        Más de un año y ocho meses de experiencia en soluciones web integrales.
        Dominio sólido del desarrollo frontend y backend, bases de datos y metodologías ágiles para la entrega eficiente de software.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0">
        <RouterLink to="/contact" class="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
          Contáctame
        </RouterLink>
        <RouterLink to="/about" class="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-slate-800 text-sky-400 border border-slate-700 font-semibold hover:bg-slate-700 transition-all duration-300 relative overflow-hidden">
          Ver mi experiencia
        </RouterLink>
      </div>
    </section>

    <!-- About Summary Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/50">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="opacity-0 animate-fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Resumen <span class="text-sky-400">Profesional</span></h2>
          <p class="text-slate-400 text-lg mb-6 leading-relaxed">
            Me destaco por liderar la modernización de interfaces usando React, Next.js y Angular, además de optimizar arquitecturas tecnológicas. Mi objetivo es asegurar siempre la calidad, desde la creación de funcionalidades hasta el correcto despliegue.
          </p>
          <div class="flex gap-6 mb-8">
            <div>
              <p class="text-3xl font-bold text-indigo-400">casi 2</p>
              <p class="text-sm text-slate-500">Años de Exp.</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-purple-400">4+</p>
              <p class="text-sm text-slate-500">Roles TI Asumidos</p>
            </div>
          </div>
          <RouterLink to="/about" class="text-sky-400 font-semibold hover:text-sky-300 flex items-center group transition-colors">
            Conoce más sobre mi trayectoria
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </RouterLink>
        </div>
        <div class="relative opacity-0 animate-fade-in-up delay-100 hidden md:block w-full max-w-sm mx-auto">
          <div class="aspect-square md:aspect-[4/3] rounded-2xl border border-slate-700/50 p-1 flex items-center justify-center relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.3)] bg-slate-800">
            <div class="absolute inset-0 bg-slate-800/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img src="@/assets/giancarlo-alvarez.jpg" alt="Giancarlo Alvarez" class="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>

    <!-- Services Summary Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/50 relative">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 opacity-0 animate-fade-in-up">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Lo que <span class="text-indigo-400">Hago</span></h2>
          <p class="text-slate-400 max-w-xl">Ayudo a modernizar infraestructuras y a unificar interfaces de usuario mediante la investigación e integración de nuevas tecnologías.</p>
        </div>
        <RouterLink to="/services" class="hidden md:flex text-indigo-400 hover:text-indigo-300 font-medium items-center group transition-colors">
          Ver todos los servicios
          <svg class="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in topServices"
          :key="index"
          class="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] hover:-translate-y-1 opacity-0 animate-fade-in-up group"
          :style="`animation-delay: ${index * 100}ms`"
        >
          <div class="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-700 group-hover:border-indigo-500/50">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-200 mb-2">{{ service.title }}</h3>
          <p class="text-slate-400 text-sm">{{ service.description }}</p>
        </div>
      </div>

      <RouterLink to="/services" class="md:hidden mt-8 text-indigo-400 hover:text-indigo-300 font-medium flex items-center justify-center group transition-colors w-full border border-indigo-400/20 py-3 rounded-xl bg-indigo-400/5">
        Ver todos los servicios
        <svg class="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </RouterLink>
    </section>

    <!-- Techs & Contact Banner Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/50">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="opacity-0 animate-fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Stack <span class="text-purple-400">Tecnológico</span></h2>
          <p class="text-slate-400 mb-8">
            Domino desde lenguajes core para Backend como Java y C#, hasta los frameworks reactivos líderes en la industria como Angular y React.
          </p>
          <div class="flex flex-wrap gap-3 mb-8">
            <span v-for="tech in mainTechs" :key="tech" class="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-300 text-sm pointer-events-none">
              {{ tech }}
            </span>
          </div>
          <RouterLink to="/technologies" class="text-purple-400 font-semibold hover:text-purple-300 inline-flex items-center group transition-colors">
            Explorar todas las tecnologías
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </RouterLink>
        </div>

        <div class="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-8 sm:p-10 rounded-3xl text-center opacity-0 animate-fade-in-up delay-200">
          <h3 class="text-2xl font-bold text-white mb-4">¿Listo para empezar?</h3>
          <p class="text-slate-300 mb-8">
            Si buscas un desarrollador integral con experiencia real que garantice la calidad de tus páginas y bases de datos.
          </p>
          <RouterLink to="/contact" class="inline-block px-8 py-3 rounded-xl bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Contactar ahora
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Background Decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute top-2/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]"></div>
    </div>
  </div>
</template>
