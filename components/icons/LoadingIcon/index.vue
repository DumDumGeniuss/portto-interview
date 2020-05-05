<template>
  <div class="loader"></div>
</template>

<script>
export default {
  name: 'LoadingIcon'
}
</script>>

<style lang="scss" scoped>
.loader {
  border: 3px solid $grey500;
  border-radius: 50%;
  border-top: 3px solid white;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>