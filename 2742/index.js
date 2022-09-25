const readFile = "./2742/input.txt";
// const readFile = "/dev/stdin";

const input = require("fs").readFileSync(readFile).toString();

let answer = "";

for (let i = Number(input); i > 0; i--) {
    answer += i + "\n";
}

console.log(answer);
