function ourRandomRange(ourMin,ourMax){
    return Math.floor(Math.random()*(ourMax - ourMin +1)) + ourMin;
}
for (var i = 0; i<15 ; i++){
    console.log(ourRandomRange(1,9));
}
