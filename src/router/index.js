import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "produce" */ '../views/Shop.vue')
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  {
    path: '/kids',
    name: 'Kids',
    component: () => import(/* webpackChunkName: "kids" */ '../views/KidzZone.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
