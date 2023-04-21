<template>
<el-card shadow="never" class="w-full max-w-md m-auto">
  <div class="m-8 text-center">
    <h2 class="my-3">Log in</h2>
  </div>
  <el-form label-position="top">
    <el-form-item label="Password">
      <el-input 
        v-model="password"
        size="large"
        type="password"
      />
    </el-form-item>
    <el-button 
      type="primary" 
      size="large" 
      class="w-full"
      @click="checkPassword"
    >
      Sign in
    </el-button>
  </el-form>
</el-card>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue';
import { authAdmin } from '~/apis/authAPI';

onMounted(() => {
  ElMessage.info('您似乎没有访问权限, 请输入密码访问');
})

const password = ref<string>('');
function checkPassword() {
  authAdmin({password: password.value})
    .then(data => {
      localStorage.setItem('token', data.token);
      ElMessage.success('验证成功');
    })
    .catch(err => {
      ElMessage.error('验证失败');
    })
}
</script>