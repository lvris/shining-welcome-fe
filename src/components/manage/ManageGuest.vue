<template>
<el-descriptions
  v-loading="loading"
  class="margin-top"
  title="Guest"
  size="large"
  :column="1"
  border
>
  <template #extra>
    <el-button 
      text 
      @click="grantGuest" 
      :type="buttonType" 
      :loading="buttonLoad"
      :disabled="buttonDisable"
    >
      通过
    </el-button>
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
import { Ref, computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { queryGuestByID, updateGuestByID } from '~/apis/guestAPI';
import { ContactType, Status } from '~/common/enums/guest.enum';
import { Guest } from '~/common/interfaces/guest.interface';

onMounted(() => {
  id.value = +route.params.id;
  queryGuestByID(id.value)
    .then(data => {
      setTimeout(() => {
        loading.value = false;
        guest.value = data;
      }, 100);
    })
})

const loading = ref(true);
const route = useRoute();
const id = ref(0);

const guest:Ref<Guest> = ref({
  cname: 'placeholder',
  contact: 'placeholder',
  contactType: ContactType.PHONE,
  id: 0,
  name: 'placeholder',
  school: 'placeholder',
  status: Status.WAIT,
  cos: 'placeholder',
});

const buttonLoad = ref(false);
const buttonType = computed(() => {
  switch (guest.value.status) {
    case Status.BAN:
      return 'danger';  
      break;
    case Status.OK:
      return 'info';
      break;
    case Status.WAIT:
      return 'success';
      break;
    default:
      return 'warning';
      break;
  }
})
const buttonDisable = computed(() => {
  if(Number.isNaN(id.value) || id.value <= 0)
    return true;
  if(guest.value.status === Status.BAN)
    return true;
  return false;
})

function grantGuest() {
  buttonLoad.value = true;
  updateGuestByID(id.value, {status: Status.OK})
    .then(data => {
      guest.value = data;
      buttonLoad.value = false;
    })
}
</script>