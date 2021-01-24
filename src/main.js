import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

import router from '@/router'
import store from '@/store'

axios.defaults.baseURL = 'https://vue2-axios-e0f1a-default-rtdb.europe-west1.firebasedatabase.app';
// axios.defaults.headers.common['Authorization'] = 'fasfdsa';
axios.defaults.headers.get['Accepts'] = 'application/json';

const requestInterceptor = axios.interceptors.request.use(config => {
  console.log('RequestInterceptor', config);
  return config;
});
const responseInterceptor = axios.interceptors.response.use(res => {
  console.log('ResponseInterceptor', res);
  return res;
});
axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
