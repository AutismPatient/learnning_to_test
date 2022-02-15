<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="nickname">
      <el-input v-model="formInline.nickName" clearable placeholder="NickName"></el-input>
    </el-form-item>
    <el-form-item label="vip">
      <el-select v-model="formInline.vip" placeholder="vip" clearable>
        <el-option label="yes" :value="true"></el-option>
        <el-option label="no" :value="false"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Query</el-button>
    </el-form-item>
  </el-form>

  <el-table v-loading="$loading" :data="users.data" stripe style="width: 100%" border>
    <template #empty>
      <el-empty>
        <el-button type="warning" plain @click="get">刷新</el-button>
      </el-empty>
    </template>
    <el-table-column align="center" prop="uuid" label="UUID"/>
    <el-table-column align="center" prop="userName" label="userName"/>
    <el-table-column align="center" prop="nickName" label="nickName"/>
    <el-table-column align="center" prop="createTime" label="createTime"/>
    <el-table-column align="center" prop="vip" label="vip">
      <template #default="scope">
        <el-tag v-if="scope.row.vip">是</el-tag>
        <el-tag v-else>否</el-tag>
      </template>
    </el-table-column>
    <el-table-column align="center" prop="role" label="role"/>
    <el-table-column align="center" prop="dataSource" label="dataSource"/>
    <el-table-column align="center" label="action">
      <el-button-group class="ml-4">
        <el-button type="text" icon="Edit">
        </el-button>
        <el-button type="text" icon="Delete">
        </el-button>
      </el-button-group>
    </el-table-column>
  </el-table>

  <el-pagination @size-change="get"
                 @current-change="get" :page-sizes="[2,5, 10, 20, 50]" style="margin-top: 20px" v-model:current-page="formInline.current" v-model:page-size="formInline.size" layout="total, sizes, prev, pager, next, jumper"  background :total="users.total">
  </el-pagination>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import {getUsers} from "@/api/user/user";
import {errorMessage} from "@/assets/js/element_pack";

let users = reactive({data: [], total: 0})
let $loading = ref(false)
const get = () => {
  $loading.value = true
  getUsers(formInline).then((resp) => {
    users.data = resp.data.data
    users.total = resp.data.total
  }).catch((err) => {
    errorMessage(err)
  }).finally(()=>{
    $loading.value = false
  })
}

onMounted(() => {
  get()
})

let formInline = reactive({
  nickName: undefined,
  vip: undefined,
  size: 2,
  current: 1
})

const onSubmit = () => {
  get()
}

</script>

<style scoped>

</style>