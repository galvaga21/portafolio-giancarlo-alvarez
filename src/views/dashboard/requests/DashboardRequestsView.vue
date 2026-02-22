<script setup lang="ts">
import { ref } from 'vue'

const requests = ref([
  { id: '#REQ-001', name: 'Asesoría UI/UX Inicial', type: 'Consultoría UI/UX', status: 'Completado', date: '10 Ene 2026', price: '$150' },
  { id: '#REQ-002', name: 'Desarrollo Landing Page', type: 'Landing Page Corporativa', status: 'En Progreso', date: '20 Feb 2026', price: '$350' },
  { id: '#REQ-003', name: 'Integración Pasarela Pagos', type: 'Soporte Técnico', status: 'Pendiente', date: '21 Feb 2026', price: 'A cotizar' }
])
</script>

<template>
  <div class="transition-colors duration-300">
    <div class="mb-8 flex items-center justify-between">
      <h1 class="text-3xl font-bold text-slate-900 dark:text-white">Mis Solicitudes</h1>
      <button class="bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-4 py-2 flex items-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-300 dark:border-slate-700 shadow-sm">
        <svg class="w-5 h-5 mr-2 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
        Filtrar
      </button>
    </div>

    <!-- Tabla o listado -->
    <div class="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-sm transition-colors duration-300">
      <!-- Tabla desktop -->
      <div class="hidden md:block overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-600 dark:text-slate-400">
          <thead class="bg-slate-50 dark:bg-slate-900/50 text-xs uppercase font-semibold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
            <tr>
              <th scope="col" class="px-6 py-4">ID / Nombre</th>
              <th scope="col" class="px-6 py-4">Servicio Base</th>
              <th scope="col" class="px-6 py-4">Estado</th>
              <th scope="col" class="px-6 py-4">Fecha</th>
              <th scope="col" class="px-6 py-4">Monto</th>
              <th scope="col" class="px-6 py-4 text-right">Acción</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 dark:divide-slate-700/50">
            <tr v-for="req in requests" :key="req.id" class="hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
              <td class="px-6 py-4 font-medium text-slate-900 dark:text-white">
                <span class="block text-xs text-sky-600 dark:text-sky-400 mb-1 font-mono">{{ req.id }}</span>
                {{ req.name }}
              </td>
              <td class="px-6 py-4">{{ req.type }}</td>
              <td class="px-6 py-4">
                <span
                  :class="[
                    req.status === 'Completado' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
                    req.status === 'En Progreso' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20' :
                    'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
                  ]"
                  class="font-semibold px-2.5 py-1 rounded inline-flex border text-xs transition-colors"
                >
                  {{ req.status }}
                </span>
              </td>
              <td class="px-6 py-4">{{ req.date }}</td>
              <td class="px-6 py-4 font-mono font-medium text-slate-700 dark:text-slate-300">{{ req.price }}</td>
              <td class="px-6 py-4 text-right">
                <button class="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 font-medium transition-colors">Detalles</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Vistas Móviles tipo List -->
      <div class="md:hidden block">
        <div v-for="req in requests" :key="req.id" class="p-4 border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors">
          <div class="flex justify-between items-start mb-2">
            <div>
              <span class="text-xs text-sky-600 dark:text-sky-400 font-mono">{{ req.id }}</span>
              <h4 class="font-bold text-slate-900 dark:text-white mt-0.5">{{ req.name }}</h4>
            </div>
            <span
              :class="[
                req.status === 'Completado' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20' :
                req.status === 'En Progreso' ? 'bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/20' :
                'bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/20'
              ]"
              class="font-semibold px-2 py-0.5 rounded border text-[10px] transition-colors"
            >
              {{ req.status }}
            </span>
          </div>
          <div class="flex justify-between items-center text-sm text-slate-600 dark:text-slate-400 mt-3">
            <span>{{ req.type }}</span>
            <span class="font-mono">{{ req.price }}</span>
          </div>
          <button class="w-full mt-3 text-sm text-center py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Ver Detalles</button>
        </div>
      </div>

    </div>
  </div>
</template>
