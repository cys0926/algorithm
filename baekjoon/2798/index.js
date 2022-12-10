// const readFile = "./2798/input.txt";
const readFile = "/dev/stdin";
const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const [numOfCard, goalNum] = input[0].split(" ");
const cardList = input[1]
    .split(" ")
    .map((item) => Number(item))
    .sort((a, b) => a - b);

let max = 0;

for (let i = 0; i < numOfCard - 2; i++) {
    for (let j = i + 1; j < numOfCard - 1; j++) {
        for (let k = i + 2; k < numOfCard; k++) {
            let sum = cardList[i] + cardList[j] + cardList[k];

            if (sum > max && sum <= Number(goalNum)) {
                max = sum;
            }
        }
    }
}

console.log(max);
