const readFile =
    process.platform === "linux" ? "/dev/stdin" : "./7576/input.txt";

const [testCase, ...input] = require("fs")
    .readFileSync(readFile)
    .toString()
    .trim()
    .split("\n")
    .map((item) => item.trim());

const [inputColumn, inputRow] = testCase.split(" ").map((item) => +item);
const tomatoBox = input.map((item) => item.trim().split(" ").map(Number));

let solution = (tomatoBox, row, column) => {
    const offsetI = [-1, 1, 0, 0];
    const offsetJ = [0, 0, -1, 1];
    let tomatoesQueue = [];
    let zeroNumber = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (tomatoBox[i][j] === 1) {
                tomatoesQueue.push({ i: i, j: j, day: 0 });
            } else if (tomatoBox[i][j] === 0) {
                zeroNumber++;
            }
        }
    }

    if (tomatoesQueue.length === 0) {
        return -1;
    }

    let index = 0;
    while (index < tomatoesQueue.length) {
        const currentTomato = tomatoesQueue[index++];
        for (let i = 0; i < 4; i++) {
            const ni = currentTomato.i + offsetI[i];
            const nj = currentTomato.j + offsetJ[i];
            if (tomatoBox?.[ni]?.[nj] === 0) {
                tomatoesQueue.push({
                    i: ni,
                    j: nj,
                    day: currentTomato.day + 1,
                });
                tomatoBox[ni][nj] = 1;
                zeroNumber--;
            }
        }
    }
    let day = tomatoesQueue[tomatoesQueue.length - 1].day;
    // console.log(tomatoesQueue);
    // console.log(day)

    return zeroNumber === 0 ? day : -1;
};

console.log(solution(tomatoBox, inputRow, inputColumn));
