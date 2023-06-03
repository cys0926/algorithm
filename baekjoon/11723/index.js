const readFile = "./11723/input.txt";
// const readFile = "/dev/stdin";
let [numOfTestCase, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split("\r\n");

let S = new Set();

for (let i = 0; i < numOfTestCase; i++) {
    // console.log("-----------")
    let [operator, num] = input[i].split(" ");
    // console.log(operator, sample)
    switch (operator) {
        case "add":
            S.add(num);
            break;
        case "check":
            S.has(num) ? console.log(1) : console.log(0);
            break;
        case "remove":
            S.delete(num);
            break;
        case "toggle":
            S.has(num) ? S.delete(num) : S.add(num);
            break;
        case "all":
            S = new Set([
                '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
                '19', '20',
            ]);
            break;
        case "empty":
            S.clear();
    }
    // console.log(S)
}

// console.log(input);
