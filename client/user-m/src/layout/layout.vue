<!--管理端模板页-->
<template>
  <div class="layout-main">
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <div class="menu__list">
        <el-aside width="250px">
          <MenuList />
        </el-aside>
      </div>
      <div class="main-div">
        <el-main>
          <router-view />
        </el-main>
      </div>
    </el-container>
  </div>
</template>

<script setup>
import Header from "@/components/header";
import MenuList from "@/components/menu";
</script>

<style lang="scss" src="@/assets/css/layout.scss"></style>