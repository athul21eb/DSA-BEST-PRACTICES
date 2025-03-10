class CircularQueue {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.length = 0;
		this.rear = -1;
		this.front = -1;
	}
	isFull() {
		return this.capacity === this.length;
	}
	isEmpty() {
		return this.length === 0;
	}
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
			this.items[this.rear] = element;
			this.length += 1;
			if (this.front == -1) {
				this.front = this.rear;
			}
		}
	}
	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		let item = this.items[this.front];
		this.items[this.front] = null;
		this.front = (this.front + 1) % this.capacity;
		this.length -= 1;
		if (this.isEmpty()) {
			this.front = -1;
			this.rear = -1;
		}
		return item;
	}
	peek() {
		if (!this.isEmpty()) {
			return this.items[this.front];
		}
		return null;
	}
	print() {
		if (this.isEmpty()) {
			console.log("queue is empty");
		} else {
			let i;
			let str = "";
			for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
				str += this.items[i] + " ";
			}
			str += this.items[i];
			console.log(str);
		}
	}
}

let circularQueue = new CircularQueue(5);
circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);
circularQueue.print();
console.log(circularQueue.isEmpty());
console.log(circularQueue.peek());
circularQueue.dequeue();
circularQueue.print();
console.log(circularQueue.peek());
circularQueue.enqueue(60);
circularQueue.print();
console.log(circularQueue.peek());

//2.

class CircularQueue2 {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.length = 0;
		this.rear = -1;
		this.front = -1;
	}
	isFull() {
		return this.capacity === this.length;
	}
	isEmpty() {
		return this.length === 0;
	}
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
			this.items[this.rear] = element;
			this.length++;
			if (this.front === -1) {
				this.front = this.rear;
			}
		} else {
			console.log("queue is full");
		}
	}
	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		let item = this.items[this.front];
		this.items[this.front] = null;
		this.front = (this.front + 1) % this.capacity;
		this.length--;
		if (this.isEmpty()) {
			this.rear = -1;
			this.front = -1;
		}
		return item;
	}
	peek() {
		return this.isEmpty() ? null : this.items[this.front];
	}
	print() {
		if (this.isEmpty()) {
			console.log("queue is empty");
			return;
		}
		let str = "";
		let i = this.front;
		while (true) {
			str += this.items[i] + " ";
			if (i == this.rear) break;
			i = (i + 1) % this.capacity;
		}
		console.log(str.trim());
	}
}

let circularQueue2 = new CircularQueue2(4);
console.log("this is circular queue 2 ");
circularQueue2.enqueue(10);
circularQueue2.enqueue(20);
circularQueue2.enqueue(30);
circularQueue2.enqueue(40);
circularQueue2.enqueue(50);
circularQueue2.print();
circularQueue2.dequeue();
circularQueue2.print();
console.log(circularQueue2.peek());

//3.

class CircularQueue3 {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.length = 0;
		this.rear = -1;
		this.front = -1;
	}
	isFull() {
		return this.capacity === this.length;
	}
	isEmpty() {
		return this.length === 0;
	}
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
			this.items[this.rear] = element;
			this.length++;
			if (this.front === -1) {
				this.front = this.rear;
			}
		} else {
			console.log("Queue is Full");
		}
	}
	dequeue() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
		}
		let item = this.items[this.front];
		this.items[this.front] = null;
		this.front = (this.front + 1) % this.capacity;
		this.length--;
		if (this.isEmpty()) {
			this.rear = -1;
			this.front = -1;
		}
		return item;
	}
	peek() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
		} else {
			return this.items[this.front];
		}
	}
	display() {
		let str = "";
		let i;
		for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
			str += this.items[i] + " ";
		}
		str += this.items[i];
		console.log(str);
	}
}

let circular3 = new CircularQueue3(5);
console.log("circularqueue3 is ");
circular3.enqueue(10);
circular3.enqueue(20);
circular3.enqueue(30);
circular3.enqueue(40);
circular3.enqueue(50);
circular3.enqueue(60);
circular3.display();
circular3.dequeue();
console.log(circular3.peek());
circular3.display();
circular3.enqueue(60);
circular3.display();

//4.

class CircularQueue4 {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.length = 0;
		this.rear = -1;
		this.front = -1;
	}
	isFull() {
		return this.capacity === this.length;
	}
	isEmpty() {
		return this.length === 0;
	}
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
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
		if (this.isEmpty()) {
			return null;
		} else {
			let item = this.items[this.front];
			this.items[this.front] = null;
			this.length--;
			this.front = (this.front + 1) % this.capacity;
			if (this.isEmpty()) {
				this.rear = -1;
				this.front = -1;
			}
			return item;
		}
	}
	peek() {
		return this.items[this.front];
	}
	display() {
		let str = "";
		let i;
		for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
			str += this.items[i] + " ";
		}
		str += this.items[i];
		console.log(str);
	}
}

let circular4 = new CircularQueue4(3);
console.log("circualr que 4 is ");
circular4.enqueue(10);
circular4.enqueue(20);
circular4.enqueue(30);
circular4.enqueue(40);
circular4.display();
console.log(circular4.peek());
circular4.dequeue();
circular4.display();

//5.

class CircularQueue5 {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.length = 0;
		this.rear = -1;
		this.front = -1;
	}
	isFull() {
		return this.capacity === this.length;
	}
	isEmpty() {
		return this.rear - this.front === 0;
	}
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
			this.items[this.rear] = element;
			this.length++;
			if (this.front === -1) {
				this.front = this.rear;
			}
		} else {
			console.log("Circular Queue is Full");
		}
	}
	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		let item = this.items[this.front];
		this.items[this.front] = undefined;
		this.front = (this.front + 1) % this.capacity;
		this.length--;
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
		for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
			str += this.items[i] + " ";
		}
		str += this.items[i];
		console.log(str);
	}
}

let circular5 = new CircularQueue5(3);
console.log("circular 5 is ");
circular5.enqueue(10);
circular5.enqueue(20);
circular5.enqueue(30);
circular5.display();
console.log(circular5.peek());
circular5.dequeue();
circular5.display();

// 6

class CircularQueue6 {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.length = 0;
		this.rear = -1;
		this.front = -1;
	}
	isFull() {
		return this.capacity === this.length;
	}
	isEmpty() {
		return this.length === 0;
	}
	enqueue(element) {
		if (!this.isFull()) {
			this.rear = (this.rear + 1) % this.capacity;
			this.items[this.rear] = element;
			this.length++;
			if (this.front === -1) {
				this.front = this.rear;
			}
		} else {
			return console.log("Queue is full");
		}
	}
	dequeue() {
		let item = this.items[this.front];
		this.items[this.front] = null;
		this.length--;
		this.front = (this.front + 1) % this.capacity;
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
		for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
			str += this.items[i] + " ";
		}
		str += this.items[i];
		console.log(str);
	}
}

let circualr6 = new CircularQueue6(3);
console.log("circular queue 6 is ");
circualr6.enqueue(10);
circualr6.enqueue(20);
circualr6.enqueue(30);
circualr6.enqueue(40);
circualr6.display();
console.log(circualr6.peek());
circualr6.dequeue();
circualr6.display();
