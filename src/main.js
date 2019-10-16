import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$http = axios
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
