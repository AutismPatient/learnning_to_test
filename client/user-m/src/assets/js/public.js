import {ref} from "vue";

export const pub = {
    hello: () => {
        return ref("hello world");
    },
};
