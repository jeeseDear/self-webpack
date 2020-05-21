// import { apply } from "when/node";
// import { push_uniq } from "terser";

// function aa (time) {
//   let a1 = Promise.then((resolve, reject) => {
//     setTimeout(() => {
//       resolve('timeOut')
//       alert('超时')
//     }, time)
//   }).catch(err) {
//     console.log('123')
//   }
//   Promise.race([a1], (args) => {
//     console.log(args)
//   })
// }
// }

// setTimeout(function () {
//   console.log(1);
// });

// new Promise(function(resolve,reject){
//   console.log(2)
//   resolve(3)
// }).then(function(val){
//   console.log(val);
// })
// console.log(4);
// 2 4 3 1
// var a = [1,2,3];
// var b = [4,5,6];
// [..a, ...b]
// a.concat(b)

// 将下方对象的属性和值整理成 get请求的参数
const url = 'https://xxx-test.huami.com/data/xxx'
let params = {
    status: 1,
    type: 'nps',
    appName: 'mi',
    online: 1583856000000,
    offline: 1583904997286,
    page:1,
    pageSize:10
}
//示意
// https://xxx-test.huami.com/data/xxx?appName=mi&page=1&pageSize=10&offline=1583904997286&online=1583856000000&status=1&type=nps

function concatParmas () {
  let paramsConcat = ''
  for(let key in params) {
    let tem = `${key}=${params[key]}&`
    paramsConcat +=tem
  }
  paramsConcat =  paramsConcat.replace(/&$/g, '')
  console.log(`${url}?${paramsConcat}`)
  return `${url}?${paramsConcat}`
}
concatParmas(params)
Object.keys(params).map(item => `${item}=${url[item]}`).join('&')
// 
// function observe (obj) {
//   for (let key in obj) {
//     Object.defineProperty(obj, key, {
//       let dep = new Dep()
//       get () {
//         if (Dep.target) {
//           dep.adds()
//         }
//         console.log(obj[key])
//       },
//       set (val) {
//         dep.notify()
//         obj[key] = val
//       }
//     })
//   }
// }



