// // // 1. fibnocci

// // function fibnocci(n) {
// // 	if (n === 0 || n === 1) {
// // 		return n;
// // 	}
// // 	return fibnocci(n - 1) + fibnocci(n - 2);
// // }

// // console.log(fibnocci(6));

// // // 2. factorial

// // function factorial(n) {
// // 	if (n === 0) {
// // 		return 1;
// // 	}
// // 	return n * factorial(n - 1);
// // }

// // console.log(factorial(5));

// // //3. sum of recursion

// function sum(n) {
// 	if (n === 0) {
// 		return 0;
// 	}
// 	return (n % 10) + sum(Math.floor(n / 10));
// }

// console.log(sum(1234));

// // 4. reverse string

// function reverse(str) {
// 	if (str === "") {
// 		return "";
// 	}

// 	return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse("hello"));

// function isPalindrome(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str[0] === str[str.length - 1]) {
// 		return isPalindrome(str.substring(1, str.length - 1));
// 	}

// 	return false;
// }

// console.log(isPalindrome("hlh"));

// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	} else {
// 		return fib(n - 1) + fib(n - 2);
// 	}
// }

// console.log(fib(6));

// function fact(n) {
// 	if (n === 0) {
// 		return 1;
// 	} else {
// 		return n * fact(n - 1);
// 	}
// }

// console.log(fact(6));

// function sum(n) {
// 	if (n === 0) {
// 		return 0;
// 	} else {
// 		return (n % 10) + sum(Math.floor(n / 10));
// 	}
// }

// console.log(sum(12341));

// function reve(str) {
// 	if (str === "") {
// 		return "";
// 	} else {
// 		return reve(str.slice(1)) + str[0];
// 	}
// }

// console.log(reve("hello"));

// // function recursiveBinerySearch(array, target) {
// // 	return search(array, target, 0, array.length - 1);
// // }

// // function search(array, target, leftIndex, rightIndex) {
// // 	if (leftIndex > rightIndex) {
// // 		return -1;
// // 	}
// // 	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
// // 	if (target === array[middleIndex]) {
// // 		return middleIndex;
// // 	}
// // 	if (target < array[middleIndex]) {
// // 		return search(array, target, leftIndex, middleIndex - 1);
// // 	} else {
// // 		return search(array, target, middleIndex + 1, rightIndex);
// // 	}
// // }

// // console.log(recursiveBinerySearch([1, 2, 3, 4, 5, 6, 7], 3));

// function searchRecursion(arr4, t4) {
// 	return searchR(arr4, t4, 0, arr4.length - 1);
// }

// function searchR(arr4, t4, leftI, rightI) {
// 	if (leftI > rightI) {
// 		return -1;
// 	}
// 	let middI = Math.floor((leftI + rightI) / 2);
// 	if (t4 === arr4[middI]) {
// 		return middI;
// 	}
// 	if (t4 < arr4[middI]) {
// 		return searchR(arr4, t4, leftI, middI - 1);
// 	} else {
// 		return searchR(arr4, t4, middI - 1, rightI);
// 	}
// }

// console.log("binery", searchRecursion([1, 2, 3, 4, 5, 7], 4));

// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	return fib(n - 1) + fib(n - 2);
// }

// console.log("fibno", fib(6));

// function facat(n) {
// 	if (n === 0) {
// 		return 1;
// 	}
// 	return n * facat(n - 1);
// }

// console.log("fact", facat(5));

// function sum(n) {
// 	if (n === 0) {
// 		return 0;
// 	}
// 	return (n % 10) + sum(Math.floor(n / 10));
// }

// console.log("sum", sum(1234));

// function reverse(str) {
// 	if (str === "") {
// 		return "";
// 	}
// 	return reverse(str.slice(1)) + str[0];
// }

// console.log("reverse", reverse("hello"));

// function isPalindrome(str) {
// 	if (str.length === 0 || str.length === 1) {
// 		return true;
// 	}
// 	if (str[0] === str[str.length - 1]) {
// 		return isPalindrome(str.substring(1, str.length - 1));
// 	}
// 	return false;
// }

// console.log("pslindrome", isPalindrome("hih"));

// function fib(n) {
// 	if (n < 2) {
// 		return n;
// 	}
// 	return fact(n - 1) + (n - 2);
// }

// console.log(fact(6));

function sumArray(arr, n1) {
	if (n1 <= 0) {
		return 0;
	}

	return arr[n1 - 1] + sumArray(arr, n1 - 1);
}
let arr = [1, 2, 3, 4, 6];
console.log("sum arraay", sumArray(arr, arr.length));

function sumvalue(n) {
	if (n == 0) {
		return 0;
	}

	return (n % 10) + sumvalue(Math.floor(n / 10));
}

console.log("sum value", sumvalue(1234));

function fact(n3) {
	if (n3 === 0) {
		return 1;
	}
	return n3 * fact(n3 - 1);
}

console.log("factorial", fact(6));

function reverce(str) {
	if (str === "") {
		return "";
	}
	return reverce(str.slice(1)) + str[0];
}

console.log("reverse value", reverce("sheheer"));

function isPalindrome(str1) {
	if (str1.length === 1 || str1.length === 0) {
		return true;
	}
	if (str1[0] === str1[str1.length - 1]) {
		return isPalindrome(str1.substring(1, str1.length - 1));
	}
	return false;
}

console.log("ispalindrome", isPalindrome("hllh"));
