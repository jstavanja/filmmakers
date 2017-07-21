<template>
    <div class="page-content">
        <app-login-form class="login-form" isComingFrom="loginPage"></app-login-form>
    </div>
</template>

<script>
    import LoginForm from './LoginForm.vue';
    export default {
        components: {
            appLoginForm: LoginForm
        }
    }
</script>

<style lang="scss">
    .sidebar-wrapper {
        display: none;
    }
    .login-form {
        width: 75%;
    }
</style>