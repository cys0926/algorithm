const readFile =
    process.platform === "linux"
        ? "/dev/stdin"
        : `./${__dirname.split("\\").slice(-1)[0]}/input.txt`;

const [test, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n");

const numberOfTestCase = +test;

const addArr = new Array(11).fill(0);
addArr[1] = 1;
addArr[2] = 2;
addArr[3] = 4;
for (let i = 4; i <= 10; i++) {
    addArr[i] = addArr[i - 3] + addArr[i - 2] + addArr[i - 1];
}


for (let i = 0; i < numberOfTestCase; i++) {
    console.log(addArr[+input[i]]);
}
