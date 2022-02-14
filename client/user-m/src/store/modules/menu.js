const state = () => ({
    activeMenu: ''
})

const getters = {
    getActiveMenu: (state) => {
        return state.activeMenu
    }
}

const mutations = {
    setActiveMenu(state, p) {
        state.activeMenu = p
    }
}


const actions = {
    setActiveMenu({commit}, path) {
        commit('setActiveMenu', path)
    },
}


export default {
    state, getters, actions, mutations, namespace: true
}