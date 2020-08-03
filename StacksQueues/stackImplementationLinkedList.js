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
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
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
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
myStack.print();
