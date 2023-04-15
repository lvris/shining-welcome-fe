<template>
  <el-config-provider namespace="ep">
  <el-container m-auto>
    <el-header>
      <Header />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
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
