import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gyro from '../views/Gyro.vue'
import Clip from '../views/Clip.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/gyro',
    name: 'gyro',
    component: Gyro
  },
  {
    path: '/clip',
    name: 'clip',
    component: Clip
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
