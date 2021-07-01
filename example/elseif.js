function testLogicalAnd(val)
{
    var result = "";

    if(val < 5)
    {
        result = "Less than 5" 
    }
    else if(val < 10)
    {
        result = "Less than 10" 
    }
    else
    {
        result = "Greater ot eequal to 10";
    }
    console.log(result);
}

testLogicalAnd(3)
