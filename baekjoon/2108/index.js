// const readFile = "./2108/input.txt";
const readFile = "/dev/stdin";
let [N, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map(Number);
input.sort((a, b) => a - b);

let average = Math.round([...input].reduce((a, b) => a + b) / input.length);
let middle = input[(input.length - 1) / 2];

const map = new Map();

input.forEach((item) =>
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1)
);

let most = 0;
let modeList = [];

map.forEach((key, value, map) => {
    // console.log(`key : ${key}, value : ${value}, most : ${most}`);
    if (key > most) {
        most = key;
        modeList = [];
        modeList.push(value);
    } else if (key === most) {
        modeList.push(value);
    }
});

let mode = modeList.length === 1 ? modeList[0] : modeList[1];

let arrange = input[input.length - 1] - input[0];

console.log(`${average}
${middle}
${mode}
${arrange}`);

// console.log(average);
// console.log(middle);
