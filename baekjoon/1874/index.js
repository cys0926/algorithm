// const readFile = "./1874/input.txt";
const readFile = "/dev/stdin";
let [num, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split("\n")
    .map((item) => Number(item));

let stack = [];
let result = [];
let stackUnit = 0;

for (let i = 0; i < num; i++) {
    while (stack[stack.length - 1] !== input[i]) {
        stackUnit++;
        stack.push(stackUnit);
        result.push("+");
        if (stackUnit > num) {
            return console.log("NO");
        }
    }

    stack.pop();
    result.push("-");
}

console.log(result.join("\n"));

// 4 3 6 8 7 5 2 1
// 1 2 3 4 5 6 7 8

// 1 2 5 3 4
// 1 2 3 4 5
