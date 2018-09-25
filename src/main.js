import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'fomantic-ui/dist/semantic.css'
import 'jquery'
import 'fomantic-ui/dist/semantic.js'
import '@/assets/styles.less'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
