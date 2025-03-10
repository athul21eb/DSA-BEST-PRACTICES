function heapSort(arr) {
	let n = arr.length;
	for (let i = n / 2 - 1; i >= 0; i--) {
		maxHeapify(arr, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		maxHeapify(arr, i, 0);
	}
	return arr;
}

function maxHeapify(arr, n, i) {
	let largest = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;

	if (left < n && arr[left] > arr[largest]) {
		largest = left;
	}
	if (right < n && arr[right] > arr[largest]) {
		largest = right;
	}
	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		maxHeapify(arr, n, largest);
	}
}
let arr = [10, 20, 15, 11, 8, 4];
heapSort(arr);
console.log(arr);

// 2 .

function heapSort2(arr2) {
	let n = arr2.length;
	for (let i = n / 2 - 1; i >= 0; i--) {
		maxHeapify2(arr2, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr2[0], arr2[i]] = [arr2[i], arr2[0]];
		maxHeapify(arr2, i, 0);
	}
	return arr2;
}

function maxHeapify2(arr2, n, i) {
	let large = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < n && arr2[left] > arr2[large]) {
		large = left;
	}
	if (right < n && arr2[right] > arr2[large]) {
		large = right;
	}
	if (large !== i) {
		[arr2[i], arr2[large]] = [arr2[large], arr2[i]];
		maxHeapify(arr2, n, large);
	}
}

let arr2 = [3, 4, 1, 2, 5, 6];
heapSort2(arr2);
console.log(arr2);

// 3 .

function heapSort3(arr3) {
	let n = arr3.length;
	for (let i = n / 2 - 1; i >= 0; i--) {
		maxHeapify3(arr3, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr3[0], arr3[i]] = [arr3[i], arr3[0]];
		maxHeapify3(arr3, i, 0);
	}
	return arr3;
}

function maxHeapify3(arr3, n, i) {
	let large = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;

	if (left < n && arr3[left] > arr3[large]) {
		large = left;
	}
	if (right < n && arr3[right] > arr3[large]) {
		large = left;
	}
	if (large !== i) {
		[arr3[i], arr3[large]] = [arr3[large], arr3[i]];
		maxHeapify3(arr3, n, large);
	}
}

let arr3 = [5, 3, 1, 2, 4, 7, 6];
heapSort3(arr3);
console.log("heap sort 3 is ", arr3);

// 3.
function heapSort4(arr4) {
	let n = arr4.length;
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		maxHeapify4(arr4, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr4[0], arr4[i]] = [arr4[i], arr4[0]];
		maxHeapify4(arr4, i, 0);
	}
}

function maxHeapify4(arr4, n, i) {
	let large = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < n && arr4[left] > arr4[large]) {
		large = left;
	}
	if (right < n && arr4[right] > arr4[large]) {
		large = right;
	}
	if (large !== i) {
		[arr4[i], arr4[large]] = [arr4[large], arr4[i]];
		maxHeapify4(arr4, n, large);
	}
}

let arr4 = [3, 4, 1, 2, 7, 5, 6];
heapSort4(arr4);
console.log("Arr 4 is ", arr4);

// 5.

function heapSort5(arr5) {
	let n = arr5.length;
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		maxHeapify5(arr5, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr5[0], arr5[i]] = [arr5[i], arr5[0]];
		maxHeapify5(arr5, i, 0);
	}
	return arr5;
}

function maxHeapify5(arr5, n, i) {
	let largest = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < n && arr5[left] > arr5[largest]) {
		largest = left;
	}
	if (right < n && arr5[right] > arr5[largest]) {
		largest = right;
	}
	if (largest !== i) {
		[arr5[i], arr5[largest]] = [arr5[largest], arr5[i]];
		maxHeapify(arr5, n, largest);
	}
}
let arr5 = [2, 3, 1, 4, 6, 5];
heapSort5(arr5);
console.log("Arr5 is ", arr5);

//6.

function heapSort6(arr6) {
	let n = arr6.length;
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		maxHeapify6(arr6, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr6[0], arr6[i]] = [arr6[i], arr6[0]];
		maxHeapify(arr6, i, 0);
	}
	return arr6;
}

function maxHeapify6(arr6, n, i) {
	let large = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < n && arr6[left] > arr6[large]) {
		large = left;
	}
	if (right < n && arr6[right] > arr6[large]) {
		large = right;
	}
	if (large !== i) {
		[arr6[i], arr6[large]] = [arr6[large], arr6[i]];
		maxHeapify6(arr6, n, large);
	}
}

let arr6 = [4, 2, 3, 1, 5, 7, 6];
heapSort6(arr6);
console.log("Heap sort 6 is", arr6);

//7.

function heapSort7(arr7) {
	let n = arr7.length;
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		maxHeapify7(arr7, n, i);
	}
	for (let i = n - 1; i > 0; i--) {
		[arr7[0], arr7[i]] = [arr7[i], arr7[0]];
		maxHeapify7(arr7, i, 0);
	}
}

function maxHeapify7(arr7, n, i) {
	let large = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;
	if (left < n && arr7[left] < arr7[large]) {
		large = left;
	}
	if (right < n && arr7[right] < arr7[large]) {
		large = right;
	}
	if (large !== i) {
		[arr7[i], arr7[large]] = [arr7[large], arr7[i]];
		maxHeapify(arr7, n, large);
	}
}

console.log("Heap sort 7 is ");
let arr7 = [10, 5, 1, 2, 3, 4];
heapSort7(arr7);
console.log(arr7);
