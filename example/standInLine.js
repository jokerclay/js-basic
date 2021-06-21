function nextInLine(arr,item)
{
	arr.push(item);
	return arr.shift();
}

var testArr = [1,2,3,4,5]

// 打印之前的数组
console.log("Before: " + JSON.stringify(testArr));

// 添加到第六个元素
console.log(nextInLine(testArr,6));

// 打印添加后的数组
console.log("After：" + JSON.stringify(testArr));
