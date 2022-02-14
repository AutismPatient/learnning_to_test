<!--头部-->
<template>
  <div class="logo">
    <router-link to="/">
      <img class="logo" src="https://element-plus.gitee.io/images/element-plus-logo.svg" alt=""/>
    </router-link>
  </div>
  <div class="user_action">
    <el-dropdown trigger="click">
        <span class="el-dropdown-link" style="display: flex;
    justify-content: center;
    align-items: center;cursor: pointer">
          <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <b style="padding-left: 14px">{{nick}}</b>
          <el-icon size="small" style="padding-left: 6px"><arrow-down-bold /></el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="setting">
            个人信息
          </el-dropdown-item>
          <el-dropdown-item icon="Pointer" @click="logout">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import store from "@/store/index"
import router from "@/router/router";
import {errorMessage} from "@/assets/js/element_pack";

const nick = store.getters.getUser.nick_name

const logout = ()=> {
  store.dispatch('logout').then(()=>{
    router.push({
      path: "/login"
    })
  }).catch((err)=>{
    errorMessage(err)
  })
}
</script>

<style scoped>

</style>