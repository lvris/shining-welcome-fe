<template>
<el-descriptions
  class="margin-top"
  title="Guest"
  size="large"
  :column="1"
  border
>
  <template #extra>
    <el-button text>通过</el-button>
  </template>

  <el-descriptions-item>
    <template #label>
      <div class="cell-item">
        <i class="mr-1 i-ep-flag" />
        ID
      </div>
    </template>
    {{guest.id}}
  </el-descriptions-item>
  <el-descriptions-item>
    <template #label>
      <div class="cell-item">
        <i class="mr-1 i-ep-user" />
        姓名
      </div>
    </template>
    {{guest.name}}
  </el-descriptions-item>
  <el-descriptions-item>
    <template #label>
      <div class="cell-item">
        <i class="mr-1 i-ep-user-filled" />
        圈名
      </div>
    </template>
    {{guest.cname}}
  </el-descriptions-item>
  <el-descriptions-item>
    <template #label>
      <div class="cell-item">
        <i class="mr-1 i-ep-school" />
        学校
      </div>
    </template>
    {{guest.school}}
  </el-descriptions-item>
  <el-descriptions-item>
    <template #label>
      <div class="cell-item">
        <i class="mr-1 i-ep-iphone"/>
        联系方式
      </div>
    </template>
    {{guest.contact}}
  </el-descriptions-item>
  <el-descriptions-item>
    <template #label>
      <div class="cell-item">
        <i class="mr-1 i-ep-avatar" />
        Cosplay
      </div>
    </template>
    {{guest.cos}}
  </el-descriptions-item>
  <el-descriptions-item>
    <template #label>
      <div class="cell-item">
        <i class="mr-1 i-ep-stamp" />
        状态
      </div>
    </template>
    {{guest.status}}
  </el-descriptions-item>
</el-descriptions>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { queryGuestByID } from '~/apis/guestAPI';
import { ContactType, Status } from '~/common/enums/guest.enum';
import { Guest } from '~/common/interfaces/guest.interface';

const route = useRoute();

const guest:Ref<Guest> = ref({
  cname: '',
  contact: '',
  contactType: ContactType.PHONE,
  id: 0,
  name: '',
  school: '',
  status: Status.WAIT,
  cos: '',
});

onMounted(() => {
  const id = +route.params.id;
  queryGuestByID(id)
    .then(data => {
      guest.value = data;
    })
})
</script>