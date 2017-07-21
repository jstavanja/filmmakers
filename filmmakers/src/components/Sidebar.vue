<template>
    <div class="sidebar-wrapper">
        <div class="sidebar hidden-xs">
            <div class="not-logged-in" v-if="!isLoggedIn">
                <app-login-form class="login-form"></app-login-form>
            </div>
            <div class="logged-in" v-if="isLoggedIn">
                <div class="user-info">
                    <div class="user-avatar"></div>
                    <br>
                    <div class="user-text">Welcome {{ fullName }} :)</div>
                </div>
                <div class="links">
                    <div class="list-group">
                        <button type="button" class="list-group-item"><i class="icon ion-email"></i> Messages</button>
                        <router-link to="/settings" class="list-group-item" tag="button"><i class="icon ion-gear-a"></i> Settings</router-link>
                    </div>
                </div>
                <hr>
                <div class="following">
                    <h3 class="text-center">Following:</h3>
                    <ul class="list-group">
                        <li v-for="(followed, index) in user.followedList" class="list-group-item">
                            {{ followed.name }}<span class="badge">{{ index }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Sidebar for smaller displays -->
        <div class="sidebar hidden-sm hidden-md hidden-lg">
            <div class="not-logged-in" v-if="!isLoggedIn">
                <router-link to="/login" class="btn btn-success" type="a">Log In</router-link>
            </div>
            <div class="logged-in" v-if="isLoggedIn">
                <div class="user-info">
                    <div class="user-avatar"></div>
                </div>
                <div class="links">
                    <ul>
                        <li><i class="icon ion-email"></i></ion-icon></li>
                        <li><i class="icon ion-gear-a"></i></li>
                    </ul>
                </div>
                <hr>
                <div class="following">
                    <h5 class="text-center">Following:</h5>
                    <ul class="list-group">
                        <li v-for="followed in user.followedList" class="list-group-item">
                            <!-- TODO: Implement user avatars -->
                            <img class="sidebar-following-avatar" src="http://centrum-it.com/wp-content/uploads/avatar-1.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
    import LoginForm from './LoginForm.vue';

    export default {
        data() {
            return {
                user: {
                    followedList: [{name: "Fernando A."}, {name: "Armando F."}, {name: "Diego M."}]
                }
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.loggedIn;
            },
            username() {
                return this.$store.getters.username;
            },
            fullName() {
                return this.$store.getters.fullName;
            }
        },
        components: {
            appLoginForm: LoginForm
        }
    }
</script>

<style lang="scss" scoped>
    @import "../vars";
    .sidebar-wrapper {
        margin-top: 50px;
        height: calc(100vh - 50px);
        float: left;
        width: 200px;
        position: fixed;
    }
    .sidebar {

        height: 100%;
        width: 100%;

        background: $bootstrap-grey;


        padding-top: 30px;
        .user-info {
            .user-avatar {
                margin: 0 auto;
                background: url("../assets/avatar.jpg") center center no-repeat;
                background-size: cover;
                width: 100px;
                height: 100px;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
            }
            .user-text {
                text-align: center;
            }
        }
        .links, .following {
            margin: 10px;
            padding: 10px;
        }
        .links {
            ul {
                width: 100%;
                text-align: center;
                padding: 0;
                li {
                    list-style-type: none;
                    margin-bottom: 5px;
                    i {
                        margin-right: 5px;
                    }
                    a {
                        color: black;
                        text-decoration: none;
                    }
                }
            }
        }
        .following {
            .sidebar-following-avatar {
                height: 20px;
            }
        }
    }

    .not-logged-in {
        padding: 30px;
    }
    
    @media (max-width: 768px) {
        // screen-sm
        .sidebar-wrapper {
            .user-info {
                .user-avatar {
                    height: 50px;
                    width: 50px;
                }
            }

            width: 100px;
            .icon {
                font-size: 32px;
            }
        }
    }
</style>