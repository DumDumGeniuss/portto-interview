<template>
  <div class="asset-detail-page">
    <div class="top-section">
      <nuxt-link to="/collections" class="back-arrow">
        {{ '&lt;' }}
      </nuxt-link>
      <h1 v-if="asset" class="header-title">
        {{ asset.collection.name }}
      </h1>
      <LoadingIcon v-show="isFetchingAsset" />
    </div>
    <div v-if="asset" class="asset-content-section">
      <span v-if="!asset.image_url" class="not-image-text">
        Image is unkown
      </span>
      <img
        v-else
        class="asset-image"
        :src="asset.image_url"
      />
      <h2 class="asset-title">
        {{ asset.name }}
      </h2>
      <p class="asset-description">
        {{ asset.description || 'No description' }}
      </p>
      <!--
        Teleport this section to layout level to make sure it's always on top of everything 
        without any interference
      -->
      <portal to="default-layout-fixed-footer">
        <div class="permalink-button-wrapper">
          <EasyButton
            text="Permalink"
            @click="handlePermalinkClick"
          />
        </div>
      </portal>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { fetchAsset } from '@/api/assets/'
import LoadingIcon from '@/components/icons/LoadingIcon/index.vue'
import EasyButton from '@/components/buttons/EasyButton/index.vue'

export default Vue.extend({
  name: 'CollectionDetailPage',

  inheritAttrs: false,

  components: {
    LoadingIcon,
    EasyButton,
  },

  data() {
    return {
      asset: null,
      isFetchingAsset: false,
    };
  },

  methods: {
    async fetchAsset() {
      try {
        this.isFetchingAsset = true;
        this.asset = await fetchAsset(this.$route.params.token_id);
      } catch (error) {
        // Do something
      } finally {
        this.isFetchingAsset = false;
      }
    },
    handlePermalinkClick() {
      window.open(this.asset.permalink);
    },
  },

  created() {
    this.fetchAsset();
  },
})
</script>

<style lang="scss" scoped>
.asset-detail-page {
  padding-bottom: 100px;
  .top-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px 10px 60px;

    .header-title {
      font-size: $font-size-lg;
      text-align: center;
      word-break: break-word;
    }

    .back-arrow {
      position: absolute;
      left: 20px;
      top: 50%;
      color: black;
      transform: translateY(-50%);
      font-size: $font-size-lg;
      text-decoration: none;

      &:hover {
        color: $grey500;
      }
    }
  }

  .asset-content-section {
    display: flex;
    align-items: center;
    flex-flow: column;
    padding: 0 30px 30px;
    margin-top: 20px;

    .not-image-text {
      font-size: $font-size-md;
    }

    .asset-image {
      width: 100%;
      max-width: 500px;
    }

    .asset-title {
      margin-top: 20px;
      font-size: $font-size-lg;
      text-align: center;
    }

    .asset-description {
      margin-top: 20px;
      font-size: $font-size-md;
    }
  }
}

// Class used for teleported elements
.permalink-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>