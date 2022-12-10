const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./1764/input.txt";

const [testCase, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");
let result = [];
const [N, M] = testCase.split(" ").map(Number);
const notHearMap = new Map();
for (let i = 0; i < N; i++) {
    let name = input.shift().trim();
    notHearMap.set(name, i);
}

for (let i = 0; i < M; i++) {
    let name = input.shift().trim();
    if (notHearMap.has(name)) {
        result.push(name);
    }
}
result = result.sort();
let answer = result.length + "\n";
for (let i = 0; i < result.length; i++) {
    answer = answer + result[i] + "\n";
}

console.log(answer);
