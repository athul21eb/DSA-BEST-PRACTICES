// 1.sc-O(1) tc-O(n2)
let t = 10;
let arr = [1, 2, 3, 4, 5, 6];

const result = function (t, arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === t) {
				return [arr[i], arr[j]];
			}
		}
	}
	return null;
};
console.log("result", result(t, arr));

//2. sc-O(n) tc-O(n)

let t1 = 10;
let arr1 = [1, 2, 3, 4, 5, 6];

const result1 = function (t1, arr1) {
	let check = new Set();
	for (let i = 0; i < arr1.length; i++) {
		let diff = t1 - arr1[i];
		if (check.has(diff)) {
			return [diff, arr1[i]];
		} else {
			check.add(arr1[i]);
		}
	}
	return null;
};
console.log("result1", result1(t1, arr1));

// 3.tc-O(n),sc-O(1)
// let nums = [0, 1, 0, 3, 12];
// var moveZeroes = function (nums) {
// 	let left = 0;
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] !== 0) {
// 			nums[left] = nums[i];
// 			left++;
// 		}
// 	}
// 	for (let j = left; j < nums.length; j++) {
// 		nums[j] = 0;
// 	}
// };

// moveZeroes(nums);
// console.log(nums);

var resultArray = function (nums) {
	let arr1 = [];
	let arr2 = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[0]) {
			arr1.push(nums[0]);
			arr2.push(nums[1]);
			break;
		}
	}
	for (let j = 2; j < nums.length; j++) {
		arr1[arr1.length - 1] > arr2[arr2.length - 1]
			? arr1.push(nums[j])
			: arr2.push(nums[j]);
	}
	let arr3 = arr1.concat(arr2);
	console.log(arr3);
	return arr3;
};
let nums = [2, 1, 3];
resultArray(nums);
console.log("resultsArray", resultArray(nums));
