// we are assigning the first element to  a  z and x 
const [z,x] = [1,2,3,4,5,6]
console.log([z,x])
console.log(z,x)

// if we want skip the 3th elemnet and assign the 4th element to a variable
// we can do this
const [m,n, ,fourth_element] = [1,2,3,4,5,6]
console.log(m,n,fourth_element)



// you can use dedturvturing of arrays to  switch the places of variables

let a = 8;
let b = 6;
(()=>{
    "use strict";
    // using destructuring arrays switch the variables of a and b 

    [a,b] = [b,a]


})();

    console.log(a)
    console.log(b)


