import Vue from 'vue'
import App from './App.vue'
import store from "./store/index"
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

import router from "./router";



new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')


import 'jquery/dist/jquery.slim.js'
import 'bootstrap/dist/js/bootstrap.min.js'