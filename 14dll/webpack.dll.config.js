const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: {
    jquery: ['jquery']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'dll'),
    library: '[name]_[hash]' //打包后往外暴露的名字 
  },
  plugins: [
    // 打包生成一个manifest.json文件, 提供和jquery的映射
    new webpack.DllPlugin({
      name: '[name]_[hash]',// 要映射的暴露的内容名字
      path: path.join(__dirname, 'dll','manifest.json')
    })
  ],
  mode: "production"
}