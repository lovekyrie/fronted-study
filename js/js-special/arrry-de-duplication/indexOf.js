//用indexOf简化 双重循环的内层循环
console.time('timer')
var array = [1, 1, '-1', '-1']

function unique(arr) {
  var res = []
  for (var i = 0, len = arr.length; i < len; i++) {
    var current = arr[i]
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res
}

console.log(unique(array))
console.timeEnd('timer')