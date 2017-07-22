<template>
    <div class="page-content">
        <app-login-form class="login-form" isComingFrom="loginPage" v-if="!loggedIn"></app-login-form>
        <div class="jumbotron" v-if="loggedIn">
            <h1>You are already logged in :)</h1>
            <router-link to="/" tag="button" class="btn btn-success">Go back home</router-link>
        </div>
    </div>
</template>

<script>
    import LoginForm from './LoginForm.vue';
    export default {
        components: {
            appLoginForm: LoginForm
        },
        computed: {
            loggedIn() {
                return this.$store.getters.loggedIn;
            }
        },
        created() {
            document.querySelector('.sidebar-wrapper').style.display = 'none'; // re-show the sidebar
        },
        beforeDestroy() {
            document.querySelector('.sidebar-wrapper').style.display = 'block'; // re-show the sidebar
        }
    }
</script>

<style lang="scss">
    .login-form {
        width: 75%;
    }
</style>