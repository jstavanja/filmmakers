<template>
    <div class="page-content">
        <app-loading-spinner v-if="loadingItems"></app-loading-spinner>
        <app-post v-for="(post, index) in posts" :post="post" :key="index"></app-post>
    </div>
</template>

<script>
    import Post from '../Post.vue';
    import LoadingSpinner from '../LoadingSpinner.vue';

    export default {
        data() {
            return {
                posts: [],
                loadingItems: true
            }
        },
        methods: {
            fetchHotPosts() {
                this.$http.get('hot-posts.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        this.posts = data;
                        this.loadingItems = false;
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