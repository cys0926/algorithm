const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./11399/input.txt";

const [n, input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const number = +n.trim();
const array = input
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < number; i++) {
    let time = 0;
    for (let j = 0; j <= i; j++) {
        time += array[j];
    }
    result += time;
}

console.log(result);
