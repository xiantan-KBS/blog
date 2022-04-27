import Vue from 'vue'
import App from './App.vue'
import "./style/global.less";
import router from "./router";
import popup from "./utils/popup";
Vue.prototype.$popup = popup;
import bus from "./eventBus";
Vue.prototype.$bus = bus;
import store from "./store"

// import './Mock';
// import './Api/bannerData';

//import Icon from "./components/Icon";
// function getComponentRootDom(app, props) {
//     var vm = new Vue({
//         render: h => h(app, { props })
//     }).$mount();
//     return vm.$el;
// }
// var dom = getComponentRootDom(Icon, { type: "weixin" });
// console.log(dom);

//测试css-module
// import style from "./style/message.module.less";
// console.log(style)
// var div = document.createElement('div');
// div.innerHTML = "dsksdgksdsd";
// div.className = style.message;
// document.body.appendChild(div);

// Vue.prototype.$m1 = function() {
//     console.log('m1');
// }

// popup({
//     text: "评论成功",
//     type: "info",
//     callback: function() {
//         alert('完成');
//     }
// })

//全局定义loading指令
import vLoading from './directive/v-loading';
Vue.directive('loading', vLoading);
//全局定义lazy指令
import vLazy from "./directive/v-lazy";
Vue.directive('lazy', vLazy);

new Vue({
    router, //路由配置
    store, //仓库配置
    render: h => h(App)
}).$mount('#app')