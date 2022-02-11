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
        path: "/403",
        component: () => import("@/views/common/403"),
        meta: {
            title: "无权限访问"
        }
    },
    {
        path: "/404",
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
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory("pc"),
    routes: routers
})
export default router