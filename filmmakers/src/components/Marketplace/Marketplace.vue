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
                items: []
            }
        },
        methods: {
          fetchMarketplaceItems() {
              this.$http.get('marketplace-items.json')
                  .then((data) => data.json())
                  .then((result) => this.items = result);
          }
        },
        components: {
            appItem: Item
        },
        created() {
            this.fetchMarketplaceItems();
        }
    }
</script>