<template>
    <div class="page-content">
        <app-loading-spinner v-if="loadingItems"></app-loading-spinner>
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-6" v-for="(story, index) in stories">
            <app-story :story="story" :key="index"></app-story>
        </div>
    </div>
</template>

<script>
    import Story from './Story.vue';
    import LoadingSpinner from '../LoadingSpinner.vue';

    export default {
        data() {
            return {
                stories: [],
                loadingItems: true
            }
        },
        methods: {
          fetchStories() {
              this.$http.get('stories.json')
                  .then(data => data.json())
                  .then(result => {
                      this.stories = result;
                      this.loadingItems = false;
                  });
          }
        },
        components: {
           appStory: Story
        },
        created() {
            this.fetchStories();
        }
    }
</script>