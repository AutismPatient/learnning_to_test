module.exports = {
    outputDir: 'dist', // build输出目录 ，默认dist
    lintOnSave: false,// 是否开启eslint
    devServer: {
        open: false, // 是否自动弹出浏览器页面
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://localhost:8089',//接口地址
                ws: true,//// 代理websockets
                changOrigin: true,// 虚拟的站点需要更管origin
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
}