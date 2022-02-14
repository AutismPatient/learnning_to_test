import {getUserInfo} from '@/api/user/user'
import {useCookies} from 'vue3-cookies'
import {errorMessage} from "@/assets/js/element_pack";


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
        state.userInfo = d
    }
}


const actions = {
    async writeUser({commit}) {
        let user = {}
        await getUserInfo().then((ru) => {
            const {data} = ru.data
            if (data) {
                user = data
            } else {
                errorMessage("获取用户信息失败")
            }
        }).catch((err) => {
            errorMessage("获取用户信息失败: " + err)
        })
        commit('setUserInfo', user)
    },
    async logout({commit}){
        const ok = ck.remove("token")
        if (ok) commit('setUserInfo',{})
    }
}


export default {
    state, getters, actions, mutations, namespace: true
}