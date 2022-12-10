// const readFile = "./11651/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const [n, ...input] = fs
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim().split(" "));

const N = Number(n[0]);

input.sort((a, b) => a[0] - b[0]).sort((a, b) => a[1] - b[1]);

console.log(input.map((item) => item.join(" ")).join("\n"));
