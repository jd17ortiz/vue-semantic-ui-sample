import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import '@/assets/styles.less'
import 'fomantic-ui/dist/semantic.css'

import 'fomantic-ui/dist/semantic.js'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
