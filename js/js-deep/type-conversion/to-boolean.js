//原始值转布尔
console.log(Boolean()) //false

console.log(Boolean(false)) //false

console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false
console.log(Boolean(+0)) //false
console.log(Boolean(-0)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(''))
//注意：当Boolean函数不传任何参数时，会返回false

//对象转布尔值：所有对象（包括数组和函数）都转换为true。对于包装对象亦是
console.log(![]) //false
console.log(Boolean(new Boolean(false))) //true