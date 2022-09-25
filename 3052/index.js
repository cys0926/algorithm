// const readFile = "./3052/input.txt";
const readFile = "/dev/stdin";

const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item % 42);

const set = new Set(input);

console.log(set.size);
