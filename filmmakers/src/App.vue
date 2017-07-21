<template>
  <div id="app">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import auth from './auth';


export default {
  name: 'app',
  data: function () {
    return {
      auth
    }
  },
  methods: {
    listenToUserChange() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          const displayName = user.displayName;
          const email = user.email;
          /* TODO: Implement more user parameters
          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          console.log(user);

          */

          this.$store.dispatch('userLogIn', {email: email, fullName: displayName});

        } else {
          // console.log("Signed out");
        }
      });
    }
  },
  components: {
      appHeader: Header,
      appSidebar: Sidebar
  },
  created() {
      this.listenToUserChange();
  }
}
</script>

<style lang="scss">

  // import site defaults
  @import "settings.scss";

  // fontface import
  @import url('https://fonts.googleapis.com/css?family=Zilla+Slab');
  body, html {
    font-family: 'Zilla Slab', serif;
  }

  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }

</style>
