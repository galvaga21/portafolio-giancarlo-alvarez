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
  <div class="relative overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center pt-16 md:pt-24 pb-20 transition-colors duration-300">
    <!-- Hero Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[70vh] text-center mt-8 md:mt-0 relative z-10 transition-all duration-700">
      <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 dark:from-sky-400 dark:via-indigo-400 dark:to-purple-500 mb-4 md:mb-6 drop-shadow-sm tracking-tighter leading-tight md:leading-[1.1] uppercase">
        Giancarlo Alvarez
      </h1>
      <h2 class="text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6 md:mb-8 font-light px-2">
        Analista Programador Fullstack
      </h2>
      <p class="text-slate-600 dark:text-slate-400 max-w-2xl text-base md:text-lg mb-10 leading-relaxed px-4 mx-auto">
        Más de un año y ocho meses de experiencia en soluciones web integrales.
        Dominio sólido del desarrollo frontend y backend, bases de datos y metodologías ágiles para la entrega eficiente de software.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto px-4 sm:px-0">
        <RouterLink to="/contact" class="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all duration-300 shadow-md hover:shadow-lg dark:shadow-[0_0_20px_rgba(56,189,248,0.3)] dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
          Contáctame
        </RouterLink>
        <RouterLink to="/about" class="w-full sm:w-auto text-center px-8 py-3 rounded-full bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 border border-slate-300 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 relative overflow-hidden shadow-sm">
          Ver mi experiencia
        </RouterLink>
      </div>
    </section>

    <!-- About Summary Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800/50 transition-colors">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="opacity-0 animate-fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Resumen <span class="text-sky-500 dark:text-sky-400">Profesional</span></h2>
          <p class="text-slate-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
            Me destaco por liderar la modernización de interfaces usando React, Next.js y Angular, además de optimizar arquitecturas tecnológicas. Mi objetivo es asegurar siempre la calidad, desde la creación de funcionalidades hasta el correcto despliegue.
          </p>
          <div class="flex gap-6 mb-8">
            <div>
              <p class="text-3xl font-bold text-indigo-600 dark:text-indigo-400">casi 2</p>
              <p class="text-sm text-slate-500 dark:text-slate-500">Años de Exp.</p>
            </div>
            <div>
              <p class="text-3xl font-bold text-purple-600 dark:text-purple-400">4+</p>
              <p class="text-sm text-slate-500 dark:text-slate-500">Roles TI Asumidos</p>
            </div>
          </div>
          <RouterLink to="/about" class="text-sky-600 dark:text-sky-400 font-semibold hover:text-sky-500 dark:hover:text-sky-300 flex items-center group transition-colors">
            Conoce más sobre mi trayectoria
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </RouterLink>
        </div>
        <div class="relative opacity-0 animate-fade-in-up delay-100 hidden md:block w-full max-w-sm mx-auto">
          <div class="aspect-square md:aspect-[4/3] rounded-2xl border border-slate-200 dark:border-slate-700/50 p-1 flex items-center justify-center relative overflow-hidden group shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(0,0,0,0.3)] bg-white dark:bg-slate-800 transition-colors">
            <div class="absolute inset-0 bg-slate-100/50 dark:bg-slate-800/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
            <img src="@/assets/giancarlo-alvarez.jpg" alt="Giancarlo Alvarez" class="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </section>

    <!-- Metodología y Enfoque Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800/50 relative z-10 transition-colors">
      <div class="text-center mb-16 opacity-0 animate-fade-in-up">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Mi Filosofía de <span class="text-sky-500 dark:text-sky-400">Trabajo</span></h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          No solo escribo código, diseño soluciones robustas bajo los más estrictos estándares de la industria, garantizando escalabilidad y mantenimiento a largo plazo.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 text-center opacity-0 animate-fade-in-up shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
          <div class="w-14 h-14 bg-sky-50 dark:bg-sky-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-sky-100 dark:border-sky-500/20 group-hover:bg-sky-100 dark:group-hover:bg-sky-500/20 transition-colors">
            <svg class="w-7 h-7 text-sky-500 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2">Clean Code</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">Desarrollo usando convenciones limpias, patrones de diseño y principios SOLID.</p>
        </div>
        <div class="bg-white dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 text-center opacity-0 animate-fade-in-up delay-100 shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
          <div class="w-14 h-14 bg-indigo-50 dark:bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-indigo-100 dark:border-indigo-500/20 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors">
            <svg class="w-7 h-7 text-indigo-500 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2">Metodología Ágil</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">Sólida experiencia trabajando bajo el marco de Scrum, integrando entregas continuas.</p>
        </div>
        <div class="bg-white dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 text-center opacity-0 animate-fade-in-up delay-200 shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
          <div class="w-14 h-14 bg-purple-50 dark:bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-100 dark:border-purple-500/20 group-hover:bg-purple-100 dark:group-hover:bg-purple-500/20 transition-colors">
            <svg class="w-7 h-7 text-purple-500 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2">Seguridad & Rendimiento</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">Enfoque proactivo en la optimización de consultas a la BD y latencia de APIs.</p>
        </div>
        <div class="bg-white dark:bg-slate-800/20 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/50 text-center opacity-0 animate-fade-in-up delay-300 shadow-lg hover:-translate-y-2 transition-transform duration-300 group">
          <div class="w-14 h-14 bg-pink-50 dark:bg-pink-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-pink-100 dark:border-pink-500/20 group-hover:bg-pink-100 dark:group-hover:bg-pink-500/20 transition-colors">
            <svg class="w-7 h-7 text-pink-500 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-2">Interfaces de Alto Nivel</h3>
          <p class="text-sm text-slate-500 dark:text-slate-400">Desarrollo de pantallas interactivas "Pixel Perfect" y completamente Responsive.</p>
        </div>
      </div>
    </section>

    <!-- Services Summary Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800/50 relative">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 opacity-0 animate-fade-in-up">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Lo que <span class="text-indigo-600 dark:text-indigo-400">Hago</span></h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-xl">Ayudo a modernizar infraestructuras y a unificar interfaces de usuario mediante la investigación e integración de nuevas tecnologías.</p>
        </div>
        <RouterLink to="/services" class="hidden md:flex text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium items-center group transition-colors">
          Ver todos los servicios
          <svg class="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in topServices"
          :key="index"
          class="bg-white dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 rounded-2xl p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_10px_30px_rgba(99,102,241,0.1)] hover:-translate-y-1 opacity-0 animate-fade-in-up group"
          :style="`animation-delay: ${index * 100}ms`"
        >
          <div class="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-700 group-hover:border-indigo-300 dark:group-hover:border-indigo-500/50 transition-colors">
            <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">{{ service.title }}</h3>
          <p class="text-slate-600 dark:text-slate-400 text-sm">{{ service.description }}</p>
        </div>
      </div>

      <RouterLink to="/services" class="md:hidden mt-8 text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 font-medium flex items-center justify-center group transition-colors w-full border border-indigo-200 dark:border-indigo-400/20 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-400/5">
        Ver todos los servicios
        <svg class="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </RouterLink>
    </section>

    <!-- Techs & Contact Banner Section -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-200 dark:border-slate-800/50">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <div class="opacity-0 animate-fade-in-up">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Stack <span class="text-purple-600 dark:text-purple-400">Tecnológico</span></h2>
          <p class="text-slate-600 dark:text-slate-400 mb-8">
            Domino desde lenguajes core para Backend como Java y C#, hasta los frameworks reactivos líderes en la industria como Angular y React.
          </p>
          <div class="flex flex-wrap gap-3 mb-8">
            <span v-for="tech in mainTechs" :key="tech" class="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-full text-slate-700 dark:text-slate-300 text-sm pointer-events-none transition-colors">
              {{ tech }}
            </span>
          </div>
          <RouterLink to="/technologies" class="text-purple-600 dark:text-purple-400 font-semibold hover:text-purple-500 dark:hover:text-purple-300 inline-flex items-center group transition-colors">
            Explorar todas las tecnologías
            <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </RouterLink>
        </div>

        <div class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-500/10 dark:to-purple-500/10 border border-indigo-100 dark:border-indigo-500/20 p-8 sm:p-10 rounded-3xl text-center opacity-0 animate-fade-in-up delay-200 shadow-sm transition-colors">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">¿Listo para empezar?</h3>
          <p class="text-slate-600 dark:text-slate-300 mb-8">
            Si buscas un desarrollador integral con experiencia real que garantice la calidad de tus páginas y bases de datos.
          </p>
          <RouterLink to="/contact" class="inline-block px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Contactar ahora
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Background Decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute top-2/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px]"></div>
    </div>
  </div>
</template>
