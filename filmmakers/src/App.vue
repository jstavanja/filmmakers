<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  components: {
      appHeader: Header,
      appSidebar: Sidebar
  }
}
</script>

<style lang="scss">
    // fontface import
    @import url('https://fonts.googleapis.com/css?family=Rasa');
</style>
