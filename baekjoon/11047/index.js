const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./11047/input.txt";

const [testCase, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const [N, K] = testCase.split(" ").map(Number);
const coins = input.map(Number);
let money = 0;
let result = 0;

for (let i = N - 1; i >= 0; i--) {
    while (money + coins[i] <= K) {
        money = money + coins[i];
        result++;
    }
    if (money === K) break;
}

console.log(result);
