// const readFile = "./15829/input.txt";
const readFile = "/dev/stdin";
const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const numOfTest = input.shift();
const str = input.shift();

const M = 1234567891;
let sum = 0;
let r = 1;
for (let i = 0; i < numOfTest; i++) {
    sum += ((str.charCodeAt(i) - 96) * r) % M;

    r *= 31;
    r %= M;
    sum %= M;
}
console.log(sum);
