import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/signup',
      redirect: '/signup/info',
    },
    {
      path: '/signup/info',
      name: 'signup-info',
      component: () => import('@/views/signup/SignupInfoView.vue'),
    },
    {
      path: '/signup/terms',
      name: 'signup-terms',
      component: () => import('@/views/signup/SignupTermsView.vue'),
    },
    {
      path: '/signup/complete',
      name: 'signup-complete',
      component: () => import('@/views/signup/SignupCompleteView.vue'),
    },
  ],
})

export default router
