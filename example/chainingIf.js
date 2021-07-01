function testLogicalAnd(val)
{
    result = ""
    if(val < 5)
    {
        result = "Tiny" 
    }
    else if(val < 10)
    {
        result = "Small" 
    }
     else if(val < 15)
    {
        result = "Medium" 
    }  
      else if(val < 20)
    {
        result = "Large" 
    } 
     else {
        result = "Huge";
    }
    console.log(result);
}

testLogicalAnd(3);
