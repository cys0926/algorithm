// const readFile = "./2775/input.txt";
const readFile = "/dev/stdin";
const input = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const numOfTest = Number(input.shift());


for (let i = 0; i < numOfTest; i++) {
    const floor = Number(input.shift());
    const ho = Number(input.shift());

    const house = Array.from(Array(floor + 1), () => Array(ho).fill(0));

    for (let i = 0; i < ho; i++) {
        house[0][i] = i + 1;
    }

    for (let j = 1; j <= floor; j++) {
        for (let k = 0; k < ho; k++) {
            house[j][k] =
                house[j - 1][k] + (house[j][k - 1] ? house[j][k - 1] : 0);
        }
    }

    console.log(house[floor][ho - 1]);
}
