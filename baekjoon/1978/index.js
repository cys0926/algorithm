// const readFile = "./1978/input.txt";
const readFile = "/dev/stdin";
let [numOfCase, input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

function isPrime(number) {
    if (number === 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(input.split(" ").filter((item) => isPrime(Number(item))).length);
