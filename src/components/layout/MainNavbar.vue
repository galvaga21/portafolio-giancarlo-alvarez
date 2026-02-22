<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

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
  <header class="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
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
          <ul class="flex space-x-6">
            <li v-for="link in navLinks" :key="link.path">
              <RouterLink
                :to="link.path"
                class="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors duration-200"
                active-class="text-sky-400 font-semibold"
                aria-current="page"
              >
                {{ link.name }}
              </RouterLink>
            </li>
            <li>
              <a href="#" class="px-4 py-2 text-sm font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors duration-300 shadow-lg shadow-sky-500/30">
                Descargar CV
              </a>
            </li>
          </ul>
        </nav>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
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
    <div v-show="isMobileMenuOpen" class="md:hidden bg-slate-900 border-b border-slate-800">
      <ul class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li v-for="link in navLinks" :key="link.path">
          <RouterLink
            :to="link.path"
            @click="isMobileMenuOpen = false"
            class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
            active-class="bg-slate-800 text-sky-400"
          >
            {{ link.name }}
          </RouterLink>
        </li>
        <li class="pt-4">
          <a href="#" class="block w-full text-center px-4 py-2 text-base font-medium text-white bg-sky-500 rounded-lg hover:bg-sky-600">
            Descargar CV
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
