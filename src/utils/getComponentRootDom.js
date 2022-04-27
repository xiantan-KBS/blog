import Vue from "vue";

/**
 * 获取某个组件渲染的DOM根元素
 * @param {Vue} comp  组件
 * @param {object} props props的配置对象
 * @returns 
 */
function getComponentRootDom(comp, props) {
    const vm = new Vue({
        render: h => h(comp, { props })
    })
    vm.$mount();
    return vm.$el;
}

// var dom = getComponentRootDom(Icon, { type: "weixin" });
// console.log(dom);

export default getComponentRootDom;