function printManyTimes(str){
    "use strict";

    var sentence = str + "is cool ";
    sentence  = str  + " is amazoing";

    for (var i = 0; i<str.length ; i+=2){
        console.log(sentence)
    }
    console.log(str.length)
}
printManyTimes("clay")
