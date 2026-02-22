<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const isMobileMenuOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

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
  <header class="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <RouterLink to="/" class="text-xl font-bold bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent">
            Giancarlo_Alvarez
          </RouterLink>
        </div>

        <!-- Desktop Menu -->
        <nav class="hidden md:block">
          <ul class="flex items-center space-x-6">
            <li v-for="link in navLinks" :key="link.path">
              <RouterLink
                :to="link.path"
                class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-200"
                active-class="text-sky-500 dark:text-sky-400 font-semibold"
                aria-current="page"
              >
                {{ link.name }}
              </RouterLink>
            </li>
            <li>
              <button @click="toggleTheme" class="p-2 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors focus:outline-none">
                <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </button>
            </li>
            <li>
              <RouterLink to="/login" class="block px-5 py-2.5 text-sm font-bold text-white bg-slate-900 dark:text-slate-900 dark:bg-white rounded-lg hover:bg-sky-500 dark:hover:bg-slate-200 transition-all duration-300 shadow-[0_0_15px_rgba(15,23,42,0.2)] dark:shadow-none hover:-translate-y-0.5 border border-transparent dark:border-slate-200">
                Iniciar Sesión
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden space-x-2">
          <button @click="toggleTheme" class="p-2 text-slate-500 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors focus:outline-none">
            <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </button>
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" v-if="!isMobileMenuOpen" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="h-6 w-6" v-else fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <div v-show="isMobileMenuOpen" class="md:hidden absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-2xl z-40 overflow-hidden transition-colors duration-300">
        <ul class="px-4 pt-2 pb-6 space-y-2">
          <li v-for="link in navLinks" :key="link.path">
            <RouterLink
              :to="link.path"
              @click="isMobileMenuOpen = false"
              class="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
              active-class="bg-slate-50 dark:bg-slate-800 text-sky-500 dark:text-sky-400 border border-slate-200 dark:border-slate-700/50"
            >
              {{ link.name }}
            </RouterLink>
          </li>
          <li class="pt-4 px-2">
            <RouterLink to="/login" @click="isMobileMenuOpen = false" class="flex justify-center w-full px-4 py-3 text-base font-bold text-white bg-slate-900 dark:bg-white dark:text-slate-900 rounded-xl hover:bg-sky-500 dark:hover:bg-slate-200 transition-colors shadow-md border border-transparent dark:border-slate-200">
              Iniciar Sesión
            </RouterLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
