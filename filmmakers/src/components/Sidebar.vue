<template>
    <div class="sidebar-wrapper">
        <div class="sidebar hidden-xs">
            <div class="user-info">
                <div class="user-avatar"></div>
                <div class="user-text">Welcome {{ user.username }} :)</div>
            </div>
            <div class="links">
                <ul>
                    <li><i class="icon ion-email"></i></ion-icon><a href="#">Messages</a></li>
                    <li><i class="icon ion-gear-a"></i><a href="#">Settings</a></li>
                </ul>
            </div>
            <div class="following">
                <div class="heading-text">
                    Following:
                </div>
                <div class="followed-list">
                    <ul v-for="followed in user.followedList">
                        <li><span class="dot new-posts"></span>{{ followed.name }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Sidebar for smaller displays -->
        <div class="sidebar hidden-sm hidden-md hidden-lg">
            <div class="user-info">
                <div class="user-avatar"></div>
            </div>
            <div class="links">
                <ul>
                    <li><i class="icon ion-email"></i></ion-icon></li>
                    <li><i class="icon ion-gear-a"></i></li>
                </ul>
            </div>
            <div class="following">
                <div class="heading-text">
                    Following:
                </div>
                <div class="followed-list">
                    <ul v-for="followed in user.followedList">
                        <li><span class="dot new-posts"></span>{{ followed.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    export default {
        data() {
            return {
                user: {
                    // TODO: Implement user global object, when a user logs in
                    username: "Juan Pedro",
                    followedList: [{name: "Fernando A."}, {name: "Armando F."}, {name: "Diego M."}]
                }
            }
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
        font-family: 'Helvetica', serif;

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
            border: 1px solid rgba(black, 0.5);
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
            .heading-text {
                padding-bottom: 5px;
                border-bottom: 1px solid black;
            }
            .followed-list {
                ul {
                    padding: 0;
                    li {
                        height: 20px;
                        .dot {
                            display: inline-block;
                            height: 5px;
                            width: 5px;
                            border-radius: 50%;
                            margin-right: 5px;
                            margin-bottom: 3px;
                            &.new-posts {
                                background-color: limegreen;
                            }
                            &.no-new-posts {
                                background-color: indianred;
                            }
                        }
                        display: inline-block;
                        list-style-type: none;
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }
    
    @media (max-width: 768px) {
        // screen-sm
        .sidebar-wrapper {
            width: 100px;
            .icon {
                font-size: 32px;
            }
        }
    }
</style>