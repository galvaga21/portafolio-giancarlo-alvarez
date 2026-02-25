<script setup lang="ts">
import { RouterView } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
</script>

<template>
  <PublicLayout>
    <RouterView v-slot="{ Component }" :key="$route.fullPath">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </PublicLayout>
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
