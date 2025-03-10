// 1. merge sort ascenting order
function mergeSortA(arr) {
	if (arr.length < 2) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return mergeA(mergeSortA(left), mergeSortA(right));
}

function mergeA(left, right) {
	let sortArray = [];
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			sortArray.push(left.shift());
		} else {
			sortArray.push(right.shift());
		}
	}
	return [...sortArray, ...left, ...right];
}

let arr = [-2, -3, 1, 4, 5, 3];
console.log(mergeSortA(arr));

//2. merge sort descenting order

function mergeSortD(arr1) {
	if (arr1.length < 2) {
		return arr1;
	}
	let mid = Math.floor(arr1.length / 2);
	let left = arr1.slice(0, mid);
	let right = arr1.slice(mid);
	return mergeD(mergeSortD(left), mergeSortD(right));
}

function mergeD(left, right) {
	let sortArray = [];
	while (left.length && right.length) {
		if (left[0] >= right[0]) {
			sortArray.push(left.shift());
		} else {
			sortArray.push(right.shift());
		}
	}
	return [...sortArray, ...left, ...right];
}

let arr1 = [1, 2, 6, 5, 4, 3];
console.log(mergeSortD(arr1));

//3.

function sort(arr2) {
	if (arr2.length < 2) {
		return arr2;
	}
	let mid = Math.floor(arr2.length / 2);
	let left = arr2.slice(0, mid);
	let right = arr2.slice(mid);
	return merge(sort(left), sort(right));
}

function merge(left, right) {
	let sortArray = [];
	while (left.length && right.length) {
		if (left[0] > right[0]) {
			sortArray.push(left.shift());
		} else {
			sortArray.push(right.shift());
		}
	}
	return [...sortArray, ...left, ...right];
}

let arr2 = [4, 5, 6, 6, 1, 3, 5, 2];
console.log("sort", sort(arr2));

//4.

function mergeSort3(arr3) {
	if (arr3.length < 2) {
		return arr3;
	}
	let mid = Math.floor(arr3.length / 2);
	let left = arr3.slice(0, mid);
	let right = arr3.slice(mid);
	return merge3(mergeSort3(left), mergeSort3(right));
}

function merge3(left, right) {
	let sort = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sort.push(left.shift());
		} else {
			sort.push(right.shift());
		}
	}
	return [...sort, ...left, ...right];
}

let arr3 = [4, 5, 6, -3, -2, -4];
console.log("arr3 is ", mergeSort3(arr3));

//4.
function mergeSort4(arr4) {
	if (arr4.length < 2) {
		return arr4;
	}
	let mid = Math.floor(arr4.length / 2);
	let left = arr4.slice(0, mid);
	let right = arr4.slice(mid);
	return merge4(mergeSort4(left), mergeSort4(right));
}

function merge4(left, right) {
	let sortArray = [];
	while (left.length && right.length) {
		if (left[0] > right[0]) {
			sortArray.push(left.shift());
		} else {
			sortArray.push(right.shift());
		}
	}
	return [...sortArray, ...left, ...right];
}

let arr4 = [6, 4, 5, 1, 2, 3];
console.log("arr4 is", mergeSort4(arr4));

//5.

function mergeSort5(arr5) {
	if (arr5.length < 2) {
		return arr5;
	}
	let mid = Math.floor(arr5.length / 2);
	let left = arr5.slice(0, mid);
	let right = arr5.slice(mid);
	return merge5(mergeSort5(left), mergeSort5(right));
}

function merge5(left, right) {
	let sortArray = [];
	while (left.length && right.length) {
		if (left[0] > right[0]) {
			sortArray.push(left.shift());
		} else {
			sortArray.push(right.shift());
		}
	}
	return [...sortArray, ...left, ...right];
}

let arr5 = [45, 5, 34, 4, 56];
console.log("arr5 is ", mergeSort5(arr5));

//6.

function mergeSort6(arr6) {
	if (arr6.length < 2) {
		return arr6;
	}
	let mid = Math.floor(arr6.length / 2);
	let left = arr6.slice(0, mid);
	let right = arr6.slice(mid);
	return merge6(mergeSort6(left), mergeSort6(right));
}

function merge6(left, right) {
	let sortedArray = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArray.push(left.shift());
		} else {
			sortedArray.push(right.shift());
		}
	}
	return [...sortedArray, ...left, ...right];
}

let arr6 = [45, 3, 4, 5, 6, 1];
console.log("merge sort arr6 is ", mergeSort6(arr6));

//7.

function mergeSort7(arr7) {
	if (arr7.length < 2) {
		return arr7;
	}
	let mid = Math.floor(arr7.length / 2);
	let left = arr7.slice(0, mid);
	let right = arr7.slice(mid);
	return merge7(mergeSort7(left), mergeSort7(right));
}

function merge7(left, right) {
	let sortedArray = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArray.push(left.shift());
		} else {
			sortedArray.push(right.shift());
		}
	}
	return [...sortedArray, ...left, ...right];
}

let arr7 = [56, 45, 3, 43, 32, 5];
console.log("merge sort 7 is ", mergeSort7(arr7));
