// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(value) {
//     let node = new ListNode(value);
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   removeFromFront() {
//     if (!this.head) {
//       console.log("list is Empty form remove from front");
//       return null;
//     }
//     let removed = this.head.value;
//     if (!this.head.next) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = this.head.next;
//     }
//     return removed;
//   }

//   print() {
//     if (!this.head) {
//       console.log("List is empty form print");
//       return null;
//     }

//     let List = "";
//     let curr = this.head;

//     while (curr) {
//       List += curr.value + (curr.next ? "<==" : "");
//       curr = curr.next
//     }
//     console.log(List);
//     return List
//   }
// }

// class Queue {
//   constructor(){
//     this.items = new LinkedList();
//     this.size = 0;
//   }

//   enqueue(value){
//     this.items.append(value);
//     this.size++;
//   }

//   dequeue(){
//     if(!this.size){
//       console.log("Queue is Empty");
//       return null;
//     }else{
//       let value = this.items.removeFromFront();
//       this.size--;
//       return value;
//     }

//   }

//   display(){
//     if(!this.size){
//       console.log("Queue is Empty");
//       return null;
//     }

//     return this.items.print();

//   }
// }

// const   q = new Queue();
// q.display();
// q.enqueue(10);
// q.display();
// q.enqueue(20);
// q.display();
// q.enqueue(30);
// q.display();
// q.dequeue();
// q.display();
// q.dequeue();
// q.display();
// q.dequeue();
// q.display();

//

// class Queue {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.items = new Array(capacity);
//     this.front = -1;
//     this.rear = -1;
//     this.currentLength = 0;
//   }

//   isFull() {
//     return this.currentLength === this.capacity;
//   }

//   isEmpty() {
//     return this.currentLength === 0;
//   }
//   getSize() {
//     return this.currentLength;
//   }

//   enqueue(element) {
//     if (this.isFull()) {
//       console.log("queue is Overflow ");
//       return null;
//     }

//     if (this.isEmpty()) {
//       this.front = 0;
//     }

//     this.rear = (this.rear + 1) % this.capacity;
//     this.items[this.rear] = element;
//     this.currentLength++;
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       console.log("queue is UnderFlow");
//       return null;
//     }

//     let value = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength--;

//     if (this.currentLength === 0) {
//       this.front = -1;
//       this.rear = -1;
//     }
//     return value;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       console.log("queue is UnderFlow");
//       return null;
//     }

//     return this.items[this.front];
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("queue is UnderFlow");
//       return null;
//     }

//     let List = " ";

//     for (let i = 0; i < this.currentLength; i++) {
//       let index = (this.front + i) % this.capacity;
//       List += this.items[index] + " ";
//     }

//     return List;
//   }
// }

// const queue = new Queue(5);
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(0);
// queue.enqueue(410);
// queue.enqueue(50);
// queue.enqueue(70);
// console.log(queue.getSize());
// console.log(queue.print());
// queue.dequeue();
// queue.dequeue();
// console.log(queue.getSize());
// console.log(queue.print());

// class QueueFromStack {
//   constructor() {
//     this.currentLength = 0;
//     this.stack1 = [];
//     this.stack2 = [];
//   }

//   enqueue(element) {
//     this.stack1.push(element);
//     this.currentLength++;
//   }

//   dequeue() {
//     if (this.currentLength === 0) {
//       console.log("queue is UnderFlow ");
//       return undefined;
//     }
//     if (this.stack2.length === 0) {
//       while (this.stack1.length) {
//         this.stack2.push(this.stack1.pop());
//       }
//     }

//     this.currentLength--;
//     return this.stack2.pop();
//   }
// }

// const queue = new QueueFromStack();
// queue.enqueue(10);
// queue.enqueue(101);
// queue.enqueue(102);
// queue.enqueue(103);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(109);
// console.log(queue.dequeue());
// console.log(queue.dequeue());

class Queue {
  constructor(capacity) {
    this.capacity = capacity;
    this.items = new Array(capacity);
    this.front = 0;
    this.rear = -1;
    this.currentLength = 0;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }
  enqueue(element) {
    if (this.isFull()) {
      console.log("queue is overflow");
      return null;
    }

    this.items[++this.rear] = element;
    this.currentLength++;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is Underflow");
      return null;
    }
    let value = this.items[this.front++];
    this.currentLength--;

    if (this.currentLength === 0) {
      this.front = 0;
      this.rear = -1;
    }
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("queue is Underflow");
      return null;
    }
    return this.items[this.front];
  }

  print() {
    if (this.isEmpty()) {
      console.log("queue is empty");
      return null;
    }
    for (let i = this.front; i - 1 !== this.rear; i++) {
      console.log(this.items[i]);
    }
  }
}

const queue = new Queue();
queue.enqueue(10);
console.log(queue.peek());
queue.enqueue(20);
console.log(queue.dequeue());
queue.print()
console.log(queue.peek(),'llll');
queue.enqueue(60);
queue.enqueue(2);
queue.enqueue(90);
queue.enqueue(10);
queue.print()
