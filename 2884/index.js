// const readFile = "./2884/input.txt";
const readFile = "/dev/stdin";

const input = require("fs").readFileSync(readFile).toString().split(" ");

if (input[1] - 45 < 0) {
    input[0] = (+input[0] + 23) % 24;
}

input[1] = (+input[1] + 15) % 60;

console.log(input[0], input[1]);
