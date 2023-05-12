<template>
  <h2 class="m-b-8">访客管理</h2>

  <el-table
    v-loading="loading"
    :data="tableData" 
    style="width: 100%"
    :row-class-name="tableRowClass"
    table-layout="auto"
    highlight-current-row
    @current-change="handleChange"
  >
    <el-table-column prop="id" label="ID" />
    <el-table-column prop="cname" label="CN" />
    <el-table-column prop="school" label="School" />
    <el-table-column prop="status" label="S"/>
  </el-table>

  <el-pagination
    class="m-t-8 justify-center"
    background
    :current-page="currentPage"
    @update:current-page="changePage"
    layout="prev, pager, next" 
    :total="tableSize" 
  />
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { queryGuestList, queryGuestSize } from '~/apis/guestAPI';
import { Status } from '~/common/enums/guest.enum';
import { Guest } from '~/common/interfaces/guest.interface';
import router from '~/router';

onMounted(() => {
  queryGuestSize()
    .then(data => {
      tableSize.value = data;
    })
  
  let query = router.currentRoute.value.query?.page;
  if(query === null || Number.isNaN(+query)) {
    changePage(1);
  } else {
    changePage(+query);
  }
});

const tableSize = ref(100);
const tableData:Ref<Guest[]> = ref([]);

function tableRowClass({row, rowIndex}:{row: Guest, rowIndex: number}) {
  switch (row.status) {
    case Status.BAN:
      return 'ban';
      break;
    case Status.OK:
      return 'ok';
      break;
    case Status.WAIT:
      return 'wait';
      break;
    default:
      return 'warning';
      break;
  }
}

function handleChange(guest: Guest) {
  router.push(`/manage/${guest.id}`);
}

const loading = ref(true);
const currentPage = ref(1);
function changePage(val: number) {
  loading.value = true;
  queryGuestList({page: val})
    .then(data => {
      tableData.value = data;
  }).then(() => {
      router.replace({
        query: {
          page: val,
        }
      })
      currentPage.value = val;
      loading.value = false;
  })
}
</script>

<style>
.ep-table .ok {
  --ep-table-tr-bg-color: var(--ep-color-info-light-9);
}
.ep-table .ban {
  --ep-table-tr-bg-color: var(--ep-color-danger-light-9);
}
</style>