function freezeObj(){
  "use strict";
  const MATH_CONSTANTS = {
        PI : 3.1415936
 };
// the following line of code  prevent constant MATH_CONSTANTS can not be changed
    Object.freeze(MATH_CONSTANTS);


try {
    MATH_CONSTANTS.PI = 99
}catch (ex){
    console.log(ex)
}
    return MATH_CONSTANTS.PI;
};
const PI = freezeObj();
console.log(PI);
