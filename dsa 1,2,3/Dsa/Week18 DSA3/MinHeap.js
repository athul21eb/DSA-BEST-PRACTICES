class MaxHeap {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.bubbleUp();
	}
	bubbleUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] > this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	remove() {
		let minValue = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.bubbleDown();
		return minValue;
	}
	bubbleDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] > this.heap[this.leftIndex(curr)]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[curr] < this.heap[bigIndex]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			} else {
				break;
			}
		}
	}
}

let heap = new MaxHeap();
heap.insert(10);
heap.insert(20);
heap.insert(5);
heap.insert(1);
heap.insert(30);
heap.insert(25);
console.log(heap.heap);
heap.remove();
console.log(heap.heap);

// 2 .

class MinHeap2 {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.heapUp();
	}
	heapUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] < this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	remove() {
		let value = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.heapDown();
		return value;
	}
	heapDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] < this.heap[bigIndex]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[curr] > this.heap[bigIndex]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			} else {
				break;
			}
		}
	}
}

let heap2 = new MinHeap2();
heap2.insert(8);
heap2.insert(4);
heap2.insert(6);
heap2.insert(10);
console.log(heap2.heap);
heap2.remove();
console.log(heap2.heap);

class MaxHeap2 {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.heapUp();
	}
	heapUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] > this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	remove(value) {
		let maxValue = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.heapDown();
		return maxValue;
	}
	heapDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] > this.heap[bigIndex]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[curr] < this.heap[bigIndex]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			} else {
				break;
			}
		}
	}
}

let max3 = new MaxHeap2();
max3.insert(30);
max3.insert(20);
max3.insert(25);
max3.insert(18);
max3.insert(16);
max3.insert(14);
max3.insert(12);
console.log("max3 is ", max3.heap);
max3.remove(30);
console.log("after delete max3 is ", max3.heap);

//4.

class MinHeap4 {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.heapUp();
	}
	heapUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] < this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	remove() {
		let minValue = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.heapDown();
		return minValue;
	}
	heapDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] < this.heap[bigIndex]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[curr] > this.heap[bigIndex]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			} else {
				break;
			}
		}
	}
}

let heap4 = new MinHeap4();
console.log("Heap  4 is ");

heap4.insert(10);
heap4.insert(30);
heap4.insert(5);
heap4.insert(2);
console.log(heap4.heap);
heap4.remove();
console.log(heap4.heap);

//

class MinHeap5 {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.heapUp();
	}
	heapUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] < this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	remove() {
		let value = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.heapDown();
		return value;
	}
	heapDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] < this.heap[bigIndex]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[curr] > this.heap[bigIndex]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			} else {
				break;
			}
		}
	}
}
console.log("Heap min 5 is");
let heap5 = new MinHeap5();
heap5.insert(30);
heap5.insert(50);
heap5.insert(10);
heap5.insert(20);
heap5.insert(80);
heap5.insert(70);
console.log(heap5.heap);
heap5.remove();
console.log(heap5.heap);

//6

class MaxHeap6 {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.heapUp();
	}
	heapUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] > this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	remove() {
		let value = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.heapDown();
		return value;
	}
	heapDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] > this.heap[bigIndex]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[bigIndex] > this.heap[curr]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			} else {
				break;
			}
		}
	}
	search(value) {
		for (let i = 0; i < this.heap.length - 1; i++) {
			if (this.heap[i] === value) {
				return true;
			}
			return false;
		}
	}
}

let maxHeap6 = new MaxHeap6();
maxHeap6.insert(50);
maxHeap6.insert(80);
maxHeap6.insert(40);
maxHeap6.insert(30);
maxHeap6.insert(90);
console.log("Max heap 6 is ", maxHeap6.heap);
console.log("Search is ", maxHeap6.search(90));

//7.
class MinHeap7 {
	constructor() {
		this.heap = [];
	}
	swap(i, j) {
		[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
	}
	parentIndex(i) {
		return Math.floor((i - 1) / 2);
	}
	leftIndex(i) {
		return 2 * i + 1;
	}
	rightIndex(i) {
		return 2 * i + 2;
	}
	insert(value) {
		this.heap[this.heap.length] = value;
		this.heapUp();
	}
	heapUp() {
		let curr = this.heap.length - 1;
		while (curr > 0 && this.heap[curr] < this.heap[this.parentIndex(curr)]) {
			this.swap(curr, this.parentIndex(curr));
			curr = this.parentIndex(curr);
		}
	}
	remove() {
		let value = this.heap[0];
		this.heap[0] = this.heap[this.heap.length - 1];
		this.heap.length--;
		this.heapDown();
		return value;
	}
	heapDown() {
		let curr = 0;
		while (this.heap[this.leftIndex(curr)] !== undefined) {
			let bigIndex = this.leftIndex(curr);
			if (
				this.heap[this.rightIndex(curr)] !== undefined &&
				this.heap[this.rightIndex(curr)] < this.heap[bigIndex]
			) {
				bigIndex = this.rightIndex(curr);
			}
			if (this.heap[bigIndex] < this.heap[curr]) {
				this.swap(curr, bigIndex);
				curr = bigIndex;
			}
		}
	}
}

let minHeap7 = new MinHeap7();
console.log("MinHeap 7 is ");
minHeap7.insert(50);
minHeap7.insert(40);
minHeap7.insert(30);
minHeap7.insert(60);
minHeap7.insert(20);
minHeap7.insert(80);
console.log("Insert value is ", minHeap7.heap);
minHeap7.remove();
console.log("Insert value is after delete ", minHeap7.heap);
