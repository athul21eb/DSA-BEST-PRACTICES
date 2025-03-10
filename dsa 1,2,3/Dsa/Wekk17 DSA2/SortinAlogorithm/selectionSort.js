// 1. ascending order selection sort

function selectionSortA(arr) {
	for (let i = 0; i < arr.length; i++) {
		let minimum = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minimum]) {
				minimum = j;
			}
		}
		if (minimum !== i) {
			let temp = arr[i];
			arr[i] = arr[minimum];
			arr[minimum] = temp;
		}
	}
	return arr;
}

let arr = [4, 3, 2, 1, 5, 6];
console.log(selectionSortA(arr));

// 2. descending selection sort

function selectionSortD(arr1) {
	for (let i = 0; i < arr1.length; i++) {
		let maximum = i;
		for (let j = i + 1; j < arr1.length; j++) {
			if (arr1[j] > arr1[maximum]) {
				maximum = j;
			}
		}
		if (maximum !== i) {
			let temp = arr1[i];
			arr1[i] = arr1[maximum];
			arr1[maximum] = temp;
		}
	}
	return arr1;
}

let arr1 = [1, 3, 2, 5, 6, 4];
console.log(selectionSortD(arr1));

function sort(arr2) {
	for (let i = 0; i < arr2.length; i++) {
		let minimum = i;
		for (let j = i + 1; j < arr2.length; j++) {
			if (arr2[j] > arr2[minimum]) {
				minimum = j;
			}
		}
		if (minimum !== i) {
			let temp = arr2[i];
			arr2[i] = arr2[minimum];
			arr2[minimum] = temp;
		}
	}
	return arr2;
}

let arr2 = [5, 4, 6, 1, 4, 3, 2];
console.log("sort", sort(arr2));

// 4.

function selectionSort3(arr3) {
	for (let i = 0; i < arr3.length; i++) {
		let minimumValue = i;
		for (let j = i + 1; j < arr3.length; j++) {
			if (arr3[j] > arr3[minimumValue]) {
				minimumValue = j;
			}
		}
		if (minimumValue !== i) {
			let temp = arr3[i];
			arr3[i] = arr3[minimumValue];
			arr3[minimumValue] = temp;
		}
	}
}

let arr3 = [3, 4, 1, 2, 6, 5];
selectionSort3(arr3);
console.log("arr3 is ", arr3);

//4.
function selectionSort4(arr4) {
	for (let i = 0; i < arr4.length; i++) {
		let minimum = i;
		for (let j = i + 1; j < arr4.length; j++) {
			if (arr4[minimum] < arr4[j]) {
				minimum = j;
			}
		}
		if (minimum !== i) {
			let temp = arr4[i];
			arr4[i] = arr4[minimum];
			arr4[minimum] = temp;
		}
	}
}

let arr4 = [5, 6, 2, 3, 1, 2];
selectionSort4(arr4);
console.log("arr4 is ", arr4);

//5.

function selectionSort5(arr5) {
	for (let i = 0; i < arr5.length; i++) {
		let minimum = i;
		for (let j = i + 1; j < arr5.length; j++) {
			if (arr5[minimum] > arr5[j]) {
				minimum = j;
			}
		}
		if (minimum !== i) {
			let temp = arr5[i];
			arr5[i] = arr5[minimum];
			arr5[minimum] = temp;
		}
	}
}

let arr5 = [4, 3, 5, 1, 2, 6];
selectionSort5(arr5);
console.log("arr5 is", arr5);

//6.

function selectionSort6(arr6) {
	for (let i = 0; i < arr6.length; i++) {
		let minimum = i;
		for (let j = i + 1; j < arr6.length; j++) {
			if (arr6[minimum] < arr6[j]) {
				minimum = j;
			}
		}
		if (minimum !== i) {
			let temp = arr6[i];
			arr6[i] = arr6[minimum];
			arr6[minimum] = temp;
		}
	}
}

let arr6 = [5, 33, 44, 55, 1, 2];
selectionSort6(arr6);
console.log("selection sort arr6 is ", arr6);

// 7.

function selectionSort7(arr7) {
	for (let i = 0; i < arr7.length; i++) {
		let minimum = i;
		for (let j = i + 1; j < arr7.length; j++) {
			if (arr7[minimum] > arr7[j]) {
				minimum = j;
			}
		}
		if (minimum !== i) {
			let temp = arr7[i];
			arr7[i] = arr7[minimum];
			arr7[minimum] = temp;
		}
	}
}

let arr7 = [4, 56, 43, 2, 22, 4];
selectionSort7(arr7);
console.log("selection sort 7 is ", arr7);
