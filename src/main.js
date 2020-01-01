import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//https://investmentnovel.com/vue-js-crud-example-tutorial-from-scratch/
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
