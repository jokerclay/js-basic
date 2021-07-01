function testLessOrEqual(val)
{
    if(val <= 12)
    {
        return "Smaller than Or equal to 12";
    }
    if(val <= 24)
    {
        return "Smaller than Or equal to 24";
    }
    return "More Than 24";
}


console.log(testLessOrEqual(10))
