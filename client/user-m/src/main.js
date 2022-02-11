import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import "normalize.css"
import ElementPlus from 'element-plus'
import icon from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import '@/router/config'
import store from "@/store/index"
import VueCookies from "vue3-cookies";
import {showMessage,successMessage,warningMessage,errorMessage,infoMessage,messageBox} from "@/assets/js/element_pack";




const app = createApp(App)
app.use(router)
app.use(store)
app.use(icon)
app.use(ElementPlus)
app.use(VueCookies,{
    path: "/",
    domain: "",
    secure: true,
    sameSite: "none"
})

// provide
app.provide("$showMessage",showMessage)
app.provide("$successMessage",successMessage)
app.provide("$warningMessage",warningMessage)
app.provide("$errorMessage",errorMessage)
app.provide("$infoMessage",infoMessage)
app.provide("$messageAlert",messageBox)


app.mount('#app')
