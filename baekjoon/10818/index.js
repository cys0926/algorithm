const fs = require("fs");
// const input = fs.readFileSync("./10818/input.txt").toString().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const arr = input[1].split(" ").map((item) => Number(item));

const min = Math.min(...arr);
const max = Math.max(...arr);

console.log(min, max);
