class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }
}

function display(node) {
  if (!node) return null;
  console.log(node.value);
  for (let child of node.children) {
    display(child);
  }
}

function Sum(node) {
  if (!node) return 0;
  let sum = node.value;
  for (let child of node.children) {
    sum += Sum(child);
  }

  return sum;
}

function MaxNode (node){
  if(!node)return -Infinity;
  let max = node.value;

  for(let child of node.children){
    max = Math.max(max,MaxNode(child));
  }

  return max;
}

function Count (node){
  if(!node)return 0;
  let count = 1;

  for(let child of node.children){
    count +=Count(child);
  }
  return count;
}

const root = new TreeNode(10);
const c1 = new TreeNode(1);
const c2 = new TreeNode(3);
c2.addChild(new TreeNode(116));

root.addChild(c1);
root.addChild(c2);

display(root);

console.log("sum =>", Sum(root));
console.log("Max =>",MaxNode(root));
console.log("Count =>",Count(c2))
