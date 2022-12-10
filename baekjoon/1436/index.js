// const readFile = "./1436/input.txt";
const readFile = "/dev/stdin";
let input = Number(require("fs").readFileSync(readFile).toString());

const check = "666";
let start = 665;
let count = 0;

while (true) {
    start++;
    if (String(start).includes(check)) {
        count++;
    }
    if (count === input) {
        break;
    }
}

console.log(start);

/**
 * 666과 결합된 수가 1개 => 10 * 2! - 10^0 * 1! 개
 * 666과 결합된 수가 2개 => 10^2 * 3! - 10 * 2! - 10^0 * 1! 개
 * 666과 결합된 수가 3개 => 10^3 * 4! - 10^2 * 3! - 10 * 2! - 10^0 * 1!
 * */
