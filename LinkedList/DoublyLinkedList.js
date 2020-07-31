class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        // Last node pointer, points to the new node
        newNode.previous = this.tail;
        this.tail.next = newNode;
        // make the tail our new node
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.previous = newNode;
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
        const follower = leader.next;
        leader.next = newNode;
        newNode.previous = leader;
        newNode.next = follower;
        follower.previous = newNode;
        this.length++;
    }

    remove(indexToDelete) {
        if (indexToDelete === 0) {
            this.head = this.head.next;
            this.head.previous = null;
            this.length--;
            return;
        } else if (indexToDelete === this.length - 1) {
            const previousNode = this.tail.previous;
            previousNode.next = null;
            this.tail = previousNode;
            this.length--;
            return;
        }
        const leader = this.traverseToIndex(indexToDelete - 1);
        let nodeToDelete = leader.next;
        // the element next to the one to be deleted
        const nodeNextToBeDeleted = nodeToDelete.next;
        leader.next = nodeNextToBeDeleted;
        nodeNextToBeDeleted.previous = leader;
        // javascript will automatically delete nodeToDelete since there's no pointer
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.printList();
myLinkedList.insert(3, 35);
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();
myLinkedList.insert(4, 100);
myLinkedList.printList();
