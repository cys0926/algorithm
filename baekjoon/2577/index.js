// const readFile = "./2577/input.txt";
const readFile = "/dev/stdin";

const input = require("fs").readFileSync(readFile).toString().split("\n");
const num = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i++) {
    let count = 0;

    for (let j = 0; j < num.length; j++) {
        if (Number(num[j]) === i) {
            count++;
        }
    }

    console.log(count);
}
