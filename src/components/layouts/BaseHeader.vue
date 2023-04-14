<template>
  <el-menu
    mode="horizontal"
    default-active="1"
    :ellipsis="false"
    :router="true"
  >
    <a href="http://shiningacg.org" self-center>
      <img src="/shining.svg" clas="logo" alt="Shining" height="45">
    </a>
    <div flex-grow></div>
    <el-menu-item index="1" route="welcome">Welcome</el-menu-item>
    <el-menu-item index="2" route="manage">Manage</el-menu-item>
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