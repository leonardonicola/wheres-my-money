import Vue from 'vue'
import VueRouter from 'vue-router'
import Entertainment from '../components/Entertainment.vue'
import Health from '../components/Health.vue'
import Essentials from '../components/Essentials.vue'
import History from '../components/History.vue'

Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    name:'historic',
    component: History
  },
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
    path: '/essentials',
    name: 'essentials',
    component:Essentials,
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
