<script setup lang="ts">
const categories = [
  {
    name: 'Lenguajes de Programación',
    skills: ['Java', 'Python', 'C#', 'JavaScript', 'TypeScript']
  },
  {
    name: 'Web Frontend & Mobile',
    skills: ['Angular', 'React', 'Vue', 'React Native', 'Quasar']
  },
  {
    name: 'Gestión de Bases de Datos',
    skills: ['SQL Server', 'MySQL', 'MongoDB']
  },
  {
    name: 'Herramientas, Cloud & Scrum',
    skills: ['AWS', 'Firebase', 'Git', 'Jira', 'Scrum']
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh] transition-colors duration-300">
    <div class="text-center mb-16 opacity-0 animate-fade-in-up">
      <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B6FC9] to-[#3EC6E8] mb-6">
        Mis Aptitudes & Tecnologías
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
        He forjado mi experiencia manejando un stack versátil que me permite abordar proyectos desde la capa de datos hasta la interfaz visual.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="bg-white dark:bg-[#1e2845]/60 border border-slate-200 dark:border-[#3B6FC9]/15 p-8 rounded-2xl opacity-0 animate-fade-in-up backdrop-blur-sm hover:border-[#3B6FC9]/40 dark:hover:border-[#3BC6E8]/30 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(59,111,201,0.08)]"
        :style="`animation-delay: ${index * 150}ms`"
      >
        <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-6 flex items-center transition-colors">
          <span class="w-2 h-2 rounded-full bg-gradient-to-r from-[#3B6FC9] to-[#3EC6E8] mr-3 shadow-[0_0_10px_rgba(59,111,201,0.5)] dark:shadow-[0_0_10px_rgba(62,198,232,0.6)]"></span>
          {{ category.name }}
        </h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="px-4 py-2 bg-slate-100 dark:bg-[#232946] border border-slate-200 dark:border-[#3B6FC9]/20 rounded-full text-slate-800 dark:text-slate-300 text-sm font-semibold hover:bg-gradient-to-r hover:from-[#3B6FC9] hover:to-[#3EC6E8] hover:border-transparent hover:text-white dark:hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_10px_20px_rgba(59,111,201,0.3)] hover:-translate-y-1"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>

    <!-- Intereses Personales -->
    <div class="mt-20 text-center opacity-0 animate-fade-in-up delay-500 transition-colors">
      <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">Intereses Personales</h3>
      <div class="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
        <div class="bg-white dark:bg-[#1e2845]/60 px-6 py-3 rounded-xl border border-slate-200 dark:border-[#3B6FC9]/15 text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:border-[#3B6FC9]/30 hover:shadow-[0_5px_15px_rgba(59,111,201,0.08)]">🏊‍♂️ Practicar Natación</div>
        <div class="bg-white dark:bg-[#1e2845]/60 px-6 py-3 rounded-xl border border-slate-200 dark:border-[#3B6FC9]/15 text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:border-[#3B6FC9]/30 hover:shadow-[0_5px_15px_rgba(59,111,201,0.08)]">📚 Leer sobre Tecnología e IA</div>
        <div class="bg-white dark:bg-[#1e2845]/60 px-6 py-3 rounded-xl border border-slate-200 dark:border-[#3B6FC9]/15 text-slate-700 dark:text-slate-300 shadow-sm transition-colors hover:border-[#3B6FC9]/30 hover:shadow-[0_5px_15px_rgba(59,111,201,0.08)]">🤝 Compartir Conocimientos</div>
      </div>
    </div>
  </div>
</template>
