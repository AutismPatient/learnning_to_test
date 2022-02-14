/**
 * 路由定义 router.js
 */
import {createRouter, createWebHistory} from "vue-router";

const routers = [
    {
        path: "/login",
        component: () => import('@/views/login'),
        meta: {
            title: "登录到 management system",
        }
    },
    {
        path: "/401",
        component: () => import("@/views/common/401"),
        meta: {
            title: "无权限访问"
        }
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/common/404"),
        meta: {
            title: "404"
        }
    },
    {
        path: "/",
        component: () => import("@/layout/layout"),
        redirect: to => {
          return {path: "/dashboard"}
        },
        children: [
            {
                path: "/dashboard",
                meta: {
                    title: "系统仪表盘",
                    requireAuth: true
                },
                component: () => import("@/views/dashboard")
            },
            {
                path: "/user",
                meta: {
                    title: "用户",
                    requireAuth: true
                },
                component: () => import("@/views/user/index"),
                children: [

                ]
            },
            {
                path: "/user/create",
                meta: {
                    title: "新增单个用户",
                    requireAuth: true
                },
                component: () => import("@/views/user/create")
            },
            {
                path: "/setting",
                meta: {
                    title: "设置",
                    requireAuth: true
                },
                component: () => import("@/views/common/setting")
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory("pc"),
    routes: routers
})
export default router