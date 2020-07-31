class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        } // O(1)
        return hash;
    }
    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            // we can have colissions
            this.data[address] = [[key, value]];
        } else {
            for (let pair of this.data[address]) {
                if (key == pair[0]) {
                    pair[1] = value;
                    return this.data;
                }
            }
            this.data[address].push([key, value]);
        }
        return this.data; // O(1)
    }
    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
            // NO COLLISION O(1)--> REAL LIFE MOST TIMES IS O(1)
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keysArray.push(this.data[i][j][0]);
                }
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(3);
myHashTable.set('grapes', 10000);
myHashTable.set('grapes', 55);
myHashTable.set('apples', 54);
myHashTable.set('apples', 20);
myHashTable.set('oranges', 117);

console.log(myHashTable.data);

console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
