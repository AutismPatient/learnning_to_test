// 用户模块接口定义

import {request} from "@/api/request";

export function getUserInfo(id){
    return request({
        url: "/user/get/" + id,
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