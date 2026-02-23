<script setup lang="ts">
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Inicio', path: '/' },
  { name: 'Acerca de', path: '/about' },
  { name: 'Servicios', path: '/services' },
  { name: 'Tecnologías', path: '/technologies' },
  { name: 'Educación', path: '/education' },
  { name: 'Contacto', path: '/contact' }
]

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/galvaga21',
    icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/giancarlo-alvarez',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  {
    name: 'Email',
    url: 'mailto:galvaga21@gmail.com',
    icon: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
  }
]
</script>

<template>
  <footer class="bg-white dark:bg-[#0a0f16] border-t border-slate-200 dark:border-slate-800/60 pt-16 pb-8 transition-colors duration-300 relative overflow-hidden">
    <!-- Luces decorativas en modo oscuro -->
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 dark:bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none delay-500"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
        <!-- Logo & Description Section -->
        <div class="lg:col-span-2 space-y-6">
          <RouterLink to="/" class="flex items-center group w-fit">
            <img src="@/assets/logo-giancarlo-alvarez.png" alt="Giancarlo Alvarez Logo" class="h-12 w-12 rounded-full object-cover border-[3px] border-slate-100 dark:border-slate-800 shadow-md transition-transform duration-300 group-hover:scale-[1.05] bg-slate-900 dark:bg-transparent mr-4" />
            <span class="text-2xl font-black tracking-tight text-slate-800 dark:text-white group-hover:text-sky-500 transition-colors">Giancarlo Alvarez</span>
          </RouterLink>
          <p class="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed text-sm">
            Especialista en desarrollo <span class="text-slate-700 dark:text-slate-200 font-semibold">Fullstack</span>, transformando ideas complejas en experiencias web excepcionales, escalables y optimizadas.
          </p>

          <div class="flex items-center space-x-4 pt-2">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer"
               class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-slate-700 dark:hover:text-white border border-transparent hover:border-sky-300 dark:border-slate-700 dark:hover:border-slate-600 transition-all duration-300 hover:scale-110 shadow-sm"
               :title="social.name">
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path :d="social.icon"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Links Section 1 -->
        <div>
          <h3 class="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-wider">Explorar</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks.slice(0, 3)" :key="link.path">
              <RouterLink :to="link.path" class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium transition-colors inline-block hover:translate-x-1 transform duration-300">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Links Section 2 -->
        <div>
          <h3 class="text-slate-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-wider">Sobre mí</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks.slice(3, 6)" :key="link.path">
              <RouterLink :to="link.path" class="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 text-sm font-medium transition-colors inline-block hover:translate-x-1 transform duration-300">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500">
        <p>&copy; {{ currentYear }} Giancarlo Alvarez. Todos los derechos reservados.</p>
        <p class="mt-2 md:mt-0 flex items-center">
          Desarrollado con <svg class="w-3.5 h-3.5 mx-1 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> en Perú
        </p>
      </div>

    </div>
  </footer>
</template>
