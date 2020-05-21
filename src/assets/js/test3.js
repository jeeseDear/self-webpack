// https://www.huami.com/search?a=1&b[]=bstr1&b[]=bstr2&c=3 
// 解析成object { a : 1 , b : [ "bstr1" , "bstr2" ] , c : 3]}
// function aa (str) {
//   let a = str.indexOf('?')
//   let result = str.slice(a + 1).split('&')
//   console.log(result)
//   let obj = {}
//   result.forEach((item) => {
//     let tem = item.split('=')
//     if (tem[])
//     obj[tem[0]] = tem[1]
//   })
//   console.log(obj)
// }
// aa('https://www.huami.com/search?a=1&b[]=bstr1&b[]=bstr2&c=3')

// [1,10,20,30,40,50,60,70]  [4,15,25,35,45,55,65,75]
// function aa (arr1, arr2) {
//   let temArr = [...arr1, ...arr2]
//   for (let i =0; i<temArr.length -1 ; i++) {
//     let isSort = true
//     for (let j=0; j<temArr.length - 1 -j; j++) {
//       if (temArr[j] > temArr[j+1]) {
//         [temArr[j+1], temArr[j]] = [temArr[j], temArr[j+1]]
//         isSort = false
//       }
//     }
//     if (isSort) break
//   }
//   console.log(temArr)
// }
// aa([1,10,20,30,40,50,60,70], [4,15,25,35,45,55,65,75])
let temarr = [...[1,10,20,30,40,50,60,70], ...[4,15,25,35,45,55,65,75]]
temarr.sort((a, b) => {
  return a - b
})
console.log(temarr)