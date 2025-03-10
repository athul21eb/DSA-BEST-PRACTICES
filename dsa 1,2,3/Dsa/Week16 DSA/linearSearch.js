// // 1 . linear search

// function serachIndex(arr, t) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === t) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// console.log(serachIndex([10, 20, 30, 40], 20));
// console.log(serachIndex([100, 205, 307, 40], 10));

// function countOccurance(arr1, t1) {
// 	let count = 0;
// 	for (let i = 0; i < arr1.length; i++) {
// 		if (arr1[i] === t1) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// console.log(countOccurance([2, 3, 3, 4, 5, 2, 2], 2));

// // 2.binery search

// function findIndex(arr2, t2) {
// 	let left = 0;
// 	let right = arr2.length - 1;
// 	while (left <= right) {
// 		let middle = Math.floor((left + right) / 2);
// 		if (t2 === arr2[middle]) {
// 			return middle;
// 		}
// 		if (t2 < arr2[middle]) {
// 			right = middle - 1;
// 		} else {
// 			left = middle + 1;
// 		}
// 	}
// 	return -1;
// }

// console.log("the value", findIndex([2, 3, 4, 5, 6, 7, 8], 2));
// console.log(findIndex([2, 3, 4, 5, 6, 7, 8], 1));

// function ser(arr3, t3) {
// 	let left = 0;
// 	let right = arr3.length - 1;
// 	while (left <= right) {
// 		let middle = Math.floor((left + right) / 2);
// 		if (t3 === arr3[middle]) {
// 			return middle;
// 		}
// 		if (t3 < arr3[middle]) {
// 			right = middle - 1;
// 		} else {
// 			left = middle + 1;
// 		}
// 	}
// 	return -1;
// }

// console.log("thr", ser([1, 2, 3, 4, 5, 6], 9));

// function search(arr, t) {
// 	let left = 0;
// 	let right = arr.length - 1;
// 	while (left <= right) {
// 		let middle = Math.floor((left + right) / 2);
// 		if (arr[middle] === t) {
// 			return middle;
// 		}
// 		if (t < arr[middle]) {
// 			right = middle - 1;
// 		} else {
// 			left = middle + 1;
// 		}
// 	}
// 	return -1;
// }

// console.log(search([1, 2, 3, 4, 5, 6], 5));

function recursive(arr1, t1) {
	return search(arr1, t1, 0, arr1.length - 1);
}

function search(arr1, t1, leftInd, rightInd) {
	if (leftInd > rightInd) {
		return -1;
	}
	let middI = Math.floor((leftInd + rightInd) / 2);
	if (t1 === arr1[middI]) {
		return middI;
	}
	if (t1 < arr1[middI]) {
		return search(arr1, t1, leftInd, middI - 1);
	} else {
		return search(arr1, t1, middI + 1, rightInd);
	}
}

console.log(recursive([1, 3, 5, 6, 7, 8], 8));
