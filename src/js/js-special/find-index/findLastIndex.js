function findLastIndex(array, predicate, context) {
  for (var i = array.length - 1; i >= 0; i--) {
    if (predicate.call(context, array[i], i, array)) {
      return i
    }
  }
  return -1
}
console.log(findLastIndex([1, 2, 3, 4], function (item, index, array) {
  if (item === 1) return true
}))

module.exports = findLastIndex