import Vue from 'vue'
import router from './router.js'
import DWW from './views/DWW.vue'
import store from './store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/app.css'
import jQuery from 'jquery'
import 'animate.css'

global.$ = jQuery

new Vue({
  el: '#app',
  render: h => h(DWW),
  router,
  store
})
