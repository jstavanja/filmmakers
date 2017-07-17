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
                <a class="navbar-brand" href="/"><img src="../assets/logo.png" alt=""></a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="navbar-item" v-for="navLink in navLinks">

                        <router-link :to="navLink.url" tag="a">{{ navLink.name }}</router-link>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">JuanPedro74 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                navLinks: []
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

        .navbar-nav {
            a {
                color: white;

                &:hover, &:focus {
                    color: white;
                    text-decoration: underline;
                    text-decoration-color: white;
                }
            }
        }
    }
</style>