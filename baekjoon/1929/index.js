// const readFile = "./1929/input.txt";
const readFile = "/dev/stdin";
let [M, N] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item.trim()));

const isPrime = (number) => {
    if (number === 1) {
        return false;
    } else if (number <= 3) {
        return true;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
    }

    return true;
};

let result = [];

for (let i = M; i <= N; i++) {
    isPrime(i) ? result.push(i) : null;
}

result.length !== 0 ? console.log(result.join("\n")) : null;
