// function BinarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) {
//       return `value ${arr[mid]} at index : ${mid}`;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// }

// console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7], 7));

let array = [-6, 40, 20, -2, 88, 9];
///? BubbleSort

// function BubbleSort(arr) {
//   let swapped;

//   do {
//     swapped = false;

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) {
//         [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// BubbleSort(array);

// function quickSort(arr) {

//   if(arr.length<2){
//     return arr;
//   }

//   let left = [];
//   let right = [];
//   let pivot = arr[arr.length - 1];
//   for(let i = 0;i<arr.length-1;i++){
//     if(arr[i]>pivot){
//       left.push(arr[i]);
//     }else{
//       right.push(arr[i]);
//     }
//   }

//   return [...quickSort(left),pivot,...quickSort(right)]
// }

// array =quickSort(array);
// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let NumberToInsert = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > NumberToInsert) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     if (j + 1 !== i) arr[j + 1] = NumberToInsert;
//   }
// }

// insertionSort(array)

// function MergeSort(arr) {
//   if (arr.length < 2) return arr;

//   let mid = Math.floor(arr.length/ 2);

//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   return MergeHelper(MergeSort(left), MergeSort(right));
// }

// function MergeHelper(left ,right){

//   let sortedArray = [];

//   while(left.length&&right.length){

//     if(left[0]>right[0]){
//       sortedArray.push(right.shift())
//     }else{
//       sortedArray.push(left.shift());
//     }
//   }

//   return [...sortedArray,...left,...right];

// }
// array = MergeSort(array);

// function SelectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         min = j;
//       }
//     }
//     if (min !== i)[arr[i], arr[min]]= [arr[min], arr[i]];
//   }
// }

// SelectionSort(array)

// function BubbleSort(arr) {
//   let swapped;

//   do {
//     swapped = false;

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) {
//         [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }

// BubbleSort(array);
console.log(array);

// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let NumberToInsert = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > NumberToInsert) {
//       arr[j + 1] = arr[j];
//       j--;
//     }

//     arr[j + 1] = NumberToInsert;
//   }
// }
// insertSort(array);

// function quicksort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }

//   return [...quicksort(left),pivot, ...quicksort(right)];
// }

// function MergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);

//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   return MergeHelper(MergeSort(left), MergeSort(right));
// }
// function MergeHelper(left, right) {
//   let sortedArray = [];
//   while (left.length && right.length) {
//     if (left[0] > right[0]) {
//       sortedArray.push(right.shift());
//     } else {
//       sortedArray.push(left.shift());
//     }
//   }

//   return [...sortedArray,...left,...right]
// }

// function BubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i - 1] > arr[i]) {
//         [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// BubbleSort(array);

// function InsertionSort(arr) {

//   for(let i =0;i<arr.length;i++){
//     let NumberToInsert = arr[i];

//     let j =i-1;
//     while(j>=0&&arr[j]>NumberToInsert){
//       arr[j+1] = arr[j];
//       j--
//     }

//     if(j+1!==i)arr[j+1]=NumberToInsert;
//   }
// }
// InsertionSort(array);

// function QuickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   const pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...QuickSort(left), pivot, ...QuickSort(right)];
// }

// function MergeSort(arr) {
//   if (arr.length < 2) return arr;

//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);

//   return MergeHelper(MergeSort(left), MergeSort(right));
// }

// function MergeHelper(left, right) {
//   let sortedArray = [];

//   while (left.length && right.length) {
//     if (left[0] > right[0]) {
//       sortedArray.push(right.shift());
//     } else {
//       sortedArray.push(left.shift());
//     }
//   }

//   return [...sortedArray, ...left, ...right];
// }

// function SelectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }

//     if(min!==i)[arr[i],arr[min]] = [arr[min],arr[i]]
//   }
// }
// SelectionSort(array)
console.log(array);
