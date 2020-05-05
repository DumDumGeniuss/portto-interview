<template>
  <div
    class="asset-card"
    @click="handleAssetCardClick"
  >
    <div
      class="asset-image"
      :style="{
        backgroundImage: `url(${asset.image_url})`,
      }"
    />
    <span class="title">
      {{ asset.name }}
    </span>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AssetCard',

  inheritAttrs: false,

  props: {
    asset: {
      type: Object,
      required: true,
    },
  },

  methods: {
    handleAssetCardClick() {
      this.$router.push({
        path: `/collections/${this.asset.token_id}/`,
      });
    },
  },
})
</script>

<style lang="scss" scoped>
.asset-card {
  display: inline-flex;
  width: 100%;
  height: 300px;
  flex-flow: column;
  padding: 20px;
  border: 1px solid $grey500;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 568px) {
    height: 250px;
  }

  .asset-image {
    width: 100%;
    height: 200px;
    border-radius: 5px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center;

    @media (max-width: 568px) {
      height: 150px;
    }
  }

  .title {
    margin-top: 20px;
    font-size: $font-size-md;
    text-align: center;
    word-wrap: break-word;
  }
}
</style>