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
        path: '/shop/juice',
        name: 'Juice',
        component: () => import(/* webpackChunkName: "juice" */ '../views/Shop/Juice.vue')
    },
    {
        path: '/shop/product',
        name: 'Product',
        component: () => import(/* webpackChunkName: "product" */ '../views/Shop/Product.vue')
    },
    {
        path: '/shop/produce',
        name: 'Produce',
        component: () => import(/* webpackChunkName: "produce" */ '../views/Shop/Produce.vue')
    },
    {
        path: '/shop/merch',
        name: 'Merch',
        component: () => import(/* webpackChunkName: "merch" */ '../views/Shop/Merch.vue')
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
    routes,
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})

export default router
