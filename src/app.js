import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.css'
UIkit.use(Icons)

import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})

import './utils/console'
