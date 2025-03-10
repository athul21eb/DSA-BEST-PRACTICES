function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
       min =j
      }
    }

    if(min!==i)[arr[i],arr[min]] = [arr[min],arr[i]]
  }
}
const array = [
  322, 5, 2, 4,
     4,  5, 6, 7
]
selectionSort(array)
console.log(array)

