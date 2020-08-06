class CrazyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
        this.front = null;
    }

    peek() {
        if (this.stack1.length) {
            return this.front;
        }
        return this.stack2[this.stack2.length - 1]; // peek from stack 2
    }

    push(value) {
        if (this.stack1.length === 0) {
            this.front = value;
        }
        this.stack1.push(value);
    }

    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
    print() {
        console.log(this.stack1, this.stack2);
    }
    isEmpty() {
        return !this.stack1.length && !this.stack2.length;
    }
}

const myQueue = new CrazyQueue();
myQueue.push('Joy');
myQueue.push('Matt');
myQueue.push('Pavel');
myQueue.print();
console.log(myQueue.peek());
myQueue.pop();
myQueue.print();
console.log(myQueue.peek());
