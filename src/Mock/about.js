import Mock from "mockjs";

Mock.mock("/api/about", "get", {
    'code': 0,
    'message': "",
    'data': "http://xiaotan-kbs.gitee.io/web-resume",
})