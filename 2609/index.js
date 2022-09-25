// const readFile = "./2609/input.txt";
const readFile = "/dev/stdin";
const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => a - b);

const a = Number(input.shift());
const b = Number(input.shift());

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};

const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
};

console.log(gcd(a, b));
console.log(lcm(a, b));
