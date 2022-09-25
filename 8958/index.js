const fs = require("fs");
// const input = fs.readFileSync("./8958/input.txt").toString().split("\n");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const numOfTestCase = Number(input.shift());

for (let i = 0; i < numOfTestCase; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === "O") {
            count++;
        } else {
            count = 0;
        }

        sum += count;
    }

    console.log(sum);
}
