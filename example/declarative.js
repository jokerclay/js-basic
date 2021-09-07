const biycle = {
    gear : 2,
    // setGear : function(newGear){
    setGear(newGear){
        "use strict";
        this.gear = newGear;
    }
};

biycle.setGear(9);
console.log(biycle.gear);
