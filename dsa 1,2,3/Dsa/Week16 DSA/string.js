//1.sc-O(1) tc-O(n)

var strStr = function (haystack, needle) {
	for (let i = 0; i <= haystack.length; i++) {
		if (haystack.substring(i, i + needle.length) === needle) {
			console.log(haystack.substring(i, i + needle.length));
			return i;
		}
	}

	return -1;
};
let haystack = "sadbutsad",
	needle = "sad";
strStr(haystack, needle);

// 2.sc-O(n) tc-O(n)

var convertDateToBinary = function (date) {
	let date1 = date.split("-");
	let date2;
	let date3;

	let arr = [];
	for (let i = 0; i < date1.length; i++) {
		date2 = parseInt(date1[i]);
		date3 = date2.toString(2);
		arr.push(date3);
	}
	let str = arr.join("-");
	return str;
};

let date = "2080-02-29";

convertDateToBinary(date);
console.log(convertDateToBinary(date));

// 3.sc-O(1) tc-O(n)
var scoreOfString = function (s) {
	let sum = 0;
	for (let i = 1; i < s.length; i++) {
		sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
	}
	return sum;
};

let s = "hello";

scoreOfString(s);
console.log(scoreOfString(s));

function voules(str) {
	let str1 = str.split("");
	for (let i = 0; i < str1.length; i++) {
		if (
			str1[i] === "a" ||
			str1[i] === "e" ||
			str1[i] === "i" ||
			str1[i] === "o" ||
			str1[i] === "u"
		) {
			str1.splice(i, 1);
			i--;
		}
	}
	return str1.join("");
}

console.log(voules("aeiouk"));
