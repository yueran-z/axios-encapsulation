import { createRouter, createWebHistory } from 'vue-router'
// import Login from '../views/Login'
const routes = [
  {
    path: '/Login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
