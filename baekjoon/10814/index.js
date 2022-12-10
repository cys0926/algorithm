// const readFile = "./10814/input.txt";
const readFile = "/dev/stdin";
let [n, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const list = input
    .map((item) => item.trim().split(" "))
    .sort((a, b) => Number(a[0]) - Number(b[0]));

console.log(list.map((item) => item.join(" ")).join("\n"));
