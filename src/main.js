import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/plugins/router'
import store from '@/plugins/vuex'
import './registerServiceWorker'

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
}).$mount('#app')
