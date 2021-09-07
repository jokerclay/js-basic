const stats = {
    max:56.78,
    standard_deviation : 4.43,
    median : 34.54,
    mode : 23.87,
    min :-0.75,
    average : 35.85
};

// const half = (function(){
//     return function half(stats){
//         return (stats.max +stats.min)/ 2.0;
//     };
// })();


const half = (function(){
    return function half({max,min}){
        return (max +min)/ 2.0;
    };
})();
console.log(stats)
console.log(half(stats));
