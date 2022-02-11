import router from "./router";

import store from "@/store/index"

// 路由执行前
router.beforeEach((to, from, next) => {
    if (to.meta.title) document.title = to.meta.title
    if (to.meta.requireAuth) {
        if (!store.getters.getUser) {
            next({path: "/login", query: {redirect: from.path}})
            return
        }
    } next()
})
