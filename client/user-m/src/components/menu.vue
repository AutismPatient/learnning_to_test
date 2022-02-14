<!--菜单-->
<template>
  <div v-for="(v,i) in menuList" :key="v.groundID" class="menu-ground">
    <p class="menu-ground--title" v-if="v.title !== ''">{{ v.title }}</p>
    <router-link :class="['menu-ground--link',activeMenu === v1.path ? 'active':'']" :to="v1.path" v-for="(v1,ii) in v.menus" :key="v1.path">
      <p :class="['text',activeMenu === v1.path ? 'active':'']">{{v1.name}}</p>
    </router-link>
  </div>
</template>

<script setup>
import {computed, reactive} from "vue";
import store from "@/store/index";

const activeMenu = computed(()=>{
  return store.getters.getActiveMenu
})

const menuList = reactive([
  {
    groundID: '34996',
    title: '',
    menus: [
      {
        path: '/dashboard',
        name: '系统仪表盘',
        icon: ''
      }
    ]
  },
  {
    groundID: '2WW2',
    title: 'Basic 基础功能',
    menus: [
      {
        path: '/user',
        name: '用户信息',
        icon: ''
      },
      {
        path: '/user/create',
        name: '新增单个用户',
        icon: ''
      },
      {
        path: '/setting',
        name: '设置',
        icon: ''
      }
    ]
  }
])
</script>

<style scoped lang="scss">

$activeColor: #409eff;
$activeBgColor: #ecf5ff;
p{
  margin: 0;
  line-height: 1.7;
}
.menu-ground {
  padding-top: 24px;

  .menu-ground--title {
    padding: .5rem 1.5rem .5rem 1.25rem;
    font-size: 1rem;
    font-weight: 700;
    color: black;
    margin: 0;
  }

  .menu-ground--link {
    display: block;
    padding: .625rem 2rem .625rem 1.5rem;
    line-height: 1.5;
    font-size: .9rem;
    margin: 0 8px;
    border-radius: 8px;
    &.active{
      background-color: $activeBgColor;
    }
    .text{
      line-height: 20px;
      font-size: 13px;
      font-weight: 500;
      &.active{
        font-weight: 600;
        color: #409eff;
      }
    }
    &:hover{
      color: $activeColor;
      transition: color .25s;
    }
  }
}
</style>