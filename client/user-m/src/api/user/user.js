// 用户模块接口定义

import {request} from "@/api/request";

export function getUserInfo(){
    return request({
        url: "/user/get",
        method: "get",
    })
}
export function login(data){
    return request({
        url: "/login",
        method: "post",
        data: data
    })
}
export function getUsers(query){
    return request({
        url: "/user/list",
        method: "get",
        params: query
    })
}