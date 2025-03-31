import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ComponentLibrary',
      name: 'ComponentLibrary',
      component: () => import('../views/ComponentLibrary.vue'),
    },
  ],
})

export default router
