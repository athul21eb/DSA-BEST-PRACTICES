class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    let node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else if (!this.head.next) {
      this.head.next = node;
      this.tail = node;
    } else {
      node.next = this.head.next;
      this.head.next = node;
    }
  }

  pop() {
    if (!this.head) {
      console.log("list is empty from pop");
      return null;
    }
    let value = this.head.value;
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      let curr = this.head.next;
      this.head = curr;
    }

    return value;
  }

  print() {
    if (!this.head) {
      console.log("List is Empty form print");
      return null;
    }

    let List = this.head.value + "=>";
    let curr = this.head.next;
    while (curr) {
      List += curr.value + (curr.next ? "=>" : "");
      curr = curr.next;
    }

    console.log(List)
  }
}

class Stack {
  constructor(){
    this.items = new LinkedList();
    this.size =0;
  }

  push(value){
    this.items.prepend(value);
    this.size++;
  }

  pop(){
    if(!this.size){
      console.log("stack is empty! cant pop");
      return null;
    }

    let value =  this.items.pop();
    this.size--;
    return value;
  }

  display(){

    if(!this.size){
      console.log("stack is empty form display");
      return null;
    }
    this.items.print();

  }
}

let stacked = new Stack();
stacked.display();
stacked.push(10);
stacked.push(20);
stacked.push(30);
stacked.display();
stacked.pop();
stacked.display();

// class Stack {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.items = [];
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   push(element) {
//     if (this.items.length === this.capacity) {
//       console.log("stack overflow ");
//       return null;
//     }
//     this.items.push(element);
//   }

//   pop() {
//     return this.items.pop();
//   }

//   print() {
//     let List = "";
//     for (let i in this.items) {
//       List += this.items[i] + " ";
//     }
//     return List;
//   }
// }

// const stack = new Stack(5);

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.push(6);
// console.log(stack.print());
// stack.pop();
// stack.pop();

// stack.pop();

// stack.pop();


// console.log(stack.print());
// console.log(stack.peek());


// class Stack {
//   constructor(){
//     this.items = [];
//   }


//   isPalindrome(str){

//     for(let char of str) {
//       this.items.push(char);
//     }

//     for(let char of str){

//       if( char !== this.items.pop()){
//         return false;
//       }
//     }

//     return true;
//   }
// }

// const stack = new Stack();
// console.log(stack.isPalindrome("malayalam"));
// console.log(stack.isPalindrome("mala"));