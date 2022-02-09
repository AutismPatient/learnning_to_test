<template>
  <div class="login">
    <div class="login__content">
      <div class="header">
        Login to the management system
      </div>
      <div class="main">
        <p>即将访问：<b style="color: #aa6708">用户demo系统</b></p>
        <el-form ref="form" :model="loginRequest">
          <el-form-item prop="userName">
            <el-input
                v-model="loginRequest.userName"
                placeholder="请输入用户名或邮箱"
            ></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input
                v-model="loginRequest.userPassword" type="password"
            ></el-input>
          </el-form-item>
          <div class="action__button">
            <el-button type="primary" @click="loginPost">登录</el-button>
            <div>
              <el-button type="text" size="small">OpenID登录</el-button>
              <el-button type="text" size="small">忘记密码？</el-button>
            </div>
          </div>
        </el-form>
      </div>
      <div class="footer">
        版权所有 © management system
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";

const loginRequest = reactive({
  userName: '',
  userPassword: '',
  code: '',
})
const loginRule = {}
// 登录操作
const loginPost = ()=>{

}
</script>

<style lang="scss" src="@/assets/css/login.scss">

</style>
