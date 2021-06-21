function testGreaterThanOrEqual(val)
{
	if (val < 20 )
	{
		return "under 20";
	}
	if(val < 55)
	{
		return "under 55";
	}
	
	return "55 or over"
}

console.log(testGreaterThanOrEqual(10))
