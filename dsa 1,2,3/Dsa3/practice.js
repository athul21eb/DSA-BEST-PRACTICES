class BstNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BstNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.#HelperInsert(this.root, newNode);
    }
  }

  #HelperInsert(root, node) {
    if (node.value < root.value) {
      if (root.left === null) root.left = node;
      else this.#HelperInsert(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.#HelperInsert(root.right, node);
    }
  }

  inOrder(root = this.root) {
    if (!root) return null;
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }
}

const bst = new Bst();
bst.insert(35);
bst.insert(569999);
bst.insert(568);
bst.inOrder();


class BstNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BstNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.#HelperInsert(this.root, newNode);
    }
  }

  #HelperInsert(root, node) {
    if (node.value < root.value) {
      if (root.left === null) root.left = node;
      else this.#HelperInsert(root.left, node);
    } else {
      if (root.right === null) root.right = node;
      else this.#HelperInsert(root.right, node);
    }
  }

  inOrder(root = this.root) {
    if (!root) return null;
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right);
  }

  delete(value){
      this.root = this.#Helperdelete(this.root,value);

  }

  #Helperdelete(root,value){
      if(root===null)return root;
      if(root.value<value){
         root.left = this.#Helperdelete(root.left,value);
      }else if(root.value>value){
          root.right = this.#Helperdelete(root.right,value);
      }else{
          if(!root.left&&!root.right){
              return  null;
          }else if(!root.left){
              return  root.right;

      }else if(!root.right ){
         return  root.left;
      }else{
         root.value = this.findMinValue(root.right);
          root.right = this.#Helperdelete(root.right,root.value);

      }


      }
      return root;
  }


  #Helperdelete(root,value){
      if(root===null)return root;
      if(root.value<value){
         root.left = this.#Helperdelete(root.left,value);
      }else if(root.value>value){
          root.right = this.#Helperdelete(root.right,value);
      }else{
          if(!root.left&&!root.right){
              return  null;
          }else if(!root.left){
              return  root.right;

      }else if(!root.right ){
         return  root.left;
      }else{
         root.value = this.findMinValue(root.right);
          root.right = this.#Helperdelete(root.right,root.value);

      }


      }
      return root;
  }

  findMinValue(root =this.root){
      if(!root) return null
      if(!root.left)return root.value;
     return  this.findMinValue(root.left)

  }

 isBst(root =this.root,min=-Infinity,max=Infinity){
     if(!root)return true;

     if(root.value<=min || root.value>=max)return false;

     return (this.isBst(root.left,min,root.value)&&this.isBst(root.right,root.value,max));
 }

 search(value){

     return this.#Hsearch(this.root,value);
 }

 #Hsearch(root,value){
     if(!root)return false;
     if(root.value===value)return true;
     if(value<root.value)return this.#Hsearch(root.left,value);
     else return this.#Hsearch(root.right,value);
 }

 bfs(root=this.root){
     if(!root) return null;

     let queue = [root];


     while(queue.length){
         let curr = queue.shift();
         console.log(curr.value);

         if(curr.left)queue.push(curr.left);
         if(curr.right)queue.push(curr.right);


     }
 }

findHeight(root = this.root){
    if(!root)return -1;

    return 1 + Math.max(this.findHeight(root.left),this.findHeight(root.right));
}

}

const bbst = new Bst();
bst.insert(35);
bst.insert(569999);
bst.insert(568);
bst.insert(0);
bst.inOrder();
console.log('min =>',bst.findMinValue())
bst.delete(568);

console.log(bst.isBst())
bst.bfs()

console.log(bst.findHeight())
console.log(bst.search());
