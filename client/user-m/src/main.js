import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/router";
import "normalize.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'
import '@/router/config'
import store from "@/store/index"
import VueCookies from "vue3-cookies";
import {showMessage,successMessage,warningMessage,errorMessage,infoMessage,messageBox} from "@/assets/js/element_pack";



const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(VueCookies,{
    path: "/",
    domain: "",
    secure: true,
    sameSite: "none"
})

for(const icon in ElIcons){
    app.component(icon,ElIcons[icon])
}

// provide
app.provide("$showMessage",showMessage)
app.provide("$successMessage",successMessage)
app.provide("$warningMessage",warningMessage)
app.provide("$errorMessage",errorMessage)
app.provide("$infoMessage",infoMessage)
app.provide("$messageAlert",messageBox)


app.mount('#app')
