function seuentialSizes(val)
{
    var anwser = "";
    switch(val)
    {
        case 1:
        case 2:
        case 3:
            anwser ="Low"
        break;
        case 4:
        case 5:
        case 6:
            anwser ="Mid"
        break;
        case 7:
        case 8:
        case 9:
            anwser ="Hign"
        break;
    }
    return anwser

}

console.log(seuentialSizes(9))




