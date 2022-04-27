import Vue from 'vue';
import { Store, install } from "vuex";
import about from "./about";
import banner from "./banner";
import setting from "./setting";
import project from "./project";

// Vue.use(Vuex);
//当引入的是cdn就有全局变量Vuex,没有全局引入Vuex的cdn才去注册插件
if (!window.Vuex) {
    install(Vue);
}

const store = new Store({
        modules: {
            about,
            banner,
            setting,
            project,
        },
        strict: true,
    })
    // window.store = store;
export default store;