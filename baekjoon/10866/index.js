// const readFile = "./10866/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const [n, ...input] = fs
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim());

const testCase = Number(n);
let deque = [];
let log = [];

for (let i = 0; i < testCase; i++) {
    if (input[i].startsWith("pu")) {
        if (input[i].split("_")[1].startsWith("f")) {
            //    push front
            deque.unshift(input[i].split(" ")[1]);
        } else if (input[i].split("_")[1].startsWith("b")) {
            //    push back
            deque.push(input[i].split(" ")[1]);
        }
    } else if (input[i].startsWith("po")) {
        if (input[i].split("_")[1].startsWith("f")) {
            deque.length === 0 ? log.push(-1) : log.push(deque.shift());
            //    pop front
        } else if (input[i].split("_")[1].startsWith("b")) {
            //    pop back
            deque.length === 0 ? log.push(-1) : log.push(deque.pop());
        }
    } else if (input[i].startsWith("s")) {
        //    size
        log.push(deque.length);
    } else if (input[i].startsWith("e")) {
        //    empty
        log.push(deque.length === 0 ? 1 : 0);
    } else if (input[i].startsWith("f")) {
        //    front
        log.push(deque.length === 0 ? -1 : deque[0]);
    } else if (input[i].startsWith("b")) {
        //    back
        log.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
    }
}

console.log(log.join("\n"));

// push_back 1  : 1
// push_front 2  : 2 1
// front : 2
// back : 1
// size : 2
// empty : 0
// pop_front : 1
// pop_back :
// pop_front
// size
// empty
// pop_back
// push_front 3
// empty
// front
