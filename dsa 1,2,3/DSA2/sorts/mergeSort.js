function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  return mergerHelper(mergeSort(leftArr), mergeSort(rightArr));
}

function mergerHelper(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...right, ...left];
}

let array = [4, 5, -5, 6, 7, 4, -322, 2];

array = mergeSort(array);
console.log(array);
