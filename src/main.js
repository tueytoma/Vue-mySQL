import Vue from 'vue'
import moment from 'moment'
import App from './App'
import router from './router'
// import * as api from './services'
import './style.scss'

moment.locale('th')

// Vue.mixin({
//   computed: {
//     $api () {
//       return api
//     },
//   },
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
