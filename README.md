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
  * null： you set it to be something but the thing is nothing
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
───────┬───────────────────────────────────────────────────────────────       │ File: 5.js───────┼───────────────────────────────────────────────────────────────   1   │ var mystr = "字符串1"   2   │   3   │ console.log(mystr[3]);   4   │ // the output will be 1───────┴───────────────────────────────────────────────────────────────// output =>// 1
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
var myArray = ["Quincy",1]console.log(myArray)// output =>[ 'Quincy', 1 ]
```





## 36.Nested Arrays

**数组中嵌套数组**



```js
var myArray = [["clay liu",21],["jane sox"],32];console.log(myArray);// output =>[ [ 'clay liu', 21 ], [ 'jane sox' ], 32 ]
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
~~>:~/test $ bat 12.js───────┬─────────────────────────────────────────────────────       │ File: 12.js───────┼─────────────────────────────────────────────────────   1   │ var myArray = [["john",23],["clay",21]];   2   │ myArray.push(["cc",26]);   3   │   4   │ console.log(myArray);───────┴─────────────────────────────────────────────────────~~>:~/test $ nodejs 12.js[ [ 'john', 23 ], [ 'clay', 21 ], [ 'cc', 26 ] ]
```





## 39.Manpulate Arrays with pop()

 

```js
~~>:~/test $ bat pop.js───────┬─────────────────────────────────────────────────────       │ File: pop.js───────┼─────────────────────────────────────────────────────   1   │ var myArray = [["john",23],["clay",21]];   2   │ myArray.pop();   3   │   4   │ console.log(myArray);───────┴─────────────────────────────────────────────────────~~>:~/test $ nodejs pop.js[ [ 'john', 23 ] ]~~>:~/test $
```



## 40.Manpulate Array with shift()



```js
 ~~>:~/test $ bat shitf.js───────┬─────────────────────────────────────────────────────       │ File: shitf.js───────┼─────────────────────────────────────────────────────   1   │ var myArray = [["john",23],["clay",21]];   2   │ myArray.shift();   3   │   4   │ console.log(myArray);───────┴─────────────────────────────────────────────────────~~>:~/test $ nodejs shitf.js[ [ 'clay', 21 ] ]
```





## 42.Manpulate Array with unshift()



```js
~~>:~/test $ bat unshift.js───────┬─────────────────────────────────────────────────────       │ File: unshift.js───────┼─────────────────────────────────────────────────────   1   │ var myArray = [["john",23],["clay",21]];   2   │ myArray.unshift("Hello world");   3   │   4   │ console.log(myArray);───────┴─────────────────────────────────────────────────────~~>:~/test $ nodejs unshift.js[ 'Hello world', [ 'john', 23 ], [ 'clay', 21 ] ]
```



## 43. Shoping List

```js
~~>:~/test $ bat shopList.js───────┬─────────────────────────────────────────────────────       │ File: shopList.js───────┼─────────────────────────────────────────────────────   1   │ var mylist =[ ["cereal",3],["milk",2],["banana",3],   2   │     ["juice",2],   3   │     ["eggs",4],   4   │ ]   5   │   6   │ console.log(mylist)   7   │ console.log(mylist.length)───────┴─────────────────────────────────────────────────────~~>:~/test $ nodejs shopList.js[ [ 'cereal', 3 ],  [ 'milk', 2 ],  [ 'banana', 3 ],  [ 'juice', 2 ],  [ 'eggs', 4 ] ]5~~>:~/test $
```





## 44. With Reuseable code with function

```js
~~>:~/test $ bat func.js───────┬─────────────────────────────────────────────────────────       │ File: func.js───────┼─────────────────────────────────────────────────────────   1   │ function reuseablefunction ()   2   │ {   3   │     console.log("heyy world ~~")   4   │ }   5   │ reuseablefunction();   6   │ reuseablefunction();   7   │ reuseablefunction();   8   │ reuseablefunction();───────┴─────────────────────────────────────────────────────────~~>:~/test $ nodejs func.jsheyy world ~~heyy world ~~heyy world ~~heyy world ~~
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
~~>:~/test $ bat localVariable.js───────┬─────────────────────────────────────────────────────────       │ File: localVariable.js───────┼─────────────────────────────────────────────────────────   1   │ function myLocalScope()   2   │ {   3   │     var myVar = 5;   4   │     console.log(myVar);   5   │ }   6   │ myLocalScope();   7   │ console.log(myVar);───────┴─────────────────────────────────────────────────────────~~>:~/test $ nodejs localVariable.js5/home/pi/test/localVariable.js:7console.log(myVar);            ^ReferenceError: myVar is not defined
```





## 49.Global vs. Local scope in function

**it is possiable to have both loacal and global variables with the same name **

```js
~~>:~/test $ bat g-l-scope.js───────┬─────────────────────────────────────────────────────────       │ File: g-l-scope.js───────┼─────────────────────────────────────────────────────────   1   │ var outerWear = "T-shirt";   2   │   3   │ function myOutFit()   4   │ {   5   │     var outerWear = "sweater";   6   │   7   │     return outerWear;   8   │ }   9   │  10   │ console.log(myOutFit());  11   │ console.log(outerWear);  12   │───────┴─────────────────────────────────────────────────────────~~>:~/test $ nodejs g-l-scope.jssweaterT-shirt~~>:~/test $
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







## 51. Use Conditional Logic with If statements

```js
~~>:~/test $ bat if.js
───────┬───────────────────────────────────────────────────────────────
       │ File: if.js
───────┼───────────────────────────────────────────────────────────────
   1   │ function ourTrueOrFalse(isItTrue)
   2   │ {
   3   │     if(isItTrue)
   4   │     {
   5   │         return console.log("Yes, it's true");
   6   │
   7   │     }
   8   │
   9   │     return console.log("No, it's false");
  10   │ }
  11   │
  12   │ ourTrueOrFalse(true);
───────┴───────────────────────────────────────────────────────────────
~~>:~/test $ nodejs if.js
Yes, it's true
```





## 52. Comparison with the Equality Operator

```js
~~>:~/test $ bat equal.js───────┬──────────────────────────────────────────────────────────────       │ File: equal.js───────┼──────────────────────────────────────────────────────────────   1   │ function testEqual(val)   2   │ {   3   │     if (val == 12)   4   │     {   5   │         return "Equal";   6   │     }   7   │     return "Not Equal"   8   │ }   9   │  10   │ console.log(testEqual(10));───────┴──────────────────────────────────────────────────────────────~~>:~/test $ nodejs equal.jsNot Equal
```





## 53. Comparison with the Strict Equality Operator

* equality `==`

* strict equal sign `===`

  * difference:

    **the double equals sign attempts to convert both values being compared  to a commmon type **
    **the strict equality operator does not do the type conversion**

    ```
    3 == 3			// => true3 === ‘3’		// => flase
    ```

  ```js
  ~~>:~/test $ bat  strictEuqal.js
  ───────┬────────────────────────────────────────────────────────────
         │ File: strictEuqal.js
  ───────┼────────────────────────────────────────────────────────────
     1   │ function testEqual(val)
     2   │ {
     3   │     if (val === 10)
     4   │     {
     5   │         return "Equal";
     6   │     }
     7   │     return "Not Equal"
     8   │ }
     9   │
    10   │ console.log(testEqual('10'));
  ───────┴────────────────────────────────────────────────────────────
  ~~>:~/test $ nodejs strictEuqal.js q
  Not Equal
  ```



## 54. Comparison with the Inequality Operator



```js
~~>:~/test $ bat InEuqal.js
───────┬──────────────────────────────────────────────────────────────
       │ File: InEuqal.js
───────┼──────────────────────────────────────────────────────────────
   1   │ function testEqual(val)
   2   │ {
   3   │     if (val != 12)
   4   │     {
   5   │         return " Not Equal";
   6   │     }
   7   │     return "Equal"
   8   │ }
   9   │
  10   │ console.log(testEqual(10));
───────┴──────────────────────────────────────────────────────────────
~~>:~/test $ nodejs InEuqal.js
 Not Equal
```





## 55. Comparison with the Strict Inequality Operator

```js
function testStrictNotEqual(val){        if (val !== 17)        {                return "Not equal"        }        return "Equal"}console.log(testStrictNotEqual("17"));
```





```
Not equal
```





## 56. Comparison with the Logical and Operator

```js
───────┬──────────────────────────────────────────────────────────────       │ File: greater.js───────┼──────────────────────────────────────────────────────────────   1   │ function testGreaterThan(val)   2   │ {   3   │     if (val > 100 )   4   │     {   5   │         return "over 100";   6   │     }   7   │     if(val > 10)   8   │     {   9   │         return "over 10";  10   │     }  11   │  12   │     return "10 or under"  13   │ }  14   │  15   │ console.log(testGreaterThan(10))───────┴──────────────────────────────────────────────────────────────~~>:~/test $ nodejs greater.js10 or under
```





## 57 . Comparison with the Greater Than Or Equal to  Operator

```js
~~>:~/test $ bat greaterOrEqual.js───────┬──────────────────────────────────────────────────────────────       │ File: greaterOrEqual.js───────┼──────────────────────────────────────────────────────────────`   1   │ function testGreaterThanOrEqual(val)`   2   │ {   3   │     if (val >= 20 )   4   │     {   5   │         return "20 or over ";   6   │     }   7   │     if(val >=10)   8   │     {   9   │         return "10 or over ";  10   │     }  11   │  12   │     return " Less than 10"  13   │ }  14   │  15   │ console.log(testGreaterThanOrEqual(10))───────┴──────────────────────────────────────────────────────────────~~>:~/test $ nodejs  greaterOrEqual.js10 or over
```





## 58. Comparison with the Less Than Operator

```js
~~>:~/test $ bat lessthan.js
───────┬──────────────────────────────────────────────────────────────
       │ File: lessthan.js
───────┼──────────────────────────────────────────────────────────────
   1   │ function testGreaterThanOrEqual(val)
   2   │ {
   3   │     if (val < 20 )
   4   │     {
   5   │         return "under 20";
   6   │     }
   7   │     if(val < 55)
   8   │     {
   9   │         return "under 55";
  10   │     }
  11   │
  12   │     return "55 or over"
  13   │ }
  14   │
  15   │ console.log(testGreaterThanOrEqual(10))
───────┴──────────────────────────────────────────────────────────────
~~>:~/test $ nodejs lessthan.js
under 20
```



## 59. Comparison with the Less Than Or Equal to  Operator

```js
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



// output =>
// Smaller than Or equal to 12
```





## 60. Comparisons with the Logical And operator

```js
function testLogicalAnd(val){    if(val <= 50 && val >=25)		// both of it must be true     {        return "Yes";    }        return "No";}console.log(testLogicalAnd(30))// output =>// Yes
```







## 61. Comparisons with the Logical Or operator

```js
function testLogicalAnd(val){    if(val > 50 ||  val <25)    {        return "Yes";    }        return "No";}console.log(testLogicalAnd(30))// output =>// No
```





## 62. Else

```js
function testLogicalAnd(val)
{
    var result = "";

    if(val > 50)
    {
        result = "Bigger than 50"
    }
    else
    {
        result = "Less than 50"

    }
    console.log(result);
}

testLogicalAnd(30)

// output =>
// Less than 50
```





## 63. Else if

```js
function testLogicalAnd(val)
{
    var result = "";

    if(val > 10)
    {
        result = "Bigger than 10"
    }
    else if(val < 5)
    {
        result = "Less than 5"
    }
    else
    {
        result = "Between 5 and 10";
    }
    console.log(result);
}

testLogicalAnd(6)


// output =>
// Between 5 and 10
```





## 64. Logical Oreder in If else Statements

```js
function testLogicalAnd(val){    var result = "";    if(val < 10)    {        result = "Less than 10"    }    else if(val < 5)    {        result = "Less than 5"    }    else    {        result = "Greater ot eequal to 10";    }    console.log(result);}testLogicalAnd(3)// output =>// Less than 10
```

**SO the order is matter , when you use else if  you  should thing about the order **

```js
function testLogicalAnd(val){    var result = "";    if(val < 5)    {        result = "Less than 5"    }    else if(val < 10)    {        result = "Less than 10"    }    else    {        result = "Greater ot eequal to 10";    }    console.log(result);}testLogicalAnd(3)// output =>// Less than 5
```



## 65. Chaining If Else Statements

```js
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



// output =>
// Tiny
```





## 66.Golf Code

```js
    var names = ["Hole-in-One","Eagle","Birdie","par","Bogey","Double Bogey","Go Home"];

    function golfScore(strokes,par)
    {
            if(strokes == 1)
            {
                return names[0]
            }
            else if(strokes <= par-2)
            {
                return names[1]
            }
            else if(strokes == par -1)
            {
                return names[2]
            }
            else if(strokes == par)
            {
                return names[3]
            }
            else if(strokes ==par+1)
            {
                return names[4]
            }
            else if(strokes ==par+2)
            {
                return names[5]
            }
            else if(strokes >= par +3 )
            {
                return names[6]
            }
    }

console.log(golfScore(5,4));

```







## 67.Switch statement



```js
function switchState(val){switch(val){    case "1":    console.log( "number 1")    break;    case "2":    console.log( "number 2")    break;    case "3":    console.log( "number 3")    break;    case "4":    console.log( "number 4")    break;        default:        console.log("Not Included")}}switchState("9")// output =>// Not Included
```



## 68. Multiple Identical Options in switch Statements



**Different input Get same out put**

```js
function seuentialSizes(val)
{
    var anwser = "";
    switch(val)
    {
        case 1:
        case 2:
        case 3:
            anwser ="Low"
        break;
        case 4:
        case 5:
        case 6:
            anwser ="Mid"
        break;
        case 7:
        case 8:
        case 9:
            anwser ="High"
        break;
    }
    return anwser

}

console.log(seuentialSizes(9))


// output =>
// High
```







## 69. Return  a Boolen values From Functions



**all the logical operator return a boolen value**

```js
function isLess(a,b)
{
    return a<b;
}

console.log(isLess(12,8))


// output =>
// false
```





## 70. Return rearly pattern from Function

```js
function abTest(a,b)
{
    if(a<0 || b < 0)
    {
        return undefined;

    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}

console.log(abTest(-2,2));


// output =>
// undefined

```







## 70. Counting Cards

```js
var count = 0;function cc(card){    switch(card)    {        case 2:        case 3:        case 4:        case 5:        case 6:            count++;            break;        case 10:        case "J":        case "Q":        case "K":        case "A":            count--;            break;    }    var holdbet = "Hold"    if(count > 0)    {        holdbet = "Bet"    }    return count + " " + holdbet;}cc(2);cc('K');cc(10);cc('K');cc('A');console.log(cc(4));// output =>// -2 Hold
```





## 71. build Objects

**Objects are simliar to array, but object use property to access data instead of index**

the property is before the `:` the value is after the value

**`property : value`**

the value can be number string array ... Any  datatypes ion javaScript

```js
var myDog = {

    "name":"Camper",
    "leg":4,
    "tails":1,
    "friends":["everyingthing !"]
};
console.log(myDog)




// output =>
// { name: 'Camper', leg: 4, tails: 1, friends: [ 'everyingthing !' ] }

```







## 72. Accessing ot Object properties with Dot notation

there two ways to access object property

* `.` Dot notation

  ```js
  var testObj={
      "hat":"ballcap",
      "shirt":"jersey",
      "shoes": "cleats"
  };
  
  var hatValue = testObj.hat;
  var shirtValue = testObj.shoes;
  
  console.log(hatValue);
  console.log(shirtValue);
  
  // output =>
  // ballcap
  // cleats
  
  ```

  

* Bracket Notation

  **you can use Bracket Notation anytime, But it required when the property name have space **

  ```js
  ar myObj = {
      "the name":"clay",
      "my drink":"coke"
  }
  
  var theName = myObj["the name"];
  var theDrink = myObj["my drink"];
  
  console.log(theName);
  console.log(theDrink);
  
  
  
  // output =>
  // clay
  // coke
  
  ```

  



## 73. Accessing Object Properties with Variables

```js
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};


var playerNumber = 16;
var player = testObj[playerNumber];

console.log(player);




// output =>
// Montana
```





## 74. Updating Object Properties

```js
var myDog = {

    "name":"Camper",
    "leg":4,
    "tails":1,
    "friends":["everyingthing !"]
};

console.log(myDog.name)

// update myDog's name property
myDog.name = "Happy Camper ~"
console.log(myDog.name)

// output =>
// Camper
// Happy Camper ~

```





## 75. Add new Properties to an object

```js
var myDog = {

    "name":"Camper",
    "leg":4,
    "tails":1,
    "friends":["everyingthing !"]
};

console.log(myDog)

myDog.color = "black and white"
console.log(myDog)
```

output

```
{ name: 'Camper', leg: 4, tails: 1, friends: [ 'everyingthing !' ] }
{
  name: 'Camper',
  leg: 4,
  tails: 1,
  friends: [ 'everyingthing !' ],
  color: 'black and white'
}
```





## 76. Delete a property from a object

**use` delete ` key word**

```js
var myDog = { 

    "name":"Camper",
    "leg":4,
    "tails":1,
    "friends":["everyingthing !"]
};
console.log(myDog)

delete myDog.frien
```

output

```
{ name: 'Camper', leg: 4, tails: 1, friends: [ 'everyingthing !' ] }
{ name: 'Camper', leg: 4, tails: 1 }

```



## 77. Using Objects for Lookups

use objects to lookup values 

```js
function lookUp(val)
{
    var result = "";
    var lookup =  {
        "alpha":"Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"frank"
    };

    result = lookup[val];

    return result;
}

console.log(lookUp("echo"));




// output =>
// Easy

```







## 78. Testing Objects for Properties

* **check  if a object have a specific property**

  

```js
var myDog = {

    "name":"Camper",
    "leg":4,
    "tails":1,
    "friends":["everyingthing !"]
};

function checkObj(checkProp)
{

if(myDog.hasOwnProperty(checkProp))
{
    return myDog[checkProp]
}
else{
    return "Not Found !"
}
}
console.log(checkObj("head"))




// output =>
// Not Found !

```



```js
var myDog = {

    "name":"Camper",
    "leg":4,
    "tails":1,
    "friends":["everyingthing !"]
};

function checkObj(checkProp)
{

if(myDog.hasOwnProperty(checkProp))
{
    return myDog[checkProp]
}
else{
    return "Not Found !"
}
}
console.log(checkObj("name"))




// output =>
// Camper
```







## 79. Maniplating Complex Objecets

**JavaScript Objects is a way  can store flexible data  **

```js
var myMusic = [
    {
   "artist":"Billy Joel",
    "title":"Piano Man",
    "release_year":1973,
    "formats":[
        "CD",
        "8T",
        "LP"
    ],
    "gold": true
    },

    {

   "artist":"Beau Carnes",
    "title":"Cereal Man",
    "release_year":2003,
    "formats":[
        "Youtube video"
    ],

    }

]
console.log(myMusic)
```

```
output[  {    artist: 'Billy Joel',    title: 'Piano Man',    release_year: 1973,    formats: [ 'CD', '8T', 'LP' ],    gold: true  },  {    artist: 'Beau Carnes',    title: 'Cereal Man',    release_year: 2003,    formats: [ 'Youtube video' ]  }]
```





## 80. Accessing Nested Objects

**访问多层对象的属性**

```js
var myStorage = {
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents )



// output =>
// maps
```





## 82. Access Nested Arrays

**访问多层数组**

```js
var myPlants = [
    {
        type:"flowers",
        list:[
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type:"trees",
        list:[
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);



// output =>
// pine
```





## 83.Record Collection

```js
var collection = {
    "2546":{
        "album":"Slippery When Wet",
        "artist":"Bon Jovi",
        "tracks":[
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },


    "2468":{
        "album":"1999",
        "artist":"Prince",
        "tracks":[
            "1999",
            "Little red Corvette"
        ]
    },


    "1245":{
        "album":"",
        "artist":" Robert Palmer",
        "tracks":[
        ]
    },

    "5493":{
        "album":"ABBA Gold"
    },

};

// 复制集合，不改变原集合
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value)
{
    // 如果属性中的值为空，则删除该集合的属性
    if(value === ""){
        delete collection[id][prop];

    }else if (prop === "tracks"){
        //如果属性为 tracks, tracks 属性中不为空的话，不变，为空，就创建空数组
         collection[id][prop] =collection[id][prop] ||[];
        // 将 参数 value push 到 tracks 中的数组中去
         collection[id][prop].push(value);
    }else{
        // 如果是其他属性的话，直接增加
         collection[id][prop]=value;
    }
    return collection;
}

console.log(collection)
console.log("======================= update tracks ==========================")
console.log(updateRecords(5493, "tracks", "added a tracks in the  Array"));

console.log("\n")
console.log("========================= add prop =============================")
console.log(updateRecords(5493, "ddsdd", "ABBcdsdsA"));


```

output

```js
{
  '1245': { album: '', artist: ' Robert Palmer', tracks: [] },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: [ '1999', 'Little red Corvette' ]
  },
  '2546': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: [ 'Let it Rock', 'You Give Love a Bad Name' ]
  },
  '5493': { album: 'ABBA Gold' }
}
======================= update tracks ==========================
{
  '1245': { album: '', artist: ' Robert Palmer', tracks: [] },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: [ '1999', 'Little red Corvette' ]
  },
  '2546': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: [ 'Let it Rock', 'You Give Love a Bad Name' ]
  },
  '5493': { album: 'ABBA Gold', tracks: [ 'added a tracks in the  Array' ] }
}


========================= add prop =============================
{
  '1245': { album: '', artist: ' Robert Palmer', tracks: [] },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: [ '1999', 'Little red Corvette' ]
  },
  '2546': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: [ 'Let it Rock', 'You Give Love a Bad Name' ]
  },
  '5493': {
    album: 'ABBA Gold',
    tracks: [ 'added a tracks in the  Array' ],
    ddsdd: 'ABBcdsdsA'
  }
}
```







## 84. Interate with While  Loop

**Loop allow you to run the same code multiple times**

* While loop is that while a specified condition is **true** and **stop** noce **it's no longer true**

  ```js
  var myArray = [];
  
  var i = 0;
  
  while (i<5){
      myArray.push(i);
      i++;
  }
  
  console.log(myArray);
  // output => myArray = [0,1,2,3,4]
  ```

  

## 85. Iterate with For loop

```js
var myArray = []

for(var i=0; i<5; i++){
    myArray.push(i)
}

console.log(myArray)
// output => myArray = [0,1,2,3,4]
```





## 86. Iterate odd numbers with a for loop

```js
var myArray = []

for(var i=0; i<5; i+= 2){
    myArray.push(i)
}

console.log(myArray)
// 每次递增 2 ， 不会超过 5
// output => myArray = [0,2,4]

```





## 87 . Count  Backwards with a for Loop

```js
var myArray = []

for(var i=10; i>0; i-= 2){
    myArray.push(i)
}

console.log(myArray)


// output => myArray = [10,8,6,4,2]
```





## 88. Iterate  Through an Array with a for Loop

**通过 for loop 和 length 方法 遍历数组 **

```js
var myArr = [9,10,11,12];
var myTotal = 0;

for (var i = 0 ; i < myArr.length; i++){
    myTotal += myArr[i];
}

console.log(myTotal)
 


// output => 42
```



## 89.Nasting for loops

```js
function multiplyAll(arr){    var product  =1;    for (var i = 0; i < arr.length; i++ )    {        for(var j=0; j<arr[i].length; j++)        {            product *= arr[i][j]        }    }    return product;}var product = multiplyAll([[1,2],[3,4],[5,6,7]]);console.log(product);// output => 5040
```







## 90. Iterate with Do ... while Loops

while loops check the conditions  before  run the code in the loop

do while loops will always run at least once time 

and then it will check the condition

```js
var myArray = [];var i = 10;do{    myArray.push(i);    i++;} while (i < 5)console.log(i,myArray);// output =>  11 [ 10 ]
```





## 91.  random Whole Number

```js
var randomNumberBetter0And19 = Math.floor(Math.random() * 20);function randomWholeNum(){    return Math.floor(Math.random() * 10);}for(var i = 0; i < 5; i++){    console.log(randomWholeNum());}// output => // 5 // 9// 6// 0// 4
```





## 92. Create Random Whole numbers with in a Range

```js
function ourRandomRange(ourMin,ourMax){    return Math.floor(Math.random()*(ourMax - ourMin +1)) + ourMin;}for (var i = 0; i<15 ; i++){    console.log(ourRandomRange(1,9));}
```

```
5
6
3
4
4
6
7
6
2
1
9
9
3
5
3
```





## 93. Use convert To Integer

```js
function converToInteger(str)
{
    return parseInt(str)
}
console.log(converToInteger("10011"));


10011 
```

##  





## 94. Use the parseInt function with a Radix

**Radix refers to the base of the  number  such as  base 2 which is binary, the default is base 10 **

二进制转换为十进制

```js
function convertToInteger(str)
{
    return parseInt(str,2)
}

console.log(convertToInteger("10011"));




19
```





## 95. Use the  Conditional ( Ternary ) operator

* 替换 if else 更简洁

```
condition ? statement-if-true :  statement-if-false
```



```js
function checkEqual(a,b){
    return (a===b ? true :false);
}

console.log(checkEqual());




true
```







## 96. Use Multiple Conditional (Ternary) Operators



```js
function checkSign(num){
    return num>0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(10));




output =>
positive

```





## 97. Differences Between the var and let keywords



**ES6 => we can use `let`**

`let ` not let you declare a variable  twice 

```js
var aaa= "this is var";
var aaa= "this is a seconf var";

let bbb= "this is let";
let bbb= "this is a seconf let";

console.log(aaa);
console.log(bbb);

```



```
let bbb= "this is a seconf let";
    ^

SyntaxError: Identifier 'bbb' has already been declared
```



## 98 Strict Mode 

```js
'use strict'; // => Now, the entire script was in the strict Mode


// you can also put strict mode in a individual function by putting
// 'use strict'; in the first line of a function
function print()
{
   'use strict';
    var x = 3.14;
}
print();



// Strict Mode would turn the warning INTO Error
//  IN normal JavaScriprt , when you mistypoing a variable name, it will turn
//  the local variable into the Gloabal  variable, it still can be run
//  BUT in the strict mode, that is a error;
// EXAMPLE ：

function strictMode(){
    bbb = "I am bbb";
    console.log(bbb);
}

strictMode();

```

```
    bbb = "I am bbb";
        ^

ReferenceError: bbb is not defined
```







##  99 . Compare Scopes of the  `var ` and `let ` kry word

 

**another difference between `var` and `let` is **

**When you declare a  variable with `var` it is declared  globally Or  locally  in a function  **

**`let`   is  the scope of limited to the block statement or expression that it was declared in **

 

```js
function checkScope(){
    "use strict";

    var i = "function scope";
    if (true){
         i  = "block scope";
        console.log("Block scope i is : ", i);
    }
        console.log("function scope i is : ", i);
    return  i;
}



// Block scope i is :  block scope
// function scope i is :  block scope
```



```js
function checkScope(){
    "use strict";

    let i = "function scope";
    if (true){
        let i  = "block scope";
        console.log("Block scope i is : ", i);
    }
        console.log("function scope i is : ", i);
    return  i;
}

checkScope();


// Block scope i is :  block scope
// function scope i is :  function scope
```



# 100. Declare a Read-only Variable with the const Keyword

**const is anther way to declare a variable , It have all the feature `let` have , BUT  it is Read-ONLY **

**you can not ressign a const**

```js
function printManyTimes(str){
    	// 严格模式
        "use strict";
        // var sentence = str + "is cool";
        const sentence = str + "is cool";
        sentence  = str + " is amazing !";

        for (var i =0 ; i< str.length ; i+=2){
                console.log(sentence);
        }

}
```

```
   sentence  = str + " is amazing !";
                  ^

TypeError: Assignment to constant variable.
```



* **you should  mainly use `let` and `const`   in  your code **
* **when you use `const` you want use capital letter as the variable name**







# 101. Mutate an array Declared  with  const

**you can not  reassign a variable declare with `const`  **

**you can mutate an array**

```js
const s = [1,2,3];
function editInplace(){
    "use strict"

    // s = [4,5,6]
    s[0] = 4;
    s[1] = 5;
    s[2] = 6;
    console.log(s)
}
editInplace();
//  const 声明的 数组不能对其直接赋值，但可以根据下标 对其重新赋值
```





# 102. Prevent Object mutation 

a const alone can not protect your data from mutation 

if you  have a object or a array, you can still mutate it even if it's declared with const

thereis something called objec,freeze that will  prevent data mutation.

**object.freeze**

```js
function freezeObj(){
// 严格模式
  "use strict";
    // 数学常量对象
  const MATH_CONSTANTS = {
        PI : 3.1415936
 };

try {
    MATH_CONSTANTS.PI = 99
}
catch (ex){
    console.log(ex)
}
return MATH_CONSTANTS.PI;
};
const PI = freezeObj();
console.log(PI);

// 结果 => 99 , const 声明的常量会被改变
```

**使用 object.freeeze  来保护， const 声明的 对象 不会被改变 **

```js
function freezeObj(){
  "use strict";
  const MATH_CONSTANTS = {
        PI : 3.1415936
 };
// the following line of code  prevent constant MATH_CONSTANTS can not be changed
    Object.freeze(MATH_CONSTANTS);


try {
    MATH_CONSTANTS.PI = 99
}catch (ex){
    console.log(ex)
}
    return MATH_CONSTANTS.PI;
};
const PI = freezeObj();
console.log(PI);





output:

TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
    at Module._compile (internal/modules/cjs/loader.js:999:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1027:10)
    at Module.load (internal/modules/cjs/loader.js:863:32)
    at Function.Module._load (internal/modules/cjs/loader.js:708:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:60:12)
    at internal/main/run_main_module.js:17:47
3.1415936
```







# 103. use Arrow Functions to write concise Anonymous Functions

**this is a anonymous function, there is a variable called 'magic', but there is no name before the 'function' , so , this is a anonymous function**

```js
var magic = function()
{
    return new Date();
}
```

   

**any  anonymous function can convert it to arrow function **

**it make it quicker to write **

```js
var magic =()=>{
    return new Data()
}
```

**if we only  return one value herer we can not write the keyword return and `{}`**

```js
var magic = ()=> new Date();
console.log(magic());

output=>
node arrow_function.js                                                                        1 ⚙
2021-09-05T08:31:10.232Z
```

# 104. write arrow functions with Parameters

**just as a  normal functions that you  can pass arguments to arrow functions **

```js
var myConcat = (arr1,arr2) => {
    return arr1.concat(arr2);
};

console.log(myConcat([1,2],[3,4,5]));


output：
 node arrow_function_with_parameters.js                                                        1 ⨯
[ 1, 2, 3, 4, 5 ]
```





# 105. Write Higher Order Arrow function 

**arrow function workl really well with higher order function such as filter and reduce **

**whenever one function takes another function as argument , that is a good time for an arrow function **

  

```js
const realNumberArray = [4,5.6,-9.8,3.14,42,6,8.34,-2];
const squareList = (arr) =>{
    // filter all the numbers that is not postive interger
    // 使用 filter 函数过滤一个箭头函数表达式， num 是 参数，符合条件是 是个整数并且大于 0, 再使用 map 函数，map 函数的 参数是一个函数，x 值得是 数组中的每一个元素， 对数组中的每一个元素做 元素自身相乘的操作
    const squareIntergers = arr.filter(num => Number.isInteger(num) && num >0).map(x => x*x );
    return squareIntergers;
}
const squareIntergers = squareList(realNumberArray);
console.log(squareIntergers);

output =>
// 未使用 map 函数
 node higher_order_arrow_function.js
[ 4, 42, 6 ]

// 使用了 map 函数
 node higher_order_arrow_function.js
[ 16, 1764, 36 ]
```





**in order to create more flexible functions you can  use default parameters**

**the default parameters kicks in when the argument is not specified or is undefined **

```js
const increment = (function(){

    return function increment(number,value){

        return number  + value;
    };
})();

console.log(increment(5,2));


output=>
 node default_parameter.js                                                                     1 ⨯
7
```

if the arguments doesn's have the ' value '  we can set a default value, it will use the  default value

```js
const increment = (function(){

    return function increment(number,value =1){

        return number  + value;
    };
})();

console.log(increment(5,2));
console.log(increment(5));

output =>
node default_parameter.js
7
6
```







# 106. Use the Rest Operator with Function Patameters

**the reset operator allows you to create a function that takes a variable number of arguments **

reset operator 可以 代替多个参数来使用

**the reset operator is `...` **

 

```js
// 变量 sum 是一个函数，返回一个值，这个值是一个叫 sum 的函数返回的，
// sum 函数 有三个参数 x,y,z
// sum 做这样一件事,声明一个叫 args 的数组含有 xyz 三个元素，将 累加器的值初始化为0
// 将 累加器 a 的值 和 数组 args 中 的每一个元素相加，结果赋给累加器
const sum = ( function(){
    return function sum(x,y,z){
        const args = [x,y,z]
        return args.reduce((a,b)=> a + b,0 )
    };

} )();
console.log(sum(1,2,3));

```

**使用 rest operator 可以 不把 参数 限制在  x, y , z 三个参数，可以是任意多的参数**

**进而实现 任意多个 参数的和**

```js
// 变量 sum 是一个函数，返回一个值，这个值是一个叫 sum 的函数返回的，
// sum 函数 有三个参数 x,y,z
// sum 做这样一件事,声明一个叫 args 的数组含有 xyz 三个元素，将 累加器的值初始化为0
// 将 累加器 a 的值 和 数组 args 中 的每一个元素相加，结果赋给累加器
const sum = ( function(){
//    return function sum(x,y,z){
//        const args = [x,y,z]
    return function sum(...args){
        return args.reduce((a,b)=> a + b,0 )
    };

} )();
console.log(sum(1,2,3,3,4,534,5,53,543,));


output =>
node reset.js
1148
```

 











# 107. reduce

* we have a array of number, we want to calculate the sum of all the number in the array

  ```js
   // 应用场景想 购物车中的 每一件商品价格之和
  
  // 比较传统的做法-----------------------------
  // let sum = 0;
  // for(let i = 0; i<numbers.length;i++)
  // {
  //    sum = sum + numbers[i]
  // }
  // console.log(sum);
  
  // 或者
  // for (let n of numbers)
  //    sum +=n;
  
  
  // 更简洁更优雅的写法-----------------------------
  // 使用 reduce 方法
  
  // reduce 有两个参数，
  // 一个是 callback (回调函数),该回调函数包含两个参数，accumulator(累加器),和 currentValue
  // accumulator 是   ，currentValue 是数组中 依次 的每一个元素
  // 一个是 accumulator 的初始值
  const sum = numbers.reduce((accumulator,currentValue)=>{
      return accumulator + currentValue
  
  },0)
  
  
  // 如果 accumulator 没有被赋值，就会默认是 数组的第一个元素的值
  // 这个例子就会变成
  // a = 1 , c = -1, a = a + c = 0;
  // a = 0 , c = 2 ...
  console.log(sum)
  
  // 最优雅的写法
  //
  // const sum = numbers.reduce((accumulator,currentValue)=> accumulator + currentValue);
  
  ```

  





# 108. use the **Spread Operator** to Evaluate Arrays In-place



**the spread opeartor just like the  rest operator  ** three dots `...`

**but it expands an already existing array Or spreads out an array**

**it takes a array and spreads it out into it's indivdual parts**

```js
const arr1 = [ 'JAN','FEB','MAR','APR','MAY'];
let arr2 = [ '1','2','3','4','5'];
console.log("array 2 is " + arr2);
// let arr2;
(function(){
    arr2 = [...arr1];		// 将数组 arr1 中的内容全部复制到 arr2 中，arr2 中的元素被覆盖，多余的数组元素也会被移除，当使用 分离操作符时，相当于数组的 复制	
    arr1[0] = 'photo';

})();
console.log("array 2 is " + arr2);
// console.log(arr2);

output =>
 node spreadOperator.js
array 2 is 1,2,3,4,5
array 2 is JAN,FEB,MAR,APR,MAY
```





# 109. Use Destructuring Assignment to Assign Variable from Objects

```js
var voxel = { x : 3.36, y : 7.4,  z:6.54 };
// 如果我们想 获取 这个对象的 每一个 元素 并赋给一个元素
// 传统方法
var x = voxel.x; // x =3.36
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// 更加简便的方法
// 创建 a b c , 三个变量，并将 对象 voxel 中的元素 x y z 的值分别赋给他们

const { x : a, y :b , z : c} = voxel;

console.log(a+','+b+ ',' +c+ ',' )

```

output

```
3.36,7.4,6.54,
```



For example

```js
const AVG_TEMPERATURES = {
    today : 77.5,
    tomorrow  : 79,
};

function getTempOfTmrw(avTemperatures){
    'use strict';

//    const tempOfTomorrow = avTemperatures.tomorrow;
    // 可以这样理解：把对象 avTemperatures 中的 tomorrow   元素 赋给一个叫 tempOfTomorrow 的对象
    const {tomorrow  : tempOfTomorrow }= avTemperatures;

    return tempOfTomorrow;

}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
```

output

```
79
```







# 109. Destructuring Assignment with Nested Object

**对象的多层嵌套**

```js
const LOCAL_FORECAST = {
    today : { min : 72, max :83},
    tomorrow : {min : 73.3, max : 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict"
//    const maxOfTomorrow = forecast.tomorrow.max;
  // 可以这样记 ： 对象 forwcast 里面 的 tomorrow 里面的 max 给一个叫 maxOfTomorrow 的 变量
    const {tomorrow : {max : maxOfTomorrow } }= forecast;

    return maxOfTomorrow
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));
```



