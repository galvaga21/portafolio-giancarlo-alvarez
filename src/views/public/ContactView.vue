<script setup lang="ts">
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 min-h-[80vh] transition-colors duration-300">
    <div class="text-center mb-10 md:mb-16 opacity-0 animate-fade-in-up">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 mb-4 md:mb-6 leading-tight">
        Contáctame
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
        ¿Tienes un proyecto en mente o quieres que colaboremos? Estoy disponible para nuevas oportunidades y retos técnicos.
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-10 lg:gap-12 bg-white dark:bg-slate-800/20 p-6 sm:p-8 md:p-12 rounded-[2rem] border border-slate-200 dark:border-slate-700/50 opacity-0 animate-fade-in-up delay-100 shadow-xl dark:shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-colors">
      <!-- Contact Info -->
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-6 transition-colors">Información de Contacto</h2>
          <p class="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-8 leading-relaxed transition-colors">
            Llena el formulario y me pondré en contacto contigo a la brevedad posible. También puedes ubicarme directamente a través de mis redes o correo electrónico.
          </p>

          <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center items-start group">
              <div class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 mb-3 sm:mb-0 sm:mr-4 border border-slate-200 dark:border-slate-700 group-hover:border-sky-400 dark:group-hover:border-sky-500 group-hover:bg-sky-50 dark:group-hover:bg-sky-500/10 transition-all duration-300">
                <svg class="w-6 h-6 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div class="break-all sm:break-normal overflow-hidden max-w-full">
                <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">Email</h4>
                <a href="mailto:galvaga21@gmail.com" class="text-base sm:text-lg font-semibold text-slate-800 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors">galvaga21@gmail.com</a>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center items-start group">
              <div class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 mb-3 sm:mb-0 sm:mr-4 border border-slate-200 dark:border-slate-700 group-hover:border-green-400 dark:group-hover:border-green-500 group-hover:bg-green-50 dark:group-hover:bg-green-500/10 transition-all duration-300">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">Teléfono</h4>
                <a href="tel:+51947770996" class="text-base sm:text-lg font-semibold text-slate-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">+51 947770996</a>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center items-start group">
              <div class="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center shrink-0 mb-3 sm:mb-0 sm:mr-4 border border-slate-200 dark:border-slate-700 group-hover:border-indigo-400 dark:group-hover:border-indigo-500 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 transition-all duration-300">
                <svg class="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h4 class="text-sm font-medium text-slate-500 dark:text-slate-400 transition-colors">Ubicación</h4>
                <p class="text-base font-semibold text-slate-800 dark:text-white truncate max-w-full transition-colors" title="Pasaje Los Amautas 1037, 15427, Lima">Pasaje Los Amautas 1037, Lima</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Links -->
        <div class="mt-8 lg:mt-0 flex gap-4">
           <a href="#" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-transparent hover:border-sky-400 hover:bg-sky-50 dark:hover:bg-sky-500 text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:-translate-y-1">
             <span class="sr-only">LinkedIn</span>
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-transparent hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white flex items-center justify-center transition-all duration-300 hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(100,116,139,0.5)] hover:-translate-y-1">
             <span class="sr-only">GitHub</span>
             <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <form @submit.prevent class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Nombre completo</label>
          <input type="text" id="name" placeholder="Ej. Juan Pérez" class="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Correo electrónico</label>
          <input type="email" id="email" placeholder="juan@ejemplo.com" class="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 transition-colors">Mensaje</label>
          <textarea id="message" rows="4" placeholder="Háblame sobre tu proyecto..." class="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/80 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none hover:border-slate-300 dark:hover:border-slate-600 shadow-sm"></textarea>
        </div>
        <button type="submit" class="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300 hover:-translate-y-1">
          Enviar Mensaje
        </button>
      </form>
    </div>
  </div>
</template>
