const fs = require("fs");
// const input = fs.readFileSync("./1152/input.txt").toString().trim().split(" ");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(input[0] === "" ? 0 : input.length);
