/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if (n === 0){
		return 1;
	}
	if(n < 0){
		return null;
	}
	return (n*factorial(n-1));
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if(array.length === 0){
		return 0;
	}
	return (array[0] + sum(array.slice(1)))

};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if(array.length === 0){
		return 0;
	}
	var sum = 0;

    array.forEach(function(elem){
		if(Array.isArray(elem)){
			sum += arraySum(elem)
		} else {
			sum += elem;
		}
	})
    return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
	if (n === 0){
		return true;
	} else if (n === 1 || n === -1){
		return false;
	}

	return (isEven(Math.abs(n)-2))
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if (n === 0){
		return 0;
	}
	if (n>0){	
		return (n-1 + sumBelow(n-1))
	} else if (n<0){
		return (n+1 + sumBelow(n+1))
	}
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

var range = function(x, y) {
	if (x === y || y-x === 1){
		return [];
	}
	if (y-x === 2){
		return [x+1];
	} 
	if (y-x === -2){
		return [x-1]
	}


	if (x<y){
		var list = range(x,y-1)
		list.push(y-1)
		return list;
	} else if (x>y){
		var list = range(x,y+1)
		list.push(y+1)
		return list;
	}
	
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

	if (exp === 0){
		return 1;
	} 
	if (exp >=0){
		return base * exponent(base, exp-1)
	} else if (exp < 0){
		return exponent(base, exp+1)/base;
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if (n === 2 || n === 1){
		return true;
	} else if (n < 2){
		return false;
	}

	return powerOfTwo(n/2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	if (string.length === 0){
		return '';
	} else {
		
		return reverse(string.substring(1))+string[0]
	}	
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase();
	if (string.length === 1 || string.length === 0){
		return true;
	} else if (string[0] !== string[string.length-1]){
		return false; 
	} else {

		return palindrome(string.slice(1, -1));
	}
	
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if (y === 0){
		return NaN;
	} 
	if (x < 0){
		return -modulo(-x,y);
	} 
	if (y<0){
		return modulo(x,-y);
	}
	if (x<y){
		return x
	}

	return modulo(x-y, y)
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
 	if (y === 1){
		return x;
  	} else if (x === 0 || y === 0){
    	return 0;
  	} else if (y > 0 ) {
    	return multiply(x,y-1)+x
  	} else if ((x<0 && y<0) || y<0){
   		return multiply(x,y+1)-x
  	} else if (x<0){
    	return multiply(x,y+1)+x
  		
	};
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
	var count = 0;
  	if (x === 0 && y === 0){
    	return NaN
  	}
  	if (x <= 0 || x < y){
    	return count; 
  	}

  count +=1 

  return divide(x-y,y)+count
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if (y === 0){
		return x;
	}
	if (x<0 || y<0){
		return null
	}

	return gcd(y,x%y)
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

	if (str1.length === 0 && str2.length === 0){
		return true;
	}

	if (str1.length === 1 && str2.length ===1){
		if (str1[0] === str2[0]){
			return true
		}
	}

	if (str1[0] === str2[0]){
		return compareStr(str1.slice(1), str2.slice(1));
	}

	if (str1[0] !== str2[0]){
		return false;
	}
	
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	var newarr = [];
	if (str.length===1){
		return [str[0]]
	} else{
		return newarr.concat(createArray(str.slice(0,str.length-1)),str[str.length-1])
	}
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	var newarr = []
	
	if (!array.length){
		return array;
	} else {
		return newarr.concat(reverseArr(array.slice(1)),array[0])
	}
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	//var newarr = [];
	if (length === 1){
		return [value];
	} else {
		return buildList(value,length-1).concat([value]);
	}
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	var newarr = [];

	if (n === 0){
		return newarr;
	}

	if (n%3 === 0 && n%5 === 0){
		newarr = ['FizzBuzz']
	} else if (n%3 === 0){
		newarr = ['Fizz']
	} else if (n%5 === 0){
		newarr = ['Buzz']
	} else {
		newarr = [''+n]
	}

	return fizzBuzz(n-1).concat(newarr)

};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
	var newarr = 0
	if (array.length === 0){
		return 0
	}

	if(value === array[0]){
		newarr = 1;
	}

	return countOccurrence(array.slice(1),value) + newarr
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	if (array.length === 0){
		return [];
	}
	return [callback(array[0])].concat(rMap(array.slice(1),callback))
};
console.log(rMap([1,2,3], function(times){
	return times * 2
}))

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
	var count = 0;
	for (var checkkey in obj){
		if (checkkey === key){
			count += 1;
		}
		if (typeof obj[checkkey] === 'object'){
			count += countKeysInObj(obj[checkkey],key)
		}
	}
  return count
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;
	for (var key in obj){
		if (obj[key] === value){
			count +=1;
		}
		if (typeof obj[key] === 'object'){
			count += countValuesInObj(obj[key],value)
		}
	}
	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (var key in obj){
		if (key === oldKey){
			obj[newKey] = obj[key];
      delete obj[key]
		}
		if (typeof obj[key] === 'object'){
			replaceKeysInObj(obj[key],oldKey,newKey)
		}
	}
	return obj;

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if (n <= 0) {
		return null;
	}

	if (n === 1){
		return [0,1];
	} else{
		var currarr = fibonacci(n-1)
		currarr.push(currarr[currarr.length-1] + currarr[currarr.length-2])
		return currarr;
	}
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n<0){
		return null;
	}
	if (n === 1){
		return 1
	}
	return nthFibo(n-1)+nthFibo(n-2)

};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	//var newarr = [];
	if (array.length===1){
		return [array[0].toUpperCase()]
	} else {
		var newarr = array[array.length-1].toUpperCase()
	}
	return capitalizeWords(array.slice(0,array.length-1)).concat([newarr])
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
	if (array.length === 1){
		return [array[0][0].toUpperCase()+array[0].slice(1)]
	} else {
		var newarr = array[array.length-1][0].toUpperCase() + array[array.length-1].slice(1);
	}
	return capitalizeFirst(array.slice(0,array.length-1)).concat([newarr])
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var sum =0
	for (var key in obj){
		if (typeof obj[key] === 'number' && obj[key]%2 === 0){
			sum += obj[key]
		}
		if (typeof obj[key] === 'object'){
			sum += nestedEvenSum(obj[key])
		}
	}
	return sum
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
	var newarr=[];
	for (var i =0; i<array.length; i++){
		if (Array.isArray(array[i])){
			newarr = newarr.concat(flatten(array[i]))
		} else {
			newarr.push(array[i])
		
		}
	}
	return newarr;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj={}) {
	if (str.length === 0){
		return obj
	}
	if (str[0] in obj){
		obj[str[0]] = obj[str[0]]+1;
	} else {
		obj[str[0]] = 1;
	}
	return letterTally(str.slice(1),obj)
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
	if (list.length){
		if (list[0]===list[1]){
			return [].concat([],compress(list.slice(1)))
		} else {
			return [].concat(list[0],compress(list.slice(1)))
		}
	} else {
		return [];
	}

};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
	array[0].push(aug);

	if (array.length === 1){
		return [array[0]].concat([])
	} else {
		return [array[0]].concat(augmentElements(array.slice(1),aug))
	}

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
	if(array.length){
		if(array[0] === 0 && array[1] === 0){
			return [].concat(minimizeZeroes(array.slice(1)))
		} else if(array[0] === 0 && array[1] !== 0){
			return [].concat(array[0],minimizeZeroes(array.slice(1)))
		} else {
			return [].concat(array[0],minimizeZeroes(array.slice(1)))
		}
	} else {
		return []
	}
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
	if(array.length === 0){
		return []
	} 
	if (array[0]<0) {
		array[0] = -array[0];
	}
	if (array[1] > 0){
		array[1] = -array[1];
	}

	return [array[0],array[1]].concat(alternateSign(array.slice(2)))
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
	if (str.length === 0){
		return ''
	} else if (str[0] == '1'){
    	var newarr = 'one'
  	} else if (str[0] == '2'){
    	var newarr = 'two'
  	} else if (str[0] == '3'){
    	var newarr = 'three'
  	} else if (str[0] == '4'){
    	var newarr = 'four'
  	} else if (str[0] == '5'){
		var newarr = 'five'
	} else if (str[0] == '6'){
		var newarr = 'six'
	} else if (str[0] == '7'){
    	var newarr = 'seven'
  	} else if (str[0] == '8'){
    	var newarr = 'eight'
  	} else if (str[0] == '9'){
    	var newarr = 'nine'
 	} else {
  		var newarr = str[0]
  	}
	

	return [].concat(newarr,numToText(str.slice(1))).join('')
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
	var count = 0;
	if (!node){
		node = document.body;
	}
	
	if(node.nodeName == tag.toUpperCase()){
		count +=1
	}

	node = node.firstChild;
	while (node){
		count = count + tagCount(tag,node)
		node = node.nextSibling
	}

	
	return count;

};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
	if (min > max || target < array[0] || target > array[array.length-1] ){
		return null
	}

  if (min === 0 && max === 0){
    return 0;
  }

	min = min || 0;
	max = max || array.length-1;	
	

	var midd = Math.floor(min + (max-min) / 2)

	if (target === array[midd]){
		return midd;
	} else if (target < array[midd]){
		return binarySearch(array,target,min, midd - 1);
	} else if (target > array[midd]){
		return binarySearch(array,target,midd + 1,max);
	}

};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
	
	if (array.length<2){
		return array
	}

	var midd = Math.floor(array.length/2)

	//split up arry in 2 halfs reursively
	var arrleft = mergeSort(array.slice(0,midd))
	var arrright = mergeSort(array.slice(midd))

	var result = []

	var indexleft = 0;
	var indexright = 0;

	while (indexleft<arrleft.length && indexright<arrright.length){
		var elemleft = arrleft[indexleft];
		var elemright = arrright[indexright];
		if (elemleft<=elemright){
			result.push(elemleft)
			indexleft +=1;
		} else {
			result.push(elemright)
			indexright +=1;
		}
	}

	while (indexleft < arrleft.length){
		result.push(arrleft[indexleft]);
		indexleft +=1
	}
	while (indexright < arrright.length){
		result.push(arrright[indexright]);
		indexright +=1
	}
	return result;

};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
	var output
	
	if (Array.isArray(input)){
		output = [];
	} else {
		output = {};
	}

	for (key in input){
		var val = input[key]
		if (typeof val === 'object'){
			output[key] = clone(val);
		} else {
			output[key] = val;
		}
	}

return output;


};
