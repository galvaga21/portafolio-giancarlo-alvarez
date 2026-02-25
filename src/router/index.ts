import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/public/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- RUTAS PÚBLICAS (Landing Page) ---
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

    // --- FALLBACK: redirige cualquier ruta desconocida al home ---
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
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

export default router
