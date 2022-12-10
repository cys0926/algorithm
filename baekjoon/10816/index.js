// const readFile = "./10816/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const [n, a, m, b] = fs.readFileSync(readFile).toString().trim().split("\n");

let cardMap = new Map();
let result = [];

const A = a
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => a - b);

A.forEach((item) => {
    if (cardMap.has(item)) {
        cardMap.set(item, cardMap.get(item) + 1);
    } else {
        cardMap.set(item, 1);
    }
});

const B = b.split(" ").map((item) => Number(item));

for (let number of B) {
    if (cardMap.has(number)) {
        result.push(cardMap.get(number));
    } else {
        result.push(0);
    }
}

console.log(result.join(" "));
