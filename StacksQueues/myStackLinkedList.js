class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek() {
        return this.top;
    }
    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.top = newNode;
            this.bottom = this.top;
            this.length++;
            return;
        }
        this.top.next = newNode;
        this.top = newNode;
        this.length++;
    }
    pop() {
        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.length = 0;
            return;
        }
        let currentNode = this.bottom;
        let currentIndex = 0;
        while (currentIndex !== this.length - 2) {
            currentNode = currentNode.next;
            currentIndex++;
        }
        currentNode.next = null;
        this.top = currentNode;
        this.length--;
    }
    isEmpty() {
        return !this.top && !this.bottom && !this.length;
    }
    print() {
        console.log(this.top);
        console.log(this.bottom);
    }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);
myStack.push(60);
console.log(myStack.isEmpty());
myStack.print();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.print();
console.log(myStack.isEmpty());
