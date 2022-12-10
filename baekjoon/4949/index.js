// const readFile = "./4949/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const input = fs
    .readFileSync(readFile)
    .toString()
    .split("\n")
    .map((item) => item.trimEnd());

let str = input.shift().trimEnd();
let result = [];

while (str !== ".") {
    let i = 0;
    let stack = [];
    let isNo = false;

    while (str[i] !== ".") {
        if (str[i] === "(") {
            stack.push("(");
        } else if (str[i] === ")") {
            if (stack.pop() !== "(") {
                result.push("no");
                isNo = true;
                break;
            }
        } else if (str[i] === "[") {
            stack.push("[");
        } else if (str[i] === "]") {
            if (stack.pop() !== "[") {
                result.push("no");
                isNo = true;
                break;
            }
        }
        i++;
    }
    if (!isNo) {
        if (stack.length === 0) {
            result.push("yes");
        } else {
            result.push("no");
        }
    }

    str = input.shift();
}

console.log(result.join("\n"));
