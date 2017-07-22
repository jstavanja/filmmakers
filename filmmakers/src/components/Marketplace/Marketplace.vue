<template>
    <div class="page-content">
        <app-loading-spinner v-if="loadingItems"></app-loading-spinner>
        <app-item v-for="(item, index) in items" :item="item" :key="index"></app-item>
    </div>
</template>

<script>
    import Item from './Item.vue';
    import LoadingSpinner from '../LoadingSpinner.vue';
    import fire from '../../firebase';

    export default {
        data() {
            return {
                items: [],
                loadingItems: true
            }
        },
        methods: {
          fetchMarketplaceItems() {
              fire.db.ref('marketplace-items').on('value', (content) => {
                  this.items = content.val();
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