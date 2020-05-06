import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import VueMq from 'vue-mq'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    smallMobile: 350,
    mobile: 670,
    tablet: 1250,
    desktop: Infinity,
  },
  defaultBreakpoint: 'smallMobile' // customize this for SSR
})

Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
