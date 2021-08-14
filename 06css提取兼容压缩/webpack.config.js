// 引入path 模块
const path = require("path")
// 引入html-webpack-plugin

const HtmlWebpackPlugin = require("html-webpack-plugin")
// 提取css文件
 const MiniCssExtractPlugin = require("mini-css-extract-plugin")
 // 压缩css文件
 const CssMinimizerWebpackPlugin  = require("css-minimizer-webpack-plugin")
module.exports = {
  // 入口文件
  entry: "./src/main.js",
  // 输出文件
  output: {
    //输出的目录位置, 必须使用绝对路径
    // 使用绝对路径拼接 __dirname + '/dist
    path: path.resolve(__dirname,"dist"),
    filename: "js/bundle.js"
  },
  // 加载器, 默认只能解析js 和json
  module: {
    rules: [
      {
        test: /\.css$/i,
        // 重下往上 从左往右依次执行
        // css-loader处理css文件  style-loader 吧css文件插入到html中
        //postcss-loader 用来兼容旧的浏览器样式问题
        use: [MiniCssExtractPlugin.loader, "css-loader","postcss-loader"],
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
      },
      // 处理图片资源
      {
        test:/\.(png|jpg|gif)$/,
        loader: 'url-loader',
        //设置配置项
        options: {
          // 如果小于 8kb 使用base64处理
          // base64
          // 优点 减少对服务器的请求, 减轻服务器端的压力
          // 缺点 体积过大
          limit: 8 * 1024,
          //取hash 的前10位
          //ext 保留原来的扩展名
          name: '[hash:10].[ext]',
          //设置图片打包后输出的目录
          outputPath: "img"
        }
      },
      //处理html
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          //关闭se6模块化
          esModule: false
        }
      },
      {
        exclude: /\.(css|js|html|less|scss|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'fonts'
        }
      },
    ]

  },
  // 插件 扩展webpack功能
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html', //打包的html文件模板
      filename: 'index.html'// 打包的文件名称

    }),
    // 将css提取到独立的文件
    new MiniCssExtractPlugin({
      filename: './style/index.css'
    }),
    // css压缩
    new CssMinimizerWebpackPlugin()
  ],
  // 模式  开发模式development 和生产模式 production
  mode: "development",

}