// 引入path 模块
const path = require("path")
// 引入html-webpack-plugin

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 输出文件
  output: {
    //输出的目录位置, 必须使用绝对路径
    // 使用绝对路径拼接 __dirname + '/dist
    path: path.resolve(__dirname,"dist"),
    filename: "bundle.js"
  },
  // 加载器, 默认只能解析js 和json
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 重下往上 从左往右依次执行
        // css-loader处理css文件  style-loader 吧css文件插入到html中
        use: ["style-loader", "css-loader"],
      },
      // 处理less文件
      {
        test: /\.less$/,
        // 先使用less-loader 解析less文件 再使用css-loader 解析css 然后使用style 添加到htlm中
        use: ["style-loader", "css-loader","less-loader"]
      },
      //处理sass文件
      {
        test: /\.scss$/,
        use: ["style-loader","css-loader","sass-loader"]
      }
    ]

  },
  // 插件 扩展webpack功能
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html', //打包的html文件模板
      filename: 'index.html'// 打包的文件名称

    }),
  ],
  // 模式  开发模式development 和生产模式 production
  mode: "development"
}