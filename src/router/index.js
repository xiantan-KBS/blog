import Vue from "vue"; //导入vue
import VueRouter from "vue-router"; //导入路由插件
import routes from "./routes";
import titleControl from "@/utils/titleControl";

if (!window.VueRouter) {
    Vue.use(VueRouter); //使用路由插件
}
console.log(process.env.BASE_URL);
const router = new VueRouter({
    routes, //匹配路由规则
    mode: "history",
    base: process.env.BASE_URL,
})

export default router; //导出配置

router.afterEach((to, from) => {
    if (to.meta.title) {
        titleControl.routerTitle(to.meta.title)
    }
})