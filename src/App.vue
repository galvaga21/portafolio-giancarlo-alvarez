<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from '@/components/layout/MainNavbar.vue'
</script>

<template>
  <MainNavbar />

  <main class="flex-grow pt-16">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>

  <footer class="py-6 text-center text-slate-500 text-sm border-t border-slate-800 mt-auto bg-slate-900/50">
    <p>&copy; {{ new Date().getFullYear() }} Giancarlo Alvarez. Todos los derechos reservados.</p>
  </footer>
</template>

<style>
/* Estilos adicionales de transición entre rutas */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
