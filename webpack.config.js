const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.join(__dirname, './src/index.ts')
  },
  output: {
    // 打包后的 bundle 的生成位置（E:/react-template/dist/）
    path: path.resolve(__dirname, '../dist/'),

    // 主 bundle（E:/react-template/dist/js/main.js）
    filename: 'js/main.js',

    // chunk: 单独拆分出来的 bundle，name即为chunk的名称
    chunkFilename: 'js/[name].js',

    // publicPath + chunkFilename 为打包后生成的html文件请求 chunkFile 的路径
    // publicPath + 图片的URL 为打包后生成的html文件请求图片的路径，其他静态资源文件同理
    publicPath: '/'
  },
  devServer: {
    inline: true,
    hot: true,
    host: '0.0.0.0',
    port: 5000,
    contentBase: path.resolve(__dirname, '/dist'),
    compress: true,
    disableHostCheck: true
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './public/index.html', //生成的html存放路径，相对于 path
      template: 'index.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: false, //为静态资源生成hash值
      minify: {
        //压缩HTML文件
        removeComments: false, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    })
  ]
}
