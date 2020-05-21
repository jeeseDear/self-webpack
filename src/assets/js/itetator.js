
console.info('我执行了咩咩咩咩咩咩咩');
// 可迭代协议  Symbol.iterator  返回一个对象的无参函数，被返回对象符合迭代器协议。即有next方法 符合迭代器协议）
// 迭代器协议 next() 的方法并且拥有以下含义 {done : , value: }
function activeIterator () {
  let myIterator = {
    next: function() {
        // ...
    },
    [Symbol.iterator]: function() { return this }
  }
  let selfItera = {}
  selfItera[Symbol.iterator] = function* () {
    yield 1
    yield 2
    yield 3
  }
  console.log(selfItera[Symbol.iterator]().next())
  console.log([...selfItera]) // [1, 2, 3]
  function* gen(){
    yield* ["a", "b", "c"];
  }
  console.log([...gen()])
  var aaa = [1, 3, 4]
  console.log('aaaa', aaa[Symbol.iterator]().next())
}
export  default {
  activeIterator
}