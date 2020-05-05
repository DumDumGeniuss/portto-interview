<template>
  <div class="default-layout">
    <div class="page-content">
      <nuxt />
    </div>
    <!-- You can teleport components here if you need -->
    <portal-target name="default-layout-fixed-footer" class="default-layout-fixed-footer">
    </portal-target>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  .page-content {
    max-width: 768px;
    margin: 0 auto;
  }

  .default-layout-fixed-footer {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
  }
}
</style>
