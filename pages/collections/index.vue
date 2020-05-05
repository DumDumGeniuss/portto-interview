<template>
  <div
    class="collections-page"
    v-infinite-scroll="fetchMoreAssets"
    infinite-scroll-disabled="infiniteScrollingDisabled"
    infinite-scroll-distance="100"
  >
    <div class="asset-card-list">
      <div
        v-for="asset of assetList"
        :key="asset.token_id"
        class="asset-card-container"
      >
        <!-- Asset Card will extend itself to perfectly fit the container -->
        <AssetCard
          :asset="asset"
        />
      </div>
    </div>

    <div class="loading-icon-container">
      <LoadingIcon v-show="isFetchingAssets" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { fetchAssets } from '@/api/assets/'
import AssetCard from '@/components/cards/AssetCard/index.vue'
import LoadingIcon from '@/components/icons/LoadingIcon/index.vue'

export default Vue.extend({
  name: 'CollectionsPage',

  inheritAttrs: false,

  components: {
    AssetCard,
    LoadingIcon,
  },

  data() {
    return {
      assetList: [],
      assetOffset: 0,
      assetLimit: 20,
      isFetchingAssets: false,
      hasNoMoreAssets: false,
    };
  },

  computed: {
    infiniteScrollingDisabled() {
      return this.isFetchingAssets || this.hasNoMoreAssets;
    },
  },

  methods: {
    async fetchMoreAssets() {
      try {
        this.isFetchingAssets = true;
        const newAssetList = await fetchAssets(
          '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91',
          this.assetOffset,
          this.assetLimit,
        );
        if (newAssetList.length === 0) {
          this.hasNoMoreAssets = true;
        }
        this.assetList = this.assetList.concat(newAssetList);
        this.assetOffset = this.assetOffset + this.assetLimit;
      } catch (error) {
        // Do something here
      } finally {
        this.isFetchingAssets = false;
      }
    },
  },

  created() {
    this.fetchMoreAssets();
  },
})
</script>

<style lang="scss" scoped>
.collections-page {
  padding: 20px;
  .asset-card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .asset-card-container {
      width: calc(50% - 10px);
      margin-bottom: 20px;
      overflow: hidden;

      @media (max-width: 375px) {
        width: 100%;
      }
    }
  }

  .loading-icon-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>