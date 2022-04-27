//配置环境变量是生产环境才分析资源包大小优化
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            // new BundleAnalyzerPlugin(),
        ],
        externals: {
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios"
        }
    }
} else {
    module.exports = {};
}