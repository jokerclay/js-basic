const numbers =[ 1,2,3,4,5,6]
// we want to sum all the numbers in the array
// 应用场景想 购物车中的 每一件商品价格之和

// 比较传统的做法-----------------------------
// let sum = 0;
// for(let i = 0; i<numbers.length;i++)
// {
//    sum = sum + numbers[i]
// }
// console.log(sum);

// 或者
// for (let n of numbers)
//    sum +=n;


// 更简洁更优雅的写法-----------------------------
// 使用 reduce 方法

// reduce 有两个参数， 
// 一个是 callback (回调函数),该回调函数包含两个参数，accumulator(累加器),和 currentValue
// accumulator 是   ，currentValue 是数组中 依次 的每一个元素
// 一个是 accumulator 的初始值
const sum = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue

},0)


// 如果 accumulator 没有被赋值，就会默认是 数组的第一个元素的值
// 这个例子就会变成
// a = 1 , c = -1, a = a + c = 0;
// a = 0 , c = 2 ...
console.log(sum)

// 最优雅的写法
//
// const sum = numbers.reduce((accumulator,currentValue)=> accumulator + currentValue);













