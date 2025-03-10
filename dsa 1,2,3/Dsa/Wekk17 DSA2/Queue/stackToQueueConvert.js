class QueueFromStacks {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	enqueue(value) {
		this.stack1.push(value);
	}

	dequeue() {
		if (this.isEmpty()) {
			return "Queue is empty";
		}

		if (this.stack2.length === 0) {
			while (this.stack1.length > 0) {
				this.stack2.push(this.stack1.pop());
			}
		}

		return this.stack2.pop();
	}

	isEmpty() {
		return this.stack1.length === 0 && this.stack2.length === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return "Queue is empty";
		}

		if (this.stack2.length === 0) {
			while (this.stack1.length > 0) {
				this.stack2.push(this.stack1.pop());
			}
		}

		return this.stack2[this.stack2.length - 1];
	}
}

let queue = new QueueFromStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
