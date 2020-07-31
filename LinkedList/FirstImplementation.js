// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

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
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(20);
myLinkedList.append(30);
myLinkedList.append(40);
myLinkedList.append(50);
myLinkedList.prepend(10);
myLinkedList.prepend(5);
myLinkedList.prepend(4);
myLinkedList.prepend(3);
myLinkedList.append(60);
myLinkedList.insert(3, 6);
myLinkedList.insert(3, 5.5);
myLinkedList.insert(4, 5.7);
myLinkedList.insert(200, 99);
myLinkedList.insert(0, -5);
myLinkedList.insert(30, 850);
myLinkedList.printList();

myLinkedList.remove(0);
myLinkedList.printList();

myLinkedList.remove(3);
myLinkedList.printList();

myLinkedList.remove(13);

myLinkedList.printList();
