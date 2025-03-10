//1.enqueue and dequeue O(n) tc

class Queue {
	constructor() {
		this.isValue = [];
	}
	enqueue(valaue) {
		this.isValue.push(valaue);
	}
	dequeue() {
		return this.isValue.shift();
	}

	isEmpty() {
		return this.isValue.length === 0;
	}
	peek() {
		if (!this.isEmpty()) {
			return this.isValue[0];
		}
		return null;
	}
	getSize() {
		return this.isValue.length;
	}
	print() {
		console.log(this.isValue.toString());
	}
}

let queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();
queue.dequeue();
queue.print();
console.log(queue.peek());
console.log(queue.getSize());
console.log(queue.isEmpty());

//2. enqueue and dequeue O(1) tc

class Queue1 {
	constructor() {
		this.item = {};
		this.rear = 0;
		this.front = 0;
	}
	enqueue(valaue) {
		this.item[this.rear] = valaue;
		this.rear++;
	}
	dequeue() {
		let item = this.item[this.front];
		delete this.item[this.front];
		this.front++;
		return item;
	}
	print() {
		console.log(this.item);
	}
	isEmpty() {
		return this.rear - this.front === 0;
	}
	getSize() {
		return this.rear - this.front;
	}
	peek() {
		return this.item[this.front];
	}
}

let queue1 = new Queue1();
console.log(queue1.isEmpty());
queue1.enqueue(50);
queue1.enqueue(60);
queue1.enqueue(70);
queue1.print();
queue1.dequeue();
queue1.print();
console.log(queue1.getSize());
console.log(queue1.isEmpty());
console.log(queue1.peek());

//3.
class Queue2 {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}
	isEmpty() {
		return this.rear - this.front === 0;
	}
	getSize() {
		return this.rear - this.front;
	}
	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}
	dequeue() {
		let item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}
	peek() {
		return this.items[this.front];
	}
	print() {
		console.log(this.items);
	}
}

let queue2 = new Queue2();
console.log(queue2.isEmpty());
queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);
queue2.enqueue(40);
queue2.print();
queue2.dequeue();
queue2.dequeue();
queue2.print();
console.log(queue2.peek());
console.log(queue2.getSize());
console.log(queue2.isEmpty());

// 2.

class Queue3 {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}
	enqueue(valaue) {
		this.items[this.rear] = valaue;
		this.rear++;
	}
	dequeue() {
		let item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}
	peek() {
		return this.items[this.front];
	}
	isEmpty() {
		return this.front - this.rear === 0;
	}
	display() {
		console.log(this.items);
	}
}

let queue3 = new Queue3();
console.log("queue3 is");
queue3.enqueue(10);
queue3.enqueue(20);
queue3.enqueue(30);
console.log(queue3.peek());
queue3.display();
queue3.dequeue();
queue3.display();
console.log(queue.isEmpty());

//4.

class Queue4 {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}
	isEmpty() {
		return this.rear - this.front === 0;
	}
	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}
	dequeue() {
		let item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}
	peek() {
		return this.items[this.front];
	}
	display() {
		console.log(this.items);
	}
}

let queue4 = new Queue4();
console.log("queue4 is ");
console.log(queue4.isEmpty());
queue4.enqueue(10);
queue4.enqueue(20);
queue4.enqueue(30);
queue4.display();
console.log(queue4.peek());
queue4.dequeue();
queue4.display();

//5.

class Queue5 {
	constructor() {
		this.items = [];
	}
	enqueue(element) {
		this.items.push(element);
	}
	dequeue() {
		return this.items.shift();
	}
	peek() {
		return this.items[0];
	}
	display() {
		console.log(this.items.toString());
	}
}

let queue5 = new Queue5();
console.log("queue5 is");
queue5.enqueue(10);
queue5.enqueue(20);
queue5.enqueue(30);
queue5.enqueue(40);
queue5.display();
queue5.dequeue();
console.log(queue5.peek());
queue5.display();

//6.

class Queue6 {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}
	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}
	dequeue() {
		let item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}
	peek() {
		return this.items[this.front];
	}
	display() {
		console.log(Object.values(this.items));
	}
}

let queue6 = new Queue6();
console.log("queue 6 is ");
queue6.enqueue(10);
queue6.enqueue(20);
queue6.enqueue(30);
queue6.display();
console.log(queue6.peek());
queue6.dequeue();
queue6.display();

// 7.

class Queue7 {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}
	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}
	dequeue() {
		let item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}
	peek() {
		return this.items[this.front];
	}
	display() {
		console.log(this.items);
	}
}

let queuee6 = new Queue7();
console.log("this is queue6");
queuee6.enqueue(10);
queuee6.enqueue(20);
queuee6.enqueue(30);
queuee6.enqueue(40);
queuee6.display();
console.log(queuee6.peek());
queuee6.dequeue();
queuee6.display();

//7.

class Queue8 {
	constructor() {
		this.items = [];
	}
	isEmpty() {
		return this.items.length === 0;
	}
	enqueue(element) {
		this.items.push(element);
	}
	dequeue() {
		return this.items.shift();
	}
}

function reverceString(str) {
	let queue7 = new Queue8();
	for (let i = 0; i < str.length; i++) {
		queue7.enqueue(str[i]);
	}
	let str1 = "";
	while (!queue7.isEmpty()) {
		str1 = queue7.dequeue() + str1;
	}
	return str1;
}

let str = "make";
let revercedString = reverceString(str);
console.log(revercedString);

function reverseArray(arr1) {
	let queue7 = new Queue8();
	for (let i = 0; i < arr1.length; i++) {
		queue7.enqueue(arr1[i]);
	}
	let arr2 = [];
	while (!queue7.isEmpty()) {
		arr2.unshift(queue7.dequeue());
	}
	return arr2;
}

let arr1 = [1, 2, 3, 4, 5, 6];
let reversedArray = reverseArray(arr1);
console.log(reversedArray);
