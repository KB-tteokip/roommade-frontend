import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'login' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/readiness',
      name: 'readiness',
      component: () => import('@/views/NotReadyView.vue'),
    },
    {
      path: '/house-comparisons',
      name: 'house-comparison',
      component: () => import('@/views/house/HouseComparisonView.vue'),
    },
    {
      path: '/house-comparisons/houses/:houseType/register',
      name: 'house-register',
      component: () => import('@/views/house/HouseRegisterView.vue'),
      props: true,
    },
    {
      path: '/house-comparisons/houses/:houseType/edit',
      name: 'house-edit',
      component: () => import('@/views/house/HouseEditView.vue'),
    },
    {
      path: '/benefits',
      name: 'benefit',
      component: () => import('@/views/NotReadyView.vue'),
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
    {
      path: '/mydata/connect',
      name: 'mydata-connect',
      component: () => import('@/views/mydata/MyDataConnectView.vue'),
    },
  ],
})

export default router
