//二元操作符 1.Null与数字
console.log(null + 1) //1

// 2. 数组与数组
console.log([] + [])
/* 依然按照规范：

lprim = ToPrimitive([])，[] 是数组， 相当于ToPrimitive([], Number)， 
先调用valueOf方法， 返回对象本身， 因为不是原始值， 调用toString方法， 返回空字符串 ""
rprim类似。
lprim和rprim都是字符串， 执行拼接操作 */

// 3.数组与对象 两者结果一致
console.log([] + {})
console.log({} + [])
/* 按照规范：

lprim = ToPrimitive([])， lprim = ""
rprim = ToPrimitive({})， 相当于调用 ToPrimitive({}, Number)， 
先调用 valueOf 方法， 返回对象本身， 因为不是原始值， 调用 toString 方法， 返回 "[object Object]"
lprim 和 rprim 都是字符串， 执行拼接操作 */
console.log(1 + true) //2
console.log({} + {}) //"[object Object][objet Object]"
console.log(new Date(2017, 04, 21) + 1) //"Sun May 21 2017 00:00:00 GMT+0800 (CST)1"