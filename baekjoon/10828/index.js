// const readFile = "./10828/input.txt";
const readFile = "/dev/stdin";
let [n, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split("\n")
    .map((item) => item.trim());

let stack = [];
let result = [];

for (let i = 0; i < n; i++) {
    if (input[i].startsWith("pu")) {
        stack.push(input[i].slice(5));
    } else if (input[i].startsWith("t")) {
        stack.length !== 0
            ? result.push(stack[stack.length - 1])
            : result.push(-1);
    } else if (input[i].startsWith("s")) {
        result.push(stack.length);
    } else if (input[i].startsWith("e")) {
        stack.length !== 0 ? result.push(0) : result.push(1);
    } else if (input[i].startsWith("po")) {
        stack.length !== 0 ? result.push(stack.pop()) : result.push(-1);
    }
}

console.log(result.join("\n"));
