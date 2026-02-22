<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import SplashScreen from '@/components/layout/SplashScreen.vue'

const route = useRoute()

// Lógica de renderizado dinámico del layout según el meta definido en el Vue Router
const layout = computed(() => {
  switch (route.meta.layout) {
    case 'auth': return AuthLayout
    case 'dashboard': return DashboardLayout
    default: return PublicLayout
  }
})
</script>

<template>
  <SplashScreen />

  <component :is="layout">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </RouterView>
  </component>
</template>

<style>
/* Animaciones de transición global entre rutas */
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
