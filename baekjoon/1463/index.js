const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./1463/input.txt";

let number = require("fs").readFileSync(readFile).toString().trim() * 1;

const newArr = new Array(number + 1).fill(0);
newArr[1] = 0;
newArr[2] = newArr[1] + 1;
newArr[3] = Math.min(newArr[1] + 1, newArr[2] + 1);

for (let i = 4; i <= number; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        newArr[i] = newArr[i - 1] + 1;
    } else if (i % 2 === 0 && i % 3 === 0) {
        newArr[i] = Math.min(
            newArr[i / 2] + 1,
            newArr[i / 3] + 1,
            newArr[i - 1] + 1
        );
    } else if (i % 2 === 0) {
        newArr[i] = Math.min(newArr[i / 2] + 1, newArr[i - 1] + 1);
    } else if (i % 3 === 0) {
        newArr[i] = Math.min(newArr[i / 3] + 1, newArr[i - 1] + 1);
    }
}

console.log(newArr[number])
