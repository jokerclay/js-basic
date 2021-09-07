const result = {
    success : [ "max-length", "no-amd", "prefer-arrow-functions"],
    failure : [ "no-var", "var-on-top", "linebreak"],
    skipped : [ "id-blacklist", "no-dup-key"],
};

function makeList(arr){
    // 将变量 resultDisplayArry 初始化为空数组
    const resultDisplayArry = [];

    for(let i = 0; i<arr.length; i++)
    {
        // 将 对象 result 中的每一个元素分别以 以下格式 push 到 空数组中
        resultDisplayArry.push(`<li class = "text-warning" ${arr[i]}> </li>`) } 
        return resultDisplayArry;
    }




/** makeList(result.failure) should return
 * [ `<li class = "text-warning"> no-var </li> `
 *  `<li class = "text-warning"> no-on-top </li> `
 *  `<li class = "text-warning"> linebreak </li> `]
 **/ 

const resultDisplayArry = makeList(result.failure);

console.log(resultDisplayArry);
