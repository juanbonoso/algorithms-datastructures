class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Correct Implementation Also
class Stack {
    constructor() {
        this.data = [];
    }
    peek() {
        return this.data[this.data.length - 1];
    }
    push(value) {
        this.data.push(value);
    }
    pop() {
        this.data.pop();
    }
    isEmpty() {
        return !this.top && !this.bottom && !this.length;
    }
    print() {
        console.log(this.data);
    }
}

const myStack = new Stack();
console.log(myStack.isEmpty());
myStack.push(20);
myStack.push(30);
myStack.push(40);
console.log(myStack.peek());
myStack.print();
myStack.pop();
myStack.pop();
myStack.print();
