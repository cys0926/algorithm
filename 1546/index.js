// const readFile = "./1546/input.txt";
const readFile = "/dev/stdin";

const input = require("fs").readFileSync(readFile).toString().split("\n");

const arr = input[1].split(" ").map((item) => Number(item));
const max = Math.max(...arr);
const newArr = [...arr].map((item) => (item / max) * 100);
console.log(newArr.reduce((a, b) => a + b, 0) / newArr.length);
