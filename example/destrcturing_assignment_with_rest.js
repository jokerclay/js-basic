const source = [1,2,3,4,6,5,7,8,9,10]

function removeFirstTwo(list){

    const [ , , ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);

console.log(arr);
console.log(typeof(arr));
console.log(source);
console.log(typeof(source));
