// const readFile = "./1181/input.txt";
const readFile = "/dev/stdin";
let input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim());

const num = input.shift();

const set = new Set(input);

const newArr = [...set];

newArr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(newArr.join("\n"));
