const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry: {
    home: './src/main.js',
    other: './src/about.js'
  },
  output: {
    path: path.resolve(__dirname,"dist"),
    // [name] 区分多个文件大包后的名称
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "home.html",
      //打包后引入那个文件
      chunks: ["home"]
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "other.html",
      chunks:["other"]
    })
  ],

  mode: 'development',
  // devtool: "source-map" // 会生成map文件 里边包含映射关系的代码
  // devtool: "inline-source-map" // 不会产生map格式的文件, 包含映射代码会保存在生成的文件中
  devtool: "eval-source-map" // 不会产生map格式的文件,包含映射关系的代码会保存在打包后的eval中
}