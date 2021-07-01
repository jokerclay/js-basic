function testLogicalAnd(val)
{
    var result = "";

    if(val > 10)
    {
        result = "Bigger than 10" 
    }
    else if(val < 5)
    {
        result = "Less than 5" 
    }
    else
    {
        result = "Between 5 and 10";
    }
    console.log(result);
}

testLogicalAnd(6)
