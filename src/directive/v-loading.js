// 指令的配置对象
import url from '@/assets/loading.svg';
import style from "./loading.module.less";

function getImgInfo(el) {
    return el.querySelector('img[data-info=loading]');
}

function cerateImg(el) {
    const img = document.createElement('img');
    img.src = url;
    img.dataset.info = "loading";
    img.className = style["img-loading"];
    el.appendChild(img);
}
export default function(el, binding) {
    var img = getImgInfo(el);
    if (binding.value) {
        if (!img) {
            cerateImg(el);
        }
        // console.log(img)
    } else {
        if (img) {
            img.remove();
        }
        // console.log(img)
        // img.remove()
    }
}
// console.log(style)
// export default {
//     //只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
//     bind(el, binding) {
//         //el：指令所绑定的元素，可以用来直接操作 DOM。
//         //binding：一个对象，包含以下 property
//         console.log("bind", el, binding)
//     },
//     //被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
//     inserted(el, binding) {
//         console.log("inserted", el, binding)
//     },
//     //所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
//     update(el, binding) {
//         console.log("update", el, binding)
//     },
// }