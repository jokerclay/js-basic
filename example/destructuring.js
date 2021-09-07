var voxel = { x : 3.36, y : 7.4,  z:6.54 };
// 如果我们想 获取 这个对象的 每一个 元素 并赋给一个元素
// 传统方法
var x = voxel.x; // x =3.36
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// 更加简便的方法
// 创建 a b c , 三个变量，并将 对象 voxel 中的元素 x y z 的值分别赋给他们  

const { x : a, y :b , z : c} = voxel;

console.log(a+','+b+ ',' +c+ ',' ) 

