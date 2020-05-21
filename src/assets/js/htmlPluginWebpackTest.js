function HtmlPlugin (options) {
}

HtmlPlugin.prototype.apply = function (compiler) {
  // console.log('我是Compliler的实例', compiler.options)
  // console.log('我是Compliler的实例loaders', compiler.loaders)
  compiler.plugin('emit', function (compilation, callback) {
    for(var aa in compilation.assets) {
    }
    compilation.chunks.forEach((chunk) => {
      // chunk.forEachModule(function (module) {
      //   // console.log('文档module', module)
      //   // console.log('文件路径', module.fileDependencies)
      //   // module 代表一个模块
      //   // module.fileDependencies 存放当前模块的所有依赖的文件路径，是一个数组
      //   // module.fileDependencies.forEach(function (filepath) {
      //   //   console.log('文档filepath', filepath)
      //   // });
      // });
      // chunk.modules.forEach((module) => {
      //   console.log('module', module.resource)
      //   module.fileDependencies.forEach((filepath) => {
      //     console.log('fliePath', filepath)
      //   })
      // })

      chunk.files.forEach(function(filename){
        let source = compilation.assets[filename].source();
      })


    })
    callback()
  })
}

module.exports = HtmlPlugin