function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
        swapped = true;
      }
    }

    
  } while (swapped);
}
const unsorted = [-6, -4, -8, -2, -9];
BubbleSort(unsorted);
console.log(unsorted);
