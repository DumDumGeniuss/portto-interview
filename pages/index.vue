<template>
  <div class="container">
    <button
      class="start-demo-button"
      @click="handleStartDemoButtonClick"
    >
      Start Demo
    </button>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  inheritAttrs: false,

  methods: {
    handleStartDemoButtonClick() {
      this.$router.push({
        path: '/collections',
      });
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .start-demo-button {
    outline: none;
    cursor: pointer;
    width: 200px;
    height: 60px;
    border-radius: 5px;
  }
}
</style>