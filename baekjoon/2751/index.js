// const readFile = "./2751/input.txt";
const readFile = "/dev/stdin";
let [numOfCase, ...numList] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => Number(item));

console.log(numList.sort((a, b) => a - b).join("\n"));
