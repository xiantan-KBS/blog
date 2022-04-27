//图片懒加载
import eventBus from "../eventBus";
import url from '../assets/default.gif';
import debounce from "../utils/debounce";

let imgs = [];

function setImg(img) {
    img.dom.src = url;
    //得到每个图片元素相对于视窗的位置集合,因此需要在inserted钩子函数中push
    const rect = img.dom.getBoundingClientRect();
    //可视区的高
    const clientHeight = document.documentElement.clientHeight;
    //图片没显示前高度为0，因此自定义一个高度
    const minHeight = 150;
    //图片top值大于等于负的自身高度且小于等于可视区高度，就加载图片;
    if (rect.top >= -minHeight && rect.top <= clientHeight) {
        const newImg = new Image();
        newImg.onload = function() {
            img.dom.src = img.src;
        };
        newImg.src = img.src;
        //图片加载过了马，就删除数组中的本次图片
        imgs = imgs.filter(i => i.dom !== img.dom);
    }
}


function setImgs() {
    //循环每一张图片进行操作判断
    for (const img of imgs) {
        setImg(img);
    }
}

function handleScroll(dom) {
    setImgs();
}

// setInterval(function() {
//     console.log(imgs)
// }, 2000)
eventBus.$on("mainScroll", debounce(handleScroll, 50))
export default {
    // bind(el, binding) {
    //     console.log(el, binding)
    // },
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value,
        };
        imgs.push(img);
        setImg(img);
    },
    unbind(el) {
        //清空数组
        imgs = imgs.filter(img => img.dom !== el);
    }
}