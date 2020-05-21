function bb (arr) {
  for(let i= 0; i < arr.length - 1; i++) {
    let isSorted = true; 
    for (let j= 0; j<arr.length - 1 - i; j++){
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        isSorted = false
      }
    }
    if (isSorted) break
  }
  console.log(arr)
}
// bb([2,4,1,5,0,7,6])

function quickSort(arr) {
  if (arr.length<=1) {return arr;}
  var left = [],
    right = [],
    baseDot =Math.round(arr.length/2),
    base =arr.splice(baseDot, 1)[0];

  for (var i =0; i <arr.length; i++) {
    if (arr[i] < base) {
      left.push(arr[i])
    }else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([base], quickSort(right));
}

console.log(quickSort([2,4,1,5,0,7,6]))