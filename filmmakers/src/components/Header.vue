<template>
    <div class="navbar">
        <div class="logo"></div>
        <div class="navbar-links">
            <div class="centering-wrapper">
                <div class="navbar-item" v-for="navLink in navLinks">
                    <a href="#">{{ navLink.name }}</a>
                </div>
            </div>
        </div>
    </div>
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
                this.$http.get('https://filmmakers-a9a57.firebaseio.com/navbar.json')
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

        background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);

        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 50px;
        padding: 10px 0 10px 0;

        border-bottom: 1px solid black;

        .navbar-links {

            display: inline-block;
            height: 100%;

            .centering-wrapper {
                height: 100%;
                display: table;

                .navbar-item {

                    display: table-cell;
                    vertical-align: middle;
                    padding-left: 30px;

                    a {
                        font-family: 'Helvetica', serif;
                        color: white;
                        text-decoration: none;
                        font-size: 16px;
                        font-weight: 200;
                        display: inline-block;
                        
                        &:hover {
                            text-decoration: underline;
                            text-decoration-color: white;
                        }
                    }
                }
            }
        }

        .logo {
            background-image: url('../assets/logo.png');
            background-repeat: no-repeat;
            background-size: contain;
            display: inline-block;
            width: 300px;
            margin-left: 30px;
            margin-right: 30px;
            height: 100%;
        }

    }
</style>