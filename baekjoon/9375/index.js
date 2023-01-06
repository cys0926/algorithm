const readFile =
    process.platform === "linux"
        ? "/dev/stdin"
        : `./${__dirname.split("\\").slice(-1)[0]}/input.txt`;

const [a, ...b] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim());

const numberOfTestCase = +a;
const input = b.map((item) => item.trim());
let answer = "";

for (let i = 0; i < numberOfTestCase; i++) {
    const testCase = input.splice(0, +input[0] + 1);
    const numberOfClothes = +testCase[0];
    if (numberOfClothes === 0) {
        answer = answer + "0\n";
        continue;
    }
    const clothMap = new Map();
    let result = 1;
    for (let j = 1; j <= numberOfClothes; j++) {
        const [cloth, part] = testCase[j].split(" ");
        clothMap.set(part, clothMap.get(part) + 1 || 1);
    }
    for (let [part, number] of clothMap) {
        result = result * (number + 1);
    }
    result = result - 1;
    answer = answer + result + "\n";
}

console.log(answer);
