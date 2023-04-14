<template>
  <el-config-provider namespace="ep">
  <el-container m-auto>
    <el-header>
      <BaseHeader />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}
#app > section {
  max-width: 80vh;
}
</style>
