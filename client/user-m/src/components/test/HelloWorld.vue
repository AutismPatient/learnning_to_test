<template>
  <div>
    <h2>{{ msg }}</h2>
    <h3>{{data}}<br>{{hugo}}</h3>
    <input type="text" v-model="request.user.name"/>
    <h3>{{ sumName }}</h3>
    <h3>
      helloResp: <br />
      <p v-for="(v,i) in resp" :key="i">{{v}}</p>
    </h3>
    <button @click="sm">翻译</button>
    <children />
  </div>
</template>

<script setup>
import {ref, toRef, reactive, computed, watch, defineExpose, onMounted} from "vue";
import children from "@/components/test/children";
let msg = ref(["Judaic"]) // 用于基本数据类型，引用类型
const data = {
  user: {
    name: "猪大肠",
    age: 18,
  },
  time: 0
}
let request = reactive(data) // 用于复杂类型，深度响应式，处理对象类型时必须至少有一个key
const hugo = {name: 'mzy'}
let obj_ref = toRef(hugo, "name") // 修改对象原数据

const sm = () => {
  msg.value = ["猪大肠"]
  request.user.name = "669"
  obj_ref.value = "mzy2580"

  emits('render_for_children',"你好父组件")
}

const sumName = computed(() => {
  return request.user.name + "，你好"
}) // 计算属性


watch(() => request.user.name, (n, o) => {
  console.log("新：", n, "旧：", o)
}, {immediate: false, deep: true}) // 监听，可监听多个，reactive只输出最新的值
// const wf = watchEffect(() => {
//
// }) // 页面加载首次监听
// wf()
let resp = ref([])
// let {respData} = toRefs(resp)
// 可公开函数
function takeIn(value) {
  resp.value = value
}

// 生命周期
onMounted(()=>{
})

defineExpose({
  "takeIn": takeIn
}) // 暴露函数或属性给外部组件

const emits = defineEmits([
    "render_for_children"
]) // 定义emit，以供父组件绑定使用
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
