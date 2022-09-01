import Vue from 'vue'
import VueRouter from 'vue-router'
const Entertainment = () => import('../components/Entertainment.vue')
const Health = () => import('../components/Health.vue')
const Essentials = () => import('../components/Essentials.vue')
const AddExpense = () => import('../components/AddExpense.vue')

Vue.use(VueRouter)


const routes = [
  {
    path: '/health',
    name: 'health',
    component:Health,
  },
  {
    path: '/entertainment',
    name: 'entertainment',
    component:Entertainment,
  },
  {
    path: '/',
    name: 'essentials',
    component:Essentials,
  },
  {
    path: '/addexpense',
    name: 'addexpense',
    component: AddExpense,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
