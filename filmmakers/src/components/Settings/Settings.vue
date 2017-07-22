<template>
    <div class="page-content">
        <div class="panel panel-default">
            <div class="panel-heading">
                User settings
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" :value="email" @change="newEmail = $event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="username">Full name:</label>
                        <input type="text" class="form-control" id="username" :value="fullName" @change="newFullName = $event.target.value">
                    </div>
                </form>
                <button class="btn btn-success" @click="saveSettings">Save settings</button>
            </div>
        </div>
    </div>
</template>

<script>
    import fire from '../../firebase';
    export default {
        computed: {
            email() {
                return this.$store.getters.email;
            },
            fullName() {
                return this.$store.getters.fullName;
            },
            loggedIn() {
                return this.$store.getters.loggedIn;
            }
        },
        methods: {
            saveSettings() {
                if (this.newEmail) {
                    fire.auth.currentUser.updateEmail(this.newEmail);
                }
                if (this.newFullName) {
                    fire.auth.currentUser.updateProfile({
                        displayName: this.newFullName
                    }).then(() => {
                        window.location.reload();
                    });
                }

            }
        },
        created() {
            if (!this.loggedIn) {
                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss">

</style>