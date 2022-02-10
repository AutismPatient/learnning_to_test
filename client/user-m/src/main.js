import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import "normalize.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/router/config'
import VueCookies from "vue3-cookies";
import {showMessage,successMessage,warningMessage,errorMessage,infoMessage} from "@/assets/js/element_pack";




const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(VueCookies,{
    path: "/",
    domain: "",
    secure: true,
    sameSite: "none"
})

app.config.globalProperties.$showMessage = showMessage
app.config.globalProperties.$successMessage = successMessage
app.config.globalProperties.$warningMessage = warningMessage
app.config.globalProperties.$errorMessage = errorMessage
app.config.globalProperties.$infoMessage = infoMessage


app.mount('#app')
