<template>
    <div class="page-content">
        <app-loading-spinner v-if="loadingItems"></app-loading-spinner>
        <app-item v-for="(item, index) in items" :item="item" :key="index"></app-item>
    </div>
</template>

<script>
    import Item from './Item.vue';
    import LoadingSpinner from '../LoadingSpinner.vue';

    export default {
        data() {
            return {
                items: [],
                loadingItems: true
            }
        },
        methods: {
          fetchMarketplaceItems() {
              this.$http.get('marketplace-items.json')
                  .then((data) => data.json())
                  .then((result) => {
                    this.items = result;
                    this.loadingItems = false;
                  });
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