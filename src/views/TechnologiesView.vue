<script setup lang="ts">
const categories = [
  {
    name: 'Frontend',
    skills: ['Vue.js', 'React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Nuxt', 'HTML5/CSS3']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'NestJS', 'Python', 'Django', 'Java', 'Spring Boot']
  },
  {
    name: 'Base de Datos',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase']
  },
  {
    name: 'Herramientas & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD', 'Jest/Vitest', 'Vite']
  }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[80vh]">
    <div class="text-center mb-16 opacity-0 animate-fade-in-up">
      <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500 mb-6">
        Tecnologías & Herramientas
      </h1>
      <p class="text-slate-400 text-lg max-w-2xl mx-auto">
        El ecosistema tecnológico que utilizo para construir aplicaciones modernas, escalables y mantenibles. Me mantengo en constante aprendizaje.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="bg-slate-800/30 border border-slate-700/50 p-8 rounded-2xl opacity-0 animate-fade-in-up backdrop-blur-sm hover:border-slate-600 transition-colors duration-300"
        :style="`animation-delay: ${index * 150}ms`"
      >
        <h3 class="text-2xl font-semibold text-white mb-6 flex items-center">
          <span class="w-2 h-2 rounded-full bg-sky-400 mr-3 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
          {{ category.name }}
        </h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="px-4 py-2 bg-slate-900/80 border border-slate-700 rounded-full text-slate-300 text-sm font-medium hover:bg-sky-500/10 hover:border-sky-500/50 hover:text-sky-400 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:-translate-y-1"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
