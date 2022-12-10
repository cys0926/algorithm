// const readFile = "./11866/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const [N, K] = fs
    .readFileSync(readFile)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item));

// class Node {
//     constructor(value) {
//         this.value = value;
//         this.prev = null;
//         this.next = null;
//     }
// }
//
// class CircularQueue {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this._size = 0;
//     }
//
//     push(value) {
//         const newNode = new Node(value);
//
//         if (!this.head) {
//             this.head = newNode;
//             this.head.next = null;
//         } else {
//             this.tail.next = newNode;
//         }
//         this.tail = newNode;
//         this._size++;
//     }
//
//
// }

let list = [];

let result = [];

for (let i = 1; i <= N; i++) {
    list.push(i);
}

while (list.length > 0) {
    for (let i = 0; i < K - 1; i++) {
        let a = list.shift();
        list.push(a);
    }
    result.push(list.shift());
}

console.log(`<${result.join(", ")}>`);

// 1 2 3 4 5 6 7
