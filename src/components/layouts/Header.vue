<template>
  <el-menu
    mode="horizontal"
    router
    :default-active="$route.path"
    :ellipsis="false"
  >
    <router-link to="/" class="self-center">
      <img src="/shining.svg" clas="logo" alt="Shining" height="45">
    </router-link>
    <div flex-grow></div>
    <el-menu-item index="/welcome">Welcome</el-menu-item>
    <el-menu-item index="/manage">Manage</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>