import Vue from 'vue'
import App from './App.vue'
import Zui from '../packages/index'

Vue.config.productionTip = false

Vue.use(Zui)

new Vue({
  render: h => h(App)
}).$mount('#app')
