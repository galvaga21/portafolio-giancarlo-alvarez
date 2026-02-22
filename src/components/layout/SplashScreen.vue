<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(true)
const logs = ref<string[]>([])

const bootLogs = [
  'Initializing connection...',
  'Resolving dependencies... [OK]',
  'Fetching repository data... [OK]',
  'Compiling UI components... [100%]',
  'Starting application_session()'
]

onMounted(() => {
  // Evitamos scroll en el body mientras se muestra el splash
  document.body.style.overflow = 'hidden'

  // Agregar logs progresivamente
  let delay = 0;
  bootLogs.forEach((log, index) => {
    setTimeout(() => {
      logs.value.push(log)
    }, delay)
    // Tiempos aleatorios para dar realismo a la consola
    delay += index === bootLogs.length - 1 ? 600 : 300 + Math.random() * 250
  })

  setTimeout(() => {
    isVisible.value = false
    document.body.style.overflow = 'auto' // Restauramos el scroll
  }, 2900) // Animación dura alrededor de 3 seg de carga y sorpresa
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <transition name="splash">
    <div v-if="isVisible" class="fixed inset-0 z-[99999] bg-slate-50 dark:bg-[#0A0A0A] flex flex-col items-center justify-center transition-colors duration-300 selection-none font-mono">

      <!-- Fondo decorativo suave en claro, oscuro en dark mode -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div class="relative flex flex-col items-center z-10 w-full max-w-2xl px-4 sm:px-6">

        <!-- Icono central animado (Corchetes/Código) -->
        <div class="mb-8 relative animate-fade-in-down">
          <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl flex items-center justify-center shadow-lg dark:shadow-xl shadow-sky-900/10 dark:shadow-sky-900/20 relative z-10 transition-colors">
            <svg class="w-8 h-8 sm:w-10 sm:h-10 text-sky-500 dark:text-sky-400 group-hover:rotate-180 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          <div class="absolute inset-0 bg-sky-500/20 dark:bg-sky-500/30 blur-xl rounded-full scale-125 z-0 animate-pulse transition-colors"></div>
        </div>

        <h1 class="text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 uppercase tracking-widest mb-8 sm:mb-10 animate-scale-up text-center drop-shadow-sm transition-colors">
          Giancarlo_Alvarez
        </h1>

        <!-- Consola de Carga Moderna -->
        <div class="w-full bg-white dark:bg-[#111111] rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden animate-fade-in-delayed transition-colors">
          <!-- Window Header bar -->
          <div class="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#161616] transition-colors">
            <div class="flex space-x-2">
              <div class="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500/80"></div>
              <div class="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500/80"></div>
            </div>
            <div class="text-[10px] sm:text-xs text-slate-500 dark:text-slate-500 tracking-wider font-mono">root@portfolio:~</div>
            <div class="w-10"></div> <!-- Espaciador para centrar texto -->
          </div>

          <!-- Window Content (Terminal) -->
          <div class="p-4 sm:p-5 text-left text-xs sm:text-sm min-h-[140px] sm:min-h-[160px] flex flex-col justify-end overflow-hidden">
            <div v-for="(log, idx) in logs" :key="idx" class="text-slate-700 dark:text-sky-300/90 leading-loose opacity-0 animate-log-reveal transition-colors">
              <span class="text-emerald-500 dark:text-emerald-400 font-bold mr-2">➜</span> {{ log }}
            </div>
            <div class="text-slate-700 dark:text-sky-300 leading-loose mt-1 flex items-center h-6 transition-colors">
              <span class="text-emerald-500 dark:text-emerald-400 font-bold mr-2 opacity-0 animate-log-reveal" :style="`animation-delay: ${logs.length * 100}ms`" v-if="logs.length === bootLogs.length">➜</span>
              <span class="w-2 h-4 sm:h-5 bg-sky-500 dark:bg-sky-400 inline-block align-middle ml-1 animate-cursor animate-log-reveal" :style="`animation-delay: ${logs.length * 100}ms`"></span>
            </div>
          </div>

          <!-- Barra de Progreso Inferior -->
          <div class="h-1 bg-slate-200 dark:bg-slate-800 w-full relative overflow-hidden transition-colors">
             <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-400 dark:to-indigo-500 animate-expand-width"></div>
          </div>
        </div>

      </div>
    </div>
  </transition>
</template>

<style scoped>
.splash-leave-active {
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.splash-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.03);
}

@keyframes fade-in-down {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fade-in-down 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes scale-up {
  0% { opacity: 0; transform: scale(0.9) translateY(10px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.animate-scale-up {
  animation: scale-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
  opacity: 0;
}

@keyframes expand-width {
  0% { width: 0%; }
  100% { width: 100%; }
}
.animate-expand-width {
  animation: expand-width 2.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  width: 0;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-delayed {
  animation: fade-in-delayed 0.8s ease forwards 0.4s;
  opacity: 0;
}

@keyframes log-reveal {
  0% { opacity: 0; transform: translateY(5px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-log-reveal {
  animation: log-reveal 0.2s ease-out forwards;
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-cursor {
  animation: cursor-blink 0.8s infinite;
}
</style>
