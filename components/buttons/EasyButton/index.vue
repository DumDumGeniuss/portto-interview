<template>
  <button
    class="easy-button"
    @click="$emit('click')"
  >
    {{ text }}
  </button>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'EasyButton',

  inheritAttrs: false,

  props: {
    text: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
.easy-button {
  display: inline-flex;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: 1px solid $grey500;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}
</style>