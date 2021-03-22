import Vue from 'vue'
import VueRouter from 'vue-router'
import Characters from'@/views/Characters.vue'
import SpinnerPortal from '../components/SpinnerPortal'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SpinnerPortal
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue') //lazy loading
  }, 
  {
    path: '/characters',
    name: 'Characters',
    component: Characters //normal loading
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
