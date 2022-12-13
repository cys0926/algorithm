const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./1003/input.txt";

const [t, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const testCase = +t;
let answer = "";

let newArr = [
    [1, 0],
    [0, 1],
];

for (let i = 2; i < 41; i++) {
    newArr[i] = [
        newArr[i - 1][0] + newArr[i - 2][0],
        newArr[i - 1][1] + newArr[i - 2][1],
    ];
}

for (let i = 0; i < testCase; i++) {
    let number = +input[i];
    answer = answer + `${newArr[number][0]} ${newArr[number][1]}\n`;
}

console.log(answer);
