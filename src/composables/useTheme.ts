import { ref, onMounted, watch } from 'vue'

export function useTheme() {
  const isDark = ref(false) // Por defecto claro, como pidió el usuario

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  onMounted(() => {
    // Check local storage theme
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      isDark.value = false // Hard default a claro
    }
    updateDOM(isDark.value)
  })

  watch(isDark, (newValue) => {
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
    updateDOM(newValue)
  })

  const updateDOM = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return { isDark, toggleTheme }
}
