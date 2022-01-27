//16. 最接近的三数之和
/**
 * 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。
 * 返回这三个数的和。假定每组输入只存在恰好一个解。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  //当数量为3的时候，直接返回
  let n = num.length;
  if (n === 3) return sum(arr);

  nums.sort((a, b) => a - b);
  let total = Infinity;
  let res = 0;
  for (let i = 0; i < n - 3; i++) {
    const cur = nums[i];
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      // const temp = sum([cur, nums[left], nums[right]]);
      const temp = cur + nums[left] + nums[right];
      //需要更新最小值,保证每次经过计算的结果越来越接近target
      const min = Math.abs(temp - target); //取绝对值
      if (min < total) {
        total = min;
        res = temp;
      }

      if (temp < target) {
        left++;
      } else if (temp > target) {
        right--;
      } else {
        return res;
      }
    }
  }

  return res;
  //不满足，则排序数组、从数组中选择一个值，作为初始值。而且还有留有>=2个数组元素
  //分配双指针，左指针为选中值的下一个元素，右指针为最后一个元素，
  //计算值，结果值<target,则右指针左移动, 否则左指针友谊
  //根据选中三个元素的数组计算返回值
};

function sum(arr) {
  return arr.reduce((prev, next) => {
    prev + next;
  }, 0);
}
