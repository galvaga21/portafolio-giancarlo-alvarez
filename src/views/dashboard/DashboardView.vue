<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="h-full">
    <!-- El router-view renderizará las vistas hijas (Home del dashboard, Perfil, etc) -->
    <RouterView />
  </div>
</template>
