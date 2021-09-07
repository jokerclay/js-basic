// 变量 sum 是一个函数，返回一个值，这个值是一个叫 sum 的函数返回的，
// sum 函数 有三个参数 x,y,z
// sum 做这样一件事,声明一个叫 args 的数组含有 xyz 三个元素，将 累加器的值初始化为0
// 将 累加器 a 的值 和 数组 args 中 的每一个元素相加，结果赋给累加器
const sum = ( function(){
//    return function sum(x,y,z){
//        const args = [x,y,z]
    return function sum(...args){
        return args.reduce((a,b)=> a + b,0 )
    };

} )();
console.log(sum(1,2,3,3,4,534,5,53,543,));
