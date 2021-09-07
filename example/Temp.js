const AVG_TEMPERATURES = {
    today : 77.5,
    tomorrow  : 79,
};

function getTempOfTmrw(avTemperatures){
    'use strict';

//    const tempOfTomorrow = avTemperatures.tomorrow;
    const {tomorrow  : tempOfTomorrow }= avTemperatures;

    return tempOfTomorrow;

}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
