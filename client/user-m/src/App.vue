<template>
  <div id="app-main">
    <router-view />
  </div>
</template>
<style>
body{
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
img{
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>
<script>
export default {
  name: "App"
}
</script>
