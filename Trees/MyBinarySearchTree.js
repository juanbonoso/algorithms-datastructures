class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) this.root = newNode;
        else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value) {
        //Code here
        if (!this.root) {
            return false;
        }

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }
    remove(value) {
        if (!this.root.value) {
            return false;
        }
        let currentNode = this.root;
        let previousNode = {};
        while (currentNode) {
            if (value < currentNode.value) {
                previousNode.direction = 'left';
                previousNode.node = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                previousNode.direction = 'right';
                previousNode.node = currentNode;
                currentNode = currentNode.right;
            } else if (value === currentNode.value) {
                // has no childs
                if (!currentNode.right && !currentNode.left) {
                    currentNode = null;
                    previousNode.node[previousNode.direction] = null;
                }
                // has children
                else if (currentNode.right && currentNode.left) {
                    const nextRightElement = currentNode.right;
                    // has granchildren
                    if (nextRightElement.left) {
                        previousNode.node[previousNode.direction] = nextRightElement.left;
                        nextRightElement.left.left = currentNode.left;
                        nextRightElement.left.right = nextRightElement.right;
                        currentNode = null;
                        // has only children
                    } else {
                        previousNode.node[previousNode.direction] = nextRightElement;
                        if (currentNode.left) nextRightElement.left = currentNode.left;
                        currentNode = null;
                    }
                }
            }
        }
    }

    traverse(node) {
        const tree = { value: node.value };
        tree.left = node.left === null ? null : this.traverse(node.left);
        tree.right = node.right === null ? null : this.traverse(node.right);
        return tree;
    }
    print() {
        console.log(JSON.stringify(this.traverse(tree.root)));
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(150);
tree.insert(180);

tree.print();
//     9
//  4     20
//1  6  15  170
//        150   180

console.log(tree.lookup(9));
tree.remove(20);
console.log(tree.lookup(9));
