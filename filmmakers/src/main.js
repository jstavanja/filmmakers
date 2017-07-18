/*********
 IMPORT
 *********/

import Vue from 'vue'
import App from './App.vue'

// Components import

import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';

// Importing routes
import { routes } from './routes';

// Importing Vuex store
import store from './store';

// Vue plugins import

import VueRouter from 'vue-router';
import VueResource from 'vue-resource';


/*********
    SETUP
 *********/

// Vue Resource
Vue.use(VueResource);
Vue.http.options.root = 'https://filmmakers-a9a57.firebaseio.com';

// Components
Vue.component('app-header', Header);
Vue.component('app-sidebar', Sidebar);
Vue.component('app-loading-spinner', LoadingSpinner);

// Router
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
