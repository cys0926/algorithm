// const readFile = "./1157/input.txt";
const readFile = "/dev/stdin";

const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .toLowerCase();

const arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    arr[input.charCodeAt(i) - 97]++;
}
const max = Math.max(...arr);
const isSame = arr.filter((item) => item === max).length !== 1;

console.log(isSame ? "?" : String.fromCharCode(arr.indexOf(max) + 65));
