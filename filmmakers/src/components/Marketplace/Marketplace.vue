<template>
    <div class="page-content">
        <app-item v-for="(item, index) in items" :item="item" :key="index"></app-item>
    </div>
</template>

<script>
    import Item from './Item.vue';

    export default {
        data() {
            return {
                items: [
                    {name: "Vintage preset", image: "", description: "Quick and easy 50's vibe preset for Premiere.", price: "10"},
                    {name: "Intro template", image: "", description: "Dubsteppy, glitchy, etc. Basically an intro template for After Effects.", price: "20"},
                    {name: "Cutting course", image: "", description: "Quick 2h course where you learn how to cut videos to make a fluid composition.", price: "15"},
                    {name: "Cinematic music", image: "", description: "Hans Zimmer inspired theme music for your video's background.", price: "35"}
                ]
            }
        },
        components: {
            appItem: Item
        }
    }
</script>