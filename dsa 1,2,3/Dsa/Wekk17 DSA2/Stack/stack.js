class Stack {
	constructor() {
		this.items = [];
		this.count = 0;
	}
	isEmpty() {
		return this.count === 0;
	}
	getSize() {
		return this.count;
	}
	push(element) {
		this.items[this.count] = element;
		this.count++;
		return this.count - 1;
	}
	pop() {
		if (this.isEmpty()) return null;
		let item = this.items[this.count - 1];
		this.count--;
		return item;
	}
	peek() {
		return this.items[this.count - 1];
	}
	print() {
		let str = "";
		for (let i = 0; i < this.count; i++) {
			str += this.items[i] + " ";
		}
		console.log(str);
	}
}

let stack = new Stack();
stack.push(10);
console.log(stack.push(20));
stack.push(30);
console.log(stack.peek());
stack.print();
stack.pop();
stack.print();
console.log(stack.getSize());

//2.

class Stack2 {
	constructor() {
		this.items = [];
		this.count = 0;
	}
	push(valaue) {
		this.items[this.count] = valaue;
		this.count++;
		return this.count - 1;
	}
	pop() {
		let item = this.items[this.count - 1];
		this.count--;
		return item;
	}
	peek() {
		return this.items[this.count - 1];
	}
	isEmpty() {
		return this.count === 0;
	}
	display() {
		let str = "";
		for (let i = 0; i < this.count; i++) {
			str += this.items[i] + " ";
		}
		console.log(str);
	}
}

let stack2 = new Stack2();
console.log("stack2 is ");
stack2.push(10);
stack2.push(20);
stack2.push(30);
console.log(stack2.isEmpty());
console.log(stack2.peek());
stack2.display();
stack2.pop();
stack2.display();

//3.

class Stack3 {
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

let stack3 = new Stack3();
console.log("stack 3 is ");
console.log(stack3.isEmpty());
stack3.push(10);
stack3.push(20);
stack3.push(30);
stack3.display();
console.log(stack3.peek());
stack3.pop();
stack3.display();

//4.

class Stack4 {
	constructor() {
		this.items = [];
		this.count = 0;
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
	middle() {
		return this.items[Math.floor(this.count / 2)];
	}
	display() {
		let str = "";
		for (let i = 0; i < this.count; i++) {
			str += this.items[i] + " ";
		}
		console.log(str);
	}
}

let stack4 = new Stack4();
console.log("stack 4 is ");
stack4.push(10);
stack4.push(20);
stack4.push(30);
stack4.push(40);
stack4.push(50);
stack4.display();
console.log(stack4.peek());
console.log("the middle element is ", stack4.middle());

// stack4.pop();
// stack4.display();

//5.

class Stack5 {
	constructor() {
		this.items = [];
		this.count = 0;
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

let stack5 = new Stack5();

//.reverse string

function reverceString(str) {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}
	let reverse = "";
	while (stack.length > 0) {
		reverse += stack.pop();
	}

	return reverse;
}

let str = "sheheer";
reverceString(str);
console.log(reverceString(str));

// array reverce

function arrayReverce(arr) {
	let stack = [];
	for (let i = 0; i < arr.length; i++) {
		stack.push(arr[i]);
	}
	let reverce = [];
	for (let i = 0; i < arr.length; i++) {
		reverce[i] = stack.pop();
	}
	return reverce;
}

let arr = [1, 2, 3, 4, 5, 6];
let reversedArr = arrayReverce(arr);
console.log(reversedArr);

//6.

class Stack6 {
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
	// display() {
	// 	let str = "";
	// 	for (let i = 0; i < this.items.length; i++) {
	// 		str += this.items[i];
	// 	}
	// 	console.log(str);
	// }
}

// function reverceString1(str1) {
// 	let stack6 = new Stack6();
// 	for (let i = 0; i < str1.length; i++) {
// 		stack6.push(str1[i]);
// 	}
// 	let reverce = "";
// 	while (!stack6.isEmpty()) {
// 		reverce += stack6.pop();
// 	}
// 	return reverce;
// }

// let str1 = "hello";
// let reverce1 = reverceString1(str1);
// console.log(reverce1);

function reverceArry(arr1) {
	let stack6 = new Stack6();
	for (let i = 0; i < arr1.length; i++) {
		stack6.push(arr1[i]);
	}
	let arr2 = [];
	while (!stack6.isEmpty()) {
		arr2.push(stack6.pop());
	}

	return arr2;
}

let arr1 = [1, 23, 3, 4, 5, 6];
let revercedArray = reverceArry(arr1);
console.log("reverced array is ", revercedArray);
