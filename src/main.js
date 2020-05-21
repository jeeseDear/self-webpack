// import './assets/style/base.styl'
import { file, parse } from './assets/js/webpakNumbers.js';
import IteratorFn from './assets/js/itetator'
import algorithm from './assets/js/algorithm'
import promiseFn from './assets/js/promise'
import  './assets/js/ts'
import dineReactive from './assets/js/dineReactive'
import 'babel-polyfill'
import Vue from  'vue'
import 'element-ui'
import _loadsh from 'lodash'
import  './assets/js/echarts'
import $ from 'jquery'
// console.log(module.exports, 120, $, _loadsh)
// console.log(three)
const app = new Vue({})
// function test () {
//   // console.log(window, join, 1234444)
//   // $("body").css("background-color","yellow");
// // Array.__proto__ 提供的是 数组原型 – 请把它当作 Array 函数所继承的对象。
// // entries, keys, for-in 
// console.log('$$$$$', $('body').append('1232s'))
// var entries = {a: 1, b: 2, c: 3}
// entries.__proto__ = {cc: 333}
// console.log(Object.entries(entries))
// console.log(Object.keys(entries))
// console.log(entries.prototype)
// for (let key in entries) {
//   console.log(key)
// }
// // for in 和 entries keys 遍历顺序一致，for in 会遍历原型链上的属性，其它不会遍历原型链
// // entries 返回一个给定对象自身可枚举属性的键值对数组
// // 冻结对象
// Object.freeze(entries)
// // entries.a = 33
// console.log(entries)
// // fromEntries 把键值对列表转换为一个对象a
// let cce = 'div'
// var hasEntries = [
//   ['a', 1],
//   ['b', 2]
// ]
// console.log(Object.fromEntries(hasEntries))
// // Map
// var map = new Map(Object.entries(entries))
// map.set(cce, '23232')
// console.log(Array.from(map))
// console.log(Object.fromEntries(map))
// // Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符
// // 用法： Object.getOwnPropertyDescriptor(obj, prop)
// console.log(Object.getOwnPropertyDescriptor(entries, 'a'))
// // Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符
// // 用法： Object.getOwnPropertyDescriptors(obj)
// console.log(Object.getOwnPropertyDescriptors(entries))
// // Object.getOwnPropertyNames() 返回一个数组，包括不可枚举属性但不包括Symbol值作为名称的属性。 
// // 数组中枚举属性的顺序与通过 for...in 循环（或 Object.keys）迭代该对象属性时一致。数组中不可枚举属性的顺序未定义
// console.log(Object.getOwnPropertyNames(entries))
// // Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。
// var obj = {};
// var a = Symbol("a");
// var b = Symbol.for("b");
// obj[a] = "localSymbol";
// obj[b] = "globalSymbol";
// console.log(Object.getOwnPropertySymbols(obj))
// // Object.getPrototypeOf() 方法返回指定对象的原型（内部[[Prototype]]属性的值）
// console.log(Object.getPrototypeOf(entries))
// // Object.prototype是构造出来的对象的原型。
// var obj = new Object();
// Object.prototype === Object.getPrototypeOf( obj );              // true

// Object.prototype === Object.getPrototypeOf( {} );
// // Object.is() 方法判断两个值是否是相同的值。Object.is 不会做这种类型转换
// console.log(Object.is(NaN, NaN))
// // Object.isExtensible() 方法判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。
// // 用法： Object.isExtensible(obj)
// // 新对象默认是可扩展的.
// var empty = {};
// Object.isExtensible(empty); // === true

// // ...可以变的不可扩展.
// Object.preventExtensions(empty);
// Object.isExtensible(empty); // === false[]

// // 密封对象是不可扩展的.
// var sealed = Object.seal({});
// Object.isExtensible(sealed); // === false

// // 冻结对象也是不可扩展.
// var frozen = Object.freeze({});
// Object.isExtensible(frozen); // === false
// // Object.preventExtensions()方法让一个对象变的不可扩展，也就是永远不能再添加新的属性。
// // hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性 该方法会忽略掉那些从原型链上继承到的属性
// // 用法： obj.hasOwnProperty(prop)
// console.log(entries.hasOwnProperty('a'))
// // isPrototypeOf() 方法用于测试一个对象是否存在于另一个对象的原型链上。
// // 用法： 检查 baz 对象是否继承自 Foo.prototype：
// function Foo() {}
// function Baz() {}
// var baz = new Baz();
// console.log(Foo.prototype.isPrototypeOf(baz))
// if (Foo.prototype.isPrototypeOf(baz)) {
//   // do something safe
// }
// // toLocaleString() 方法返回一个该对象的字符串表示, 该字符串与执行环境的地区对应
// // 用法： obj.toLocaleString();
// var toLocalArr = [1, 2, 3]
// console.log(toLocalArr.toLocaleString())
// // valueOf 返回原始值
// var newBool = new Boolean(true);
// console.log(newBool.valueOf());   // true

// // Object.seal()方法封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。
// var oobj = {a: 1}
// Object.seal(oobj)
// oobj.a = 3
// console.log(obj.a)
// // Object.setPrototypeOf() 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
// // Object.values()方法返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
// // Array

// // length 属性的值是一个 0 到 2^32-1 的整数。
// console.log(new Array(429))
// // JavaScript 中，以数字开头的属性不能用点号引用，必须用方括号
// var ara = [1]
// ara[3] = 33
// console.log(ara)
// // Array.from  方法从一个类似数组或可迭代对象中创建一个新的数组实例。
// // Array.from(arrayLike[, mapFn[, thisArg]])
// // Array.isArray() 用于确定传递的值是否是一个 Array
// console.log(Array.isArray(new Set([1, 3]))) // false
// // Array.of() Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
// Array.of(1);         // [1]
// Array.of(1, 2, 3);   // [1, 2, 3]
// Array(7);          // [ , , , , , , ]
// Array(1, 7);          // [1, 7]
// // concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
// // copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
// // arr.copyWithin(target[, start[, end]])
// var arr1 = ['a', 'b', 'c', 'd', 'e']
// arr1.copyWithin(1, 2)
// console.log(arr1)
// arr1.copyWithin(0, 3, 4)
// console.log(arr1)
// // entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对
// console.log(arr1.entries())
// console.log(Array.from(arr1.entries()))
// // every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
// // arr.every(callback[, thisArg]) thisArg 执行 callback 时使用的 this 值。
// // fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
// var array1 = [1, 2, 3, 4]
// array1.fill(0, 0, 3)
// console.log(array1)
// // flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// // 用法： var newArray = arr.flat(depth) depth 指定要提取嵌套数组的结构深度，默认值为 1
// console.log('flattt', [[1,32,1,[1, 232]]].flat(3))
// var arr4 = [1, 2, , 4, 5];
// console.log(arr4[2])
// // flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// // 它与 map 和 深度值1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
// // includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
// console.log(arr4.includes('1')) // false
// console.log(arr4.toString() == arr4.join(','))

// // 优势能力： 热爱学习，和产品、后台、测试相处融洽，良好沟通，活跃气氛。
// // 不足能力： 自控力不够好，如之前定的flag完成度不高
// // 目标期许： 完成自己制定的目标
// }
// // 测试数据
// var nums=[6,10,1,9,4,8,2,7,3,5]
// console.log(mergeSort(nums))
// test()
// // 归并排序
// function mergeSort(arr){
//   // 设置终止的条件，
//   if (arr.length < 2) {
//     return arr;
//   }
//   //设立中间值
//   var middle = parseInt(arr.length / 2); // middle 5 第一次 // 左边 第一二次 2 // 左边第三次 1
//   //第1个和middle个之间为左子列
//   var left = arr.slice(0, middle); // [6,10,1,9,4] 第一次 // 左边 第二次 [6,10] 左边[6]
//   //第middle+1到最后为右子列
//   var right = arr.slice(middle); // [8,2,7,3,5] 第一次 // 右边第二次 [1,9,4]  右边 [10]
//   if(left=="undefined"&&right=="undefined"){
//      return false;
//   }
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right){// 1, 6, 5, 4  1,6  5,4  1 , 6  5,4  return merge(return merge(mergeSort(1), mergeSort(6)), return merge(5, 4)) 
//   // return merge([1,6], [4,5]) [1,4,5,6]
//   var result = [];
//   while (left.length && right.length) {
//     if(left[0] <= right[0]){
//       //把left的左子树推出一个，然后push进result数组里
//        result.push(left.shift());
//     }else{
//       //把right的右子树推出一个，然后push进result数组里
//      result.push(right.shift());
//     }
//   }
//   //经过上面一次循环，只能左子列或右子列一个不为空，或者都为空
//   while (left.length){
//     result.push(left.shift());
//   } 
//   while (right.length){
//     result.push(right.shift());
//   }
//   console.log(result)
//   return result;
// }
// // 插入排序
// // 
// var curry = (fn, ...args) => {
//   console.log(fn, args)
//   return ( args.length < fn.length?(...argumentss) => curry(fn, ...args, ...argumentss) : fn(...args))
// }

// function sumFn (a, b, c) {
// return a+b+c
// }
// var sum = curry(sumFn)
// console.log(sum(1,2,3))
// //  给定一个整数无序数组和变量 sum，如果存在数组中任意两项和使等于 sum 的值，则返回true。否则,返回false
// function findSum (arr, sum) {
//   let flag = false
//   for (let i = 0;i< arr.length; i++ ) {
//     for (let j = i + 1;j< arr.length - i;j ++) {
//       if (arr[i] + arr[j] == sum) {
//         flag = true
//         return flag
//       }
//     }
//   }
//   return false
// }
// console.log(findSum([1,3,4,5,23], 24))
// const findSum1 = (arr, sum) => {
//   let subSet = new Set()
//   for (let i=0; i< arr.length; i++) {
//     if (subSet.has(arr[i])) {
//       console.log(i)
//       return true
//     } else {
//       subSet.add(sum - arr[i])
//     }
//   }
//   return false
// }
// console.log(findSum1([1,2,35,42,3,4,5], 6))
// // 千分位
// console.log('千分位实现')
// var numQ = 2211338829138290.123;
// console.log(numQ.toLocaleString())
// // 正则实现
// console.log(numQ.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')) // 2,211,338,829,138,290
// console.log(numQ.toString().match(/(\d)(?=(?:\d{3})+$)/g)) // ["2", "1", "8", "9", "8"]
// console.log(numQ.toString().match(/(?:\d{3})+$/g)) // ["211338829138290"] $ 匹配输入的结束 省略了第一个字符 ,^匹配输入的开始 去掉了最后一个字符
// // (?<=y)x  匹配'x'仅仅当'x'前面是'y' 这种叫做后行断言
// console.log(numQ.toString().replace(/(?<=^(\d{3})+)(\d)/g, ',$2')) // 221,133,882,913,829,0
// console.log(numQ.toString().match(/(?<=^(\d{3})+)(\d)/g)) // ["1", "8", "9", "8", "0"]
// // 说明
// // (x)	
// // 匹配 'x' 并且记住匹配项，就像下面的例子展示的那样。括号被称为 捕获括号。
// // 模式/(foo) (bar) \1 \2/中的 '(foo)' 和 '(bar)' 匹配并记住字符串 "foo bar foo bar" 中前两个单词。模式中的 \1 和 \2 匹配字符串的后两个单词。
// // 注意 \1、\2、\n 是用在正则表达式的匹配环节。在正则表达式的替换环节，则要使用像 $1、$2、$n 这样的语法，例如，'bar foo'.replace( /(...) (...)/, '$2 $1' )。

// // (?:x)	
// // 匹配 'x' 但是不记住匹配项。这种叫作非捕获括号，使得你能够定义为与正则表达式运算符一起使用的子表达式。来看示例表达式 /(?:foo){1,2}/。
// // 如果表达式是 /foo{1,2}/，{1,2}将只对 ‘foo’ 的最后一个字符 ’o‘ 生效。如果使用非捕获括号，则{1,2}会匹配整个 ‘foo’ 单词。

// // x(?=y)	
// // 匹配'x'仅仅当'x'后面跟着'y'.这种叫做先行断言。
// // 例如，/Jack(?=Sprat)/会匹配到'Jack'仅仅当它后面跟着'Sprat'。/Jack(?=Sprat|Frost)/匹配‘Jack’仅仅当它后面跟着'Sprat'或者是‘Frost’。但是‘Sprat’和‘Frost’都不是匹配结果的一部分。

// // (?<=y)x  匹配'x'仅仅当'x'前面是'y' 这种叫做后行断言
// // 正则组和引用
// console.log(numQ.toString().match(/(\w)\1*/g))
// console.log(numQ.toString().match(/2+/g))
// var ls = '12googoole123'
// console.log(ls.match(/(goo)(goole)\1*/g))
// console.log(ls.replace(/^(goo)(goole)$/g, '$2$1'))
// console.log(ls.match(/goole|goo/g))
// console.log(ls.match(/3\b/g))

// // 三数之和为0
// // hash解法
// const threeSum = function (nums) {
//   let res = []
//   let hash = {}
//   for (let i = 0; i < nums.length - 1; i ++) {
//     for (let j= i+1; j< nums.length; j ++) {  
//       if (hash[nums[j]] != undefined) {
//         res.push([nums[j],...hash[nums[j]]])
//         hash[nums[j]] = undefined // 去除重复
//       } else {
//         let mark = 0 - nums[i] - nums[j]
//         hash[mark] = [nums[i], nums[j]]
//       }
//     }
//   }
//   console.log('hash', hash)
//   return res
// }
// console.log('三数之和', threeSum([1,-1, 3, -3, 0, 2, -2, -5, 5]))
// // 整数反转
// function reverse (nums) {
//   let res = ''
//   let strNums = String(nums)
//   for (let i = strNums.length - 1; i >= 0; i--) {
//     res += strNums[i]
//   }
//   res= parseFloat(res)
//   if (nums < 0) {
//     res = -res
//   }
//   return res
// }
// // 数学方法 整数反转
// function NumberReverse (x) {
//   var y = 0;
//   while (x != 0) {
//       y = y * 10 + x % 10;
//       x /= 10;
//   }
//   return y
// }

// console.log('整数反转', reverse(-123213.23), NumberReverse(444444))
// let _getA = {a: 23}
// // console.log(_get(_getA, 'a'))
// // IteratorFn.activeIterator()
// promiseFn.testPromise()
// promiseFn.testProcess()
// // sort分析

// function insertSort () {
//   let tem = []
//   for (let i= 0; i< 30; i++) {
//     tem[i] = {
//       value: 0,
//       label: i
//     }
//   }
//   tem.sort((a, b) => {
//     return b.value - a.value
//   })
//   console.log(tem)
//   tem.sort((a, b) => {
//     return b.value - a.value
//   })
//   console.log(tem)
// }
// insertSort()
// // 
// function bubuleSort (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j<arr.length-1-i; j++) {
//       if (arr[j] > arr[j+1]) {
//         [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
//       }
//     }
//   }
//   console.log(arr)
// }
// bubuleSort([2,22,1,0,1,5])
// // **改进冒泡排序： **设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。
// // 由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。
// function bubbleSort2(arr) {
//   console.time('改进后冒泡排序耗时');
//   var i = arr.length-1;  //初始时,最后位置保持不变
//   while ( i> 0) {
//       var pos= 0; //每趟开始时,无记录交换
//       for (var j= 0; j< i; j++)
//           if (arr[j]> arr[j+1]) {
//               pos= j; //记录交换的位置
//               var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
//           }
//       i= pos; //为下一趟排序作准备
//    }
//    console.timeEnd('改进后冒泡排序耗时');
//    return arr;
// }
// var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
// console.log(bubbleSort2(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]