const readFile = "./2231/input.txt";
// const readFile = "/dev/stdin";
const input = require("fs").readFileSync(readFile).toString().trim();

let constructor = Number(input) - input.length * 9;

while (true) {
    let sum = constructor;
    for (let i = 0; i < String(constructor).length; i++) {
        sum += Number(String(constructor)[i]);
    }

    if (sum === Number(input)) {
        break;
    } else {
        constructor++ ;
    }

    if (constructor >= Number(input)) {
        constructor = 0;
        break;
    }
}

console.log(constructor);
