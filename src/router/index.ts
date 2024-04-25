import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/management',
      name: 'management',
      component: () => import('@/views/ManagementView.vue')
    },
    {
      path: '/management/:id',
      name: 'manager',
      component: () => import('@/views/ManagementView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/NotFound.vue')
    },
  ]
})

export default router
