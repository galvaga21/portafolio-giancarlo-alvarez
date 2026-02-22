<script setup lang="ts">
import { ref } from 'vue'

const profileData = ref({
  name: 'Giancarlo Alvarez',
  email: 'giancarlo@ejemplo.com',
  role: 'Administrador',
  bio: 'Desarrollador enfocado en soluciones eficientes.'
})

const saveProfile = () => {
  console.log('Guardando perfil...', profileData.value)
  // Lógica futura de guardado
}
</script>

<template>
  <div class="max-w-4xl transition-colors duration-300">
    <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-6">Mi Perfil</h1>

    <div class="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 mb-8 shadow-sm transition-colors duration-300">

      <div class="flex items-center space-x-6 mb-8">
        <div class="w-24 h-24 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center text-3xl font-bold text-white shadow-xl">
          GA
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white">{{ profileData.name }}</h2>
          <p class="text-sky-600 dark:text-sky-400 font-medium">{{ profileData.role }}</p>
        </div>
      </div>

      <form @submit.prevent="saveProfile" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Nombre Completo</label>
            <input v-model="profileData.name" type="text" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Correo Electrónico</label>
            <input v-model="profileData.email" type="email" disabled class="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 rounded-lg px-4 py-3 text-slate-500 cursor-not-allowed transition-all">
            <p class="text-xs text-slate-500 mt-1">El correo no puede ser modificado aquí.</p>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-slate-700 dark:text-slate-400 mb-2">Biografía Corta</label>
          <textarea v-model="profileData.bio" rows="4" class="w-full bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none"></textarea>
        </div>

        <div class="pt-4 border-t border-slate-200 dark:border-slate-700/50 flex justify-end">
          <button type="submit" class="bg-sky-500 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-sky-600 transition-colors shadow-md hover:shadow-lg dark:shadow-sky-500/20">
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
