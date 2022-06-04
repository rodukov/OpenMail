import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/account', name: 'Account', component: () => import('../views/Account.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
