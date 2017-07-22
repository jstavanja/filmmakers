<template>
    <div>
        <h3>Log in ...</h3>
        <form>
            <div class="form-group">
                <label for="email">Email address:</label>
                <input type="email" class="form-control" id="email" v-model="email">
            </div>
            <div class="form-group">
                <label for="pwd">Password:</label>
                <input type="password" class="form-control" id="pwd" v-model="password">
            </div>
            <button type="submit" class="btn btn-success" @click.prevent="submitSignIn">Submit</button>
        </form>
        <router-link to="/signup" tag="button" class="btn btn-info" id="create-account-button">Create account</router-link>
    </div>
</template>

<script>
    import fire from '../firebase';

    export default {
        props: [
            'isComingFrom'
        ],
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            submitSignIn() {
                this.userSignIn(this.email, this.password);
            },
            userSignIn(email, password) {
                fire.auth.signInWithEmailAndPassword(email, password).catch((error) => {
                    console.log(email, password);
                    // Handle Errors here.
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    throw new Error("Error while signing in: " + errorCode + " || " + errorMessage);
                }).then(() => {
                    if (this.isComingFrom === 'loginPage') {
                        window.location.href = '/'; // because router.push somehow doesn't render sidebar when redirecting to '/'
                    }
                });

            }
        }
    }
</script>

<style lang="scss" scoped>
    #create-account-button {
        margin-top: 10px;
    }
</style>