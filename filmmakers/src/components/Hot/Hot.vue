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
                let currentPostNumber = 0;
                fire.db.ref('posts').orderByChild('score').on('child_added', (content) => {
                    if (currentPostNumber > 10) return;
                    this.posts.push(content.val());
                    this.loadingItems = false;
                });
            }
        },
        components: {
            appPost: Post
        },
        created() {
            this.fetchHotPosts();
            this.posts.reverse();
        }
    }
</script>