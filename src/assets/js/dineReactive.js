// 响应式方法
function defineReactive (obj, key, value) {
  let dep = new Dep()
  Object.defineProperty(obj, key, {
    get: () => {
      if (Dep.target) {
        dep.add()
      }
      return value
    },
    set: (newValue) => {
      value = newValue
      dep.notify()
    }
  })
}
// 递归遍历对象，添加响应式
class Observer {
  constructor (value) {
    this.walk(value)
  }
  walk (obj) {
    Object.keys(obj).forEach((item) => {
      if (typeof obj[item] === 'object') {
        this.walk(obj[item])
      } else {
        defineReactive(obj, item, obj[item])
      }
    })
  }
}
// 依赖收集
class Dep {
  constructor () {
    this.deep = []
  }
  add () {
    this.deep.push(Dep.target)
  }
  notify () {
    this.deep.forEach((target) => {
      target.update()
    })
  }
}
Dep.target = null

export function setTarget (target) {
  Dep.target = target
}
export function cleanTarget (target) {
  Dep.target = null
}

class Watcher {
  constructor (vm, expression, callback) {
    this.vm = vm
    this.expression = expression
    this.callbacks = []
    this.callbacks.push(callback)
  }
  getValue () {
    setTarget(this)
    let val = this.vm
    this.expression.split('.').forEach((key) => {
      val = val[key]
    })
    return val
  }
  update () {
    this.callbacks.forEach((cb) => {
      cb()
    })
  }
}
// 响应式数据劫持
window.current = {
  path: '/', // 路径
  query: {}, // query
  params: {}, // params
  name: '', // 路由名
  fullPath: '/', // 完整路径
  route: {} // 记录当前路由属性
}
new Observer(window.current)
// 对 current.route 对象进行依赖收集，变化时通过 render 来更新
new Watcher(window.current, 'route', render.bind(this))

// 其实render也就是动态的为页面指定区域渲染对应内容，这里只做一个简化版的render:
function render () {
  console.log('123123')
  let i
  // if ((i = this.history.current) && (i = i.route) && (i = i.component)) {
  //   document.getElementById(this.container).innerHTML = i
  // }
}

// current.route = {
//   a: 3
// }
