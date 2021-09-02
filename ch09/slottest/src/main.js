import Vue from 'vue'
import aaa from "@/AppNamed";
// import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // render: h => h(App),
  render: h=> h(aaa)
}).$mount('#app')
