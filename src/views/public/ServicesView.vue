<script setup lang="ts">
const services = [
  {
    title: 'Desarrollo Frontend',
    description: 'Creación de interfaces de usuario modernas, responsivas y altamente interactivas usando Vue, React o frameworks similares.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Arquitectura Backend',
    description: 'Diseño e implementación de APIs RESTful y GraphQL, microservicios y lógica de negocio escalable.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
  },
  {
    title: 'Diseño Base de Datos',
    description: 'Modelado y optimización de bases de datos relacionales (SQL) y no relacionales (NoSQL) para un rendimiento óptimo.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
  },
  {
    title: 'UI/UX Design',
    description: 'Wireframing, prototipado y diseño de experiencias centradas en el usuario con atención al detalle.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
  },
  {
    title: 'Integración Cloud',
    description: 'Despliegue y configuración de servicios en la nube (AWS, Firebase, Google Cloud) con prácticas de CI/CD.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
  },
  {
    title: 'Consultoría Técnica',
    description: 'Auditoría de código, mejora de rendimiento web y asesoramiento para la toma de decisiones tecnológicas en IT.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh]">
    <div class="text-center mb-16 opacity-0 animate-fade-in-up">
      <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-6">
        Mis Servicios
      </h1>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">
        Ofrezco soluciones integrales de desarrollo de software, cubriendo desde la conceptualización hasta el despliegue en producción.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(56,189,248,0.05)] opacity-0 animate-fade-in-up group"
        :style="`animation-delay: ${index * 100}ms`"
      >
        <div class="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700">
          <svg class="w-7 h-7 text-sky-400 group-hover:text-indigo-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold text-slate-100 mb-3 group-hover:text-sky-400 transition-colors">{{ service.title }}</h3>
        <p class="text-slate-400 leading-relaxed text-sm">
          {{ service.description }}
        </p>
      </div>
    </div>
  </div>
</template>
