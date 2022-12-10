// const readFile = "./11382/input.txt";
const readFile = "/dev/stdin";
let input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item))
    .reduce((a, b) => a + b);

console.log(input);
