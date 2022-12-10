// const readFile = "./2164/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const input = Number(fs.readFileSync(readFile).toString().trim());

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this._size++;
    }

    getHead() {
        return this.head.value;
    }

    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }

    getSize() {
        return this._size;
    }
}

const list = new LinkedList();

for (let i = 1; i <= input; i++) {
    list.push(i);
}

while (list.getSize() !== 1) {
    list.removeHead();
    list.push(list.getHead());
    list.removeHead();
}

console.log(list.getHead());
