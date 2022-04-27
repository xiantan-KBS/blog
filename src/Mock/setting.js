import Mock from "mockjs";
import qq from "@/assets/qq.png";
import weixin from '@/assets/weixin.jpg';
Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img1.baidu.com/it/u=810955211,2452678677&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        siteTitle: "芒果博客",
        github: "https://gitee.com/xiaotan-KBS",
        qq: "1908683915",
        qqQrCode: qq,
        weixin: "txb010820",
        weixinQrCode: weixin,
        mail: "1908683915@qq.com",
        icp: "赣ICP备17001719号",
        githubName: "Tan Jun Jie",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})