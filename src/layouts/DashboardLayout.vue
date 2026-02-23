<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="min-h-screen bg-slate-50 dark:bg-slate-900 flex text-slate-900 dark:text-slate-300 transition-colors duration-300">
    <!-- Sidebar -->
    <aside class="w-64 bg-white dark:bg-[#0f172a] border-r border-slate-200 dark:border-slate-800 hidden md:flex flex-col h-screen sticky top-0 transition-colors duration-300">
      <div class="px-6 py-8">
        <RouterLink to="/" class="flex flex-col items-start gap-4 hover:opacity-80 transition-opacity">
          <img src="@/assets/logo-giancarlo-alvarez.png" alt="Giancarlo Alvarez Logo" class="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover border-[3px] border-slate-100 dark:border-slate-800 shadow-sm transition-transform duration-300 hover:scale-[1.05] bg-slate-900 dark:bg-transparent" />
          <span class="text-xs font-bold text-slate-500 tracking-wider uppercase">Dashboard Panel</span>
        </RouterLink>
      </div>
      <nav class="flex-1 px-4 space-y-1 mt-4">
        <RouterLink to="/dashboard" exact-active-class="bg-blue-50 dark:bg-slate-800/60 text-blue-600 dark:text-white font-medium shadow-sm" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 font-medium transition-colors text-slate-600 dark:text-slate-400 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
          <span>Inicio</span>
        </RouterLink>
        <RouterLink to="/dashboard/requests" active-class="bg-blue-50 dark:bg-slate-800/60 text-blue-600 dark:text-white font-medium shadow-sm" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 font-medium transition-colors text-slate-600 dark:text-slate-400 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
          <span>Mis Solicitudes</span>
          <span class="ml-auto bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200 dark:border-blue-500/20">3</span>
        </RouterLink>
        <RouterLink to="/dashboard/chat" active-class="bg-blue-50 dark:bg-slate-800/60 text-blue-600 dark:text-white font-medium shadow-sm" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 font-medium transition-colors text-slate-600 dark:text-slate-400 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
          <span>Chat de Soporte</span>
          <span class="ml-auto w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        </RouterLink>
        <RouterLink to="/dashboard/profile" active-class="bg-blue-50 dark:bg-slate-800/60 text-blue-600 dark:text-white font-medium shadow-sm" class="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/40 font-medium transition-colors text-slate-600 dark:text-slate-400 text-sm">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span>Perfil de Usuario</span>
        </RouterLink>
      </nav>
      <div class="p-4 border-t border-slate-200 dark:border-slate-800">
        <button @click="toggleTheme" class="w-full flex items-center justify-between text-left px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium transition-colors mb-2 text-sm">
          <span>Cambiar Tema</span>
          <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </button>
        <button class="w-full text-left px-4 py-3 rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 text-red-600 dark:text-red-400 font-medium transition-colors text-sm">
          Cerrar Sesión
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-h-screen">
      <header class="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 md:hidden sticky top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-40 transition-colors duration-300">
        <span class="font-bold text-lg text-slate-800 dark:text-white">Menú</span>
        <button @click="toggleTheme" class="p-2 text-slate-500 dark:text-slate-400 focus:outline-none">
          <svg v-if="!isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </button>
      </header>

      <main class="flex-1 p-6 md:p-10">
        <slot />
      </main>
    </div>
  </div>
</template>
