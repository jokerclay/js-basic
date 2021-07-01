function testStrictNotEqual(val)
{
	if (val !== 17)
	{
		return "Not equal"
	}

	return "Equal"
}
console.log(testStrictNotEqual("17"));
