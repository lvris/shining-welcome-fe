<template>
  <div class="w-90% m-x-auto my-5">
    <h2>Shining 祭报名表单</h2>
    <el-alert :closable="false" type="info" show-icon center>
      信息只作保卫处审核使用, 我们将尽力保护您的个人信息
    </el-alert>
  </div>

  <WelcomeForm 
    class="w-90% m-auto"
    @submit="handleSubmit"
  />

  <el-dialog center v-model="codeVisible" title="QRCode">
    <el-alert center type="info" show-icon>
      请在进入校园时出示此二维码
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
import { ref } from 'vue';
import { createGuest } from '~/apis/guestAPI';
import { IGuest } from '~/common/interfaces/guest.interface';

const codeVisible = ref(false);
const qrValue = ref('');

function handleSubmit(guest: IGuest) {
  createGuest(guest).then(data => {
    qrValue.value = import.meta.env.VITE_ADDR+`#/manage${data.id}`;
    codeVisible.value = true;
  }).catch(error => {
    ElMessage.error(error);
  })
}

// TODO: Check Token to generate QR
</script>