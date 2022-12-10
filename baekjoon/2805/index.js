// const readFile = "./2805/input.txt";
const readFile = "/dev/stdin";
let [nm, input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const [numberOfTree, needAmount] = nm.split(" ").map(Number);
const list = input.split(" ").map(Number);

let min = 0;
let max = Math.max(...list);
let middle = Math.floor((min + max) / 2);
let getAmount = 0;

while (min <= max) {
    // console.log(`min : ${min}, max : ${max}, middle : ${middle}`);
    // console.log(
    //     `numberOfTree : ${numberOfTree}, amountNeed : ${needAmount}, list ${list}`
    // );

    getAmount = [...list].reduce(
        (previousValue, currentValue) =>
            previousValue +
            (currentValue - middle > 0 ? currentValue - middle : 0),
        0
    );

    if (getAmount < needAmount) {
        max = middle - 1;
    }

    if (getAmount >= needAmount) {
        min = middle + 1;
    }

    middle = Math.floor((min + max) / 2);

    // console.log(`min : ${min}, max : ${max}, middle : ${middle}`);
    // console.log(
    //     `numberOfTree : ${numberOfTree}, amountNeed : ${needAmount}, getAmount : ${getAmount}, list ${list}`
    // );
    // console.log(`getAmount : ${getAmount}`);
    // console.log("-------------------");
}

console.log(middle);
