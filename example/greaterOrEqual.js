function testGreaterThanOrEqual(val)
{
	if (val >= 20 )
	{
		return "20 or over ";
	}
	if(val >=10)
	{
		return "10 or over ";
	}
	
	return " Less than 10"
}

console.log(testGreaterThanOrEqual(10))
