// const readFile = "./1018/input.txt";
const readFile = "/dev/stdin";
let input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim());

const [height, width] = input
    .shift()
    .split(" ")
    .map((item) => Number(item));

const whiteBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
];

const blackBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
];

const [tryX, tryY] = [width - 7, height - 7];
const tryList = [];

let [startX, startY] = [0, 0];
let startBlack = true;

for (let k = 0; k < tryX * tryY; k++) {
    let count = [0, 0];
    input[startY][startX] === "B" ? (startBlack = true) : (startBlack = false);

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (input[startY + i][startX + j] !== blackBoard[j][i]) {
                count[0]++;
            }
        }
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (input[startY + i][startX + j] !== whiteBoard[j][i]) {
                count[1]++;
            }
        }
    }

    startX = (startX + 1) % tryX;
    if (startX === 0) {
        startY++;
    }

    tryList.push(Math.min(...count));
}

console.log(Math.min(...tryList));
