class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}
	isEmpty() {
		return this.count === 0;
	}
	push(element) {
		this.items[this.count] = element;
		this.count++;
	}
	pop() {
		let item = this.items[this.count - 1];
		this.count--;
		return item;
	}
	peek() {
		return this.items[this.count - 1];
	}
	display() {
		let str = "";
		for (let i = 0; i < this.count; i++) {
			str += this.items[i] + " ";
		}
		console.log(str);
	}
}

class Queue {
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
	peek() {
		return this.items[0];
	}
	display() {
		console.log(this.items);
	}
}

let stack = new Stack();
stack.push(10);
stack.push(20);

let queue = new Queue();
queue.enqueue(30);
queue.enqueue(40);
queue.display();

function toMerge(stack, queue) {
	while (!queue.isEmpty()) {
		let element = queue.dequeue();
		stack.push(element);
	}
}

toMerge(stack, queue);
stack.display();
