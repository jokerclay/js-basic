#  JavaScript 

## 1.run JavaScript

* in a  browser
* using thired party website like `code pen`
* use `node`  in the commandline

example

```js
console.log("Hello world !")
```



## 2. Comment  your JavaScript Code

comments are lines of code that javascript will intertionally ignore.

**They don't do anything but create note for yourself and others what the code does **

* in-line comment 

  ```js
  var number =5 // in-line comment 
  ```

* multi-line comment

  ```js
  /* this is
  a 
  multi-line 
  comment
  */
  
  number = 120
  ```







## 3. Data Types and Variables

* JavaScript provide 7 data types you can use in javascript 
  * undefined : 已经定义了，但没有被初时化
  * null： you set it to be something but the thing si nothing
  * boolean：true / false
  * string: 字符串
  * symbol：a symbol  is an immutable primitive value that is unique  独特的不变的原始数据
  * number：数字
  * object:  能存储键值对 （key value paires ）



* variable

  a variable allows computer to **store** and  **manipulate data** in a dynamic fastion

  

* declare a variable 

  ```js
  // var can be use throughout your whole programe
  var myName = "clay"
  
  // let will only be used within th scope of where you declared that
  let myName = "clay"
  
  // const is a variable that should never change
  const myName = clay
  ```

  



## 4.Storing Values with the Assignment Operator

使用赋值符号存储值

```js
var a;		// declare a variable
var b = 3;	// assignment a variable

console.log(a)	// 使用console.log 排查 bug

a = 7;

b = a;

console.log(a)

```

example

Initializing a variable to a initial value at the same time it's declared

初始化变量同时声明

```
var a = 9;
```







## 5. uninitialized Variable

已经被声明但未被初始化的 成为 undefined

```js
// Initialized these three variabls
var a = 5;
var b = 10;
var c = "I am a ";

a = a + 1;
b = b + 5;
c = c + "String"

```



## 6. Case sensitivity in Variables

变量大小写敏感



```js
// declarations
var Study;
var properCamelCase;
var TitileCaseOver;

// Assignments
STUDY = 12;							// undefined
PROoperCAmelCAse = "a string";
tITLEcASEOVER = 9000;

驼峰式命名
thisIsAVariableName
```

 





## 7.Adding Numbers

数字相加



```js
var sum  = 10 + 10;
console.log(sum) 		// => 20
```



## 8.Subtract One number from Another 

数字相减



```js
var difference  = 45 - 32;
console.log(difference);	// => 13

```



## 9. Multiply Two numbers



```js
var product = 8 * 10;
console.log(product) 		// => 80
```





## 10. Dividing Numbers



```js
var quotient = 66/33;

```





## 11 . Incrementing Numbers

自增

```js

var Myvar = 87;

Myvar = Myvar +1;
Myvar++；
```



## 12. Decrementing Numbers



```js
	
var Myvar = 10;

Myvar = Myvar -1;
Myvar--；
```





## 13. Decimal Numbers

```js

var  myDecimal = 0.009; 
```





## 14. Multiply Decimal



```js

var prodect = 2.5 * 2
console.log(prodect)
```





## 15. Diving Number



```js
var quotient = 4.4 / 2.0 ;
console.log(quotient);			// => 2.2
```



## 16. Finding a Remainder



```js
var remainder;
remainder = 11 % 3;

```







## 17. Compound Assignment with Augmented Addtion



```js
var a = 3;
var b = 17;
var c = 12;

/*
a = a +12;
b = 9 + b;
c = c + 7;
*/

// the following is the shortcut to do the same thing
a += 12;
b += 9;
c += 7;

```





## 18.  Compound Assignment with Augmented Subtraction



```js
var a = 4;
var b = 47;
var c = 42;

/*
a = a - 4;
b = b -5;
c = c - 1;
*/

// the following is the shortcut to do the same thing
a -= 4;
b -= 5;
c -= 1;

```







## 19.  Compound Assignment with Augmented Multiplication





```js
var a = 4;
var b = 47;
var c = 42;

/*
a = a * 4;
b = b *5;
c = c * 1;
*/

// the following is the shortcut to do the same thing
a *= 4;
b *= 5;
c *= 1;
```









## 20.  Compound Assignment with Augmented Division





```js
var a = 4;
var b = 47;
var c = 42;

/*
a = a / 4;
b = b /5;
c = c / 1;
*/

// the following is the shortcut to do the same thing
a /= 4;
b /= 5;
c /= 1;
```



## 21. Declare String Variables



```js
var myFirstName = "clay"
var myLastName = "liu"
```





## 22. Escaping Literal Quotes in Strings

```js
var mystr = "I am a \"double quoted\" string  inside \"double quotes\"";

console.log(mystr);
// => I am a "double quoted" string  inside "double quotes"

```



## 23. Quoting Strings With Single Quotes



```js
// a string can be sround with double quotes or single quotes

// 字符串 用 双引号括起来 时， 里面的双引号要用转义字符
var mystr1 = "<a href= \"http://clayliu.com\" target= \"_blank\">LINK</a>"

//  字符串 用 单引号括起来 时， 里面的双引号 可以直接使用
var mystr2 = '<a href= "http://clayliu.com" target= "_blank">LINK</a>'

// 	字符串 用 反点 括起来 时， 里面的 单引号 双引号 都可以直接使用
var mystr2 = `'<a href= "http://clayliu.com" target= "_blank">LINK</a>'`

console.log(mystr)
```





## 24. Escape Sequences in Strings



```js
// 转义字符
/******

code  output
\'		'
\"		"
\\		\
\n		newline
\r 		carriage return
\t		tab
\b		backspace
\f		form feed


******/ 
var mystr = "FirstLine\n\t\\SecondLine\nThirdLine"

/******output

FirstLine
	\SecondLine
ThirdLine

******/
```





## 25. Concatenating Strings with Plus Operator



```js

var mystr = "This is the start."+"This is the end";
console.log(mystr);
// =>This is the start.This is the end
```





## 26. Concatenating Strings with Plus Equals Operator



```js
var mystr = "This is the first sentence"
mystr += "This is the second sentence"

console.log(mystr);
// => "This is the first sentenceThis is the second sentence"
```



## 27. Constructing string with  variables



```js
var myName = "clay";
var mystr = "my name is " + myname + " and  I am well ~~"
console.log(mystr)

// => my name is clay and  I am well ~~ 
```





## 28. Appending Varisbles to Strings



```js
var someADjective = "worthwhile";
var mystr = "Learing to code is " ;
mystr += someSDjective;
```





## 29. Find Length of string



```js
var firstNameLength = 0
var firstName = "clay";

console.log(firstNameLength)
firstNameLength = firstName.length;
// 使用了 length 方法
console.log(firstNameLength)


// output
// 		0
//		4
// 
```





## 30.Breacket Notation to find First Character in String 



**JavaScript is 0 based index**

number 0 reference the first character in  the string 

```js
var firstLetterOfLastName = ""

console.log(firstLetterOfLastName )

var lastName = "Lovelace";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName );

// =>
// 
// L
```







## 31. String Immutability

**strings are immutable, it mens that you can not be altered once created**

it not means that it can not be changed, it means that the indiviual character can not be changed 

```js
var mystr = "clay liu";
console.log(mystr);

mystr[6] = "L"
console.log(mystr);

var mystr = "clay Liu";
console.log(mystr);


// =>
// clay liu
// clay liu
// clay Liu
```









## 32.Bracket Notation to Find Nth character in String

```js
───────┬───────────────────────────────────────────────────────────────
       │ File: 5.js
───────┼───────────────────────────────────────────────────────────────
   1   │ var mystr = "字符串1"
   2   │
   3   │ console.log(mystr[3]);
   4   │ // the output will be 1
───────┴───────────────────────────────────────────────────────────────


// output =>
// 1
```



## 33.Brackt Notation to find Lat Cahracter in String

```js
~~>:~/test $ bat 5.js
───────┬───────────────────────────────────────────────────────────────
       │ File: 5.js
───────┼───────────────────────────────────────────────────────────────
   1   │ // 查找某个字母
   2   │ var mystr = "字符串1"
   3   │ console.log(mystr[1]);
   4   │ // the output will be 符
   5   │
   6   │
   7   │ // 如何查找最后一个字符 ??
   8   │ var lastStr = mystr.length
   9   │ console.log(lastStr)    // => number 4
  10   │
  11   │ console.log(mystr);
  12   │ console.log(mystr[mystr.length-1]);
  13   │ console.log(mystr[lastStr]);
  14   │
  15   │
───────┴───────────────────────────────────────────────────────────────
~~>:~/test $ nodejs 5.js
符
4
字符串1
1
undefined
// 这里之所以出现 undefine 的原因是: mystr[lastStr] 是 mystr[4]
// mystr[4] 是字符串的第五个字符，而该字符串只有四个字符，没有第五个字符
```





## 34. Word Blanks

```js
───────┬───────────────────────────────────────────────────────────────
       │ File: 6.js
───────┼───────────────────────────────────────────────────────────────
   1   │ function wordBlank(myNoun,myAdjective,myVerb,myAdverb)
   2   │ {
   3   │     var result = ""
   4   │     console.log(result);
   5   │
   6   │     result = "The" + myNoun + "" + myAdjective + "" +myVerb + "" +myAdverb + " to the store .
       │ "
   7   │     return result
   8   │
   9   │ }
  10   │
  11   │ console.log(wordBlank("dog","bog","ran","quickly"));
  12   │ console.log(wordBlank("bike","solw","flew","solwly"));
───────┴───────────────────────────────────────────────────────────────


// output =>


The dog bog ran quickly to the store .

The bike solw flew solwly to the store .

```







## 35. Store Multiple Values with Arrays

```js
var myArray = ["Quincy",1]

console.log(myArray)

// output =>
[ 'Quincy', 1 ]
```





## 36.Nested Arrays

**数组中嵌套数组**



```js
var myArray = [["clay liu",21],["jane sox"],32];

console.log(myArray);

// output =>
[ [ 'clay liu', 21 ], [ 'jane sox' ], 32 ]

```







## 35. Access Array Data with Indexes

```js
───────┬──────────────────────────────────────────
       │ File: 9.js
───────┼──────────────────────────────────────────
   1   │ var myArray = [50,60,70];
   2   │
   3   │ var myData = myArray[0];
   4   │
   5   │ console.log(myData);
───────┴──────────────────────────────────────────

// output => 
50
```





## 36.Modify Array Data with Indexes

```js
~~>:~/test $ bat 10.js
───────┬─────────────────────────────────────────────────────
       │ File: 10.js
───────┼─────────────────────────────────────────────────────
   1   │ var myArray = [50,60,70];
   2   │
   3   │ myArray[1] = 80;
   4   │
   5   │ console.log(myArray);
───────┴─────────────────────────────────────────────────────
~~>:~/test $ nodejs 10.js
[ 50, 80, 70 ]
```





## 37. Access Multi-Dimensional Arrrays with Indexes

```js
~~>:~/test $ bat 11.js
───────┬─────────────────────────────────────────────────────
       │ File: 11.js
───────┼─────────────────────────────────────────────────────
   1   │ // How to get 8 ??
   2   │ var myArray = [[1,2,3,],[4,5,6,],[7,8,9],[[10,11,12]
       │ ,13,14]]
   3   │
   4   │ var myData = myArray[2][1];
   5   │
   6   │ console.log(myData);
───────┴─────────────────────────────────────────────────────
~~>:~/test $ nodejs 11.js
8
~~>:~/test $
```





## 38. Manpulate Arrays with push()

```js
~~>:~/test $ bat 12.js
───────┬─────────────────────────────────────────────────────
       │ File: 12.js
───────┼─────────────────────────────────────────────────────
   1   │ var myArray = [["john",23],["clay",21]];
   2   │ myArray.push(["cc",26]);
   3   │
   4   │ console.log(myArray);
───────┴─────────────────────────────────────────────────────
~~>:~/test $ nodejs 12.js
[ [ 'john', 23 ], [ 'clay', 21 ], [ 'cc', 26 ] ]
```





## 39.Manpulate Arrays with pop()

 

```js
~~>:~/test $ bat pop.js
───────┬─────────────────────────────────────────────────────
       │ File: pop.js
───────┼─────────────────────────────────────────────────────
   1   │ var myArray = [["john",23],["clay",21]];
   2   │ myArray.pop();
   3   │
   4   │ console.log(myArray);
───────┴─────────────────────────────────────────────────────
~~>:~/test $ nodejs pop.js
[ [ 'john', 23 ] ]
~~>:~/test $
```



## 40.Manpulate Array with shift()



```js
 ~~>:~/test $ bat shitf.js
───────┬─────────────────────────────────────────────────────
       │ File: shitf.js
───────┼─────────────────────────────────────────────────────
   1   │ var myArray = [["john",23],["clay",21]];
   2   │ myArray.shift();
   3   │
   4   │ console.log(myArray);
───────┴─────────────────────────────────────────────────────
~~>:~/test $ nodejs shitf.js
[ [ 'clay', 21 ] ]
```





## 42.Manpulate Array with unshift()



```js
~~>:~/test $ bat unshift.js
───────┬─────────────────────────────────────────────────────
       │ File: unshift.js
───────┼─────────────────────────────────────────────────────
   1   │ var myArray = [["john",23],["clay",21]];
   2   │ myArray.unshift("Hello world");
   3   │
   4   │ console.log(myArray);
───────┴─────────────────────────────────────────────────────
~~>:~/test $ nodejs unshift.js
[ 'Hello world', [ 'john', 23 ], [ 'clay', 21 ] ]
```



## 43. Shoping List

```js
~~>:~/test $ bat shopList.js
───────┬─────────────────────────────────────────────────────
       │ File: shopList.js
───────┼─────────────────────────────────────────────────────
   1   │ var mylist =[ ["cereal",3],["milk",2],["banana",3],
   2   │     ["juice",2],
   3   │     ["eggs",4],
   4   │ ]
   5   │
   6   │ console.log(mylist)
   7   │ console.log(mylist.length)
───────┴─────────────────────────────────────────────────────
~~>:~/test $ nodejs shopList.js
[ [ 'cereal', 3 ],
  [ 'milk', 2 ],
  [ 'banana', 3 ],
  [ 'juice', 2 ],
  [ 'eggs', 4 ] ]
5
~~>:~/test $
```





## 44. With Reuseable code with function

```js
~~>:~/test $ bat func.js
───────┬─────────────────────────────────────────────────────────
       │ File: func.js
───────┼─────────────────────────────────────────────────────────
   1   │ function reuseablefunction ()
   2   │ {
   3   │     console.log("heyy world ~~")
   4   │ }
   5   │ reuseablefunction();
   6   │ reuseablefunction();
   7   │ reuseablefunction();
   8   │ reuseablefunction();
───────┴─────────────────────────────────────────────────────────
~~>:~/test $ nodejs func.js
heyy world ~~
heyy world ~~
heyy world ~~
heyy world ~~
```







## 45.Passing values to Function with Arguments

**when the fucnrion is called, we need to pass the arguments to the function **

```js
~~>:~/test $ bat args.js
───────┬─────────────────────────────────────────────────────────
       │ File: args.js
───────┼─────────────────────────────────────────────────────────
   1   │ function functionWithArgs(a,b)
   2   │ {
   3   │     console.log(a+b);
   4   │ }
   5   │ functionWithArgs(6,9);
───────┴─────────────────────────────────────────────────────────
~~>:~/test $ nodejs args.js
15
~~>:~/test $
```





## 46. Global Scope and functions 

**Scope refers to the visibility of variables**

Variables which are defined outside of a function block have global scope .

Global scope means they can be seen everywhere in your JavaScript code.



```js
───────┬─────────────────────────────────────────────────────────
       │ File: globalScope.js
───────┼─────────────────────────────────────────────────────────
   1   │ var myGlobal = 10;
   2   │ function func1()
   3   │ {
   4   │     oopsGlobal = 5;		// 在一个 function中 变量前未加 var, 会自动变为全局变量
   5   │ }
   6   │
   7   │ function func2()
   8   │ {
   9   │     var output = "";
  10   │     if(typeof myGlobal != "undefined")
  11   │     {
  12   │         output += "myGlobal: + " + myGlobal;
  13   │     }
  14   │     var output = "";
  15   │     if(typeof oopsGlobal != "undefined")
  16   │     {
  17   │         output += "oopsGlobal:  " + oopsGlobal;
  18   │     }
  19   │
  20   │     console.log(output);
  21   │ }
  22   │
  23   │ func1();
  24   │ func2();
───────┴─────────────────────────────────────────────────────────


~~>:~/test $ nodejs  globalScope.js
oopsGlobal:  5


```





## 47. Local Scope and functions

**varoables which are declared within a function as well as the function parameters have local scope.**

**That means they're only visible from within the function**

```js
~~>:~/test $ bat localVariable.js
───────┬─────────────────────────────────────────────────────────
       │ File: localVariable.js
───────┼─────────────────────────────────────────────────────────
   1   │ function myLocalScope()
   2   │ {
   3   │     var myVar = 5;
   4   │     console.log(myVar);
   5   │ }
   6   │ myLocalScope();
   7   │ console.log(myVar);
───────┴─────────────────────────────────────────────────────────
~~>:~/test $ nodejs localVariable.js
5
/home/pi/test/localVariable.js:7
console.log(myVar);
            ^

ReferenceError: myVar is not defined
```





## 49.Global vs. Local scope in function

**it is possiable to have both loacal and global variables with the same name **

```js
~~>:~/test $ bat g-l-scope.js
───────┬─────────────────────────────────────────────────────────
       │ File: g-l-scope.js
───────┼─────────────────────────────────────────────────────────
   1   │ var outerWear = "T-shirt";
   2   │
   3   │ function myOutFit()
   4   │ {
   5   │     var outerWear = "sweater";
   6   │
   7   │     return outerWear;
   8   │ }
   9   │
  10   │ console.log(myOutFit());
  11   │ console.log(outerWear);
  12   │
───────┴─────────────────────────────────────────────────────────
~~>:~/test $ nodejs g-l-scope.js
sweater
T-shirt
~~>:~/test $
```







## 50.Return a  value from a fucntion with return 



```js
~~>:~/test $ bat  return.js
───────┬─────────────────────────────────────────────────────────
       │ File: return.js
───────┼─────────────────────────────────────────────────────────
   1   │ function minusSeven(num)
   2   │ {
   3   │     return num-7;
   4   │ }
   5   │ console.log(minusSeven(10))
───────┴─────────────────────────────────────────────────────────
~~>:~/test $ nodejs return.js
3
```





## 51. Undertstand Undefined Value return from a function



**If you don not specify a return value the return value is undefined **

```
───────┬─────────────────────────────────────────────────────────
       │ File: returnUdefined.js
───────┼─────────────────────────────────────────────────────────
   1   │ var sum = 0;
   2   │ function addTree()
   3   │ {
   4   │     sum = sum + 3;
   5   │     console.log(sum);
   6   │ }
   7   │
   8   │ function addFive()
   9   │ {
  10   │     sum += 5;
  11   │
  12   │     console.log(sum);
  13   │ }
  14   │
  15   │
  16   │
  17   │ // addTree();
  18   │ // addFive();
  19   │ console.log(addFive())
───────┴─────────────────────────────────────────────────────────
~~>:~/test $ nodejs returnUdefined.js
5
undefined
```









## 52. Assignment with a Returned Value



```js
~~>:~/test $ bat returned.js
───────┬─────────────────────────────────────────────────────────
       │ File: returned.js
───────┼─────────────────────────────────────────────────────────
   1   │ var changed = 0;
   2   │
   3   │ function change(num)
   4   │ {
   5   │     return(num + 5) / 3;
   6   │ }
   7   │
   8   │ changed = change(10);
   9   │
  10   │ console.log(changed)
───────┴─────────────────────────────────────────────────────────
~~>:~/test $ nodejs returned.js
5
```





## 53. Stand in Line

In computer science a cue is a abstract data structure where items are kept in order

New items can be added to the back of the  cue and  old items are taken off from the front of the cue 

```js
~~>:~/test $ bat standInLine.js
───────┬───────────────────────────────────────────────────────────────        │ File: standInLine.js
───────┼───────────────────────────────────────────────────────────────    1   │ function nextInLine(arr,item)
   2   │ {
   3   │     arr.push(item);
   4   │     return arr.shift();
   5   │ }
   6   │
   7   │ var testArr = [1,2,3,4,5]
   8   │
   9   │ // 打印之前的数组
  10   │ console.log("Before: " + JSON.stringify(testArr));
  11   │
  12   │ // 添加到第六个元素
  13   │ console.log(nextInLine(testArr,6));
  14   │
  15   │ // 打印添加后的数组
  16   │ console.log("After：" + JSON.stringify(testArr));
───────┴───────────────────────────────────────────────────────────────~~>:~/test $ nodejs standInLine.js
Before: [1,2,3,4,5]
1
After：[2,3,4,5,6]
```







## 54. Boolen Values

**Boolen are another datatype in JavaScript , There only two value `true` or `false`**



```js
───────┬───────────────────────────────────────────────────────────────        │ File: boolen.js
───────┼───────────────────────────────────────────────────────────────    1   │ function welcomeToBlooens()
   2   │ {
   3   │     return true;
   4   │ }
───────┴───────────────────────────────────────────────────────────────
```





## 55. Use conditional Logic with If Statements

