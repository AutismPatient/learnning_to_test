<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <HelloWorld ref="refAction" @render_for_children="childrenAction"/>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import {reactive, ref} from "vue";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const refAction = ref()
    let helloResp = reactive([])
    setTimeout(()=>{
      getResp()
      // provide("hello_resp",helloResp)
    },2000)

    const getResp = () => {
      helloResp = [{
        ID: 'UID88995',
        Name: 'v_zeyunmeng',
        Msg: 'Welcome to Your Vue.js App'
      }]
      refAction.value.takeIn(helloResp)
    }

    const childrenAction = (v) => {
      console.log("子组件说：",v)
    }

    return {refAction,getResp,childrenAction}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
