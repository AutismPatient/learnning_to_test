<template>
  <div class="login">
    <div class="login__content">
      <div class="header">
        Login to the management system
      </div>
      <div class="main">
        <p>即将访问：<b style="color: #aa6708">用户demo系统</b></p>
        <el-form ref="refForm" :model="loginRequest" :rules="loginRule">
          <el-form-item prop="userName">
            <el-input
                v-model="loginRequest.userName"
                placeholder="请输入用户名或邮箱" autofocus
            ></el-input>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-input
                v-model="loginRequest.userPassword" type="password"
            ></el-input>
          </el-form-item>
          <div class="action__button">
            <el-button type="primary" @click="loginPost" :disabled="loginDisabled" :loading="loading">登录</el-button>
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
import {computed, inject, reactive, ref} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router"
import router from "@/router/router";
import {login} from "@/api/user/user";
import {useCookies} from 'vue3-cookies';

const ck = useCookies().cookies

const $messageAlert = inject("$messageAlert")
const $successMessage = inject("$successMessage")
const loginRequest = reactive({
  userName: '',
  userPassword: '',
  code: '',
})
const loginDisabled = computed(() => {
  return !(loginRequest.userName !== "" && loginRequest.userPassword !== "")
})
const store = useStore()
const route = useRoute()
const loginRule = reactive({
  userName: [
    {
      required: true,
      message: 'Please fill in the user name',
      trigger: 'blur',
    },
    {
      min: 2,
      max: 32,
      message: 'Length should be 2 to 32',
      trigger: 'blur',
    },
  ],
  userPassword: [
    {
      required: true,
      message: 'password is required',
      trigger: 'blur',
    }
  ]
})
let refForm = ref()
let loading = ref(false)
const q = route.query.redirect || "/"
// 登录操作
const loginPost = () => {
  refForm.value.validate((v) => {
    if (v) {
      loading.value = true
      login(loginRequest).then((resp) => {
        if (resp.data.code === "success") {
          $successMessage("登录成功")
          ck.set("token", resp.data.data, 60 * 60 * 24 * 3)
          store.dispatch("writeUser").then(()=>{
            router.push({
              path: q
            })
          })
        } else {
          $messageAlert.alert("登录错误：" + resp.data.msg, "提示", {
            confirmButtonText: "确认",
            type: "error"
          })
        }
      }).finally(() => {
        loading.value = false
      })
    } else {
      return false
    }
  })
}
</script>

<style lang="scss" src="@/assets/css/login.scss">

</style>
