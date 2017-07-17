<template>
    <div class="page-content">
        <div class="col-xs-12 col-sm-12 col-md-6 col-md-6" v-for="(story, index) in stories">
            <app-story :story="story" :key="index"></app-story>
        </div>
    </div>
</template>

<script>
    import Story from './Story.vue';
    export default {
        data() {
            return {
                stories: []
            }
        },
        methods: {
          fetchStories() {
              this.$http.get('stories.json')
                  .then(data => data.json())
                  .then(result => this.stories = result);
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