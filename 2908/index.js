// const readFile = "./2908/input.txt";
const readFile = "/dev/stdin";

const input = require("fs").readFileSync(readFile).toString().split(" ");

console.log(
    Math.max(
        Number(input[0].split("").reverse().join("")),
        Number(input[1].split("").reverse().join(""))
    )
);
