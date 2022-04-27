module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://test.my-site.com", //代理跨域
                // secure: false
            }
        }
    },
    productionSourceMap: false,
    crossorigin: "use-credentials",
    publicPath: '/blog/',
    configureWebpack: require("./webpack.config"),
}