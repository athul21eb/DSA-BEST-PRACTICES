// 1. quick sort ascenting order
function quickSortA(arr) {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSortA(left), pivot, ...quickSortA(right)];
}

let arr = [-6, -2, -7, 1, 4, 3];
console.log(quickSortA(arr));

// 2. quick sort descenting order

function quickSortD(arr1) {
	if (arr1.length < 2) {
		return arr1;
	}
	let pivot = arr1[arr1.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr1.length - 1; i++) {
		if (arr1[i] < pivot) {
			left.push(arr1[i]);
		} else {
			right.push(arr1[i]);
		}
	}
	return [...quickSortD(right), pivot, ...quickSortD(left)];
}

let arr1 = [5, -1, 6, 7, 1, 2];
console.log(quickSortD(arr1));

// 3.

function sort(arr2) {
	if (arr2.length < 2) {
		return arr2;
	}
	let pivot = arr2[arr2.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr2.length - 1; i++) {
		if (arr2[i] > pivot) {
			left.push(arr2[i]);
		} else {
			right.push(arr2[i]);
		}
	}
	return [...sort(left), pivot, ...sort(right)];
}

let arr2 = [3, 5, 6, 1, 2, 4];
console.log("sort", sort(arr2));

//4.

function quickSort3(arr3) {
	if (arr3.length < 2) {
		return arr3;
	}
	let pivot = arr3[arr3.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr3.length - 1; i++) {
		if (arr3[i] > pivot) {
			left.push(arr3[i]);
		} else {
			right.push(arr3[i]);
		}
	}
	return [...quickSort3(left), pivot, ...quickSort3(right)];
}

let arr3 = [5, 4, 6, 1, 2, 3];
console.log("arr3 is ", quickSort3(arr3));

//4.

function quickSort4(arr4) {
	if (arr4.length < 2) {
		return arr4;
	}
	let pivot = arr4[arr4.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr4.length - 1; i++) {
		if (arr4[i] < pivot) {
			left.push(arr4[i]);
		} else {
			right.push(arr4[i]);
		}
	}
	return [...quickSort4(left), pivot, ...quickSort4(right)];
}

let arr4 = [9, 10, 11, 8, 7];
console.log("arr4 is ", quickSort4(arr4));

// 5.

function quickSort5(arr5) {
	if (arr5.length < 2) {
		return arr5;
	}
	let pivot = arr5[arr5.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr5.length - 1; i++) {
		if (arr5[i] < pivot) {
			left.push(arr5[i]);
		} else {
			right.push(arr5[i]);
		}
	}
	return [...quickSort5(left), pivot, ...quickSort5(right)];
}

let arr5 = [22, 32, 41, 51, 11, 6];
console.log("arr5 is", quickSort5(arr5));

//6.

function quickSort6(arr6) {
	if (arr6.length < 2) {
		return arr6;
	}
	let pivot = arr6[arr6.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr6.length - 1; i++) {
		if (arr6[i] < pivot) {
			left.push(arr6[i]);
		} else {
			right.push(arr6[i]);
		}
	}
	return [...quickSort6(left), pivot, ...quickSort6(right)];
}

let arr6 = [3, 45, 56, 34, 2, 3];

console.log("quick arr6 is ", quickSort6(arr6));

//7.

function quickSort7(arr7) {
	if (arr7.length < 2) {
		return arr7;
	}

	let pivot = arr7[arr7.length - 1];
	let left = [];
	let right = [];
	for (let i = 0; i < arr7.length - 1; i++) {
		if (arr7[i] < pivot) {
			left.push(arr7[i]);
		} else {
			right.push(arr7[i]);
		}
	}

	return [...quickSort7(left), pivot, ...quickSort7(right)];
}

let arr7 = [4, 3, 4, 5, 3, 332, 22];
console.log("quick sort 7 is", quickSort7(arr7));
