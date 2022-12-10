// const readFile = "./9012/input.txt";
const readFile = "/dev/stdin";
const fs = require("fs");
const [n, ...input] = fs
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim());

const testCase = Number(n);

let result = [];

for (let i = 0; i < testCase; i++) {
    let open = 0;
    let close = 0;
    for (let j = 0; j < input[i].length; j++) {
        // console.log(input[i][j]);
        // console.log(`open : ${open}, close : ${close}`);
        if (input[i][j] === "(") {
            open++;
        } else if (input[i][j] === ")") {
            close++;
        }

        if (close > open) {
            result.push("NO");
            break
        }
    }

    // console.log(open, close);

    if (result.length < i + 1) {
        open === close ? result.push("YES") : result.push("NO");
    }
}

console.log(result.join("\n"));
