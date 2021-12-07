/* 从首位开始逐个比较相邻两个元素，如果前者大于后者则调换位置，直到最后一个元素
接着上面的步骤直至比较到最后元素的前一个元素
完成整个过程。
时间复杂度为0(n^2) */
console.time("bubble");
function bubble(array, flag) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        // [array[j], array[j + 1]] = [array[j + 1], array[j]];
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return flag ? array.reverse() : array;
}

let arr = [2, 9, 6, 7, 4, 3, 1, 7];
console.log(bubble(arr));
console.timeEnd("bubble");
