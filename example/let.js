function checkScope(){
    "use strict";

    let i = "function scope";
    if (true){
        let i  = "block scope";
        console.log("Block scope i is : ", i);
    }
        console.log("function scope i is : ", i);
    return  i;
}

checkScope();
