import {getUserInfo, login} from '@/api/user/user'
import {useCookies} from 'vue3-cookies'
import {errorMessage} from "@/assets/js/element_pack";
import router from "@/router/router";

const ck = useCookies().cookies

const state = () => ({
    userInfo: {}
})

const getters = {
    getUser: (state) => {
        return state.userInfo
    }
}

const mutations = {
    setUserInfo(state, d) {
        state.userInfo = d.user
        router.push({
            path: d.query
        }).then(()=>{})
    }
}


const actions = {
    async writeUser({commit},payload) {
        let user = {}
        await getUserInfo().then((ru) => {
            const {data} = ru.data
            if (data) {
                ck.set("token", payload.data, 60 * 60 * 24 * 3)
                user = data
            } else {
                errorMessage("获取用户信息失败")
            }
        }).catch((err) => {
            errorMessage("获取用户信息失败: " + err)
        })
        commit('setUserInfo', {user,query: payload.query})
    }
}


export default {
    state, getters, actions, mutations, namespace: true
}