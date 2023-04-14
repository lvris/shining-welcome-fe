<template>
  <el-form
    label-position="top"
    size="large"
    :model="form"
    :rules="rules"
    :require-asterisk-position="right"
    status-icon
  >
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="电话号码" prop="phone">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="就读学校" prop="school">
      <el-input v-model="form.school" />
    </el-form-item>
    <el-form-item label="COS 角色" prop="cos">
      <el-input v-model="form.cos" />
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import { right } from '@popperjs/core';

const form = reactive({
  phone: '',
  name: '',
  school: '',
  cos: '',
})

const rules = reactive<FormRules>({
  name: [
    { 
      required: true,
      message: '请输入姓名',
      trigger: 'blur',
    }
  ],
  phone: [
    { 
      required: true,
      message: '请输入手机号码',
      trigger: 'blur',
    }
  ],
  school: [
    { 
      required: true,
      message: '请输入学校名称',
      trigger: 'blur',
    }
  ],
})
</script>