// const readFile = "./1654/input.txt";
const readFile = "/dev/stdin";
let [n, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const [K, N] = n.split(" ").map((item) => Number(item));

const list = input.map((item) => Number(item));

let min = 0;
let max = Math.max(...list);
let count = 0;
let arr = [];
let middle = 0;

while (min <= max) {
    middle = Math.floor((min + max) / 2);

    count = [...list].reduce(
        (previousValue, currentValue) =>
            previousValue + Math.floor(currentValue / middle),
        0
    );

    // console.log(
    //     `min : ${min}, max : ${max}, middle : ${middle}, count : ${count}`
    // );

    if (count < N) {
        max = middle - 1;
    }
    if (count >= N) {
        min = middle + 1;
    }
    middle = Math.floor((min + max) / 2);

    // console.log(
    //     `min : ${min}, max : ${max}, middle : ${middle}, count : ${count}`
    // );
    // console.log("----------------");
    // arr = [];
    // count = 0;
    // middle = Math.floor((min + max) / 2);
    //
    // list.forEach((item) => arr.push(Math.floor(item / middle)));
    // count = arr.reduce((a, b) => a + b);
}

console.log(middle);
