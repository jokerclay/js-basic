const arr1 = [ 'JAN','FEB','MAR','APR','MAY'];
let arr2 = [ '1','2','3','4','5','6','7','8'];
console.log("array 2 is " + arr2);
// let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'photo';

})();
console.log("array 2 is " + arr2);
// console.log(arr2);
