const fs = require("fs");
// const input = fs.readFileSync("./2920/input.txt").toString();

const input = fs.readFileSync("/dev/stdin").toString().trim();

const result = {
    "1 2 3 4 5 6 7 8": "ascending",
    "8 7 6 5 4 3 2 1": "descending",
}[input];

console.log(result || "mixed");
