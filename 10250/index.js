// const readFile = "./10250/input.txt";
const readFile = "/dev/stdin";
const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const numOfTest = Number(input.shift());

for (let i = 0; i < numOfTest; i++) {
    const [H, N] = input[i].split(" ").map((item) => Number(item));

    let width = String(Math.ceil(N / H));

    width =
        width.length === 2
            ? width
            : new Array(2 - width.length + 1).join("0") + width;

    let height = String(N % H === 0 ? H : N % H);

    console.log([height, width].join(""));
}
