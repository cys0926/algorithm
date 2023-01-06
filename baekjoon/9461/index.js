const readFile =
    process.platform === "linux"
        ? "/dev/stdin"
        : `./${__dirname.split("\\").slice(-1)[0]}/input.txt`;

const [a, ...b] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => Number(item));

const numberOfTestCase = a;
const input = b;
let answer = "";

const triangleArr = new Array(101);
triangleArr[1] = 1;
triangleArr[2] = 1;
triangleArr[3] = 1;
triangleArr[4] = 2;
triangleArr[5] = 2;

for (let i = 6; i <= 100; i++) {
    triangleArr[i] = triangleArr[i - 1] + triangleArr[i - 5];
}

for (let i = 0; i < numberOfTestCase; i++) {
    answer += triangleArr[input[i]] + "\n";
}

console.log(answer);
