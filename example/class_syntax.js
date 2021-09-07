// var SpaceShuttle = function (targetPlanet){
//     this.targetPlanet = targetPlanet;
// }


class SpaceShuttle{
    constructor(targetPlanet)
    {
         this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle("clay");

console.log(zeus.targetPlanet);

function makeClass(){
    class Vegetable{
        constructor(name){
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name);
