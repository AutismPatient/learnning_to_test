// example: https://github.com/vuejs/vuex/blob/main/examples/classic/shopping-cart

import {createStore, createLogger} from "vuex";

import user from "@/store/modules/user";

export default createStore({
    modules: {
        user
    }
})