/**
 * 路由定义 router.js
 */
import {createRouter, createWebHistory} from "vue-router";

const routers = [
    {
        path: "/login",
        component: () => import('@/views/login')
    },
    {
        path: "/",
        component: () => import("@/layout/layout"),
        children: [
            {
                path: "/dashboard",
                title: "系统仪表盘",
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