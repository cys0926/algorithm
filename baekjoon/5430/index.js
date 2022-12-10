const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./5430/input.txt";

const [testCase, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const numOfTestCase = +testCase;

let result = "";

loop1: for (let i = 0; i < numOfTestCase; i++) {
    const statements = input.shift().trim();
    const arrayLength = +input.shift();
    const array = input
        .shift()
        .trim()
        .slice(1, -1)
        .split(",")
        .filter((value) => value.length !== 0);
    // console.log(statements);
    // console.log(arrayLength);
    // console.log(array);
    // console.log("----------");
    let isReverse = false;
    for (let str of statements) {
        if (str === "R") {
            isReverse = !isReverse;
        } else if (str === "D") {
            if (array.length === 0) {
                result = result + "error\n";
                continue loop1;
            }
            isReverse ? array.pop() : array.shift();
        }
    }
    let answer = isReverse ? array.reverse().join(",") : array.join(",");
    result = result + `[${answer}]\n`;
}

console.log(result);
