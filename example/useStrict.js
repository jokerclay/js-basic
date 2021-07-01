'use strict'; // => Now, the entire script was in the strict Mode


// you can also put strict mode in a individual function by putting 
// 'use strict'; in the first line of a function
function print()
{
   'use strict'; 
    var x = 3.14;
}
print();



// Strict Mode would turn the warning INTO Error
//  IN normal JavaScriprt , when you mistypoing a variable name, it will turn
//  the local variable into the Gloabal  variable, it still can be run 
//  BUT in the strict mode, that is a error;
// EXAMPLE ：

function strictMode(){
    bbb = "I am bbb";
    console.log(bbb);
}

strictMode();
