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
import { useRoute, useRouter } from 'vue-router';
import { authAdmin } from '~/apis/authAPI';
import { store } from '~/composables/store';

onMounted(() => {
  ElMessage.info({
    message: '您似乎没有访问权限, 请输入密码访问', 
    duration: 1000
  });
})

const route = useRoute();
const router = useRouter();

const password = ref<string>('');
function checkPassword() {
  authAdmin({password: password.value})
    .then(data => {
      localStorage.setItem('token', data.token);
      store.admin = true;
      ElMessage.success('验证成功');

      const to = route.query.to;
      if(to) {
        router.push({path: to as string});
      }
    })
    .catch(err => {
      ElMessage.error('验证失败');
    })
}
</script>