// const readFile = "./11050/input.txt";
const readFile = "/dev/stdin";
let [N, K] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split(" ")
    .map((item) => Number(item));

function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));
