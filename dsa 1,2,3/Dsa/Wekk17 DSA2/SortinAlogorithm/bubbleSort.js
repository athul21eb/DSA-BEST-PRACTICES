//1. descending order bubble sort
function bubbleSortD(arr) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr = [1, 2, 3, 4, 5];
bubbleSortD(arr);
console.log(arr);

// 2. Ascenting order bubble sort

function bubbleSortA(arr1) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr1.length - 1; i++) {
			if (arr1[i] > arr1[i + 1]) {
				let temp = arr1[i];
				arr1[i] = arr1[i + 1];
				arr1[i + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr1 = [5, 6, 7, 2, 3, 1, 4];
bubbleSortA(arr1);
console.log(arr1);

//3.

function sort(arr2) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr2.length; i++) {
			if (arr2[i + 1] > arr2[i]) {
				let temp = arr2[i + 1];
				arr2[i + 1] = arr2[i];
				arr2[i] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr2 = [2, 3, 1, 4, 6, 5];
sort(arr2);
console.log("sort", arr2);

//4.
function bubbleSort3(arr3) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr3.length - 1; i++) {
			if (arr3[i] < arr3[i + 1]) {
				let temp = arr3[i];
				arr3[i] = arr3[i + 1];
				arr3[i + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr3 = [6, 4, 1, 2, 3, 5];
bubbleSort3(arr3);
console.log("arr3 is ", arr3);

//4.

function bubbleSort4(arr4) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr4.length; i++) {
			if (arr4[i] < arr4[i + 1]) {
				let temp = arr4[i];
				arr4[i] = arr4[i + 1];
				arr4[i + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr4 = [3, 4, 5, 6, 1, 2];
bubbleSort4(arr4);
console.log("arr4 is ", arr4);

//5.

function bubbleSort5(arr5) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr5.length; i++) {
			if (arr5[i] > arr5[i + 1]) {
				let temp = arr5[i];
				arr5[i] = arr5[i + 1];
				arr5[i + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr5 = [43, 56, 35, 54, 33];
bubbleSort5(arr5);
console.log("arr5 is", arr5);

//6.
function bubbleSort6(arr6) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr6.length; i++) {
			if (arr6[i] > arr6[i + 1]) {
				let temp = arr6[i];
				arr6[i] = arr6[i + 1];
				arr6[i + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr6 = [4, 5, 6, 1, 2, 3];
bubbleSort6(arr6);
console.log("arr6 is ", arr6);

//7.

function bubbleSort7(arr7) {
	let swap;
	do {
		swap = false;
		for (let i = 0; i < arr7.length; i++) {
			if (arr7[i] > arr7[i + 1]) {
				let temp = arr7[i];
				arr7[i] = arr7[i + 1];
				arr7[i + 1] = temp;
				swap = true;
			}
		}
	} while (swap);
}

let arr7 = [5, 6, 4, 3, 56, 3];
bubbleSort7(arr7);
console.log("buubble sort 7 is ", arr7);
