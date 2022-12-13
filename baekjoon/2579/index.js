const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./2579/input.txt";

const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => Number(item));

const testCase = input[0];

const pointArr = new Array(testCase + 1).fill(0);

pointArr[1] = input[1];
pointArr[2] = pointArr[1] + input[2];
pointArr[3] = Math.max(input[1], input[2]) + input[3];

for (let i = 4; i <= testCase; i++) {
    pointArr[i] = Math.max(
        pointArr[i - 3] + input[i - 1] + input[i],
        pointArr[i - 2] + input[i]
    );
}
console.log(pointArr[testCase]);
