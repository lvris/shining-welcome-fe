<template>
  <div class="w-90% m-x-auto my-5">
    <h2>Shining 祭报名表单</h2>
    <el-alert :closable="false" type="info" show-icon center 
      title="个人信息保护声明"
    >
      您填写的个人信息只作保卫处审核使用, 我们将尽力保护您的个人信息
    </el-alert>
  </div>

  <WelcomeForm 
    class="w-90% m-auto"
    @submit="handleSubmit"
  />

  <el-dialog center v-model="codeVisible" title="QRCode">
    <el-alert center type="info" show-icon title="请在进入校园时出示此二维码">
      我们已经生成了您的 Token, 使用同一设备时, 您可以刷新此页面以重新获取二维码.
    </el-alert>
    <QRCode 
      class="my-4 text-center"
      image="/shining.png"
      :value=qrValue
      :dots-options="{
        type: 'extra-rounded'
      }"
    />
  </el-dialog>
</template>

<script lang="ts" setup>
import QRCode from "qrcode-vue3";
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';
import { parceToken } from '~/apis/authAPI';
import { createGuest } from '~/apis/guestAPI';
import { IGuest } from '~/common/interfaces/guest.interface';

const codeVisible = ref(false);
const qrValue = ref('');
function showQRCode(id: number) {
  qrValue.value = import.meta.env.VITE_ADDR+`manage/${id}`;
  codeVisible.value = true;
}

onMounted(() => {
  ElMessage.warning('报名已经截止, 您还可访问此页面重新生成二维码')

  const token = localStorage.getItem('token');
  if (!token) {
    return;
  }
  parceToken().then(data => {
    if(data.id) {
      showQRCode(data.id);
      ElMessage.success('重新生成')
    }
  })
})

function handleSubmit(guest: IGuest) {
// Stop
  ElMessage.error('报名已经截止, 您还可访问此页面重新生成二维码');
  return;
// End

  createGuest(guest).then(data => {
    if(data.token) {
      localStorage.setItem('token', data.token);
    }
    showQRCode(data.guest.id);
  }).catch(error => {
    ElMessage.error(error);
  })
}
</script>