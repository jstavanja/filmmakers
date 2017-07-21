<template>
    <div class="page-content">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3><b>Create an account on Filmmakers!</b></h3>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="fullName">Full Name:</label>
                        <input type="text" id="fullName" class="form-control" v-model="fullName">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail address:</label>
                        <input type="email" id="email" class="form-control" v-model="email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" class="form-control" v-model="password">
                    </div>
                    <button class="btn btn-success" @click.prevent="createUser">Create account</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import auth from '../../auth';
    export default {
        data() {
            return {
                email: '',
                password: '',
                fullName: ''
            }
        },
        methods: {
            createUser() {
                auth.createUserWithEmailAndPassword(this.email, this.password).catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        alert('The password is too weak.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                }).then(() => {
                    auth.currentUser.updateProfile({displayName: this.fullName});
                    window.location.reload(); // TODO: find a method to only reload user data (call onAuthStateChanged)
                    this.$router.push('/');
                });
            }
        },
        created() {
            if (!this.loggedIn) {
                this.$router.push('/');
            }
        }
    }
</script>