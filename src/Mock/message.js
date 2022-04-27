import Mock from 'mockjs';
import qs from "query-string";
//获取所有留言
Mock.mock(/^\/api\/message(\?.+)?$/, "get", function(options) {
    // console.log(options);
    const query = qs.parse(options.url);
    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            "total|52": 0,
            [`rows|${query.limit || 10}`]: [{
                id: "@guid",
                nickname: "@cname",
                content: "@cparagraph(1, 10)",
                createDate: Date.now(),
                "avatar|1": [
                    "https://img2.baidu.com/it/u=3435578013,572140249&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
                    "https://img1.baidu.com/it/u=1000631446,2232076591&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                    "https://img1.baidu.com/it/u=1943262652,511772323&fm=253&fmt=auto&app=138&f=JPEG?w=481&h=482",
                    "https://img2.baidu.com/it/u=3008452809,4259569502&fm=26&fmt=auto",
                    "https://img2.baidu.com/it/u=3594725795,3543595442&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                    "https://img0.baidu.com/it/u=378768018,4200402730&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                ],
            }],
        },
    });
});

// 提交留言
Mock.mock("/api/message", "post", function(options) {
    // console.log(options) //body: '{"nickname":"2","content":"2"}'
    const body = JSON.parse(options.body);
    const nickname = body.nickname;
    const content = body.content;
    const blogId = body.blogId;
    // console.log(body, nickname, blogId, content);

    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            id: "@guid",
            nickname,
            content,
            createDate: Date.now(),
            "avatar|1": [
                "https://img2.baidu.com/it/u=3435578013,572140249&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
                "https://img1.baidu.com/it/u=1000631446,2232076591&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img1.baidu.com/it/u=1943262652,511772323&fm=253&fmt=auto&app=138&f=JPEG?w=481&h=482",
                "https://img2.baidu.com/it/u=3008452809,4259569502&fm=26&fmt=auto",
                "https://img2.baidu.com/it/u=3594725795,3543595442&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                "https://img0.baidu.com/it/u=378768018,4200402730&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
            ],
        },
    })
})