import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    smallMobile: 350,
    mobile: 750,
    tablet: 1250,
    desktop: Infinity,
  },
  defaultBreakpoint: 'smallMobile' // customize this for SSR
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
