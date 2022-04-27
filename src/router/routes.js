// import Home from "@/views/Home"; //主页组件,自动找index文件作为入口
// import About from "@/views/About"; //关于组件
// import Blog from "@/views/Blog"; //博客组件
// import Project from "@/views/Project"; //项目组件
// import Message from "@/views/Message"; //留言板组件
// import Detail from "@/views/Blog/Detail"; //博客详情组件
// let baseUrl = '/blog';
import NotFound from "@/components/NotFound";
import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
configure({
    trickleSpeed: 30, //进度条速度
    showSpinner: false, //圆圈取消
})

function delay(duration) {
    return new Promise(resolve => {
        setTimeout(function() {
            resolve();
        }, duration)
    })
}

function getPageComponent(fn) {
    return async() => {
        start();
        if (process.env.NODE_ENV === 'development') {
            await delay(1000);
        }
        const comp = await fn();
        done();
        return comp;
    }
}
export default [{
        name: "Home",
        path: "/",
        //路由懒加载，返回一个promise
        component: getPageComponent(() =>
            import ( /* webpackChunkName : 'home' */ "@/views/Home")),
        meta: {
            title: "首页"
        }
    },
    {
        name: "Blog",
        path: "/article",
        component: getPageComponent(() =>
            import ( /* webpackChunkName : 'blog' */ "@/views/Blog")),
        meta: {
            title: "文章"
        }
    },
    {
        name: "BlogCategory",
        path: "/article/cate/:category",
        component: getPageComponent(() =>
            import ( /* webpackChunkName : 'blog' */ "@/views/Blog")),
        meta: {
            title: "文章"
        }
    },
    {
        name: "Detail",
        path: "/article/:id",
        component: getPageComponent(() =>
            import ( /* webpackChunkName : 'detail' */ "@/views/Blog/Detail")),
    },
    {
        name: "About",
        path: "/about",
        component: getPageComponent(() =>
            import ( /* webpackChunkName : 'about' */ "@/views/About")),
        meta: {
            title: "关于我"
        }
    },
    {
        name: "Project",
        path: "/project",
        component: getPageComponent(() =>
            import ( /* webpackChunkName : 'project' */ "@/views/Project")),
        meta: {
            title: "项目&效果"
        }
    },
    {
        name: "Message",
        path: "/message",
        component: getPageComponent(() =>
            import ( /* webpackChunkName : 'message' */ "@/views/Message")),
        meta: {
            title: "留言板"
        }
    },
    {
        name: "notFound",
        path: "*",
        component: NotFound,
    }
];