<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Acerca de', path: '/about' },
  { name: 'Servicios', path: '/services' },
  { name: 'Tecnologías', path: '/technologies' },
  { name: 'Educación', path: '/education' },
  { name: 'Contacto', path: '/contact' }
]
</script>

<template>
  <div class="relative overflow-hidden min-h-screen bg-slate-900 flex flex-col items-center pt-24">
    <!-- Hero Section Summary -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 class="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-500 mb-6 drop-shadow-sm tracking-tight">
        Giancarlo Alvarez
      </h1>
      <h2 class="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
        Ingeniero Informático & Desarrollador Fullstack
      </h2>
      <p class="text-slate-400 max-w-2xl text-lg mb-10 leading-relaxed">
        Construyendo soluciones escalables y experiencias digitales modernas.
        Uniendo la pasión por el diseño con la robustez de la ingeniería de software.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mb-20">
        <RouterLink to="/contact" class="px-8 py-3 rounded-full bg-sky-500 text-white font-semibold hover:bg-sky-400 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
          Contáctame
        </RouterLink>
        <RouterLink to="/about" class="px-8 py-3 rounded-full bg-slate-800 text-sky-400 border border-slate-700 font-semibold hover:bg-slate-700 transition-all duration-300">
          Conóceme más
        </RouterLink>
      </div>
    </section>

    <!-- Brief Summary Cards of Other Pages -->
    <section class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 border-t border-slate-800/50 pt-16">
      <h3 class="text-2xl font-bold text-white mb-10 text-center">Explora mi trayectoria</h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <RouterLink
          v-for="link in navLinks.filter(l => l.path !== '/' && l.path !== '/about')"
          :key="link.path"
          :to="link.path"
          class="group bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)] flex flex-col items-center text-center"
        >
          <div class="h-14 w-14 rounded-full bg-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <div class="h-6 w-6 bg-sky-400 rounded-sm opacity-80 group-hover:bg-indigo-400 transition-colors"></div>
          </div>
          <h4 class="text-lg font-semibold text-slate-100 mb-2">{{ link.name }}</h4>
          <p class="text-sm text-slate-400">Descubre más sobre mi experiencia y habilidades en esta área.</p>
        </RouterLink>
      </div>
    </section>

    <!-- Background Decoration -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
  </div>
</template>
