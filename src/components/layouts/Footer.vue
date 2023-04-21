<template>
  <el-divider class="m-0 mt-4" />
    <div class="px-2 py-6 mx-auto max-w-5xl h-full lg:px-0">
      <div class="flex items-center justify-evenly flex-row">
        <div class="flex items-center">
          <a href="https://shiningacg.org" target="_blank">
            <img src="/shining.svg" class="block w-[28px]"/>
          </a>
          <p class="ml-2">ShiningACG</p>
          <p class="ml-2 text-[#606266] text-[14px]">© {{ year }}</p>
        </div>
        <nav class="flex space-x-6 mt-0">
          <p>By <a href="https://lvris.com">lvris</a></p>
        </nav>
      </div>
    </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>