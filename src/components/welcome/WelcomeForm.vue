<template>
<div>
  <el-form
    ref="formRef"
    label-position="top"
    size="large"
    :model="form"
    :rules="rules"
    :require-asterisk-position="right"
    status-icon
  >
    <el-form-item label="就读/毕业院校" prop="school">
      <el-input v-model="form.school" placeholder="请输入..." >
        <template #prefix><i class="i-ep-school"/></template>
      </el-input>
    </el-form-item>
    <el-form-item label="联系方式 (电话/QQ/微信)" prop="contact">
      <el-input v-model="form.contact" placeholder="请输入..." >
        <template #prepend>
          <el-select v-model="form.contactType">
            <el-option label="电话" :value="ContactType.PHONE" />
            <el-option label="QQ" :value="ContactType.QQ" />
            <el-option label="微信" :value="ContactType.WECHAT" />
          </el-select>
        </template>
        <template #prefix>
          <i class="i-ep-iphone"/>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" placeholder="请输入...">
        <template #prefix><i class="i-ep-user"/></template>
      </el-input>
    </el-form-item>
    <el-form-item label="圈名 (称呼)" prop="cname">
      <el-input v-model="form.cname" placeholder="不填即同姓名">
        <template #prefix><i class="i-ep-user-filled"/></template>
      </el-input>
    </el-form-item>
    <el-form-item label="COS 角色" prop="cos">
      <el-input v-model="form.cos" placeholder="不出则不填">
        <template #prefix><i class="i-ep-avatar"/></template>
      </el-input>
    </el-form-item>
  </el-form>

  <div class="flex justify-evenly">
    <el-button 
      size="large"
      type="primary"
      @click="confirm"
    > 提交 <i class="i-ep-upload"/>
    </el-button>
    <el-button 
      size="large"
      @click="formRef?.resetFields()"
    > 重置 <i class="i-ep-refresh"/>
    </el-button>
  </div>
</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { FormInstance, FormRules } from 'element-plus';
import { right } from '@popperjs/core';
import { IGuest } from "~/common/interfaces/guest.interface";
import { ContactType } from '~/common/enums/guest.enum';

// Form Related
const formRef = ref<FormInstance>();
const form:IGuest = reactive({
  contactType: ContactType.PHONE,
  contact: '',
  name: '',
  cname: '',
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
  contact: [
    { 
      required: true,
      message: '请输入联系方式',
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

// Logic
const emit = defineEmits(['submit']);
function confirm(e: Event) {
  if(!formRef.value) return;

  if(form.cname == '')
    form.cname = form.name;
  
  formRef.value.validate((valid, fields) => {
    if(valid)
      emit('submit', form);
  })
}
</script>