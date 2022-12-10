const readFile = "./1676/input.txt";
// const readFile = "/dev/stdin";
let input = Number(require("fs").readFileSync(readFile).toString());

let numList = new Array(input);
let numOfFive = 0;

for (let i = 0; i < input; i++) {
    numList[i] = i + 1;
}

while (numList.length > 0) {
    numList = numList
        .filter((number) => number % 5 === 0)
        .map((number) => {
            numOfFive++;
            if ((number / 5) % 5 === 0) {
                return number / 5;
            }
        });
}

// console.log("numOfFive", numOfFive);
// console.log(numList);

console.log(numOfFive);
