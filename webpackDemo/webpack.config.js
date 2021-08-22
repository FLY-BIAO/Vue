const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    // mode  有两种模式，'development'和'production'
    mode: 'development',

    // 入口文件
    entry: path.resolve(__dirname, './src/index.js'),

    // webpack-dev-server配置
    devServer: {        
        open: true,     // 自动打开浏览器
        // host: '127.0.0.1',// 主机地址
        // host: '0.0.0.0',// 主机地址
        port: 8080      // 端口
    },

    // 各种loader配置
    module: {
        // loader的详细配置
        rules: [
            // 多个loader用use数组，处理顺序为从右往左；单个loader直接用loader:xxx。

            // css文件配置，npm i style-loader css-loader -D
            { test: /\.css$/, use:['style-loader', 'css-loader'] },

            // less文件配置，less-loader依赖于less，需要安装两个包npm i less-loader less -D
            { test: /\.less$/, use:['style-loader', 'css-loader', 'less-loader'] },

            // 图片文件配置，url-loader依赖于file-loader， npm i url-loader file-loader -D
            { test: /\.jpg|png|gif$/, use:['url-loader?limit=22229&outputPath=img'] }, // ?表示带的参数，多个参数yong&连接，limit体积

            // es6高级语法， npm i babel-loader @babel/core @babel/plugin-proposal-decorators -D
            // exclude 排除第三方包
            // 还需要添加一个babel.config.js，并在其中的plugins把插件载入
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }

        ]
    },
    
    // 插件的配置
    plugins: [
        new HtmlPlugin({ template: './src/index.html', filename: './index.html' }),
    ],

    // 生成的js文件输出位置
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/built.js'
    },
}
