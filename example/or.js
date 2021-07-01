function testLogicalAnd(val)
{
    if(val > 50 ||  val <25)
    {
        return "Yes";
    }
        return "No";
}

console.log(testLogicalAnd(30))
