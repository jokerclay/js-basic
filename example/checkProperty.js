var myDog = {
    
    "name":"Camper",
    "leg":4,
    "tails":1,
    "friends":["everyingthing !"]
};

function checkObj(checkProp)
{

if(myDog.hasOwnProperty(checkProp))
{
    return myDog[checkProp]
}
else{
    return "Not Found !"
}
}
console.log(checkObj("name"))
