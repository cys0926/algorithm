// const readFile = "./1259/input.txt";
const readFile = "/dev/stdin";
const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim());

for (let i = 0; i < input.length - 1; i++) {
    input[i] === input[i].split("").reverse().join("")
        ? console.log("yes")
        : console.log("no");
}
