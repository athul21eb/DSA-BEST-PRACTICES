// 1. insertSort assenting order
function insertSortA(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numsToSort = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > numsToSort) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = numsToSort;
	}
}

let arr = [2, 3, -2, -1, 1];
insertSortA(arr);
console.log(arr);

// 2. insertSort descenting order
function insertSortD(arr1) {
	for (let i = 1; i < arr1.length; i++) {
		let numsToSort = arr1[i];
		let j = i - 1;
		while (j >= 0 && arr1[j] > numsToSort) {
			arr1[j + 1] = arr1[j];
			j = j - 1;
		}
		arr1[j + 1] = numsToSort;
	}
}

let arr1 = [3, 5, 6, 1, 2, 4];
insertSortD(arr1);
console.log(arr1);

//3.
function sort(arr2) {
	for (let i = 1; i < arr2.length; i++) {
		let numsToSort = arr2[i];
		let j = i - 1;
		while (j >= 0 && arr2[j] < numsToSort) {
			arr2[j + 1] = arr2[j];
			j = j - 1;
		}
		arr2[j + 1] = numsToSort;
	}
}

let arr2 = [2, 4, 3, 1, 6, 5];
sort(arr2);
console.log("sort", arr2);

//4.

function insertSort3(arr3) {
	for (let i = 1; i < arr3.length; i++) {
		let numtoSort = arr3[i];
		let j = i - 1;
		while (j >= 0 && arr3[j] < numtoSort) {
			arr3[j + 1] = arr3[j];
			j = j - 1;
		}
		arr3[j + 1] = numtoSort;
	}
}

let arr3 = [2, 5, 6, 3, 1, 4];
insertSort3(arr3);
console.log("arr3 is ", arr3);

//4.

function insertSort4(arr4) {
	for (let i = 1; i < arr4.length; i++) {
		let numtoSort = arr4[i];
		let j = i - 1;
		while (j >= 0 && arr4[j] < numtoSort) {
			arr4[j + 1] = arr4[j];
			j = j - 1;
		}
		arr4[j + 1] = numtoSort;
	}
}

let arr4 = [-5, -1, -6, 3, 4, 2];
insertSort4(arr4);
console.log("the arr4 is ", arr4);

//5.

function insertSort5(arr5) {
	for (let i = 1; i < arr5.length; i++) {
		let numsToSort = arr5[i];
		let j = i - 1;
		while (j >= 0 && arr5[j] < numsToSort) {
			arr5[j + 1] = arr5[j];
			j--;
		}
		arr5[j + 1] = numsToSort;
	}
}

let arr5 = [7, 4, 3, 1, 2, 5];
insertSort5(arr5);
console.log("arr5 is ", arr5);

//6.
function insertSort6(arr6) {
	for (let i = 1; i < arr6.length; i++) {
		let numsToSort = arr6[i];
		let j = i - 1;
		while (j >= 0 && arr6[j] > numsToSort) {
			arr6[j + 1] = arr6[j];
			j--;
		}
		arr6[j + 1] = numsToSort;
	}
}

let arr6 = [22, 3, 44, 5, 1, 6];
insertSort6(arr6);
console.log("insert arr6 is ", arr6);

//7.

function insertSort7(arr7) {
	for (let i = 1; i < arr7.length; i++) {
		let numtoSort = arr7[i];
		let j = i - 1;
		while (j >= 0 && arr7[j] > numtoSort) {
			arr7[j + 1] = arr7[j];
			j--;
		}
		arr7[j + 1] = numtoSort;
	}
}

let arr7 = [2, 4, 5, 6, 1, 7];
insertSort7(arr7);
console.log("insert sort 7 is ", arr7);
