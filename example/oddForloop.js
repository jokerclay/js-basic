var myArray = []

for(var i=0; i<5; i+= 2){
    myArray.push(i)
}

console.log(myArray)
// 每次递增 2 ， 不会超过 5
// output => myArray = [0,2,4]
