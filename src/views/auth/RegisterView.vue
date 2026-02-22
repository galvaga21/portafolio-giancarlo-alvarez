<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const formParams = ref({
  name: '',
  email: '',
  password: '',
})

const submitForm = () => {
  console.log('Creando usuario...', formParams.value.name)
  // Simulando registro exitoso
  setTimeout(() => {
    router.push('/dashboard')
  }, 500)
}
</script>

<template>
  <div class="flex-1 flex flex-col md:flex-row w-full min-h-screen">
    <!-- Left Side: Visual Panel -->
    <div class="hidden md:flex md:w-1/2 lg:w-7/12 bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 relative items-center justify-center overflow-hidden">
      <!-- Decoraciones visuales abstractas -->
      <div class="absolute inset-0 z-0">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div class="relative z-10 w-full max-w-lg px-12 animate-fade-in-up delay-100">
        <!-- Floating Glassmorphism Card -->
        <div class="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 mb-8 shadow-2xl">
          <h3 class="text-3xl font-bold text-white mb-4">Acelera tu desarrollo digital</h3>
          <p class="text-indigo-200 text-lg leading-relaxed mb-6">
            Únete a mi plataforma para gestionar solicitudes corporativas, ver el progreso de los proyectos en tiempo real y obtener soporte técnico directo.
          </p>
          <div class="flex items-center space-x-3 text-sm text-indigo-300">
            <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>Seguridad empresarial</span>
          </div>
          <div class="flex items-center space-x-3 text-sm text-indigo-300 mt-2">
            <svg class="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span>Respuestas eficientes y rápidas</span>
          </div>
        </div>

        <div class="text-center">
          <p class="text-indigo-300/60 text-sm">
            Diseñando soluciones innovadoras.
          </p>
        </div>
      </div>
    </div>

    <!-- Right Side: Forms -->
    <div class="w-full md:w-1/2 lg:w-5/12 bg-white flex flex-col pt-8 md:pt-0">

      <!-- Logo Header -->
      <div class="px-8 md:px-12 py-6">
        <RouterLink to="/" class="flex items-center text-slate-800 font-bold text-xl hover:opacity-80 transition-opacity w-fit">
          <svg class="w-6 h-6 mr-2 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          Giancarlo_Alvarez
        </RouterLink>
      </div>

      <!-- Form Container -->
      <div class="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24">

        <div class="mb-10 animate-fade-in-up">
          <h2 class="text-3xl font-bold text-slate-900 mb-2">Crea una cuenta</h2>
          <p class="text-slate-500 text-sm">
            ¿Ya tienes una cuenta?
            <RouterLink to="/login" class="text-indigo-600 font-semibold hover:underline ml-1">
              Inicia Sesión
            </RouterLink>
          </p>
        </div>

        <form @submit.prevent="submitForm" class="space-y-5 animate-fade-in-up delay-100">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
            <input v-model="formParams.name" type="text" placeholder="Ej. Juan Pérez" required class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
            <input v-model="formParams.email" type="email" placeholder="tucorreo@ejemplo.com" required class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <div class="relative">
              <input v-model="formParams.password" type="password" placeholder="••••••••" required class="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all">
            </div>
          </div>

          <button type="submit" class="w-full bg-slate-900 text-white font-semibold py-3 px-4 rounded-lg hover:bg-slate-800 transition-all duration-300 mt-6 shadow-lg shadow-slate-900/20">
            Crear mi cuenta
          </button>
        </form>

        <!-- Social Logins -->
        <div class="mt-8">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-slate-200"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-slate-500">O ingresa con</span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <button type="button" class="w-full flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              Google
            </button>
            <button type="button" class="w-full flex items-center justify-center px-4 py-2 border border-slate-300 rounded-lg shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
              <svg class="h-5 w-5 text-[#1877F2] mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
