/*********
 IMPORT
 *********/

import Vue from 'vue'
import App from './App.vue'

// Components import

import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

// Vue plugins import

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

/*********
    SETUP
 *********/

// Vue Resource
Vue.use(VueResource);

// Components
Vue.component('app-header', Header);
Vue.component('app-sidebar', Sidebar);

// Router
Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
