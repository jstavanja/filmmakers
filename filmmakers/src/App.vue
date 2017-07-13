<template>
  <div id="app">
    <app-header></app-header>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  components: {
      appHeader: Header
  }
}
</script>

<style lang="scss">

</style>
