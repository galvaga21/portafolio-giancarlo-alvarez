<script setup lang="ts">
import MainNavbar from '@/components/layout/MainNavbar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-300 transition-colors duration-300">
    <MainNavbar />

    <main class="flex-grow pt-16">
      <slot />
    </main>

    <footer class="py-6 text-center text-slate-500 text-sm border-t border-slate-200 dark:border-slate-800 mt-auto bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <p>&copy; {{ new Date().getFullYear() }} Giancarlo Alvarez. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>
