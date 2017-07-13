import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// Vue Resource
Vue.use(VueResource);

// Components
Vue.component('app-header', Header);

// Router
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
