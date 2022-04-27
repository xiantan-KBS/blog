//设置网页标题
var routerTitle = '',
    siteTitle = '';

function setTitle() {
    if (!routerTitle && !siteTitle) {
        document.title = "loading...";
    } else if (routerTitle && !siteTitle) {
        document.title = routerTitle;
    } else if (siteTitle && !routerTitle) {
        document.title = siteTitle;
    } else {
        document.title = routerTitle + "-" + siteTitle;
    }
}
export default {
    //路由标题
    routerTitle(title) {
        routerTitle = title;
        setTitle();
        // console.log("路由标题", title)
    },
    //空间标题
    siteTitle(title) {
        siteTitle = title;
        setTitle();
        // console.log("空间标题", title)
    },
}