const fs = require("fs");
// const input = fs.readFileSync("./11720/input.txt").toString().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// const numOfTest = Number(input[0]);
const arr = input[1].split("").map((item) => Number(item));
const sum = arr.reduce((partialSum, a) => partialSum + a, 0);

console.log(sum);
