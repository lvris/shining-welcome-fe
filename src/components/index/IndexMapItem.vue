<template>
  <el-popover 
    trigger="click" 
    :title="props.name"
    :disabled="visible"
    width="300"
  >
    <template #reference>
      <div v-bind="$attrs">{{ props.name }}</div>
    </template>
    <p v-for="(d, i) in details" :key="i">
      {{ d }}
    </p>
    <el-image :src="props.img" />
  </el-popover>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
  name: String,
  detail: String,
  img: String,
})
const details = computed(() => 
  props.detail?.split(" ")
)

const visible = computed(() => {
  if(!props.detail && !props.img)
    return true;
  return false;
})
</script>

<style scoped>
div {
  border-radius: 8px;
  margin-bottom: 10px;

  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--ep-text-color-regular)
}
div.main {
  background-color: #e6c2cc;
}
div.sub {
  background-color: #f8dd5a;
}
div.out {
  background-color: #79d0e3;
}
div.yoka {
  background-color: #89e0b6;
}
</style>