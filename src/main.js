import Vue from 'vue'
import App from './App.vue'
import router from '@/route'
Vue.config.productionTip = false

// vant
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

import axios from 'axios'
Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
