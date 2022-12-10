// const readFile = "./1966/input.txt";
const readFile = "/dev/stdin";
let [num, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .split("\n");

for (let i = 0; i < num; i++) {
    const [numOfPaper, targetPaperIndex] = input
        .shift()
        .split(" ")
        .map((item) => Number(item));
    const paperPriority = input
        .shift()
        .split(" ")
        .map((item) => Number(item));
    let paperList = [
        Array.from(Array(numOfPaper)).map((value, index) =>
            String.fromCharCode(index + 65)
        ),
        paperPriority,
    ]; // A, B, C, D
    const targetPaper = paperList[0][targetPaperIndex];

    let printIndex = 0;

    let result = [];

    while (paperList[0].length !== 0) {
        let maxPriority = Math.max(...paperList[1]);
        if (paperList[1][printIndex] < maxPriority) {
            printIndex = (printIndex + 1) % paperList[0].length;
        } else if (paperList[1][printIndex] === maxPriority) {
            result.push(...paperList[0].splice(printIndex, 1));
            paperList[1].splice(printIndex, 1);
            printIndex = printIndex % paperList[0].length;
        }
    }

    console.log(result.indexOf(targetPaper) + 1);
}
