function HeapSort(arr) {
  buildHeap(arr);

  for (let i = arr.length - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    MaxHeapify(arr, i, 0);
  }
}

function buildHeap(arr) {
  let heapSize = arr.length;

  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    MaxHeapify(arr, heapSize, i);
  }
}

function MaxHeapify(arr, heapSize, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = i * 2 + 2;

  if (left < heapSize && arr[left] > arr[largest]) largest = left;
  i;
  if (right < heapSize && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    MaxHeapify(arr, heapSize, largest);
  }
}

const a = [3, 42, 5, 5, 33, 7];

console.log(a);
HeapSort(a);
console.log(a);

class Heap {
  constructor() {
    this.root = [];
  }

  insert(value) {
    this.root.push(value);

    let current = this.root.length - 1;
    let parent = Math.floor(current - 1 / 2);

    while (current > 0 && this.root[current] > this.root[parent]) {
      [this.root[current], this.root[parent]] = [
        this.root[parent],
        this.root[current],
      ];

      current = parent;
      parent = Math.floor(current - 1 / 2);
    }
  }
}
const h = new Heap();
h.insert(12);
h.insert(1);
h.insert(124);
h.insert(1255);
h.insert(125557);
console.log(h.root);
