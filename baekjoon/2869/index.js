// const readFile = "./2869/input.txt";
const readFile = "/dev/stdin";
let [A, B, Top] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item));

let dayHeight = A - B;
let count = 1;

if (A > Top) {
    return;
} else {
    count += Math.ceil((Top - A) / dayHeight);
}

console.log(count);
