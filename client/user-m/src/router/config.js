import router from "./router";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {useCookies} from 'vue3-cookies'
import store from "@/store/index"
import {errorMessage} from "@/assets/js/element_pack";

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const cookies = useCookies().cookies

const writeRouters = ['/login']

// 路由执行前
router.beforeEach((to, from, next) => {

    NProgress.start()

    if (to.meta.title) document.title = to.meta.title

    const token = cookies.get("token")

    if (token){
        if (to.path === "/login"){
            next({path: "/"})
            NProgress.done()
        } else if (to.meta.requireAuth) {
            const hasUser = store.getters.getUser.length > 0
            if (hasUser) {
                next()
            }else{
                try{
                    store.dispatch("writeUser").then((r)=>{
                        store.dispatch('setActiveMenu',to.path).then(()=>{})
                        next()
                    })
                }catch (err){
                    errorMessage(err)
                    next({path: "/login",query: {redirect: to.path}})
                    NProgress.done()
                }
            }
        }
        next()
        NProgress.done()
    }else{
        // token 不存在
        if (writeRouters.indexOf(to.path) === -1 && to.meta.requireAuth){
            next({path: "/login",query: {redirect: to.path}})
            NProgress.done()
        } next()
    }
})

// 路由执行后
router.afterEach((to,from)=>{
    NProgress.done()
})