// example: https://github.com/vuejs/vuex/blob/main/examples/classic/shopping-cart

import {createStore} from "vuex";

import user from "@/store/modules/user";
import menu from "@/store/modules/menu";

export default createStore({
    modules: {
        user, menu
    }
})