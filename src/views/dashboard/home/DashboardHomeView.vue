<script setup lang="ts">
import { ref } from 'vue'

const catalogServices = ref([
  {
    id: 1,
    title: 'Landing Page Corporativa',
    description: 'Diseño moderno y rápido para tu empresa. Ideal para conversiones y presencia online.',
    price: 'Desde $300',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: 2,
    title: 'Sistema de Gestión (SaaS)',
    description: 'Aplicación web a medida, panel de control, dashboards e integraciones avanzadas API.',
    price: 'A cotizar',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    id: 3,
    title: 'Consultoría UI/UX',
    description: 'Auditoría y rediseño de tu aplicación actual para mejorar la retención de usuarios.',
    price: 'Desde $150',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  }
])

const activeRequests = ref([
  { id: '#REQ-002', name: 'Desarrollo Landing Page', status: 'En Progreso', date: 'Hace 2 días' },
  { id: '#REQ-001', name: 'Asesoría UI/UX Inicial', status: 'Completado', date: 'Hace 1 mes' },
])
</script>

<template>
  <div>
    <!-- Bienvenida y Resumen Rapido -->
    <div class="mb-8 flex items-end justify-between border-b border-slate-200 dark:border-slate-800 pb-5 transition-colors">
      <div>
        <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">Resumen General</h1>
        <p class="text-slate-500 text-sm">Gestiona tus proyectos y servicios activos.</p>
      </div>
      <button class="hidden md:flex items-center bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
        Nueva Solicitud
      </button>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      <div class="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm relative overflow-hidden transition-colors">
        <div class="absolute right-0 top-0 w-16 h-16 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full"></div>
        <h3 class="text-slate-500 dark:text-slate-400 text-xs text-transform: uppercase tracking-wider font-semibold mb-2">Pendientes</h3>
        <p class="text-3xl font-bold text-slate-900 dark:text-white">0</p>
      </div>
      <div class="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm relative overflow-hidden transition-colors">
        <div class="absolute right-0 top-0 w-16 h-16 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full"></div>
        <h3 class="text-slate-500 dark:text-slate-400 text-xs text-transform: uppercase tracking-wider font-semibold mb-2">En Progreso</h3>
        <p class="text-3xl font-bold text-slate-900 dark:text-white">1</p>
      </div>
      <div class="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm relative overflow-hidden transition-colors">
        <div class="absolute right-0 top-0 w-16 h-16 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-full"></div>
        <h3 class="text-slate-500 dark:text-slate-400 text-xs text-transform: uppercase tracking-wider font-semibold mb-2">Completados</h3>
        <p class="text-3xl font-bold text-slate-900 dark:text-white">1</p>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">

      <!-- Listado Activo Reducido -->
      <div class="lg:col-span-1 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col transition-colors">
        <div class="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h2 class="text-base font-semibold text-slate-900 dark:text-white">Actividad Reciente</h2>
          <RouterLink to="/dashboard/requests" class="text-xs text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors font-medium">Ver completo</RouterLink>
        </div>

        <div class="p-5 space-y-3 flex-1">
          <div v-for="req in activeRequests" :key="req.id" class="p-4 rounded-lg bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
            <div class="flex justify-between items-start mb-2">
              <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-1.5 py-0.5 rounded border border-slate-100 dark:border-transparent">{{ req.id }}</span>
              <span :class="req.status === 'En Progreso' ? 'text-blue-600 dark:text-blue-400' : 'text-emerald-600 dark:text-emerald-400'" class="text-[10px] font-medium flex items-center">
                <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="req.status === 'En Progreso' ? 'bg-blue-500 dark:bg-blue-400' : 'bg-emerald-500 dark:bg-emerald-400'"></span>
                {{ req.status }}
              </span>
            </div>
            <h4 class="text-slate-800 dark:text-slate-200 font-medium text-sm">{{ req.name }}</h4>
            <p class="text-slate-500 text-xs mt-1 drop-shadow-sm">{{ req.date }}</p>
          </div>
          <div v-if="activeRequests.length === 0" class="text-center py-6 text-slate-500 text-sm">
            Sin actividad reciente.
          </div>
        </div>
      </div>

      <!-- Catalogo de Servicios -->
      <div class="lg:col-span-2 bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col transition-colors">
        <div class="p-5 border-b border-slate-200 dark:border-slate-800">
          <h2 class="text-base font-semibold text-slate-900 dark:text-white">Catálogo de Servicios</h2>
          <p class="text-xs text-slate-500 mt-1">Explora nuestras soluciones corporativas.</p>
        </div>

        <div class="p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
          <div v-for="service in catalogServices" :key="service.id" class="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-lg p-5 hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col h-full group">
            <div class="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 border border-blue-100 dark:border-blue-500/20">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path></svg>
            </div>
            <h3 class="text-slate-800 dark:text-slate-100 font-semibold text-sm mb-2">{{ service.title }}</h3>
            <p class="text-slate-600 dark:text-slate-400 text-xs flex-1 leading-relaxed">{{ service.description }}</p>
            <div class="mt-5 flex items-center justify-between">
              <span class="font-bold text-slate-700 dark:text-slate-300 text-xs">{{ service.price }}</span>
              <button class="text-xs text-slate-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center">
                Solicitar
                <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
