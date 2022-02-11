<!--头部-->
<template>
  <div class="logo">
    <router-link to="/">
      <img class="logo" src="https://element-plus.gitee.io/images/element-plus-logo.svg" alt=""/>
    </router-link>
  </div>
  <div class="user_action">
    <el-dropdown>
        <span class="el-dropdown-link" style="display: flex;
    justify-content: center;
    align-items: center;cursor: pointer">
          <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <span style="padding-left: 14px">猪大肠</span>
          <el-icon><arrow-down-bold /></el-icon>
        </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="setting">
            个人信息
          </el-dropdown-item>
          <el-dropdown-item icon="Pointer">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: "header"
}
</script>

<style scoped>

</style>