const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')

const publicUrl = '/public'

module.exports = {
  entry: {
    main: path.join(__dirname, '/src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),

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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        exclude: /node_modules/,
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(s*)css$/, // 正则匹配文件路径
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //生成的html存放路径，相对于 path
      template: './public/index.html', //html模板路径
      inject: true, //允许插件修改哪些内容，包括head与body
      hash: false, //为静态资源生成hash值
      minify: {
        removeComments: false, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
      }
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: ''
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new CopyWebpackPlugin([
      {
        from: './public/favicon.ico',
        to: './favicon.ico'
      }
    ])
  ]
}
