//防抖
export default function(fn, wait) {
    let timer = null;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn();
        }, wait)
    }
}