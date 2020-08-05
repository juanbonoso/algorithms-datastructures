class CrazyQueue {
    constructor() {
        this.stack = [];
        this.data = [];
        this.length = 0;
    }
    peek() {
        return this.data[this.data.length - 1];
    }

    push(value) {
        if (this.isEmpty()) {
            this.stack.push(value);
            this.data.push(value);
        } else {
            this.stack.push(value);
            this.data = [];
            const tempStack = [...this.stack];
            const length = tempStack.length;
            for (let i = 0; i < length; i++) {
                const top = tempStack.pop();
                this.data.push(top);
            }
        }
        this.length++;
    }

    pop() {
        this.data.pop();
        this.length--;
    }

    isEmpty() {
        return !this.length;
    }

    print() {
        console.log(this.data);
    }
}

const crazyQueue = new CrazyQueue();
crazyQueue.push('1');
crazyQueue.push('2');
crazyQueue.push('3');
crazyQueue.push('4');
crazyQueue.push('5');

crazyQueue.print();
crazyQueue.pop();
crazyQueue.pop();
crazyQueue.print();

console.log(crazyQueue.peek());
