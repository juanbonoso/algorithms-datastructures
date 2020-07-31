class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value);
        // Last node pointer, points to the new node
        this.tail.next = newNode;
        // make the tail our new node
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        console.log(this.tail);
    }
    // Loop until a position before the index
    // Save the pointer of our current node
    // current node nows point to new node
    // newNode points to previous pointer
    insert(indexToInsert, value) {
        if (indexToInsert === 0) {
            return this.prepend(value);
        } else if (indexToInsert >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(indexToInsert - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }

    remove(indexToDelete) {
        if (indexToDelete === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }
        const leader = this.traverseToIndex(indexToDelete - 1);
        let nodeToDelete = leader.next;
        if (indexToDelete === this.length - 1) {
            nodeToDelete = null;
            leader.next = null;
            this.tail = leader;
        } else {
            // the element next to the one to be deleted
            leader.next = nodeToDelete.next;
            // javascript will automatically delete nodeToDelete since there's no pointer
        }
        this.length--;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        for (let x = this.length - 1; x > 0; x--) {
            let currentNode = this.head;
            for (let i = 0; i < x; i++) {
                const nextNode = currentNode.next;
                const tempCurrentNodeVaue = currentNode.value;
                currentNode.value = nextNode.value;
                nextNode.value = tempCurrentNodeVaue;
                currentNode = currentNode.next;
            }
        }
    }
    reverseImproved() {
        // Time O(n)
        // Space O(1)
        if (!this.head.next) {
            return this.head;
        }
        let previousNode = null;
        let currentNode = this.head;
        this.tail = currentNode;
        let nextNode = null;
        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = nextNode;
        }
        this.head = previousNode;
        console.log(JSON.stringify(this.head))
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);
myLinkedList.append(60);
myLinkedList.printList();
myLinkedList.reverse2();
myLinkedList.printList();
