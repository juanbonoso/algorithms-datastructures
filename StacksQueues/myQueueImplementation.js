class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
    }
    dequeue() {
        if (this.isEmpty()) return;
        if (this.length === 1) this.last = null;
        this.first = this.first.next;
        this.length--;
    }
    isEmpty() {
        return !this.first && !this.last & !this.length;
    }
    print() {
        console.log('First', this.first);
        console.log('Last', this.last);
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
myQueue.print();
myQueue.dequeue();
myQueue.dequeue();
myQueue.print();
console.log('peek', myQueue.peek());
//Joy
//Matt
//Pavel
//Samir
