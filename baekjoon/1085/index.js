// const readFile = "./1085/input.txt";
const readFile = "/dev/stdin";

const input = require("fs").readFileSync(readFile).toString().trim().split(" ");

const xLength = Math.min(input[0] - 0, input[2] - input[0]);
const yLength = Math.min(input[1] - 0, input[3] - input[1]);

console.log(Math.min(xLength, yLength));
