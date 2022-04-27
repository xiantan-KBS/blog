import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import style from "./message.module.less";
/**
 * 封装一个弹出框函数
 * @param {*} container 弹出框放置再哪个容器
 * @param {*} duration   弹出框显示的事件
 * @param {*} type  弹出框的类型
 * @param {*} text  弹出框的里的文本内容
 */
function popup(options) {
    const container = options.container || document.body;
    const duration = options.duration || 1000;
    const type = options.type || "info";
    const text = options.text || "";

    //生成一个弹出框容器
    const div = document.createElement('div');
    const icon = getComponentRootDom(Icon, { type }); //获取Icon组件的Dom根元素
    // console.log(icon)
    div.innerHTML = `<div class=${style.icon}>${icon.outerHTML}</div><span>${text}</span>`;
    // console.log(style);
    var classType = style[`message-${type}`]; //获取类型对应的类样式
    // console.log(classType);
    div.className = `${style.message} ${classType}`; //添加div弹出框的类样式
    if (getComputedStyle(container).position === 'static') {
        container.style.position = "relative";
    }
    container.appendChild(div);

    // 浏览器强行渲染
    div.clientHeight; // 导致reflow

    // 回归到正常位置
    div.style.opacity = 1;
    div.style.transform = "translate(-50%,-50%)";

    // 等一段时间，消失
    setTimeout(function() {
        div.addEventListener('transitionend', function() { //绑定过渡完成的事件
            div.remove(); //当变换结束后，删除dom元素
            options.callback && options.callback(); //运行回调函数
        }, { once: true, }); //只执行一次


        div.style.opacity = 0;
        div.style.transform = "translate(-50%,-50%) translatey(-20px)";
    }, duration)
}
export default popup;