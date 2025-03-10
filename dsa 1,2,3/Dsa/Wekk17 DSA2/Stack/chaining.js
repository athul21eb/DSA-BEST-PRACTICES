class HashTable {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}
	hash(key) {
		let total = 0;
		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}
	set(key, value) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (!bucket) {
			this.table[index] = [[key, value]];
		} else {
			let sameItem = bucket.find((item) => item[0] === key);
			if (sameItem) {
				sameItem[1] = value;
			} else {
				bucket.push([key, value]);
			}
		}
	}
	get(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameItem = bucket.find((item) => item[0] === key);
			if (sameItem) {
				return sameItem[1];
			}
		}
		return null;
	}
	remove(key) {
		let index = this.hash(key);
		let bucket = this.table[index];
		if (bucket) {
			let sameItem = bucket.find((item) => item[0] === key);
			if (sameItem) {
				bucket.splice(bucket.indexOf(sameItem), 1);
			}
		}
	}
	display() {
		for (let i = 0; i < this.table.length; i++) {
			if (this.table[i]) {
				console.log(i, this.table[i]);
			}
		}
	}
}

let hash = new HashTable(20);
hash.set("name", "sheheer");
hash.set("naem", "yes");
hash.set("age", 24);
hash.display();
console.log(hash.get("name"));
hash.remove("name");
hash.display();

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	let sort = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sort.push(left.shift());
		} else {
			sort.push(right.shift());
		}
	}
	return [...sort, ...left, ...right];
}

let arr = [2, 3, 4, 1, 56, 6];
console.log(mergeSort(arr));

class CircularQueue {
	constructor(capasity) {
		this.items = new Array(capasity);
		this.capasity = capasity;
		this.length = 0;
		this.rear = -1;
		this.front = -1;
	}
	isFull() {
		return this.capasity === this.length;
	}
	isEmpty() {
		return this.length === 0;
	}
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capasity;
			this.items[this.rear] = element;
			this.length++;
			if (this.front === -1) {
				this.front = this.rear;
			}
		} else {
			console.log("Queue is full");
		}
	}
	dequeue() {
		let item = this.items[this.front];
		this.items[this.front] = null;
		this.length--;
		this.front = (this.front + 1) % this.capasity;
		if (this.isEmpty()) {
			this.rear = -1;
			this.front = -1;
		}
		return item;
	}
	peek() {
		return this.items[this.front];
	}
	display() {
		let str = "";
		let i;
		for (i = this.front; i !== this.rear; i = (i + 1) % this.capasity) {
			str += this.items[i] + " ";
		}
		str += this.items[i];
		console.log(str);
	}
}

let queue = new CircularQueue(3);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log(queue.peek());
queue.dequeue();
queue.display();

class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}
	pop() {
		let item = this.items[this.count];
		this.count--;
		return item;
	}
	display() {
		let ster = "";
		for (let i = 0; i < this.count; i++) {
			ster += this.items[i];
		}
		console.log(ster);
	}
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.display();
stack.pop();
stack.display();
