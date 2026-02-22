import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- RUTAS PÚBLICAS (Portafolio) ---
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'public' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/public/AboutView.vue'),
      meta: { layout: 'public' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/public/ServicesView.vue'),
      meta: { layout: 'public' }
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import('../views/public/TechnologiesView.vue'),
      meta: { layout: 'public' }
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/public/EducationView.vue'),
      meta: { layout: 'public' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/public/ContactView.vue'),
      meta: { layout: 'public' }
    },

    // --- RUTAS DE AUTENTICACIÓN ---
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue'),
      meta: { layout: 'auth' } // Cargar un layout limpio sin barra de navegación compleja
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/RegisterView.vue'),
      meta: { layout: 'auth' }
    },

    // --- RUTAS PRIVADAS (Dashboard) ---
    {
      path: '/dashboard',
      component: () => import('../views/dashboard/DashboardView.vue'),
      meta: {
        layout: 'dashboard',
        requiresAuth: true // Bandera futura para proteger la ruta
      },
      children: [
        {
          path: '', // Ruta por defecto dentro del dashboard (/dashboard)
          name: 'dashboard-home',
          component: () => import('../views/dashboard/home/DashboardHomeView.vue')
        },
        {
          path: 'profile', // /dashboard/profile
          name: 'dashboard-profile',
          component: () => import('../views/dashboard/profile/DashboardProfileView.vue')
        },
        {
          path: 'requests', // /dashboard/requests
          name: 'dashboard-requests',
          component: () => import('../views/dashboard/requests/DashboardRequestsView.vue')
        },
        {
          path: 'chat', // /dashboard/chat
          name: 'dashboard-chat',
          component: () => import('../views/dashboard/chat/DashboardChatView.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// === GUARD/MIDDLEWARE DE EXPORTACIÓN (Opcional - Boilerplate futuro) ===
// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore() // Asumiendo Pinia
//   if (to.meta.requiresAuth && !authStore.isAuthenticated) {
//      next('/login')
//   } else {
//      next()
//   }
// })

export default router
