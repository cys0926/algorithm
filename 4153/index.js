// const readFile = "./4153/input.txt";
const readFile = "/dev/stdin";

const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

for (let i = 0; i < input.length - 1; i++) {
    const newInput = input[i]
        .split(" ")
        .map((item) => Number(item))
        .sort((a, b) => a - b);

    console.log(
        newInput[0] ** 2 + newInput[1] ** 2 === newInput[2] ** 2
            ? "right"
            : "wrong"
    );
}
