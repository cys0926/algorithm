const readFile = "./1620/input.txt";
// const readFile = "/dev/stdin";
let [number, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split("\n");
let [numberOfDoc, numberOfTest] = number.split(" ").map((item) => Number(item));
let TestCase = input.slice(numberOfDoc);
const numToPoke = new Map();
const pokeToNum = new Map();
let answer = "";

for (let i = 0; i < numberOfDoc; i++) {
    numToPoke.set(i + 1, input[i]);
    pokeToNum.set(input[i], i + 1);
}

for (let i = 0; i < numberOfTest; i++) {
    // console.log(TestCase[i]);
    // console.log(isNaN(TestCase[i]));
    if (isNaN(TestCase[i])) {
        answer += pokeToNum.get(TestCase[i]) + "\n";
    } else {
        answer += numToPoke.get(Number(TestCase[i])) + "\n";
    }
}


console.log(numToPoke)
console.log(pokeToNum)