<script setup lang="ts">
import { ref, onMounted } from 'vue'

const messageInput = ref('')
const chatContainer = ref<HTMLElement | null>(null)

const messages = ref([
  { id: 1, text: '¡Hola! Bienvenido al soporte técnico y consultas directas.', sender: 'admin', time: '10:00 AM' },
  { id: 2, text: 'Me gustaría saber más sobre el desarrollo de una Landing Page', sender: 'user', time: '10:05 AM' },
  { id: 3, text: '¡Claro! Una Landing Page corporativa incluye diseño responsivo, optimización SEO y un formulario de contacto. ¿Tienes algún diseño en mente o empezamos desde cero?', sender: 'admin', time: '10:06 AM' }
])

const sendMessage = () => {
  if (!messageInput.value.trim()) return

  // Agregar mensaje del usuario
  messages.value.push({
    id: Date.now(),
    text: messageInput.value,
    sender: 'user',
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  })

  const userMsg = messageInput.value
  messageInput.value = ''

  scrollToBottom()

  // Simular respuesta automatica despues de 1 segundo (hasta integrar Firebase)
  setTimeout(() => {
    messages.value.push({
      id: Date.now() + 1,
      text: `Excelente, he recibido tu mensaje: "${userMsg}". En breve un agente real o yo te responderemos detalladamente. (Simulación activa)`,
      sender: 'admin',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    })
    scrollToBottom()
  }, 1500)
}

const scrollToBottom = () => {
  setTimeout(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight
    }
  }, 50)
}

onMounted(() => {
  scrollToBottom()
})
</script>

<template>
  <div class="h-[calc(100vh-8rem)] flex flex-col md:flex-row bg-slate-800/40 border border-slate-700 rounded-2xl overflow-hidden shadow-xl">

    <!-- Contact List (Sidebar del Chat) -->
    <div class="w-full md:w-80 bg-slate-900/50 border-r border-slate-700 flex flex-col">
      <div class="p-4 border-b border-slate-700">
        <h2 class="font-bold text-white text-lg">Mensajes Directos</h2>
      </div>
      <div class="flex-1 overflow-y-auto">
        <!-- Contact Item -->
        <div class="p-4 border-l-4 border-sky-500 bg-slate-800/80 cursor-pointer flex items-center space-x-3">
          <div class="relative">
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex items-center justify-center font-bold text-white">
              GA
            </div>
            <span class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-800"></span>
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="text-sm font-bold text-white truncate">Soporte Técnico</h4>
            <p class="text-xs text-slate-400 truncate">En línea (Giancarlo)</p>
          </div>
        </div>
        <!-- Si hubiesen mas, se listarian aqui -->
      </div>
    </div>

    <!-- Area de Chat -->
    <div class="flex-1 flex flex-col bg-slate-900/20">

      <!-- Chat Header -->
      <div class="p-4 border-b border-slate-700 flex items-center justify-between bg-slate-900/60 backdrop-blur-sm z-10">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex flex-shrink-0 items-center justify-center font-bold text-white">
            GA
          </div>
          <div>
            <h4 class="text-md font-bold text-white">Soporte Técnico / Ventas</h4>
            <p class="text-xs text-emerald-400">Respondemos en menos de 1 hr</p>
          </div>
        </div>
        <button class="text-slate-400 hover:text-white transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
        </button>
      </div>

      <!-- Historial de mensajes -->
      <div ref="chatContainer" class="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth">
        <div class="text-center">
          <span class="text-xs text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">Hoy</span>
        </div>

        <div v-for="msg in messages" :key="msg.id" :class="msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'" class="flex items-end space-x-3">

          <div v-if="msg.sender === 'admin'" class="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 flex-shrink-0 flex items-center justify-center font-bold text-white text-xs">
            GA
          </div>

          <div :class="msg.sender === 'user' ? 'bg-sky-500 text-white rounded-tr-none' : 'bg-slate-700 text-slate-200 rounded-tl-none'" class="max-w-[75%] md:max-w-[60%] px-4 py-3 rounded-2xl shadow-md">
            <p class="text-sm leading-relaxed">{{ msg.text }}</p>
            <p :class="msg.sender === 'user' ? 'text-sky-200' : 'text-slate-400'" class="text-[10px] mt-1 text-right">{{ msg.time }}</p>
          </div>

        </div>
      </div>

      <!-- Chat Input Area -->
      <div class="p-4 bg-slate-900/60 border-t border-slate-700">
        <form @submit.prevent="sendMessage" class="flex items-end space-x-2">
          <button type="button" class="p-3 text-slate-400 hover:text-sky-400 hover:bg-slate-800 rounded-full transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg>
          </button>

          <div class="flex-1 bg-slate-800 rounded-2xl border border-slate-700 focus-within:border-sky-500 overflow-hidden transition-colors">
            <textarea
              v-model="messageInput"
              @keydown.enter.prevent="sendMessage"
              placeholder="Escribe un mensaje aquí..."
              class="w-full bg-transparent text-slate-200 px-4 py-3 focus:outline-none resize-none max-h-32"
              rows="1"
            ></textarea>
          </div>

          <button type="submit" :disabled="!messageInput.trim()" :class="!messageInput.trim() ? 'opacity-50 cursor-not-allowed bg-slate-700' : 'bg-sky-500 hover:bg-sky-600'" class="p-3 text-white rounded-full transition-all shadow-lg">
            <svg class="w-6 h-6 transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
          </button>
        </form>
      </div>

    </div>
  </div>
</template>
