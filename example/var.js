function checkScope(){
    "use strict";

    var i = "function scope";
    if (true){
         i  = "block scope";
        console.log("Block scope i is : ", i);
    }
        console.log("function scope i is : ", i);
    return  i;
}

checkScope();
