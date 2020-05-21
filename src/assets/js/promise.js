// Promise
// 静态方法 Promise.all([])  Promise.race([])  Promise.resolve  Promise.reject
// then 方法
// then 接受两个参数，onFulfilled和onRejected可选的函数
// then方法可以链式调用 A.每次返回一个新的PromiseB.执行规则和错误捕获：then的返回值如果是非Promise直接作为下一个新Promise参数，
// 如果是Promise会等Promise执行
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})
let promise2 = promise1.then((res) => {
  throw new Error('这里抛出了一个异常')
})
// promise2.then((res) => {
//   console.log(res)
// }).catch((e) => {
//   console.log('errr', e)
// })

function testPromise () {
  promise2.then((res) => {
    console.log(res)
  }, (e) => {
    console.log('errr', e)
  })
}

function testProcess () {
  
  console.log('script start')
  async function async1() {
    await async2()
    console.log('async1 end')
  }
  async function async2() {
    console.log('async2 end')
  }
  async1()

  setTimeout(function() {
    console.log('setTimeout')
  }, 0)

  new Promise(resolve => {
    console.log('Promise')
    resolve()
  }).then(function() {
  console.log('promise1')
  })
  .then(function() {
  console.log('promise2')
  })

  console.log('script end')

}
export default {
  testPromise,
  testProcess
}

// 手写promise
class MyPromise {
  constructor (handler) {
    if (typeof handler !== 'function') {
      throw new Error('MyPromise must accept function')
    }
    this._status = 'PENDING'
    this._value = undefined
    this._fullfilledQues = []
    this._rejectfilledQues = []
    try {
      handler(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      console.log(error)
    }
  }

  resolve (val) {
    if (this._status !== 'PENDING') return
    this._status = 'FULFILLED'
    this._value = val
  }

  reject (val) {
    if (this._status !== 'PENDING') return
    this._status = 'REJECTED'
    this._value = val
  }
  then (onFulfilled, onRejected) {
    const {_value, _status} = this
    new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一个成功的函数
      let fulfilled = value => {
        try {
          if (typeof onFulfilled !== 'function') {
            onFulfilledNext(value)
          } else {
            let res = onFulfilled(value)
            if (res instanceof MyPromise) {
              res.then(onFulfilledNext, onRejectedNext)
            }
          }
        } catch (error) {
          console.log(error)
        }
      }
    })
    switch (_status) {
      case 'PENDING':
        this._fullfilledQues.push(onFulfilled)
        this._rejectfilledQues.push(onRejected)
        break;
      case 'FULFULLED':
        fulfilled(_value)
        break;
      case 'REJECTED':
        rejected(_value)
        break;
    }
    // 返回新的promise
    return new MyPromise((onFulfilledNext, onRejectedNext) => {})
  }
}