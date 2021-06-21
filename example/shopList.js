// 用户界面
print("shopList")
print("1\) cereal ")
print("2\) milk ")
print("3\) banana ")
print("4\) juice")
print("eggs")

var userInput =scanf("%S") 

if( userInput == 1)
{
	print("you have choosed " + mylist[0])
}

function print(txt)
{
	console.log(txt)
}







var mylist =[ ["cereal",3],["milk",2],["banana",3],
	["juice",2],
	["eggs",4],
]

console.log(mylist)
console.log(mylist.length)
