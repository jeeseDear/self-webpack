// const three =  require('three')
const fs = require('fs')
// const dir = await fs.promises.opendir(path);
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const TestPlugin = require('./src/assets/js/htmlPluginWebpackTest')
console.log(process.env.CODE_ENV, 22)
// basename 方法返回 path 的最后一部分
console.log('pathbasename', path.basename('/foo/bar/baz.html')) // baz.html
console.log('basename', path.basename('/foo/bar/baz.html', '.html')) // baz
// path.dirname 方法返回 path 的目录名，类似于 Unix 的 dirname 命令。 尾部的目录分隔符将被忽略
console.info('dirname', path.dirname('/foo/bar/baz/asdf/quux'))
// path.extname(path) 方法返回 path 的扩展名，从最后一次出现 .（句点）字符到 path 最后一部分的字符串结束
console.log('path.extname', path.extname('index.htm'), path.extname('readMe.md'))
// path.isAbsolute 检测path是否为绝对路径
console.log('path.isAbssoo', path.isAbsolute('/index')) // true
console.log('path.isAbssoo', path.isAbsolute('index/1')) // false
// path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起
console.log('path.join', path.join('foo/', 'aa', './bb'))
console.log('path.join', path.join('foo', 'aa', 'bb', '../cc'))
// path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段。 多个/ 或 \ 被替换为单个\
console.log('path.normalize', path.normalize('/foo\\\\bar//baz////asdf/quux/..')) // \foo\bar\baz\asdf
// path.resolve() 方法将路径或路径片段的序列解析为绝对路径。
// 给定的路径序列从右到左进行处理，每个后续的 path 前置，直到构造出一个绝对路径 停止
console.log('path.resolve', path.resolve(__dirname)) // D:\新建文件夹\self-set-webpack
console.log('path.resolve', path.resolve(__dirname, 'aa', 'bb')) // D:\新建文件夹\self-set-webpack\aa\bb
console.log('path.resolve', path.resolve(__dirname, 'aa', '/bb')) // \bb
console.log('path.resolve', path.resolve('zz', 'aa', 'bb')) // D:\新建文件夹\self-set-webpack\zz\aa\bb
// path.sep 正斜杠（/）和反斜杠（\）都被接受为路径片段分隔符
console.log('path.sep', 'foo\\bar\\baz'.split(path.sep))
// fs文件系统
// 删除文件
// fs.unlink(path.resolve(__dirname, 'src/yll/test.js'), (err) => {
//   if (err) throw err;
//   console.log('已成功删除') 异步
// })
// fs.unlinkSync('/tmp/hello'); 同步
// 文件重命名
// fs.rename(path.resolve(__dirname, 'src/yll'), path.resolve(__dirname, 'src/rename'), (err) => {
//   if (err) throw err
// })
// fs.open 用于表示文件得描述符 文件描述符可用于从文件读取数据、向文件写入数据、或请求关于文件的信息
fs.open('src/pages/test.html', (err, fd) => {
  if (err) throw err;
  console.log('fs.open', fd)
  var buffer = new Buffer(255);
  fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
    if(err) {
      throw err;
    } else {
      console.log(bytesRead);
      console.log(buffer.slice(0, bytesRead).toString());
      console.log('fs.statSync(paths)', fs.statSync('src/pages/test.html').isDirectory())
      //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
      // fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
      //   console.log(bytesRead);
      //   console.log(buffer.slice(0, bytesRead).toString());
      // });
       // 始终关闭文件描述符！
      fs.close(fd, (err) => {
        if (err) throw err;
      });
    }
  })

})
console.log('process.cwd', process.cwd()) // 获取当前目录得绝对路径  D:\新建文件夹\self-set-webpack
// fs.readdir
console.log('fs.readdir', fs.readdir(path.resolve(__dirname, 'src'), (err, files) => {
  console.log('fs.readdir', files)
}))
// 获取文件 fs.readdirSync
console.log('fs.readdir', fs.readdirSync(path.resolve(__dirname, 'src')))
// URL对象的支持
// const fileUrl = new URL('file:///C:/Users/renbing.zhang/Desktop/漫画算法-小灰的算法之旅.pdf')
// console.log('URL', fileUrl, fs.readFileSync(fileUrl).length, fs.readFileSync(fileUrl))
function getEvn () {
  return (() => {
    if (process.env.CODE_ENV === 'dev') {
      return 'dev'
    } else {
      return ''
    }
  })()
} 
module.exports = {
  mode:process.env.CODE_ENV === 'dev' ? 'development' : 'production',
  entry: {
    index: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
    // pathinfo: true
  },
  optimization: {
    splitChunks: {
       chunks: "async", // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
       minSize: 30000, // 最小尺寸，30000
       minChunks: 1, // 引入两次及以上被打包
       maxAsyncRequests: 5, // 最大异步请求数， 默认5
       maxInitialRequests : 3, // 最大初始化请求书，默认3
       automaticNameDelimiter: '~',// 打包分隔符
       name: function(){}, // 打包后的名称，此选项可接收 function
       cacheGroups: {
        vendors: { // 项目基本框架等
          chunks: 'all',
          test: /vue/,
          priority: 100,
          name: 'vendors',
        },
        'async-commons': {  // 异步加载公共包、组件等
          chunks: 'async', // 异步加载的组件 懒加载、路由异步加载
          minChunks: 2,
          name: 'async-commons',
          priority: 90,
        },
        commons: { // 其他同步加载公共包
          chunks: 'all',
          test: /babel-polyfill|element-ui/,
          minChunks: 1,
          name: 'commons',
          priority: 80,
        },
      }
    }
  },
  externals: {
    // jquery: 'jQuery',
    // lodash: 'lodash',
    // 'lodash.get': 'lodash.get'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts']
  },
  // devtool: 'source-map',
  devServer: {
    port: 9000,
    publicPath: '/',
    hot: true,
    // open: true
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        use: ['babel-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test:/\.tsx?$/,
        use: ['ts-loader'],
        include: path.resolve(__dirname, 'src')
      },
      {
        test:/\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader', // 顺序重要，不然报错， 先style css stylus
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: require.resolve('./src/assets/js/webpakNumbers.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({template: './src/pages/test.html', filename: 'index.html', minify: true}),
    // new HtmlWebpackPlugin({template: './src/pages/test1.html', filename: 'test1.html', chunks: ['anoter']}),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin(),
    // new BundleAnalyzerPlugin(),
    new UglifyJsPlugin(),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   join: ['lodash', 'join'] // 自动加载模块，而不必到处 import 或 require 。
    // }),
    new TestPlugin()
  ]
};