import Mock from "mockjs";
import rotate from '@/assets/rotate.jpg';
Mock.mock('/api/project', 'get', {
    code: 0,
    message: "",
    data: [{
            id: '@guid',
            name: "3D旋转照片墙",
            url: "http://xiaotan-kbs.gitee.io/css3-exercise-3",
            github: "https://gitee.com/xiaotan-KBS/css3-exercise-3.git",
            description: ["运用了css3的transform变换和animation关键帧属性把照片向各个方向旋转平移，在设置父容器的transform-style属性为preserve-3d形成一个圆形3D视觉空间照片墙",
                "另外通过调节景深perspective的数值和景观perspective-origin的原点来达到跟随鼠标多视角方向的去看旋转照片墙"
            ],
            thumb: rotate,
            order: 1
        },
        {
            id: "@guid",
            name: "故宫首页",
            url: " http://xiaotan-kbs.gitee.io/gu",
            github: "https://gitee.com/xiaotan-KBS/gu.git",
            description: ["...", "..."],
            "thumb": '@image("300x250", @color,picture)',
            order: 2
        },
        {
            id: "@guid",
            name: "像素鸟",
            url: "...",
            github: "...",
            description: ["...", "..."],
            "thumb": '@image("300x250", @color,picture)',
            order: 2
        },
        {
            id: "@guid",
            name: "像素鸟",
            url: "...",
            github: "...",
            description: ["...", "..."],
            "thumb": '@image("300x250", @color,picture)',
            order: 2
        },
        {
            id: "@guid",
            name: "像素鸟",
            url: "...",
            github: "...",
            description: ["...", "..."],
            "thumb": '@image("300x250", @color,picture)',
            order: 2
        }
    ]
})