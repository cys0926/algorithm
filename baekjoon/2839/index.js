// const readFile = "./2839/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const input = Number(fs.readFileSync(readFile).toString());

let count = 0;

let shareFive = Math.floor(input / 5);
let shareThree = 0;

while (shareFive >= 0) {
    if ((input - shareFive * 5) % 3 === 0) {
        shareThree = Math.floor((input - shareFive * 5) / 3);
        return console.log(shareFive + shareThree);
    } else shareFive--;
}

console.log(-1);
