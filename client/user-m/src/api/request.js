// http 请求配置
import axios from 'axios'
import {useCookies} from 'vue3-cookies'
import {ElMessageBox} from "element-plus";
const qs = require('qs');

const {cookies} = useCookies()

const instance = axios.create({
    baseURL: '/api',
    timeout: 60000,
})

// request api
// config --> AxiosRequestConfig
export function request(config) {
    return instance.request(config)
}

// 请求拦截
instance.interceptors.request.use((config) => {
    const token = cookies.get("token")
    if (token) {
        config.headers["auth-token"] = token
    }
    if(config.method === "post"){
        config.headers["contentType"] = "application/json"
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截
instance.interceptors.response.use((response) => {
    return Promise.resolve(response)
}, (error) => {
    const {status} = error.request
    let message = "请求错误"
    if (status === 401 || status === 403) {
        message = "您无权访问，请联系管理员"
    } else if (status >= 500) {
        message = "服务器内部错误：" + error
    } else if (status === 400){
        message = "参数错误"
    }
    ElMessageBox.alert(message, "温馨提示", {
        type: "warning",
        confirmButtonText: "确定"
    }).then(() => {
    })
    return Promise.reject(error)
})