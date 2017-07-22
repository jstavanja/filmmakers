<template>
    <div class="page-content">
        <app-loading-spinner v-if="loadingItems"></app-loading-spinner>
        <app-post v-for="(post, index) in posts" :post="post" :key="index" :index="index"></app-post>
    </div>
</template>

<script>
    import Post from '../Post.vue';
    import LoadingSpinner from '../LoadingSpinner.vue';
    import fire from '../../firebase';

    export default {
        data() {
            return {
                posts: [],
                loadingItems: true
            }
        },
        methods: {
            fetchHotPosts() {
                fire.db.ref('hot-posts').on('value', (content) => {
                    this.posts = content.val();
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