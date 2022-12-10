// const readFile = "./18111/input.txt";
const readFile = "/dev/stdin";
let [nmb, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const [height, width, hasBlock] = nmb.split(" ").map(Number);
const terrain = input.map((item) => item.trim().split(" ").map(Number));

let result = [Infinity, 0];

for (let targetHeight = 256; targetHeight >= 0; targetHeight--) {
    let canUseBlock = hasBlock;
    let time = 0;

    for (let j = 0; j < height; j++) {
        for (let k = 0; k < width; k++) {
            if (terrain[j][k] > targetHeight) {
                time += (terrain[j][k] - targetHeight) * 2;
                canUseBlock += terrain[j][k] - targetHeight;
            } else if (terrain[j][k] < targetHeight) {
                time += targetHeight - terrain[j][k];
                canUseBlock -= targetHeight - terrain[j][k];
            }
        }
    }

    if (canUseBlock >= 0 && time < result[0]) {
        result = [time, targetHeight];
    }
}

console.log(result.join(" "));
