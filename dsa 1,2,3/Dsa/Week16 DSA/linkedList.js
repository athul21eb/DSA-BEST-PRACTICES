// 1.created node and Linked list class
// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}

// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// }

// const list = new LinkedList();
// console.log("List is empty", list.isEmpty());
// console.log("List size is ", list.getSize());

// 2. adding new node start of the list  prepnd() method

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	prepend(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty) {
// 			this.head = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// }

// const list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.prepend(30);

// 3. Linked list print

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	prepend(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}

// 	print() {
// 		if (this.isEmpty()) {
// 			console.log("List is empty");
// 		} else {
// 			let curr = this.head;
// 			let inputValue = "";
// 			while (curr) {
// 				inputValue += `${curr.value} ,`;
// 				curr = curr.next;
// 			}
// 			console.log(inputValue);
// 		}
// 	}
// }

// const list = new LinkedList();
// list.print();
// list.prepend(10);
// list.print();
// list.prepend(20);
// list.prepend(30);
// list.print();
// console.log(list.getSize());

// 4. add node the end of  the list append

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}

// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}

// 	append(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 		} else {
// 			let prev = this.head;
// 			while (prev.next) {
// 				prev = prev.next;
// 			}
// 			prev.next = node;
// 		}
// 		this.size++;
// 	}
// 	print() {
// 		if (this.isEmpty()) {
// 			console.log("List is Empty");
// 		} else {
// 			let curr = this.head;
// 			let val = "";
// 			while (curr) {
// 				val += `${curr.value} ,`;
// 				curr = curr.next;
// 			}
// 			console.log(val);
// 		}
// 	}
// }

// const list = new LinkedList();

// list.print();
// list.append(10);
// list.append(20);
// list.append(30);
// list.print();

// 5. insert node given index

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}

// 	insert(value, index) {
// 		let node = new Node(value);
// 		if (index < 0 || index > this.size) {
// 			return;
// 		}
// 		if (index === 0) {
// 			if (this.isEmpty()) {
// 				this.head = node;
// 			} else {
// 				node.next = this.head;
// 				this.head = node;
// 			}
// 			this.size++;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			node.next = prev.next;
// 			prev.next = node;
// 			this.size++;
// 		}
// 	}
// 	print() {
// 		if (this.isEmpty()) {
// 			return console.log("List is empty");
// 		} else {
// 			let curr = this.head;
// 			let val = "";
// 			while (curr) {
// 				val += `${curr.value} ,`;
// 				curr = curr.next;
// 			}
// 			console.log(val);
// 		}
// 	}
// }

// let list = new LinkedList();
// list.insert(10, 0);
// list.print();
// list.insert(20, 0);
// list.print();
// list.insert(30, 1);
// list.print();

// 6. remove node index

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	insert(value, index) {
// 		let node = new Node(value);
// 		if (index < 0 || index > this.size) {
// 			return null;
// 		}
// 		if (index === 0) {
// 			if (this.isEmpty()) {
// 				this.head = node;
// 			} else {
// 				node.next = this.head;
// 				this.head = node;
// 			}
// 			this.size++;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			node.next = prev.next;
// 			prev.next = node;
// 			this.size++;
// 		}
// 	}
// 	print() {
// 		let curr = this.head;
// 		let val = "";
// 		while (curr) {
// 			val += `${curr.value} ,`;
// 			curr = curr.next;
// 		}
// 		console.log(val);
// 	}
// 	removFrom(index) {
// 		let removeNode;
// 		if (index < 0 || index >= this.size) {
// 			return null;
// 		}
// 		if (index === 0) {
// 			removeNode = this.head;
// 			this.head = this.head.next;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			removeNode = prev.next;
// 			prev.next = removeNode.next;
// 		}
// 		this.size--;
// 		return removeNode.value;
// 	}
// }

// let list = new LinkedList();
// list.insert(10, 0);
// list.print();
// list.insert(20, 0);
// list.print();
// list.insert(30, 1);
// list.print();
// list.removFrom(2);
// list.print();
// list.removFrom(1);
// list.print();

// 7 . remove values

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	insert(val, ind) {
// 		let node = new Node(val);
// 		if (ind < 0 || ind > this.size) {
// 			return null;
// 		}
// 		if (ind === 0) {
// 			if (this.isEmpty()) {
// 				this.head = node;
// 			} else {
// 				node.next = this.head;
// 				this.head = node;
// 			}
// 			this.size++;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < ind - 1; i++) {
// 				prev = prev.next;
// 			}
// 			node.next = prev.next;
// 			prev.next = node;
// 			this.size++;
// 		}
// 	}
// 	print() {
// 		let curr = this.head;
// 		let val = "";
// 		while (curr) {
// 			val += `${curr.value},`;
// 			curr = curr.next;
// 		}
// 		console.log(val);
// 	}
// 	removeValue(val) {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		if (this.head.value === val) {
// 			this.head = this.head.next;
// 			this.size--;
// 			return val;
// 		} else {
// 			let prev = this.head;
// 			let removeNode;
// 			while (prev.next && prev.next.value !== val) {
// 				prev = prev.next;
// 			}
// 			if (prev.next) {
// 				removeNode = prev.next;
// 				prev.next = removeNode.next;
// 				this.size--;
// 				return val;
// 			}
// 			return null;
// 		}
// 	}
// }

// const list = new LinkedList();
// list.insert(10, 0);
// list.insert(20, 0);
// list.insert(30, 1);
// list.insert(30, 1);
// console.log(list.removeValue(10));
// console.log(list.removeValue(10));

// list.print();
// console.log(list.getSize());

// 8. search value

// class Nord {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// insert(value, index) {
// 	let node = new Nord(value);
// 	if (index < 0 || index > this.size) {
// 		return null;
// 	}
// 	if (index === 0) {
// 		this.head = node;
// 	} else {
// 		let prev = this.head;
// 		for (let i = 0; i < index - 1; i++) {
// 			prev = prev.next;
// 		}
// 		node.next = prev.next;
// 		prev.next = node;
// 	}
// 	this.size++;
// }
// 	search(value) {
// 		if (this.isEmpty()) {
// 			return -1;
// 		} else {
// 			let i = 0;
// 			let curr = this.head;
// 			while (curr) {
// 				if (curr.value === value) {
// 					return i;
// 				}
// 				curr = curr.next;
// 				i++;
// 			}
// 			return -1;
// 		}
// 	}
// 	print() {
// 		if (this.isEmpty()) {
// 			return console.log("List is Empty");
// 		} else {
// 			let curr = this.head;
// 			let val = "";
// 			while (curr) {
// 				val += `${curr.value},`;
// 				curr = curr.next;
// 			}
// 			console.log(val);
// 		}
// 	}
// }

// let list = new LinkedList();
// list.insert(10, 0);
// list.insert(20, 1);
// list.insert(30, 1);
// list.print();
// console.log(list.search(20));
// console.log(list.getSize());

// 9 . reverce linked list

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	insert(value, index) {
// 		let node = new Node(value);
// 		if (index < 0 || index > this.size) {
// 			return null;
// 		}
// 		if (index === 0) {
// 			this.head = node;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			node.next = prev.next;
// 			prev.next = node;
// 		}
// 		this.size++;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let val = "";
// 		while (curr) {
// 			val += `${curr.value} ->`;
// 			curr = curr.next;
// 		}
// 		console.log(val);
// 	}
// 	reverse() {
// 		let curr = this.head;
// 		let prev = null;
// 		while (curr) {
// 			let next = curr.next;
// 			curr.next = prev;
// 			prev = curr;
// 			curr = next;
// 		}
// 		this.head = prev;
// 	}
// }

// let list = new LinkedList();
// list.insert(10, 0);
// list.insert(20, 1);
// list.insert(30, 1);
// list.print();
// list.reverse();
// list.print();
// console.log(list.getSize());

// 10. the tail method and middle value find

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	prepend(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// 	append(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let val = "";
// 		while (curr) {
// 			val += `${curr.value},`;
// 			curr = curr.next;
// 		}
// 		console.log(val);
// 	}
// 	removeFront() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let value = this.head.value;
// 			this.head = this.head.next;
// 			this.size--;
// 			return value;
// 		}
// 	}
// 	removeFromEnd() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let value = this.tail.value;
// 			if (this.size === 1) {
// 				this.head = null;
// 				this.tail = null;
// 			} else {
// 				let prev = this.head;
// 				while (prev.next != this.tail) {
// 					prev = prev.next;
// 				}
// 				prev.next = null;
// 				this.tail = prev;
// 			}
// 			this.size--;
// 			return value;
// 		}
// 	}
// 	getMiddele() {
// 		let slow = this.head;
// 		let fast = this.head;
// 		while (fast !== null && fast.next !== null) {
// 			slow = slow.next;
// 			fast = fast.next.next;
// 		}
// 		return slow.value
// 	}
// }

// let list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.append(40);
// list.append(30);
// list.append(30);
// list.print();
// console.log(list.getMiddele());

// 11.delete middle value

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	prepend(value) {
// 		const node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// 	append(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let val = "";
// 		while (curr) {
// 			val += `${curr.value},`;
// 			curr = curr.next;
// 		}
// 		console.log(val);
// 	}
// 	removeFront() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let value = this.head.value;
// 			this.head = this.head.next;
// 			this.size--;
// 			return value;
// 		}
// 	}
// 	removeFromEnd() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let value = this.tail.value;
// 			if (this.size === 1) {
// 				this.head = null;
// 				this.tail = null;
// 			} else {
// 				let prev = this.head;
// 				while (prev.next != this.tail) {
// 					prev = prev.next;
// 				}
// 				prev.next = null;
// 				this.tail = prev;
// 			}
// 			this.size--;
// 			return value;
// 		}
// 	}
// 	getMiddele() {
// 		let slow = this.head;
// 		let fast = this.head;
// 		let prev;
// 		while (fast !== null && fast.next !== null) {
// 			prev = slow;
// 			slow = slow.next;
// 			fast = fast.next.next;
// 		}
// 		prev.next = slow.next;
// 	}
// }

// let list = new LinkedList();
// list.prepend(10);
// list.prepend(20);
// list.append(40);
// list.append(30);
// list.append(30);
// list.print();
// list.getMiddele();
// list.print();

//12 make array to linked list

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	append(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let val = "";
// 		while (curr) {
// 			val += `${curr.value},`;
// 			curr = curr.next;
// 		}
// 		console.log(val);
// 	}
// 	fromArray(arr) {
// 		arr.forEach((val) => this.append(val));
// 	}
// }

// let list = new LinkedList();
// let arr = [8, 9, 90, 87];
// list.fromArray(arr);
// list.append(10);
// list.append(20);
// list.print();

// 13. doubly linked list prepand

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 		this.prev = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	prepand(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head.prev = node;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let value = "";
// 		while (curr) {
// 			value += `${curr.value} <=>`;
// 			curr = curr.next;
// 		}
// 		console.log(value + "null");
// 	}
// }

// let list = new LinkedList();
// list.prepand(10);
// list.prepand(30);
// list.prepand(20);
// list.print();

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	prepand(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// 	append(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}
// 	insert(value, index) {
// 		let node = new Node(value);
// 		if (index < 0 || index > this.size) {
// 			return null;
// 		}
// 		if (index === 0) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			node.next = prev.next;
// 			prev.next = node;
// 		}
// 		this.size++;
// 	}
// 	removeValue(val) {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		if (this.head.value === val) {
// 			this.head = this.head.next;
// 			this.size--;
// 			return val;
// 		} else {
// 			let prev = this.head;
// 			while (prev.next && prev.next.value !== val) {
// 				prev = prev.next;
// 			}
// 			if (prev.next) {
// 				let removeNode = prev.next;
// 				prev.next = removeNode.next;
// 				this.size--;
// 				return val;
// 			}
// 			return null;
// 		}
// 	}
// 	removeValueIndex(ind) {
// 		let removeNode;
// 		if (ind < 0 || ind > this.size) {
// 			return null;
// 		}
// 		if (ind === 0) {
// 			removeNode = this.head;
// 			this.head = this.head.next;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < ind - 1; i++) {
// 				prev = prev.next;
// 			}
// 			removeNode = prev.next;
// 			prev.next = removeNode.next;
// 		}
// 		this.size--;
// 		return removeNode.value;
// 	}
// 	removeLastValue() {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		if (this.head == this.tail) {
// 			this.head = null;
// 			this.tail = null;
// 		} else {
// 			let curr = this.head;
// 			while (curr.next !== this.tail) {
// 				curr = curr.next;
// 			}
// 			curr.next = null;
// 			this.tail = curr;
// 		}
// 		this.size--;
// 	}
// 	removeFirstValue() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			this.head = this.head.next;
// 			this.size--;
// 		}
// 	}
// 	removeMiddleValue() {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		if (this.size === 1) {
// 			return this.head.value;
// 		} else {
// 			let fast = this.head;
// 			let slow = this.head;
// 			let prev;
// 			while (fast !== null && fast.next !== null) {
// 				prev = slow;
// 				slow = slow.next;
// 				fast = fast.next.next;
// 			}
// 			prev.next = slow.next;
// 		}
// 		this.size--;
// 	}
// 	reverse() {
// 		let curr = this.head;
// 		let prev = null;
// 		while (curr) {
// 			let next = curr.next;
// 			curr.next = prev;
// 			prev = curr;
// 			curr = next;
// 		}
// 		this.head = prev;
// 	}
// 	search(val) {
// 		if (this.isEmpty()) {
// 			return -1;
// 		} else {
// 			let i = 0;
// 			let curr = this.head;
// 			while (curr) {
// 				if (curr.value === val) {
// 					return i;
// 				}
// 				curr = curr.next;
// 				i++;
// 			}
// 			return -1;
// 		}
// 	}
// 	removeDuplicate() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let curr = this.head;
// 			while (curr && curr.next) {
// 				if (curr.value === curr.next.value) {
// 					curr.next = curr.next.next;
// 					this.size--;
// 				} else {
// 					curr = curr.next;
// 				}
// 			}
// 		}
// 	}
// 	print() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let curr = this.head;
// 			let result = "";
// 			while (curr) {
// 				result += `${curr.value} >`;
// 				curr = curr.next;
// 			}
// 			console.log(result);
// 		}
// 	}
// 	makeArray(arr) {
// 		arr.forEach((val) => this.append(val));
// 	}
// }

// let list = new LinkedList();
// let arr = [1, 2, 3, 4, 5, 6];
// list.makeArray(arr);
// list.print();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(50);
// list.append(60);
// list.append(70);
// list.append(70);
// list.append(70);
// list.append(80);
// list.append(80);
// list.append(80);
// // list.insert(40, 2);
// console.log("removed value", list.removeValue(50));
// console.log("remove index value ", list.removeValueIndex(2));
// list.removeLastValue();
// list.removeFirstValue();
// list.print();
// list.removeMiddleValue();
// list.print();
// list.reverse();
// list.print();
// list.removeDuplicate();
// list.print();
// console.log(list.search(20));
// console.log(list.getSize());

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	append(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let result = "";
// 		while (curr) {
// 			result += `${curr.value} >`;
// 			curr = curr.next;
// 		}
// 		console.log(result);
// 	}
// 	getMiddleDelete() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let slow = this.head;
// 			let fast = this.head;
// 			let prev;
// 			while (fast !== null && fast.next !== null) {
// 				prev = slow;
// 				slow = slow.next;
// 				fast = fast.next.next;
// 			}
// 			prev.next = slow.next;
// 		}
// 		this.size--;
// 	}
// 	reverse() {
// 		let curr = this.head;
// 		let prev = null;
// 		while (curr) {
// 			let next = curr.next;
// 			curr.next = prev;
// 			prev = curr;
// 			curr = next;
// 		}
// 		this.head = prev;
// 	}
// 	fromArray(arr) {
// 		arr.forEach((val) => this.append(val));
// 	}
// 	firstValueDel() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			this.head = this.head.next;
// 			this.size--;
// 		}
// 	}
// 	lastValueDele() {
// 		let curr = this.head;
// 		while (curr.next !== this.tail) {
// 			curr = curr.next;
// 		}
// 		curr.next = null;
// 		this.tail = curr;
// 		this.size--;
// 	}
// 	valueDele(val) {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		if (this.head.value === val) {
// 			this.head = this.head.next;
// 			this.size--;
// 			return val;
// 		} else {
// 			let prev = this.head;
// 			while (prev.next && prev.next.value !== val) {
// 				prev = prev.next;
// 			}
// 			if (prev.next) {
// 				let remove = prev.next;
// 				prev.next = remove.next;
// 				this.size--;
// 				return val;
// 			}
// 			return null;
// 		}
// 	}
// 	valueDeleInd(ind) {
// 		let remove;
// 		if (ind < 0 || ind > this.size) {
// 			return null;
// 		}
// 		if (ind === 0) {
// 			remove = this.head;
// 			this.head = this.head.next;
// 		} else {
// 			let curr = this.head;
// 			for (let i = 0; i < ind - 1; i++) {
// 				curr = curr.next;
// 			}
// 			remove = curr.next;
// 			curr.next = remove.next;
// 		}
// 		this.size--;
// 		return remove.val;
// 	}
// 	prepend(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// 	insertInd(value, ind) {
// 		let node = new Node(value);
// 		if (ind < 0 || ind > this.size) {
// 			return null;
// 		}
// 		if (ind === 0) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			let curr = this.head;
// 			for (let i = 0; i < ind - 1; i++) {
// 				curr = curr.next;
// 			}
// 			node.next = curr.next;
// 			curr.next = node;
// 		}
// 		this.size++;
// 	}
// 	search(value) {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		if (this.head.value === value) {
// 			return 0;
// 		} else {
// 			let curr = this.head;
// 			let i = 0;
// 			while (curr) {
// 				if (curr.value === value) {
// 					return i;
// 				}
// 				curr = curr.next;
// 				i++;
// 			}
// 			return -1;
// 		}
// 	}
// }

// let arr = [4, 5, 6, 7, 8, 9, 10, 11, 12];
// let list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.print();
// list.getMiddleDelete();
// list.print();
// list.reverse();
// list.print();
// list.fromArray(arr);
// list.print();
// list.firstValueDel();
// list.print();
// list.lastValueDele();
// list.print();
// list.valueDele(10);
// list.print();
// list.valueDeleInd(2);
// list.print();
// list.prepend(1);
// list.prepend(2);
// list.prepend(3);
// list.print();
// list.insertInd(15, 2);
// list.print();
// console.log("the index", list.search(15));
// console.log(list.getSize());

// doubly linked list

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 		this.prev = null;
// 	}
// }

// class doblyLinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	append(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			node.prev = this.tail;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}
// 	prepand(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head.prev = node;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// 	insert(value, ind) {
// 		let node = new Node(value);
// 		if (ind < 0 || ind > this.size) {
// 			return null;
// 		}
// 		if (ind === 0) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			let curr = this.head;
// 			for (let i = 0; i < ind - 1; i++) {
// 				curr = curr.next;
// 			}
// 			node.next = curr.next;
// 			curr.next.prev = node;
// 			curr.next = node;
// 			node.prev = curr;
// 		}
// 		this.size++;
// 	}
// 	deleteNode(value) {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		let curr = this.head;
// 		if (curr.value === value) {
// 			this.head = this.head.next;
// 			if (this.head) {
// 				this.head.prev = null;
// 			} else {
// 				this.tail = null;
// 			}
// 			this.size--;
// 			return;
// 		} else {
// 			while (curr && curr.value !== value) {
// 				curr = curr.next;
// 			}
// 			if (curr) {
// 				if (curr.next) {
// 					curr.next.prev = curr.next;
// 				} else {
// 					this.tail = curr.prev;
// 				}
// 				if (curr.prev) {
// 					curr.prev.next = curr.next;
// 				}
// 			}
// 			this.size--;
// 		}
// 	}
// 	deleteFirst() {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		this.head = this.head.next;
// 		if (this.head) {
// 			this.head.prev = null;
// 		} else {
// 			this.tail = null;
// 		}
// 		this.size--;
// 	}
// 	deleteLast() {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		this.tail = this.tail.prev;
// 		if (this.tail) {
// 			this.tail.next = null;
// 		} else {
// 			this.head = null;
// 		}
// 		this.size--;
// 	}
// 	search(value) {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let curr = this.head;
// 			let i = 0;
// 			while (curr !== null) {
// 				if (curr.value == value) {
// 					return i;
// 				}
// 				curr = curr.next;
// 				i++;
// 			}
// 		}
// 		return null;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let result = "";
// 		while (curr) {
// 			result += `${curr.value}<->`;
// 			curr = curr.next;
// 		}
// 		console.log(result + "null");
// 	}
// }

// let list = new doblyLinkedList();
// list.append(10);
// list.append(70);
// list.append(80);
// list.append(20);
// list.print();
// list.prepand(5);
// list.prepand(0);
// list.print();
// list.insert(15, 2);
// list.print();
// list.deleteNode(15);
// list.print();
// list.deleteFirst();
// list.deleteLast();
// list.print();
// console.log(list.search(10));
// list.reverse();
// list.print();
// console.log("size=", list.getSize());

// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 		this.size = 0;
// 	}
// 	isEmpty() {
// 		return this.size === 0;
// 	}
// 	getSize() {
// 		return this.size;
// 	}
// 	append(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			this.tail.next = node;
// 			this.tail = node;
// 		}
// 		this.size++;
// 	}
// 	prepand(value) {
// 		let node = new Node(value);
// 		if (this.isEmpty()) {
// 			this.head = node;
// 			this.tail = node;
// 		} else {
// 			node.next = this.head;
// 			this.head = node;
// 		}
// 		this.size++;
// 	}
// 	insert(value, index) {
// 		let node = new Node(value);
// 		if (index < 0 || index > this.size) {
// 			return -1;
// 		}
// 		if (index === 0) {
// 			if (this.isEmpty()) {
// 				this.head = node;
// 				this.node = node;
// 			} else {
// 				node.next = this.head;
// 				this.head = node;
// 			}
// 			this.size++;
// 		} else {
// 			let prev = this.head;
// 			for (let i = 0; i < index - 1; i++) {
// 				prev = prev.next;
// 			}
// 			node.next = prev.next;
// 			prev.next = node;
// 			this.size++;
// 		}
// 	}
// 	deleteMiddle() {
// 		let slow = this.head;
// 		let fast = this.head;
// 		let prev;
// 		while (fast !== null && fast.next !== null) {
// 			prev = slow;
// 			slow = slow.next;
// 			fast = fast.next.next;
// 		}
// 		prev.next = slow.next;
// 		this.size--;
// 	}
// 	deleteFirst() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let value = this.head.value;
// 			this.head = this.head.next;
// 			this.size--;
// 			return value;
// 		}
// 	}
// 	deleteEnd() {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let curr = this.head;
// 			while (curr.next !== this.tail) {
// 				curr = curr.next;
// 			}
// 			curr.next = null;
// 			this.tail = curr;
// 			this.size--;
// 		}
// 	}
// 	deleteValue(value) {
// 		if (this.isEmpty()) {
// 			return null;
// 		}
// 		if (this.head.value === value) {
// 			this.head = this.head.next;
// 			this.size--;
// 			return value;
// 		} else {
// 			let removeNode;
// 			let curr = this.head;
// 			while (curr.next && curr.next.value !== value) {
// 				curr = curr.next;
// 			}
// 			if (curr.next) {
// 				removeNode = curr.next;
// 				curr.next = removeNode.next;
// 				this.size--;
// 				return value;
// 			}
// 			return null;
// 		}
// 	}
// 	deleteValueIndex(ind) {
// 		let removeNode;
// 		if (ind < 0 || ind > this.size) {
// 			return null;
// 		}
// 		if (ind === 0) {
// 			removeNode = this.head;
// 			this.head = this.head.next;
// 		} else {
// 			let curr = this.head;
// 			for (let i = 0; i < ind - 1; i++) {
// 				curr = curr.next;
// 			}
// 			removeNode = curr.next;
// 			curr.next = removeNode.next;
// 		}
// 		this.size--;
// 		return removeNode.value;
// 	}
// 	search(value) {
// 		if (this.isEmpty()) {
// 			return null;
// 		} else {
// 			let i = 0;
// 			let curr = this.head;
// 			while (curr !== null) {
// 				if (curr.value === value) {
// 					return i;
// 				}
// 				curr = curr.next;
// 				i++;
// 			}
// 		}
// 	}
// 	reverse() {
// 		let curr = this.head;
// 		let prev = null;
// 		while (curr) {
// 			let next = curr.next;
// 			curr.next = prev;
// 			prev = curr;
// 			curr = next;
// 		}
// 		this.head = prev;
// 	}
// 	print() {
// 		let curr = this.head;
// 		let val = "";
// 		while (curr) {
// 			val += `${curr.value} >`;
// 			curr = curr.next;
// 		}
// 		console.log(val);
// 	}
// 	fromArray(arr) {
// 		arr.forEach((val) => this.append(val));
// 	}
// }

// let list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
// list.deleteMiddle();
// list.print();
// list.prepand(4);
// list.prepand(5);
// list.print();
// list.insert(2, 3);
// list.print();
// list.deleteFirst();
// list.print();
// list.deleteEnd();
// list.print();
// list.deleteValue(4);
// list.print();
// list.deleteValueIndex(2);
// list.print();
// console.log("search", list.search(3));
// list.reverse();
// list.print();
// let arr = [9, 8, 10, 11, 12];
// list.fromArray(arr);
// list.print();
// console.log("size is ", list.getSize());

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class doublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
	isEmpty() {
		return this.size === 0;
	}
	getSize() {
		return this.size;
	}
	append(value) {
		let node = new Node(value);
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node;
		}
		this.size++;
	}
	prepand(value) {
		let node = new Node(value);
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head.prev = node;
			this.head = node;
		}
		this.size++;
	}
	print() {
		let curr = this.head;
		let res = "";
		while (curr) {
			res += `${curr.value}<->`;
			curr = curr.next;
		}
		console.log(res);
	}
}

let list = new doublyLinkedList();
list.append(1);
list.append(2);
list.print();
list.prepand(3);
list.prepand(4);
list.print();
