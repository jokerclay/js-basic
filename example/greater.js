function testGreaterThan(val)
{
	if (val > 100 )
	{
		return "over 100";
	}
	if(val > 10)
	{
		return "over 10";
	}
	
	return "10 or under"
}

console.log(testGreaterThan(10))
