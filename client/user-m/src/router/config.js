import router from "./router";

// 路由执行前
router.beforeEach((to, from,next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
