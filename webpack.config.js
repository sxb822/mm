//引入path模块，node环境中自带的模块
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Uglify = webpack.optimize.UglifyJsPlugin;
console.log(webpack);
//console.log(path);
module.exports = { //模块暴露
    entry: "./src/index.js", //入口文件
    output: {
        path: path.resolve(__dirname, "dist"), //必须使用绝对路径
        filename: "bundle.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "newIndex.html",
            template: "dist/index.html"
        }),
        new Uglify()
    ]
}
//console.log(_dirname);