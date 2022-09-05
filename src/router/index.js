import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/health',
    name: 'health',
    component:() => import('../components/Health.vue'),
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component: () => import('../components/Entertainment.vue'),
  },
  {
    path: '/',
    name: 'essentials',
    component:() => import('../components/Essentials.vue'),
  },
  {
    path: '/addexpense',
    name: 'addexpense',
    component: () => import('../components/AddExpense.vue'),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
