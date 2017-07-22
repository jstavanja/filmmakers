<template>

    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="/" class="navbar-brand" tag="a"><img src="../assets/logo.png" alt=""></router-link>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="navbar-item" v-for="navLink in navLinks">

                        <router-link :to="navLink.url" tag="a">{{ navLink.name }}</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown"  v-bind:class="{ 'open': dropdownOpen }">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" @click="toggleDropdown">Testing dropdown<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="userLogOut">Log out</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>

<script>
    import auth from '../auth';
    export default {
        data() {
            return {
                navLinks: [],
                dropdownOpen: false
            }
        },
        methods: {
            fetchNavigationItems() {

                // Call firebase and set the navLinks object
                this.$http.get('navbar.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.navLinks = data;
                    });
            },
            toggleDropdown() {
                this.dropdownOpen = !this.dropdownOpen;
            },
            userLogOut() {
                auth.signOut();
                auth.currentUser.reload();
//                window.location.reload();
            }
        },
        created() {
            this.fetchNavigationItems();
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        margin-bottom: 0px;
        background-color: #210008;

        .navbar-brand {
            img {
                height: 100%;
            }
        }

        .nav.navbar-nav {
            a {
                color: white;

                &:hover, &:focus {
                    color: white;
                    text-decoration: underline;
                    text-decoration-color: white;
                }
            }
        }


        .nav.navbar-nav.navbar-right {
            .dropdown-toggle {
                background: transparent !important;
            }
            ul {
                li {
                    a {
                        color: #0a0a0a;
                    }
                }
            }
        }
    }

</style>