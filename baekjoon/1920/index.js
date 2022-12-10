// const readFile = "./1920/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const input = fs.readFileSync(readFile).toString().split("\n");

const N = Number(input.shift());
const A = input
    .shift()
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => a - b);
const M = Number(input.shift());
const B = input
    .shift()
    .split(" ")
    .map((item) => Number(item));

let result = [];

const binarySearch = (start, end, mid, target, searchingArr) => {
    mid = Math.floor((start + end) / 2);

    if (end < start) {
        return searchingArr[mid] === target ? 1 : 0;
    }

    if (searchingArr[mid] > target) {
        end = mid - 1;
    } else if (searchingArr[mid] < target) {
        start = mid + 1;
    } else {
        return 1;
    }

    return binarySearch(start, end, mid, target, searchingArr);
};

for (let i = 0; i < M; i++) {
    result.push(binarySearch(0, N - 1, 0, B[i], A));
}

console.log(result.join('\n'))