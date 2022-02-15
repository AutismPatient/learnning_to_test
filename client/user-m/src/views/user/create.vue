<template>
  <div class="post-main">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
    >
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Activity zone" prop="region">
        <el-select v-model="ruleForm.region" placeholder="Activity zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="Pick a date"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="text-center" :span="2">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
                v-model="ruleForm.date2"
                placeholder="Pick a time"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="Activity type" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="Online activities" name="type"></el-checkbox>
          <el-checkbox label="Promotion activities" name="type"></el-checkbox>
          <el-checkbox label="Offline activities" name="type"></el-checkbox>
          <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="Sponsorship"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm"
        >Create</el-button
        >
        <el-button @click="resetForm">Reset</el-button>
      </el-form-item>
    </el-form>
    <el-divider direction="vertical" style="margin-left: 20px;margin-right: 20px;height: auto"></el-divider>
    <div class="desc-main">
      <el-descriptions  v-if="loadDesc"
          title="form data"
          :column="3"
          border
      >
        <template #extra>
          <el-button type="primary">Operation</el-button>
        </template>
        <el-descriptions-item v-for="(v,k,i) in ruleForm">
          <template #label>
            <div class="cell-item">
              <el-icon>
                <user />
              </el-icon>
              {{k}}
            </div>
          </template>
          {{v}}
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script setup>

import {reactive, ref} from "vue";

let ruleFormRef = ref()
let loadDesc = ref(false)

let ruleForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

let rules = reactive({
  "name": [
    {
      message: 'name is required',
      trigger: "change",
      required: true
    }
  ],
  "region": [
    {
      message: 'region is required',
      trigger: "change",
      required: true
    }
  ],
  "date1": [
    {
      type: 'date',
      message: 'date1 is required',
      trigger: "change",
      required: true
    }
  ],
  "date2": [
    {
      type: 'date',
      message: 'date2 is required',
      trigger: "change",
      required: true
    }
  ],
  "type": [
    {
      type: 'array',
      message: 'type is 0 length',
      trigger: "change",
      required: true
    }
  ],
  "resource": [
    {
      message: 'resource is required',
      trigger: "change",
      required: true
    }
  ],
  "desc": [
    {
      message: 'desc is required',
      trigger: "change",
      required: true
    }
  ],
})
const submitForm = () => {
  ruleFormRef.value.validate((v)=>{
    if(v) loadDesc.value = true
  })
}
const resetForm = () => {
  ruleFormRef.value.resetFields()
}
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
.post-main{
  display: flex;
  .el-form ,.desc-main{
    flex: 1;
  }
}
</style>