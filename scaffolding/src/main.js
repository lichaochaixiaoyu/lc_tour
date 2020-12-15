import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
// 一般node.js服务器搭建的服务器端口是多少？3000
axios.defaults.baseURL = 'http://127.0.0.1:3000'
Vue.prototype.axios = axios;


Vue.config.productionTip = false

import MinUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MinUI);
import '../public/css/reset.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
