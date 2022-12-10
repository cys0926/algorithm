// const readFile = "./10773/input.txt";
const readFile = "/dev/stdin";
let [k, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const K = Number(k);
const list = input.map(Number);
let stack = [];

for (let i = 0; i < K; i++) {
    list[i] !== 0 ? stack.push(list[i]) : stack.pop();
}

console.log(stack.length === 0 ? 0 : stack.reduce((a, b) => a + b));
