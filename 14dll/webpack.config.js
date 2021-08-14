const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require('webpack')


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,"dist"),
    // [name] 区分多个文件大包后的名称
    filename: 'bandle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    // 告诉webpack那些哭不需要大包,同时使用时的名字也要发生变化
    new webpack.DllReferencePlugin({
      manifest: path.join(__dirname, 'dll','manifest.json')
    })
  ],
// treeshaking 开启树摇 要生产模式
  mode: 'production',

}
