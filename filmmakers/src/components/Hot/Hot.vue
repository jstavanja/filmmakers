<template>
    <div class="page-content">
        <app-post v-for="(post, index) in posts" :post="post" :key="indexgi"></app-post>
    </div>
</template>

<script>
    import Post from './Post.vue';

    export default {
        data() {
            return {
                posts: []
            }
        },
        methods: {
            fetchHotPosts() {
                this.$http.get('https://filmmakers-a9a57.firebaseio.com/hot-posts.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.posts = data;
                    });
            }
        },
        components: {
            appPost: Post
        },
        created() {
            this.fetchHotPosts();
        }
    }
</script>