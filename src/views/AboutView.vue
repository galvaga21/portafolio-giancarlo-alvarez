<script setup lang="ts">
// Page view for /about
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh] flex items-center">
    <div class="grid md:grid-cols-2 gap-12 items-center w-full">
      <!-- Image / Visual -->
      <div class="relative opacity-0 animate-fade-in-up">
        <div class="aspect-square rounded-2xl bg-gradient-to-tr from-sky-500/20 to-purple-500/20 border border-slate-700/50 flex items-center justify-center p-8 backdrop-blur-sm relative overflow-hidden group">
          <div class="absolute inset-0 bg-slate-800/50 group-hover:bg-slate-800/30 transition-colors duration-500"></div>
          <!-- Placeholder profile image -->
          <svg class="w-48 h-48 text-slate-500 z-10 group-hover:scale-110 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </div>
        <!-- Decorations -->
        <div class="absolute -top-4 -right-4 w-24 h-24 bg-sky-500/20 rounded-full blur-xl -z-10"></div>
        <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl -z-10"></div>
      </div>

      <!-- Content -->
      <div class="flex flex-col opacity-0 animate-fade-in-up delay-200">
        <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-6">
          Sobre Mí
        </h1>
        <h2 class="text-2xl text-slate-200 mb-4 font-light">
          Ingeniero Informático & Desarrollador Fullstack
        </h2>
        <p class="text-slate-400 text-lg mb-6 leading-relaxed">
          Soy un apasionado de la tecnología con más de 3 años de experiencia creando soluciones digitales. Me especializo en el desarrollo de aplicaciones web escalables, arquitecturas de software modernas y en brindar experiencias de usuario fluidas e intuitivas.
        </p>
        <p class="text-slate-400 text-lg mb-8 leading-relaxed">
          La ingeniería de software para mí no es solo escribir código, es resolver problemas complejos con creatividad, aplicando las mejores prácticas de la industria para asegurar su mantenibilidad y rendimiento a largo plazo.
        </p>

        <div class="grid grid-cols-2 gap-6 mb-8">
          <div class="border-l-2 border-sky-500 pl-4">
            <p class="text-3xl font-bold text-white mb-1">3+</p>
            <p class="text-sm text-slate-400">Años de experiencia</p>
          </div>
          <div class="border-l-2 border-purple-500 pl-4">
            <p class="text-3xl font-bold text-white mb-1">15+</p>
            <p class="text-sm text-slate-400">Proyectos realizados</p>
          </div>
        </div>

        <div>
          <button class="px-8 py-3 rounded-full bg-slate-800 text-white font-semibold hover:bg-sky-500 transition-all duration-300 border border-slate-700 hover:border-sky-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]">
            Descargar CV Completo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
